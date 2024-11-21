'use client';
import React, { useEffect, useState } from 'react';
import SaveA from './saveA';
import SaveB from './saveB';
import SaveC from './saveC';

interface FormData {
  targetAmount: number;
  weekday: string;
  savePreference: string;
  startdate: Date | null;
  enddate: Date | null;
  weeklyTarget: number; // Updated to number
  agreeToTerms: boolean;
}

interface SaveForRentProps {
  showStepNumber?: boolean;
}

const initialFormData: FormData = {
  targetAmount: 0,
  weekday: '',
  savePreference: '',
  startdate: null,
  enddate: null,
  weeklyTarget: 0,
  agreeToTerms: false,
};

const steps = ['A', 'B', 'C'];

const SaveForRentFeature: React.FC<SaveForRentProps> = ({
  showStepNumber,
}) => {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNextStep = () =>
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  const handlePrevStep = () => setStepIndex((prev) => Math.max(prev - 1, 0));

  const handleChangeInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, checked, type } = event.target as HTMLInputElement; // Narrowing for type safety

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox'
          ? checked
          : name === 'bedroom' || name === 'bathroom' || name === 'size'
          ? Number(value)
          : value,
    }));
  };

  const handleDateChange = (date: Date | null, field: 'startdate' | 'enddate') => {
    setFormData((prev) => {
      if (field === 'startdate') {
        // If startdate changes, ensure enddate is not before the new startdate
        return {
          ...prev,
          startdate: date,
          enddate: date && prev.enddate && date > prev.enddate ? null : prev.enddate, // Reset enddate if it becomes invalid
        };
      } else if (field === 'enddate') {
        return {
          ...prev,
          enddate: date,
        };
      }
      return prev;
    });
  };
  
  

  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert('You must agree to Terms of Services!');
    } else {
      setStepIndex(steps.length - 1);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderStep = () => {
    const step = steps[stepIndex];
    switch (step) {
      case 'A':
        return (
          <SaveA
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleNextStep={handleNextStep}
          />
        );
      case 'B':
        return (
          <SaveB
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleSubmitFormData={handleSubmitFormData}
            handleDateChange={handleDateChange} // New prop
          />

        );
      case 'C':
        return (
          <SaveC
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  const renderStepNumbers = () => {
    if (!showStepNumber || stepIndex === steps.length - 1) return null;
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {steps.slice(0, -1).map((item, index) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              index === stepIndex ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => setStepIndex(index)}
            aria-label={`Step ${item}`}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className="bg-white w-1/2 max-w-full px-7 py-10 mx-auto rounded-2xl shadow-md">
      {renderStepNumbers()}
      {renderStep()}
    </div>
  );
};

export default SaveForRentFeature;
