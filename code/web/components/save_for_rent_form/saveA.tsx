import React from 'react';

interface SaveAProps {
  formData: {
    targetAmount: number;
    savePreference: string;
    weekday: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleNextStep: () => void;
}

const SaveA: React.FC<SaveAProps> = ({
  formData,
  handleChangeInput,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-xl text-[#2A2A2A] mb-7 font-medium">
        Save towards the rent
      </h1>

      <h1 className='font-bold mb-3 text-[#2F3D46]'>
        Luxury 2 -Bedroom Apartment in Ikate
      </h1>

      <p className='font-medium text-sm text-[#1A2258] mb-11'>
        #7,000,000/per year
      </p>

      <div className="mb-8">
        <label className="mb-2 text-[#8592AD] block">What is your Total Target Amount?</label>
        <input
          type="number"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
          min="0"
        />
      </div>

      <div className="mb-8">
        <label className="mb-6 text-[#8592AD] block">How will you Prefer to save?</label>
        <div className="flex gap-2">
          {['Daily', 'Weekly', 'Monthly'].map((type) => (
            <label key={type} className="flex items-center gap-2 mr-8">
              <input
                type="radio"
                name="savePreference"
                value={type}
                checked={formData.savePreference === type}
                onChange={(e) => handleChangeInput(e)}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-[56px]">
        <label className="mb-2 text-[#8592AD] block">Day of the week</label>
        <select
          name="weekday"
          value={formData.weekday}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
        >
          {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>


      <div className="my-2 flex justify-center items-center ">
        <button
          className="bg-[#F3F7FA] hover:bg-gray-500 py-4 rounded-lg w-full text-[#317BA0] hover:text-white"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SaveA;
