import React from 'react';

interface StepCProps {
  formData: {
    neighbourhoodQuality: string;
    proximity: string;
    safetyRating: string;
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepC: React.FC<StepCProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-[16px] text-[#8592AD] mb-[20px]">
        Step C: Neighbourhood Assessment
      </h1>

      <div className="mb-[49px]">
        <label className="mb-[24px] text-[#8592AD] block">Neighbourhood Quality</label>
        <div className="flex gap-2">
          {["Excellent", "Good", "Average", "Bad", "Poor"].map((quality) => (
            <label key={quality} className="flex items-center gap-2 mr-[16px]">
              <input
                type="radio"
                name="neighbourhoodQuality"
                value={quality}
                checked={formData.neighbourhoodQuality === quality}
                onChange={handleChangeInput}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{quality}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-[49px]">
        <label className="mb-[24px] text-[#8592AD] block">Proximity to Public Transport</label>
        <div className="flex gap-2">
          {["Walking Distance", "Short Drive", "Not Accessible"].map((proximity) => (
            <label key={proximity} className="flex items-center gap-2 mr-[16px]">
              <input
                type="radio"
                name="proximity"
                value={proximity}
                checked={formData.proximity === proximity}
                onChange={handleChangeInput}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{proximity}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-[50px]">
        <label className="mb-[24px] text-[#8592AD] block">Safety Rating</label>
        <div className="flex gap-2">
          {["Very Safe", "Safe", "Somewhat Safe", "Unsafe"].map((rating) => (
            <label key={rating} className="flex items-center gap-2 mr-[16px]">
              <input
                type="radio"
                name="safetyRating"
                value={rating}
                checked={formData.safetyRating === rating}
                onChange={handleChangeInput}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{rating}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="my-2 flex w-[519px] justify-between items-center">
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

export default StepC;
