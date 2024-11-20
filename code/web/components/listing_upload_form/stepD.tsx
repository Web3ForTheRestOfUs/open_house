import React from 'react';

interface StepDProps {
  formData: {
    availabilityStatus: string;
    rent: string;
    deposit: string;
    utilities: string;
    serviceCharge: string;
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const StepD: React.FC<StepDProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step D: Availability and Pricing
      </h1>

      <div className="">
        <label className=" text-[#8592AD] block">Availability Status</label>
        <div className="flex gap-2 flex-wrap">
          {[
            'Immediately',
            '1-2 months',
            '2-4 months',
            '4-6 months',
            '8-10 months',
          ].map((status) => (
            <label key={status} className="flex items-center gap-2 ">
              <input
                type="radio"
                name="availabilityStatus"
                value={status}
                checked={formData.availabilityStatus === status}
                onChange={handleChangeInput}
                className="w-5 h-5"
              />
              <span className="text-[#8592AD]">{status}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="">
        <label className=" text-[#8592AD]">Rent</label>
        <input
          type="text"
          name="rent"
          value={formData.rent}
          onChange={handleChangeInput}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>

      <h1 className="font-bold  ">{'Additional Costs (if any)'}</h1>

      <div className="">
        <label className=" text-[#8592AD]">Deposit</label>
        <input
          type="text"
          name="deposit"
          value={formData.deposit}
          onChange={handleChangeInput}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>

      <div className="">
        <label className=" text-[#8592AD]">Utilities</label>
        <input
          type="text"
          name="utilities"
          value={formData.utilities}
          onChange={handleChangeInput}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>

      <div className="">
        <label className=" text-[#8592AD]">Service Charge</label>
        <input
          type="text"
          name="serviceCharge"
          value={formData.serviceCharge}
          onChange={handleChangeInput}
          className="  outline-none border border-2 border-[#E8F0FC] px-2 py-1  bg-transparent"
        />
      </div>

      <div className="my-2 flex  justify-between items-center">
        <button
          className="bg-[#F3F7FA] hover:bg-gray-500   w-2/5 text-[#317BA0] hover:text-white"
          onClick={handlePrevStep}
        >
          Prev
        </button>
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

export default StepD;
