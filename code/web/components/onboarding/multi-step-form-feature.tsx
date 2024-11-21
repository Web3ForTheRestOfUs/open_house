'use client';
import React, { useEffect, useState } from 'react';
import StepA from '../listing/upload_form/stepA';
import StepB from '../listing/upload_form/stepB';
import StepC from '../listing/upload_form/stepC';
import StepD from '../listing/upload_form/stepD';
import StepE from '../listing/upload_form/stepE';
import StepFinal from '../listing/upload_form/stepFinal';

// Define the type for form data
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

// Define the props for the component
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

const stepsArray = ['A', 'B', 'C', 'D', 'E'];

const SimpleMultiStepForm: React.FC<SimpleMultiStepFormProps> = ({
  showStepNumber,
}) => {
  const [step, setStep] = useState<string>('A');
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
    else if (step === 'C') setStep('D');
    else if (step === 'D') setStep('E');
  };

  const handlePrevStep = () => {
    if (step === 'E') setStep('D');
    else if (step === 'D') setStep('C');
    else if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };

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
    const updatedAmenities = [...formData.amenities];
    if (event.target.checked) {
      updatedAmenities.push(amenity);
    } else {
      const index = updatedAmenities.indexOf(amenity);
      if (index > -1) updatedAmenities.splice(index, 1);
    }
    setFormData({ ...formData, amenities: updatedAmenities });
  };

  const handleSubmitFormData = () => {
    if (!formData.agreeToTerms) {
      alert('Error!!!!!!   You must agree to Terms of Services!!!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-between">
        {stepsArray.map((item) => (
          <div
            key={item}
            className={`w-8 h-8 flex justify-center items-center border-2 border-gray-600 rounded-full cursor-pointer ${
              item === step ? 'bg-blue-500' : ''
            }`}
            onClick={() => setStep(item)}
          >
            {item}
          </div>
        ))}
      </section>
    );
  };

  return (
    <div className="bg-white  max-w-full   mx-auto  shado">
      {renderTopStepNumbers()}

      {/* Render Steps */}
      {step === 'A' && (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 'B' && (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleAmenitiesChange={handleAmenitiesChange}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 'C' && (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 'D' && (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      )}
      {step === 'E' && (
        <StepE
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      )}
      {step === 'Final' && <StepFinal />}
    </div>
  );
};

export default SimpleMultiStepForm;
