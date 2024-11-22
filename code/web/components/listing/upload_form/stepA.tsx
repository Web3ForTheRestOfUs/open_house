import React from 'react';
import SelectField from './components/SelectField';

interface StepAProps {
  formData: {
    address: string;
    area: string;
    houseType: string;
    meterSituation: string;
    waterSituation: string;
    houseAge: number;
    homeSize: number;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleNextStep: () => void;
}

const StepA: React.FC<StepAProps> = ({
  formData,
  handleChangeInput,
  handleNextStep,
}) => {
  return (
    <div className=''>
      <h1 className="mb-8 text-[#8592AD] ">Step A: Property Info</h1>

      <div className="mb-8">
        <label className="text-[#8592AD] block mb-2">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={(e) => handleChangeInput(e)}
          className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent"
        />
      </div>

      <SelectField
         label='Area'
         name='area'
         value={formData.area}
         options={['Option 1', 'Option 2', 'Option 3']}
         onChange={handleChangeInput}
      />

      <SelectField
         label='House Type'
         name='houseType'
         value={formData.houseType}
         options={['Option 1', 'Option 2', 'Option 3']}
         onChange={handleChangeInput}
      />

      <SelectField
         label='Meter Situation'
         name='meterSituation'
         value={formData.meterSituation}
         options={['Option 1', 'Option 2', 'Option 3']}
         onChange={handleChangeInput}
      />

      <SelectField
         label='Water Situation'
         name='waterSituation'
         value={formData.waterSituation}
         options={['Option 1', 'Option 2', 'Option 3']}
         onChange={handleChangeInput}
      />
 
      <SelectField
         label='House Age'
         name='houseAge'
         value={formData.houseAge}
         options={[0,1,2,3,4,5]}
         onChange={handleChangeInput}
      />

      <SelectField
         label='Home Size'
         name='homeSize'
         value={formData.homeSize}
         options={[0,1,2,3,4,5]}
         onChange={handleChangeInput}
      />

      <div className="flex justify-center items-center ">
        <button
          className="w-full rounded-lg bg-[#F3F7FA] hover:bg-gray-500  py-5 text-[#317BA0] hover:text-white font-medium"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepA;
