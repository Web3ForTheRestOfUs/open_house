import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { expect } from "chai";
import { OpenHouse } from "../target/types/open_house";

describe("OpenHouse Program", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.OpenHouse as Program<OpenHouse>;
  
  // Test accounts
  const owner = anchor.web3.Keypair.generate();
  const renter = anchor.web3.Keypair.generate();
  const scout = anchor.web3.Keypair.generate();
  const voter = anchor.web3.Keypair.generate();

  // Test data
  const propertyId = "PROP123";
  const propertyDetails = ["Beautiful 3 bedroom house", "Spacious backyard"];
  const encryptedLocation = Buffer.from("encrypted_location_data");
  const reviewContent = "Great property, highly recommended!";
  const LOCATION_REVEAL_FEE = new BN(5);

  // PDAs
  let propertyPDA: PublicKey;
  let reviewPDA: PublicKey;
  let scoutPDA: PublicKey;
  let renterPDA: PublicKey;
  let accessRecordPDA: PublicKey;

  before(async () => {
    // Prepare PDAs
    [propertyPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId)],
      program.programId
    );

    [reviewPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId), renter.publicKey.toBuffer()],
      program.programId
    );

    [scoutPDA] = PublicKey.findProgramAddressSync(
      [scout.publicKey.toBuffer()],
      program.programId
    );

    [renterPDA] = PublicKey.findProgramAddressSync(
      [renter.publicKey.toBuffer()],
      program.programId
    );

    [accessRecordPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId), renter.publicKey.toBuffer()],
      program.programId
    );

    // Airdrop SOL to test accounts
    const accounts = [owner, renter, scout, voter];
    const airdropPromises = accounts.map(account => 
      provider.connection.requestAirdrop(
        account.publicKey,
        10 * LAMPORTS_PER_SOL
      )
    );

    const signatures = await Promise.all(airdropPromises);
    await Promise.all(
      signatures.map(sig => provider.connection.confirmTransaction(sig))
    );
  });

  describe("Property Registry", () => {
    it("Registers a property successfully", async () => {
      await program.methods
        .registerProperty(propertyId, propertyDetails, encryptedLocation)
        .accounts({
          property: propertyPDA,
          owner: owner.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([owner])
        .rpc();

      const propertyAccount = await program.account.property.fetch(propertyPDA);
      expect(propertyAccount.owner.toBase58()).to.equal(owner.publicKey.toBase58());
      expect(propertyAccount.propertyId).to.equal(propertyId);
      expect(propertyAccount.details).to.deep.equal(propertyDetails);
    });

    it("Prevents property registration with too long property ID", async () => {
      const longPropertyId = "A".repeat(51); // Exceeds MAX_PROPERTY_ID_LENGTH

      try {
        await program.methods
          .registerProperty(longPropertyId, propertyDetails, encryptedLocation)
          .accounts({
            property: propertyPDA,
            owner: owner.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .signers([owner])
          .rpc();
        
        expect.fail("Should have thrown an error for long property ID");
      } catch (error: any) {
        expect(error.toString()).to.include("PropertyIdTooLong");
      }
    });

    it("Allows property owner to update property details", async () => {
      const newDetails = ["Updated details", "More information"];
      
      await program.methods
        .updateProperty(newDetails)
        .accounts({
          property: propertyPDA,
          owner: owner.publicKey,
        })
        .signers([owner])
        .rpc();

      const updatedProperty = await program.account.property.fetch(propertyPDA);
      expect(updatedProperty.details).to.deep.equal(newDetails);
    });
  });

  describe("Review System", () => {
    it("Submits a review successfully", async () => {
      await program.methods
        .submitReview(reviewContent, propertyId)
        .accounts({
          review: reviewPDA,
          renter: renter.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([renter])
        .rpc();

      const reviewAccount = await program.account.review.fetch(reviewPDA);
      expect(reviewAccount.content).to.equal(reviewContent);
      expect(reviewAccount.votes.toNumber()).to.equal(0);
      expect(reviewAccount.propertyId).to.equal(propertyId);
    });

    it("Prevents review submission with too long content", async () => {
      const longReviewContent = "A".repeat(201); // Exceeds MAX_REVIEW_CONTENT_LENGTH

      try {
        await program.methods
          .submitReview(longReviewContent, propertyId)
          .accounts({
            review: reviewPDA,
            renter: renter.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .signers([renter])
          .rpc();
        
        expect.fail("Should have thrown an error for long review content");
      } catch (error: any) {
        expect(error.toString()).to.include("ReviewTooLong");
      }
    });

    it("Allows voting on a review", async () => {
      await program.methods
        .voteReview({ upvote: {} }) // Using upvote enum variant
        .accounts({
          review: reviewPDA,
          voter: voter.publicKey,
        })
        .signers([voter])
        .rpc();

      const reviewAccount = await program.account.review.fetch(reviewPDA);
      expect(reviewAccount.votes.toNumber()).to.equal(1);
    });
  });

  describe("Token Management", () => {
    it("Distributes rewards based on upvotes", async () => {
      // First, ensure the scout has an account
      await program.methods
        .distributeRewards(new BN(15))
        .accounts({
          scout: scoutPDA,
          scoutWallet: scout.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([scout])
        .rpc();

      const scoutAccount = await program.account.user.fetch(scoutPDA);
      expect(scoutAccount.tokens.toNumber()).to.be.greaterThan(0);
    });

    it("Handles location reveal with sufficient funds", async () => {
      // First, distribute tokens to the renter
      await program.methods
        .distributeRewards(new BN(10))
        .accounts({
          scout: renterPDA,
          scoutWallet: renter.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([renter])
        .rpc();

      await program.methods
        .handleLocationReveal(LOCATION_REVEAL_FEE)
        .accounts({
          renter: renterPDA,
          scout: scoutPDA,
          property: propertyPDA,
          accessRecord: accessRecordPDA,
          systemProgram: SystemProgram.programId,
        })
        .signers([renter])
        .rpc();

      const accessRecord = await program.account.propertyAccess.fetch(accessRecordPDA);
      expect(accessRecord.propertyId).to.equal(propertyId);
      expect(accessRecord.user.toBase58()).to.equal(renter.publicKey.toBase58());
    });

    it("Prevents location reveal with insufficient funds", async () => {
      const poorRenter = anchor.web3.Keypair.generate();
      const [poorRenterPDA] = PublicKey.findProgramAddressSync(
        [poorRenter.publicKey.toBuffer()],
        program.programId
      );

      const [poorAccessRecordPDA] = PublicKey.findProgramAddressSync(
        [Buffer.from(propertyId), poorRenter.publicKey.toBuffer()],
        program.programId
      );

      try {
        await program.methods
          .handleLocationReveal(LOCATION_REVEAL_FEE)
          .accounts({
            renter: poorRenterPDA,
            scout: scoutPDA,
            property: propertyPDA,
            accessRecord: poorAccessRecordPDA,
            systemProgram: SystemProgram.programId,
          })
          .signers([poorRenter])
          .rpc();
        
        expect.fail("Should have thrown an error for insufficient funds");
      } catch (error: any) {
        expect(error.toString()).to.include("InsufficientFunds");
      }
    });
  });
});