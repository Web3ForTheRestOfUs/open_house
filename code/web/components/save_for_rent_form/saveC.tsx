import React, { useState, useEffect } from 'react';
import AddFundsForm from './components/AddFundsForm';

interface StepCProps {
  formData: {
    targetAmount: number;
    weekday: string;
    savePreference: string;
    startdate: Date | null;
    enddate: Date | null;
    weeklyTarget: number;
    agreeToTerms: boolean;
  };
}

const StepC: React.FC<StepCProps> = ({ formData }) => {
  const [isAddFundsFormOpen, setIsAddFundsFormOpen] = useState(false);
  const [currentSliderValue, setCurrentSliderValue] = useState(0); // Days from startDate
  const [daysBetween, setDaysBetween] = useState(0);

  const dateDiffInDays = (date1: Date, date2: Date) => {
    const diff = date2.getTime() - date1.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  useEffect(() => {
    if (formData.startdate && formData.enddate) {
      const diff = dateDiffInDays(formData.startdate, formData.enddate);
      setDaysBetween(diff);
      const today = new Date();
      const offsetFromStart = dateDiffInDays(formData.startdate, today);
      setCurrentSliderValue(offsetFromStart > 0 ? offsetFromStart : 0);
    }
  }, [formData]);

  const getDateFromSlider = (sliderValue: number) => {
    if (!formData.startdate) return 'N/A';
    const newDate = new Date(formData.startdate);
    newDate.setDate(newDate.getDate() + sliderValue);
    return newDate.toDateString();
  };

  return (
    <div>
      {/* Property Information */}
      <div className="border border-[#E8F0FC] rounded-2xl p-6 flex">
        <div className="border border-blue-500 h-[187px] w-[187px] mr-[27px]">IMAGE HERE</div>
        <div>
          <p className="text-sm text-[#2F3D46] font-bold mb-3">
            Luxury 2 -Bedroom Apartment in Ikate
          </p>
          <p className="font-semibold text-sm text-[#1A2258] mb-10">#7,000,000/per year</p>
          <div className="flex">
            <div className="text-center text-[#2F3D46]">
              <p className="font-semibold">0</p>
              <p>Interested</p>
            </div>
            <div className="text-center mx-8 text-[#2F3D46]">
              <p className="font-semibold">{`#${formData.targetAmount.toString()}`}</p>
              <p>Target Amount</p>
            </div>
            <div className="text-center text-[#2F3D46]">
              <p className="font-semibold">{daysBetween - currentSliderValue}</p>
              <p>Days Left</p>
            </div>
          </div>

          {/* Date Range Display */}

          <div className="my-6">
              <div className="flex items-center mt-2">
                <input
                  type="range"
                  min="0"
                  max={daysBetween}
                  value={currentSliderValue}
                  onChange={(e) => setCurrentSliderValue(parseInt(e.target.value))}
                  className="w-full accent-blue-500"
                />
              </div>
            </div>
        </div>
      </div>

      <div className='w-full border border-[#E8F0FC] mt-12 mb-14'></div>

      <div className="flex justify-between">
        <div
          className="w-1/3 bg-[#317BA0] text-white hover:bg-blue-600 rounded-lg px-4 py-2 text-center cursor-pointer"
          onClick={() => setIsAddFundsFormOpen(true)}
        >
          Fund More
        </div>
        <div className="w-1/3 border border-[#317BA0] bg-transparent text-[#317BA0] hover:bg-blue-600 hover:text-white rounded-lg px-4 py-2 text-center cursor-pointer">
          History
        </div>
      </div>

      <div  className='flex justify-between my-7'>
        <div className='w-1/3 bg-[#F3F7FA] text-xs text-black rounded-lg px-7 py-4'>
          <p>Start Date</p>
          <p>{formData.startdate ? formData.startdate.toDateString() : "Not selected"}</p>
        </div>

        <div className='w-1/3 bg-[#F3F7FA] text-xs text-black rounded-lg px-7 py-4'>
          <p>End Date</p>
          <p>{formData.enddate ? formData.enddate.toDateString() : "Not selected"}</p>
        </div>
      </div>

      <div  className='flex justify-between'>
        <div className='w-1/3 bg-[#F3F7FA] text-xs text-black rounded-lg px-7 py-4'>
          <p>Frequency</p>
          <p>{ formData.savePreference }</p> 
          {/* formData.weeklyTarget */}
        </div>

        <div className='w-1/3 bg-[#F3F7FA] text-xs text-black rounded-lg px-7 py-4'>
          <p>Days Left</p>
          <p>{daysBetween - currentSliderValue}</p>
        </div>
      </div>

      {/* Add Funds Modal */}
      <AddFundsForm isOpen={isAddFundsFormOpen} onClose={() => setIsAddFundsFormOpen(false)} />
    </div>
  );
};

export default StepC;
