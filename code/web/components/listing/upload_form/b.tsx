import React from 'react';
import SelectField from './components/SelectField';

interface PageTwoProps {
  formData: {
    address: string;
    houseType: string;
    buildingType: string;
    floorLevel?: number;
    compoundType: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const PageTwo: React.FC<PageTwoProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Location & Property Type</h1>
        <div className="text-sm text-gray-500">Step 2 of 7</div>
      </div>

      <p className="text-gray-600">Tell us about your place</p>

      <div className="space-y-4">
        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">Address*</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChangeInput}
            required
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter full property address"
          />
          <p className="text-sm text-gray-500 mt-1">We'll find this on Google Maps</p>
        </div>

        <SelectField
          label="House Type"
          name="houseType"
          value={formData.houseType}
          options={[
            { value: 'self-con', label: 'Self-Con / Studio' },
            { value: 'mini-flat', label: '1 Bedroom / Mini Flat' },
            { value: '2bed', label: '2bed Apartment' },
            { value: '3bed', label: '3bed Apartment' },
            { value: '4bed', label: '4bed Apartment' },
            { value: '5bed', label: '5bed Apartment' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select house type"
        />

        <SelectField
          label="Building Type"
          name="buildingType"
          value={formData.buildingType}
          options={[
            { value: 'bungalow', label: 'Bungalow' },
            { value: 'bq', label: "BQ (Boy's Quarters)" },
            { value: 'one-storey', label: 'One Storey Building' },
            { value: 'two-storey', label: 'Two Storey Building' },
            { value: 'three-storey', label: 'Three Storey Building' },
            { value: 'four-storey', label: 'Four Storey Building' },
            { value: 'high-rise', label: 'Over Four Storey Building' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select building type"
        />

        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">Floor Level (if applicable)</label>
          <input
            type="number"
            name="floorLevel"
            value={formData.floorLevel}
            onChange={handleChangeInput}
            min="0"
            max="100"
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter floor level (e.g., 2 for 2nd floor)"
          />
        </div>

        <SelectField
          label="Compound Type"
          name="compoundType"
          value={formData.compoundType}
          options={[
            { value: 'no-compound', label: 'No Compound' },
            { value: 'tiny', label: 'Tiny Compound' },
            { value: 'medium', label: 'Medium Compound' },
            { value: 'large', label: 'Large Compound' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select compound type"
        />
      </div>

      <div className="flex justify-between pt-6">
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PageTwo;