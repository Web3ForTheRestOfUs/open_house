// 'use client';
import React from 'react';
// import ShareListingPanel from '@/components/user/favourite/share_panel';
import EachCartItem from '@/components/user/favourite/each_cart_item';

const page = () => {
  const numberOfListings = 3;
  return (

    <div className="pt-12 px-16 bg-[#F6F6F6] border-t-2 border-[#D0D5DD]">
      <h1 className="text-[#8592AD] mb-16">Listing {'>'} Favourites</h1>
      <div className='w-full flex justify-center bg-white py-10'>
        <div className='w-1/2'>
          {Array.from({ length: numberOfListings }, (_, index) => (
            <EachCartItem key={`first-row-${index}`}/>
          ))}
        </div>
      </div>
      <div className='py-20'></div>
    </div>
  );
};

export default page;
