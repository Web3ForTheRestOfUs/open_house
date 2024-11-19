'use client';
import React, { useEffect, useState } from 'react';
import StepA from './stepA';
import StepB from './stepB';
import StepC from './stepC';
import StepD from './stepD';
import StepE from './stepE';
import StepFinal from './stepFinal';

interface FormData {
  address: string;
  city: string;
  propertyType: string;
  bedroom: number; // Updated to number
  bathroom: number; // Updated to number
  size: number;
  amenities: string[];
  neighbourhoodQuality: string;
  safetyRating: string;
  proximity: string;
  availabilityStatus: string;
  rent: string;
  deposit: string;
  utilities: string;
  serviceCharge: string;
  agreeToTerms: boolean;
}

interface SimpleMultiStepFormProps {
  showStepNumber?: boolean;
}

const initialFormData: FormData = {
  address: '',
  city: '',
  propertyType: '',
  bedroom: 0,
  bathroom: 0,
  size: 0,
  amenities: [],
  neighbourhoodQuality: '',
  safetyRating: '',
  proximity: '',
  availabilityStatus: '',
  rent: '',
  deposit: '',
  utilities: '',
  serviceCharge: '',
  agreeToTerms: false,
};

const steps = ['A', 'B', 'C', 'D', 'E', 'Final'];

const SimpleMultiStepForm: React.FC<SimpleMultiStepFormProps> = ({
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

  const handleAmenitiesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    amenity: string
  ) => {
    setFormData((prev) => {
      const updatedAmenities = event.target.checked
        ? [...prev.amenities, amenity]
        : prev.amenities.filter((item) => item !== amenity);
      return { ...prev, amenities: updatedAmenities };
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
          <StepA
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleNextStep={handleNextStep}
          />
        );
      case 'B':
        return (
          <StepB
            formData={formData}
            handleChangeInput={handleChangeInput}
            handleAmenitiesChange={handleAmenitiesChange}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        );
      case 'C':
        return (
          <StepC
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        );
      case 'D':
        return (
          <StepD
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleNextStep={handleNextStep}
          />
        );
      case 'E':
        return (
          <StepE
            formData={formData}
            handleChangeInput={handleChangeInput}
            handlePrevStep={handlePrevStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        );
      case 'Final':
        return <StepFinal />;
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
    <div className="bg-white  max-w-full px-[29px] py-[38px] mx-auto rounded-[16px] shadow-md">
      {renderStepNumbers()}
      {renderStep()}
    </div>
  );
};

export default SimpleMultiStepForm;
