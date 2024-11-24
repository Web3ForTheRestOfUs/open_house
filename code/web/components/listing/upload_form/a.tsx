import React from 'react';
import SelectField from './components/SelectField';

interface PageOneProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    whatsappNumber?: string;
    gender: string;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handleNextStep: () => void;
}

const PageOne: React.FC<PageOneProps> = ({
  formData,
  handleChangeInput,
  handleNextStep,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#8592AD]">Basic Information</h1>
        <div className="text-sm text-gray-500">Step 1 of 7</div>
      </div>

      <p className="text-gray-600">Let's get to know you</p>

      <div className="space-y-4">
        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChangeInput}
            required
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter your first name"
          />
        </div>

        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChangeInput}
            required
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter your last name"
          />
        </div>

        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">Email Address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeInput}
            required
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter your email address"
          />
        </div>

        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChangeInput}
            required
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-8">
          <label className="text-[#8592AD] block mb-2">WhatsApp Number (Optional)</label>
          <input
            type="tel"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChangeInput}
            className="w-full h-16 outline-none border-2 border-[#E8F0FC] px-4 py-2 rounded-lg bg-transparent"
            placeholder="Enter your WhatsApp number"
          />
        </div>

        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
            { value: 'prefer-not-to-say', label: 'Prefer not to say' }
          ]}
          onChange={handleChangeInput}
          required
          placeholder="Select your gender"
        />
      </div>

      <div className="pt-6">
        <button
          className="w-full rounded-lg bg-[#F3F7FA] hover:bg-[#317BA0] py-5 text-[#317BA0] hover:text-white font-medium transition-colors"
          onClick={handleNextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PageOne;