import React from 'react';
import SimpleMultiStepForm from '@/components/listing/upload_form/multi-step-form-feature';

// /listing/upload

const page = () => {
  return (
    <div className=" ">
      <h1 className="text-[#8592AD]"> Listing {'>'} Upload Property</h1>

      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default page;
