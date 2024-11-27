// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import OpenHouseIDL from '../target/idl/open_house.json';
import type { OpenHouse } from '../target/types/open_house';

// Re-export the generated IDL and type
export { OpenHouse, OpenHouseIDL };

// The programId is imported from the program IDL.
export const PROGRAM_ID = new PublicKey(OpenHouseIDL.address);

export function getCounterProgram(provider: AnchorProvider) {
  return new Program(OpenHouseIDL as OpenHouse, provider);
}

export function getCounterProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      return new PublicKey('H1L8bkSuCsSvs7ZMzHtLaA6iK4zZhCKxkLhx7VfUpA9x');
    case 'mainnet-beta':
    default:
      return PROGRAM_ID;
  }
}
