import React from 'react';
import SaveForRentFeature from '@/components/save_for_rent_form/save_for_rent_feature';

// http://localhost:3000/listing/save4rent

const page = () => {
  return (
    <div className='px-16 py-10'>
      <h1 className='text-[#8592AD] text-xs mb-9'> Home {'>'} Post Property</h1>
     
      <SaveForRentFeature showStepNumber={false} />
    </div>
  );
};

export default page;