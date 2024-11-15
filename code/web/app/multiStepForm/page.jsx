import React from 'react';
import SimpleMultiStepForm from '@/components/multiStepForm/multi-step-form-feature';

const page = () => {
  return (
    <div className='px-[70px] py-[38px]'>
      <h1 className='text-[#8592AD] text-[14px] mb-[35px]'>Home {'>'} Post Property</h1>
     
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default page;