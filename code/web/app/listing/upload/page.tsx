import React from 'react';
// import MultiPageForm from '@/components/listing/upload_form/cordinator';
import ListingsUI from '@/components/listing/upload_form/cordinator';
// import { CounterCreate, CounterList } from '@/components/listing/upload_form/cordinator';
import { WalletButton } from '@/components/solana/solana-provider';

// /listing/upload

const page = () => {
  return (
    <div className="bg-[#F6F6F6] pt-10 px-16 pb-7">
      <h1 className="text-[#8592AD] mb-20"> Listing {'>'} Upload Property</h1>

      {/* <MultiPageForm /> */}


      <ListingsUI />


      {/* THE BELOW WORKS */}

      {/* <CounterCreate />

      <br />

      <CounterList /> */}
    </div>
  );
};

export default page;
