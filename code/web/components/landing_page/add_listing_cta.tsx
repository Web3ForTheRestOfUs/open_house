'use client';

import React from 'react';
import Link from 'next/link';

const AddListingCTA: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-white rounded-lg border border-black shadow-sm p-7">
        <span className="text-gray-900 text-base">
          Have a verified property?
        </span>
        <Link href="/listing/upload">
          <button
            className="ml-4 px-6 py-2 bg-[#317BA0] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            aria-label="Post your property listing"
          >
            Post Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddListingCTA;
