// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import OpenHouseIDL from '../target/idl/open_house.json';
import type { OpenHouse } from '../target/types/open_house';

// Re-export the generated IDL and type
export { OpenHouse, OpenHouseIDL };

// The programId is imported from the program IDL.
export const COUNTER_PROGRAM_ID = new PublicKey(OpenHouseIDL.address);

// This is a helper function to get the Counter Anchor program.
export function getCounterProgram(provider: AnchorProvider) {
  return new Program(OpenHouseIDL as OpenHouse, provider);
}

// This is a helper function to get the program ID for the Counter program depending on the cluster.
export function getCounterProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Counter program on devnet and testnet.
      return new PublicKey('B6g6uSjcFRn9U1p1wv4s7eggzUoFCn7koc2cnonrEZGJ');
    case 'mainnet-beta':
    default:
      return COUNTER_PROGRAM_ID;
  }
}
