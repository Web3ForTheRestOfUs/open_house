import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { expect } from "chai";
import { OpenHouse } from "../target/types/open_house";

describe("open_house", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.OpenHouse as Program<OpenHouse>;
  
  // Test accounts
  const owner = anchor.web3.Keypair.generate();
  const renter = anchor.web3.Keypair.generate();
  const voter = anchor.web3.Keypair.generate();
  const anotherVoter = anchor.web3.Keypair.generate(); // additional voter for multipple voting case
  
  // Test data
  const propertyId = "PROP123";
  const propertyDetails = "Beautiful 3 bedroom house";
  const reviewContent = "Great property, highly recommended!";
  const LOCATION_REVEAL_FEE = new BN(5);

  // PDAs
  let propertyPDA: PublicKey;
  let reviewPDA: PublicKey;
  let scoutPDA: PublicKey;
  let renterPDA: PublicKey;

  before(async () => {
    // Initialize PDAs
    [propertyPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId)],
      program.programId
    );
    [reviewPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId), renter.publicKey.toBuffer()],
      program.programId
    );
    [scoutPDA] = PublicKey.findProgramAddressSync(
      [voter.publicKey.toBuffer()],
      program.programId
    );
    [renterPDA] = PublicKey.findProgramAddressSync(
      [renter.publicKey.toBuffer()],
      program.programId
    );

    // Airdrop SOL to test accounts
    const accounts = [owner, renter, voter, anotherVoter];
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

  describe("Property Management", () => {
    it("Registers a property", async () => {
      const [propertyPDA] = PublicKey.findProgramAddressSync(
          [Buffer.from(propertyId)],
          program.programId
      );

      try {
          await program.methods
              .registerProperty(propertyId, propertyDetails)
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
          expect(propertyAccount.details).to.equal(propertyDetails);
          expect(propertyAccount.verified).to.be.false;
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
    });

    it("Only allows owner to update property", async () => {
      const newDetails = "Updated: 3 bedroom house with pool";
      
      try {
        await program.methods
          .updateProperty(newDetails)
          .accounts({
            property: propertyPDA,
            owner: renter.publicKey, // Using renter instead of owner
          })
          .signers([renter])
          .rpc();
        expect.fail("Should not allow non-owner to update");
      } catch (error: any) {
        expect(error.toString()).to.include("Unauthorized");
      }
    });
  });

  describe("Review System", () => {
    it("Submits a review successfully", async () => {
      const [reviewPDA] = PublicKey.findProgramAddressSync(
          [Buffer.from(propertyId), renter.publicKey.toBuffer()],
          program.programId
      );

      try {
          await program.methods
              .submitReview(reviewContent)
              .accounts({
                  review: reviewPDA,
                  renter: renter.publicKey,
                  systemProgram: SystemProgram.programId,
              })
              .signers([renter])
              .rpc();

          const reviewAccount = await program.account.review.fetch(reviewPDA);
          expect(reviewAccount.content).to.equal(reviewContent);
          expect(reviewAccount.votes.toString()).to.equal("0");
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
    });
  });

  describe("Token Management", () => {
    it("Successfully distributes rewards based on votes", async () => {
      const initialBalance = (await program.account.user.fetch(scoutPDA)).tokens;
      
      await program.methods
        .distributeRewards(new BN(15))
        .accounts({
          scout: scoutPDA,
        })
        .rpc();

      const finalBalance = (await program.account.user.fetch(scoutPDA)).tokens;
      expect(finalBalance.sub(initialBalance).toString()).to.not.equal("0");
    });

    it("Handles location reveal with sufficient funds", async () => {
      // First distribute some tokens to the renter
      await program.methods
        .distributeRewards(new BN(10))
        .accounts({
          scout: renterPDA,
        })
        .rpc();

      const initialBalance = (await program.account.user.fetch(renterPDA)).tokens;
      
      await program.methods
        .handleLocationReveal(LOCATION_REVEAL_FEE)
        .accounts({
          renter: renterPDA,
        })
        .rpc();

      const finalBalance = (await program.account.user.fetch(renterPDA)).tokens;
      expect(initialBalance.sub(finalBalance).toString()).to.equal(LOCATION_REVEAL_FEE.toString());
    });

    it("Prevents location reveal with insufficient funds", async () => {
      // Create new renter with 0 balance
      const newRenter = anchor.web3.Keypair.generate();
      const [newRenterPDA] = PublicKey.findProgramAddressSync(
        [newRenter.publicKey.toBuffer()],
        program.programId
      );

      try {
        await program.methods
          .handleLocationReveal(LOCATION_REVEAL_FEE)
          .accounts({
            renter: newRenterPDA,
          })
          .rpc();
        expect.fail("Should not allow location reveal with insufficient funds");
      } catch (error: any) {
        expect(error.toString()).to.include("InsufficientFunds");
      }
    });
  });
});