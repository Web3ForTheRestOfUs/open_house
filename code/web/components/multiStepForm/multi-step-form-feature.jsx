'use client';
import React, { useEffect, useState } from 'react';
import StepA from './stepA';
import StepB from './stepB';
import StepC from './stepC';
import StepD from './stepD';
import StepE from './stepE';
import StepFinal from './stepFinal';

// This is the parent component.
// This component will control and manage steps and data

// Step A: Customer Identity Info
// Step B: Customer Business Info
// Step C: Customer Financial Info
// Step D: Confirm Form  Data

// Step Final: Succes Result

const initialFormData = {
  address: '',
  city: '',
  propertyType: '',
  bedroom: '',
  bathroom: '',
  size: '',
  amenities: [],
  neighbourhoodQuality: '',
  safetyRating: '',
  proximity: '',
  availabilityStatus: '',
  rent:'',
  deposit:'',
  utilities:'',
  serviceCharge:'',
  agreeToTerms: false,
};

const stepsArray = ['A', 'B', 'C', 'D', 'E'];

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState('A');
  const [formData, setFormData] = useState(initialFormData);

  // We need a method to go to next step
  const handleNextStep = () => {
    if (step === 'A') setStep('B');
    else if (step === 'B') setStep('C');
    else if (step === 'C') setStep('D');
    else if (step === 'D') setStep('E');
  };

  // We need a method to go to prev step
  const handlePrevStep = () => {
    if (step === 'E') setStep('D');
    else if (step === 'D') setStep('C');
    else if (step === 'C') setStep('B');
    else if (step === 'B') setStep('A');
  };

  // We need a method to update our formData
  const handleChangeInput = (event) => {
    const fieldName = event.target.name;
    let fieldValue;
    if (fieldName === 'agreeToTerms') {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  const handleAmenitiesChange = (e, amenity) => {
    const updatedAmenities = [...formData.amenities];
    if (e.target.checked) {
      updatedAmenities.push(amenity);  // Add amenity if checked
    } else {
      const index = updatedAmenities.indexOf(amenity);
      if (index > -1) updatedAmenities.splice(index, 1);  // Remove amenity if unchecked
    }
    setFormData({ ...formData, amenities: updatedAmenities });
  };
  

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    // Here You can do final Validation and then Submit Your form
    if (!formData.agreeToTerms) {
      alert('Error!!!!!!   You must agree to Terms of Services!!!!');
    } else {
      setStep('Final');
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
    if (!showStepNumber || step === 'Final') {
      return null;
    }
    return (
      <section className='mt-2 mb-4 flex justify-between'>
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
    <div className="bg-white w-[576px] max-w-full px-[29px] py-[38px] mx-auto rounded-[16px] shadow-[0px_1px_5px_0px_rgba(0,0,0,0.75)]">

      {renderTopStepNumbers()}

      {/* // Render Steps */}
      {step === 'A' ? (
        <StepA
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'B' ? (
        <StepB
          formData={formData}
          handleChangeInput={handleChangeInput}
          handleAmenitiesChange={handleAmenitiesChange}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'C' ? (
        <StepC
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'D' ? (
        <StepD
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
        />
      ) : null}
      {step === 'E' ? (
        <StepE
          formData={formData}
          handleChangeInput={handleChangeInput}
          handlePrevStep={handlePrevStep}
          handleSubmitFormData={handleSubmitFormData}
        />
      ) : null}
      {step === 'Final' ? <StepFinal /> : null}
    </div>
  );
};

export default SimpleMultiStepForm;