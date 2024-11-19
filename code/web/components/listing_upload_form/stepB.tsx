import React from 'react';

interface StepBProps {
  formData: {
    bedroom: number;
    bathroom: number;
    size: number;
    amenities: string[];
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleAmenitiesChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    amenity: string
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepB: React.FC<StepBProps> = ({
  formData,
  handleChangeInput,
  handleAmenitiesChange,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-[16px] text-[#8592AD] mb-[20px]">
        Step B: Property Features
      </h1>

      <div className="mb-[30px]">
        <label className="mb-[8px] text-[#8592AD]">Number of Bedrooms</label>
        <select
          name="bedroom"
          value={formData.bedroom}
          onChange={(e) => handleChangeInput(e)}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-[30px]">
        <label className="mb-[8px] text-[#8592AD]">Number of Bathrooms</label>
        <select
          name="bathroom"
          value={formData.bathroom}
          onChange={(e) => handleChangeInput(e)}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-[30px]">
        <label className="mb-[8px] text-[#8592AD]">
          Size in thousand sqft.
        </label>
        <select
          name="size"
          value={formData.size}
          onChange={(e) => handleChangeInput(e)}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent"
        >
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-[30px]">
        <label className="mb-[8px] text-[#8592AD]">Amenities</label>
        <div className="flex flex-wrap items-center space-y-[8px]">
          {[
            'airConditioning',
            'gym',
            'parking',
            'petFriendly',
            'pool',
            'wifi',
            'heating',
            'laundryInUnit',
          ].map((amenity) => (
            <label
              key={amenity}
              className="flex items-center text-[#8592AD] mr-[16px]"
            >
              <input
                type="checkbox"
                name={amenity}
                checked={formData.amenities.includes(amenity)}
                onChange={(e) => handleAmenitiesChange(e, amenity)}
                className="mr-[8px]"
              />
              {amenity
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, (str) => str.toUpperCase())}
            </label>
          ))}
        </div>
      </div>

      <div className="my-2 flex  justify-between items-center">
        <button
          className="bg-[#F3F7FA] hover:bg-gray-500 py-[15px] rounded-[8px] w-2/5 text-[#317BA0] hover:text-white"
          onClick={handlePrevStep}
        >
          Prev
        </button>
        <button
          className="bg-[#F3F7FA] hover:bg-gray-500 py-[15px] rounded-[8px] w-2/5 text-[#317BA0] hover:text-white"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepB;
