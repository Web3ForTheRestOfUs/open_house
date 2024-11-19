import React from 'react';
import { useParams } from 'next/navigation';

const page = () => {
  const params = useParams();

  return (
    <div className="px-[70px] py-[38px]">
      <h1 className="text-[#8592AD] text-[14px] mb-[35px]">
        {' '}
        Listing {'>'} Individual
      </h1>
    </div>
  );
};

export default page;
