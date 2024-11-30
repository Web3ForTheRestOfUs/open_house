import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram } from "@solana/web3.js";
import { OpenHouse } from "../target/types/open_house";

describe("OpenHouse", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.OpenHouse as Program<OpenHouse>;
  const owner = provider.wallet.publicKey;
  const propertyId = "PROP123";

  it("Registers a property", async () => {
    const [propertyPDA] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from(propertyId, "utf-8")],
      program.programId
    );

    try {
      const tx = await program.methods
      .registerProperty(
        "PROP1", 
        ["Detail"], 
        Buffer.from([1, 2, 3]) 
      )
    
        .accounts({
          property: propertyPDA,
          owner: owner,
          systemProgram: SystemProgram.programId,
        })
        .signers([]) // Ensure no additional signers
        .rpc({
          commitment: "confirmed",
          skipPreflight: false
        });

      console.log("Transaction signature:", tx);
    } catch (error) {
      console.error("Detailed error:", JSON.stringify(error, null, 2));
      
      // More detailed error logging
      if (error instanceof anchor.web3.SendTransactionError) {
        console.log("Transaction error logs:", error.getLogs(provider.connection));
      }
      
      throw error;
    }
  });
});

