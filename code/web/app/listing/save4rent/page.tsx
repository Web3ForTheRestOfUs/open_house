import React from 'react';
import Save4RentFeature from '@/components/save4rent_form/save4rent-feature';

// http://localhost:3000/listing/save4rent

const page = () => {
  return (
    <div className='px-[70px] py-[38px]'>
      <h1 className='text-[#8592AD] text-[14px] mb-[35px]'> Home {'>'} Post Property</h1>
     
      <Save4RentFeature showStepNumber={false} />
    </div>
  );
};

export default page;