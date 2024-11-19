import React from 'react';
import SimpleMultiStepForm from '@/components/listing_upload_form/multi-step-form-feature';

const page = () => {
  return (
    <div className='px-[70px] py-[38px]'>
      <h1 className='text-[#8592AD] text-[14px] mb-[35px]'> Listing {'>'} Upload Property</h1>
     
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default page;