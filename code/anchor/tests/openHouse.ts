import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { expect } from "chai";
import { OpenHouse } from "../target/types/open_house";

describe("open_house", () => {
  // Configure the client to use the local cluster
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.OpenHouse as Program<OpenHouse>;
  
  // Test accounts
  const owner = anchor.web3.Keypair.generate();
  const renter = anchor.web3.Keypair.generate();
  const voter = anchor.web3.Keypair.generate();
  
  // Test data
  const propertyId = "PROP123";
  const propertyDetails = "Beautiful 3 bedroom house";
  const reviewContent = "Great property, highly recommended!";

  before(async () => {
    // Airdrop SOL to test accounts
    const airdropAmount = 10 * anchor.web3.LAMPORTS_PER_SOL;
    
    const airdropOwner = await provider.connection.requestAirdrop(
      owner.publicKey, 
      airdropAmount
    );
    const airdropRenter = await provider.connection.requestAirdrop(
      renter.publicKey, 
      airdropAmount
    );
    const airdropVoter = await provider.connection.requestAirdrop(
      voter.publicKey, 
      airdropAmount
    );

    // Wait for confirmations
    await provider.connection.confirmTransaction(airdropOwner);
    await provider.connection.confirmTransaction(airdropRenter);
    await provider.connection.confirmTransaction(airdropVoter);
  });

  it("Registers a property", async () => {
    // Derive PDA for property account
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

      // Fetch the property account
      const propertyAccount = await program.account.property.fetch(propertyPDA);
      
      expect(propertyAccount.owner.toBase58()).to.equal(owner.publicKey.toBase58());
      expect(propertyAccount.propertyId).to.equal(propertyId);
      expect(propertyAccount.details).to.equal(propertyDetails);
      expect(propertyAccount.verified).to.be.false;
    } catch (error) {
      console.error("Error registering property:", error);
      throw error;
    }
  });

  it("Updates property details", async () => {
    const newDetails = "Updated: 3 bedroom house with pool";
    const [propertyPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId)],
      program.programId
    );

    try {
      await program.methods
        .updateProperty(newDetails)
        .accounts({
          property: propertyPDA,
          owner: owner.publicKey,
        })
        .signers([owner])
        .rpc();

      const propertyAccount = await program.account.property.fetch(propertyPDA);
      expect(propertyAccount.details).to.equal(newDetails);
    } catch (error) {
      console.error("Error updating property:", error);
      throw error;
    }
  });

  it("Submits and votes on a review", async () => {
    // Derive PDA for review account
    const [reviewPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId), renter.publicKey.toBuffer()],
      program.programId
    );

    try {
      // Submit review
      await program.methods
        .submitReview(reviewContent)
        .accounts({
          review: reviewPDA,
          renter: renter.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .signers([renter])
        .rpc();

      // Verify review submission
      let reviewAccount = await program.account.review.fetch(reviewPDA);
      expect(reviewAccount.content).to.equal(reviewContent);
      expect(reviewAccount.votes.toString()).to.equal("0");

      // Vote on review
      await program.methods
        .voteReview({ upvote: {} })
        .accounts({
          review: reviewPDA,
          voter: voter.publicKey,
        })
        .signers([voter])
        .rpc();

      // Verify vote
      reviewAccount = await program.account.review.fetch(reviewPDA);
      expect(reviewAccount.votes.toString()).to.equal("1");
      expect(reviewAccount.votedUsers.map(pu => pu.toBase58()))
        .to.include(voter.publicKey.toBase58());
    } catch (error) {
      console.error("Error in review submission and voting:", error);
      throw error;
    }
  });

  it("Prevents duplicate votes", async () => {
    const [reviewPDA] = PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId), renter.publicKey.toBuffer()],
      program.programId
    );

    try {
      // Attempt duplicate vote
      await program.methods
        .voteReview({ upvote: {} })
        .accounts({
          review: reviewPDA,
          voter: voter.publicKey,
        })
        .signers([voter])
        .rpc();
      
      // If we reach here, the test should fail
      expect.fail("Should not allow duplicate votes");
    } catch (error: any) {
      // Verify it's the expected error
      expect(error.toString()).to.include("DuplicateVote");
    }
  });

  it("Distributes rewards based on votes", async () => {
    const [scoutPDA] = PublicKey.findProgramAddressSync(
      [voter.publicKey.toBuffer()],
      program.programId
    );

    try {
      await program.methods
        .distributeRewards(new BN(0)) // Pass 0 as BN since amount is calculated inside
        .accounts({
          scout: scoutPDA,
        })
        .rpc();

      const scoutAccount = await program.account.user.fetch(scoutPDA);
      expect(scoutAccount.tokens.toString()).to.not.equal("0");
    } catch (error) {
      console.error("Error distributing rewards:", error);
      throw error;
    }
  });
});