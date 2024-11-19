// 'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import ShareListingPanel from '@/components/favourite/share_panel';
import EachCartItem from '@/components/favourite/each_cart_item';

const page = () => {
  // const params = useParams();

  return (
    <div>
      <Header />
      <div className="px-[70px] py-[38px]">
        <h1 className="text-[#8592AD] text-[14px] mb-[35px]">
          {' '}
          Listing {'>'} Favourites
        </h1>
        <div className="flex justify-end">
          <ShareListingPanel />
        </div>
        <div>
          {[1, 2, 3].map((value, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <EachCartItem key={index} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
