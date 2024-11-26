import React from 'react';

interface StepEProps {
  formData: {
    address: string;
    // city: string;
    // propertyType: string;
    bedroom: number; // Change to 'number'
    bathroom: number; // Change to 'number'
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
  };
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrevStep: () => void;
  handleSubmitFormData: () => void;
}

interface DataConfirmRowProps {
  label: string;
  value: string | boolean;
}

const StepE: React.FC<StepEProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step E: Confirm Form Data
      </h1>
      <DataConfirmRow label="Address:" value={formData.address} />
      {/* <DataConfirmRow label="City:" value={formData.city} />
      <DataConfirmRow label="Property Type:" value={formData.propertyType} /> */}
      <DataConfirmRow label="Bedroom:" value={formData.bedroom.toString()} />
      <DataConfirmRow label="Bathroom:" value={formData.bathroom.toString()} />
      <DataConfirmRow label="Size:" value={formData.size.toString()} />
      <DataConfirmRow
        label="Amenities:"
        value={formData.amenities.join(', ')}
      />
      <DataConfirmRow
        label="Neighbourhood Quality:"
        value={formData.neighbourhoodQuality}
      />
      <DataConfirmRow label="Safety Rating:" value={formData.safetyRating} />
      <DataConfirmRow label="Proximity:" value={formData.proximity} />
      <DataConfirmRow
        label="Availability Status:"
        value={formData.availabilityStatus}
      />
      <DataConfirmRow label="Rent:" value={formData.rent} />
      <DataConfirmRow label="Deposit:" value={formData.deposit} />
      <DataConfirmRow label="Utilities:" value={formData.utilities} />
      <DataConfirmRow label="Service Charge:" value={formData.serviceCharge} />

      <div className="my-4 flex items-center">
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChangeInput}
          className="w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500"
        />
        <label htmlFor="agreeToTerms">I Agree to Terms of Services</label>
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
          onClick={handleSubmitFormData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

const DataConfirmRow: React.FC<DataConfirmRowProps> = ({ label, value }) => {
  return (
    <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-900">{value.toString()}</span>
    </div>
  );
};

export default StepE;
