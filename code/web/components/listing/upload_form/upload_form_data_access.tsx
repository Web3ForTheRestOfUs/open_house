'use client';

import { getCounterProgram, getCounterProgramId } from '@open-house/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '@/components/cluster/cluster-data-access';
import { useAnchorProvider } from '@/components/solana/solana-provider';
import { useTransactionToast } from '@/components/ui/ui-layout';

interface Location {
    lat: number; // Latitude
    long: number; // Longitude
}

enum ListingStatus {
    Active = 'Active',
    Sold = 'Inactive',
    Deleted = 'Deleted',
}
  

  

interface CreateListingArgs {
    location: Location; // Assuming you have a corresponding Location type defined in TypeScript
    creator: PublicKey; // Maps to `Pubkey`
    created: number; // Maps to `i64`, represented as a `number` in JavaScript
    updated: number; // Maps to `i64`, represented as a `number`
    status: ListingStatus; // Assuming ListingStatus is an enum or type you've defined
}

interface UpdateListingArgs {
    new_location: any;
    new_status: any;
}
  

export function useCounterProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getCounterProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = getCounterProgram(provider);

  const accounts = useQuery({
    queryKey: ['counter', 'all', { cluster }],
    queryFn: () => program.account.listing.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const createListing = useMutation<string, Error, CreateListingArgs>({
    mutationKey: [`createListing`, `create`, { cluster }],
    mutationFn: async ({ location, creator, created, updated, status }) => {
      return program.methods.createListing(location, creator, created, updated, status).rpc();
    },
    onSuccess: (signature) => {
      transactionToast(signature);
      accounts.refetch();
    },
    onError: (error) => {
      toast.error(`Error creating entry: ${error.message}`);
    }

  });

  return {
    program,
    accounts,
    getProgramAccount,
    createListing,
    programId,
  };
}

export function useCounterProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useCounterProgram();

  const accountQuery = useQuery({
    queryKey: ['counter', 'fetch', { cluster, account }],
    queryFn: () => program.account.listing.fetch(account),
  });

  const updateListing = useMutation<string, Error, UpdateListingArgs>({
    mutationKey: [`createListing`, `update`, { cluster }],
    mutationFn: async({ new_location, new_status }) => {
      return program.methods.updateListing(new_location, new_status).rpc();
    },
    onSuccess: (signature) => {
      transactionToast(signature);
      accounts.refetch();
    },
    onError: (error) => {
      toast.error(`Error updating entry:${error.message}`);
    },
  });

  return {
    accountQuery,
    updateListing,
  };
}


