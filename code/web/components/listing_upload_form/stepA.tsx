import React from 'react';

interface StepAProps {
  formData: {
    address: string;
    city: string;
    propertyType: string;
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNextStep: () => void;
}

const StepA: React.FC<StepAProps> = ({
  formData,
  handleChangeInput,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className="mt-2  text-[#8592AD] ">Step A: Property Info</h1>
      <div className="">
        <label className=" text-[#8592AD]">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={(e) => handleChangeInput(e)}
          className="  outline-none border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>
      <div className="">
        <label className=" text-[#8592AD]">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={(e) => handleChangeInput(e)}
          className="  outline-none border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>

      <div className="mb-[10.5rem]">
        <label className=" text-[#8592AD] block">Property Type</label>
        <div className="flex gap-2">
          {['Studio', 'Apartment', 'Condo', 'Bungalow'].map((type) => (
            <label key={type} className="flex items-center gap-2 ">
              <input
                type="radio"
                name="propertyType"
                value={type}
                checked={formData.propertyType === type}
                onChange={(e) => handleChangeInput(e)}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="my-2 flex justify-center items-center ">
        <button
          className="bg-[#F3F7FA] hover:bg-gray-500   w-2/5 text-[#317BA0] hover:text-white"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepA;
