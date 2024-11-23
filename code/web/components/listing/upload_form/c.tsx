import React from 'react';
import SelectField from './components/SelectField';

interface PageThreeProps {
  formData: {
    yearlyRent: string;
    serviceCharge?: string;
    agreementFee?: string;
    agencyFee?: string;
    cautionDeposit?: string;
    rentPaymentFrequency: string;
    expiryMonth: string;
    intentToLeave: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleNextStep: () => void;
}

const PageThree: React.FC<PageThreeProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Financial Information</h1>
        <div className="text-sm text-gray-500">Step 3 of 7</div>
      </div>

      <p className="text-gray-600">Let's talk about the costs involved</p>

      <div className="space-y-4">
        <SelectField
          label="Yearly Rent"
          name="yearlyRent"
          value={formData.yearlyRent}
          options={[
            { value: 'below-600k', label: 'Below 600k' },
            { value: '600k', label: '600k' },
            { value: '700k', label: '700k' },
            { value: '800k', label: '800k' },
            { value: '900k', label: '900k' },
            { value: '1m', label: '1m' },
            { value: '1.1m-1.5m', label: '1.1m - 1.5m' },
            { value: '1.5m-2.5m', label: '1.5m - 2.5m' },
            { value: '2.5m-4m', label: '2.5m - 4m' },
            { value: 'over-4m', label: 'Over 4m' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select yearly rent range"
        />

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="font-semibold text-[#8592AD]">Additional Fees</h2>
          
          <div className="mb-8">
            <label className="text-[#8592AD] block mb-2">Service Charge (if any)</label>
            <input
              type="number"
              name="serviceCharge"
              value={formData.serviceCharge}
              onChange={handleChangeInput}
              className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
              placeholder="Enter service charge amount"
            />
          </div>

          <div className="mb-8">
            <label className="text-[#8592AD] block mb-2">Agreement Fee</label>
            <input
              type="number"
              name="agreementFee"
              value={formData.agreementFee}
              onChange={handleChangeInput}
              className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
              placeholder="Enter agreement fee amount"
            />
          </div>

          <div className="mb-8">
            <label className="text-[#8592AD] block mb-2">Agency Fee</label>
            <input
              type="number"
              name="agencyFee"
              value={formData.agencyFee}
              onChange={handleChangeInput}
              className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
              placeholder="Enter agency fee amount"
            />
          </div>

          <div className="mb-8">
            <label className="text-[#8592AD] block mb-2">Caution Deposit</label>
            <input
              type="number"
              name="cautionDeposit"
              value={formData.cautionDeposit}
              onChange={handleChangeInput}
              className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
              placeholder="Enter caution deposit amount"
            />
          </div>
        </div>

        <SelectField
          label="Rent Payment Frequency"
          name="rentPaymentFrequency"
          value={formData.rentPaymentFrequency}
          options={[
            { value: 'annual', label: 'Annual' },
            { value: 'biannual', label: 'Bi-annual' },
            { value: 'quarterly', label: 'Quarterly' },
            { value: 'monthly', label: 'Monthly' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select payment frequency"
        />

        <SelectField
          label="Expiry Month"
          name="expiryMonth"
          value={formData.expiryMonth}
          options={[
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
          ].map(month => ({ value: month.toLowerCase(), label: month }))}
          onChange={handleChangeInput}
          required
          placeholder="Select rent expiry month"
        />

        <SelectField
          label="Intent To Leave"
          name="intentToLeave"
          value={formData.intentToLeave}
          options={[
            { value: 'ready-now', label: 'Ready Now' },
            { value: '1-2months', label: '1-2 months' },
            { value: '3-6months', label: '3-6 months' },
            { value: '6-11months', label: '6-11 months' },
            { value: 'over-1year', label: 'Over a Year' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select when you plan to leave"
        />
      </div>

      <div className="flex justify-between pt-6">
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          className="w-[45%] rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PageThree;