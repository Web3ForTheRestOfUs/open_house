import React from 'react';
import MultiPageForm from '@/components/listing/upload_form/cordinator';

// /listing/upload

const page = () => {
  return (
    <div className="bg-[#F6F6F6] pt-10 px-16 pb-7">
      <h1 className="text-[#8592AD] mb-20"> Listing {'>'} Upload Property</h1>

      {/* <SimpleMultiStepForm showStepNumber={false} /> */}
      <MultiPageForm />
    </div>
  );
};

export default page;
