// import React from 'react';

// interface StepCProps {
//   formData: {
//     targetAmount: number;
//     weekday: string;
//     savePreference: string;
//     startdate: Date | null;
//     enddate: Date | null;
//     weeklyTarget: number;
//     agreeToTerms: boolean;
//   };
//   // handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   // handlePrevStep: () => void;
// //   handleSubmitFormData: () => void;
// }

// interface DataConfirmRowProps {
//   label: string;
//   value: string | boolean;
// }

// const StepC: React.FC<StepCProps> = ({
//   formData,
//   // handleChangeInput,
//   // handlePrevStep,
// }) => {
//   return (
//     <div>
//       <div>
//         <h1 className="mt-2 text-xl font-bold text-blue-900">
//           Step C: Confirm Form Data
//         </h1>
//         <DataConfirmRow label="targetAmount:" value={formData.targetAmount.toString()} />
//         <DataConfirmRow label="City:" value={formData.weekday} />
//         <DataConfirmRow label="Property Type:" value={formData.savePreference} />
//         <DataConfirmRow label="Start Date:" value={formData.startdate ? formData.startdate.toDateString() : "Not selected"}/>
//         <DataConfirmRow label="End Date:" value={formData.enddate ? formData.enddate.toDateString() : "Not selected"}/>
//         <DataConfirmRow label="Weekly Target:" value={formData.weeklyTarget.toString()} />
//       </div>

//       <div className='border border-[1px] border-[#E8F0FC] rounded-[16px] p-[24px] flex'>
//         <div className='border border-blue-500 h-[187px] w-[187px] mr-[27px]'>
//           IMAGE HERE
//         </div>
//         <div>
//           <p className='text-[14px] text-[#2F3D46] font-bold mb-[10px]'>Luxury 2 -Bedroom Apartment in Ikate</p>
//           <p className='font-semibold text-[14px] text-[#1A2258] mb-[39px]'>#7,000,000/per year</p>
//           <div className='flex'>
//             <div className='text-center text-[#2F3D46]'>
//               <p className='font-semibold'>0</p>
//               <p>Interested</p>
//             </div>

//             <div className='text-center mx-[32px] text-[#2F3D46]'>
//               <p className='font-semibold'>#20,000,000</p>
//               <p>Target Amount</p>
//             </div>

//             <div className='text-center text-[#2F3D46] '>
//               <p className='font-semibold'>0</p>
//               <p>Days Left</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// const DataConfirmRow: React.FC<DataConfirmRowProps> = ({ label, value }) => {
//   return (
//     <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
//       <span className="mr-4 text-slate-500">{label}</span>
//       <span className="mr-4 text-slate-900">{value.toString()}</span>
//     </div>
//   );
// };

// export default StepC;


import React, { useState, useEffect } from 'react';

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
  const [currentSliderValue, setCurrentSliderValue] = useState(0); // Days from startDate
  const [daysBetween, setDaysBetween] = useState(0);

  // Function to calculate the difference in days between two dates
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

  // Convert slider value (number of days) back to a date
  const getDateFromSlider = (sliderValue: number) => {
    if (!formData.startdate) return "N/A";
    const newDate = new Date(formData.startdate);
    newDate.setDate(newDate.getDate() + sliderValue);
    return newDate.toDateString();
  };

  return (
    <div>     

      {/* Property Information */}
      <div className="border border-[1px] border-[#E8F0FC] rounded-[16px] p-[24px] flex">
        <div className="border border-blue-500 h-[187px] w-[187px] mr-[27px]">IMAGE HERE</div>
        <div>
          <p className="text-[14px] text-[#2F3D46] font-bold mb-[10px]">
            Luxury 2 -Bedroom Apartment in Ikate
          </p>
          <p className="font-semibold text-[14px] text-[#1A2258] mb-[39px]">#7,000,000/per year</p>
          <div className="flex">
            <div className="text-center text-[#2F3D46]">
              <p className="font-semibold">0</p>
              <p>Interested</p>
            </div>
            <div className="text-center mx-[32px] text-[#2F3D46]">
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

      <div className='w-full border border-[1px] border-[#E8F0FC] mt-[48.5px] mb-[57.5px]'></div>

      <div className='flex justify-between'>
        <div className='w-1/3 bg-[#317BA0] text-white hover:bg-blue-600 rounded-[8px] px-[16px] py-[6px] text-center cursor-pointer'>Fund More</div>
        <div className='w-1/3 border border-[#317BA0] bg-transparent text-[#317BA0] hover:bg-blue-600 hover:text-white rounded-[8px] px-[16px] py-[6px] text-center cursor-pointer'>History</div>
      </div>

      <div  className='flex justify-between my-[26px]'>
          <div className='w-1/3 bg-[#F3F7FA] text-[12px] text-black rounded-[8px] px-[26px] py-[17px]'>
            <p>Start Date</p>
            <p>{formData.startdate ? formData.startdate.toDateString() : "Not selected"}</p>
          </div>

          <div className='w-1/3 bg-[#F3F7FA] text-[12px] text-black rounded-[8px] px-[26px] py-[17px]'>
            <p>End Date</p>
            <p>{formData.enddate ? formData.enddate.toDateString() : "Not selected"}</p>
          </div>
      </div>

      <div  className='flex justify-between'>
          <div className='w-1/3 bg-[#F3F7FA] text-[12px] text-black rounded-[8px] px-[26px] py-[17px]'>
            <p>Frequency</p>
            <p>{ formData.savePreference }</p> 
            {/* formData.weeklyTarget */}
          </div>

          <div className='w-1/3 bg-[#F3F7FA] text-[12px] text-black rounded-[8px] px-[26px] py-[17px]'>
            <p>Days Left</p>
            <p>{daysBetween - currentSliderValue}</p>
          </div>
      </div>
      
    </div>
  );
};

export default StepC;

