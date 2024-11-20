// 'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import ShareListingPanel from '@/components/favourite/share_panel';
import EachCartItem from '@/components/favourite/each_cart_item';

const page = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-[#8592AD] mb-4">Listing {'>'} Favourites</h1>
        <div className="flex justify-end mb-4">
          <ShareListingPanel />
        </div>

        <div className='text-start'>
          <h2 className="text-black text-2xl font-semibold font-['Montserrat']">
            Rent Cart
          </h2>
        </div>
        <div className="flex flex-col gap-10 items-center border bg-red-50 p-8">
          {/* Adjust container to center all items */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {[1, 2, 3, 4].map((value, index) => (
              <div className="w-full md:w-4/5 lg:w-3/4 p-4" key={index}>
                <EachCartItem />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
