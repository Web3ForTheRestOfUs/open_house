'use client'
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from './components/Modal';
import CardForm from './components/CardForm';
import WalletForm from './components/WalletForm';

interface SaveBProps {
  formData: {
    startdate: Date | null; // Use `Date` type to align with `react-datepicker`
    enddate: Date | null;
    weeklyTarget: number;
    agreeToTerms: boolean;
  };
  handleChangeInput: (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  handlePrevStep: () => void;
  handleSubmitFormData: () => void;
  handleDateChange: (date: Date | null, field: 'startdate' | 'enddate') => void; // New handler for date change
}

const SaveB: React.FC<SaveBProps> = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
  handleDateChange,
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  const handleVerifyCard = (cardDetails: { cardNumber: string; expiry: string; cvv: string }) => {
    console.log('Card Verified:', cardDetails);
    // Add your logic here for verifying the card
  };

  const handleConnectWallet = (walletDetails: { walletType: string; walletId: string }) => {
    console.log('Wallet Connected:', walletDetails);
    // Add your logic here for wallet connection
  };

  return (
    <div>
      <h1 className="mt-2 text-xl text-[#2A2A2A] mb-7 font-medium">
        Save towards the rent
      </h1>

      <h1 className="font-bold mb-3 text-[#2F3D46]">
        Luxury 2 -Bedroom Apartment in Ikate
      </h1>

      <p className="font-medium text-sm text-[#1A2258] mb-11">
        #7,000,000/per year
      </p>

      <div className="mb-6">
        <label className="mb-2 text-[#8592AD] block font-medium text-base">
          Set Start Date
        </label>
        <DatePicker
          selected={formData.startdate}
          onChange={(date) => handleDateChange(date, 'startdate')} // Pass 'startdate' as an identifier
          minDate={new Date()} // Prevent past dates
          dateFormat="MMMM d, yyyy" // Customize date format
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-3 rounded-lg bg-transparent h-16 cursor-pointer"
          placeholderText="Select a start date"
          wrapperClassName="w-full"
        />
      </div>

      <div className="mb-11">
        <label className="mb-2 text-[#8592AD] block font-medium text-base">
          Set End Date
        </label>
        <DatePicker
          selected={formData.enddate}
          onChange={(date) => handleDateChange(date, 'enddate')} // Pass 'enddate' as an identifier
          minDate={formData.startdate || new Date()} // Prevent selecting before startdate
          dateFormat="MMMM d, yyyy" // Customize date format
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-3 rounded-lg bg-transparent h-16 cursor-pointer"
          placeholderText="Select an end date"
          wrapperClassName="w-full"
        />
      </div>

      <div className="mb-8">
        <label className="mb-2 text-[#8592AD] block">How much do you want to contribute Weekly?</label>
        <input
          type="number"
          name="weeklyTarget"
          value={formData.weeklyTarget}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
          min="0"
        />
      </div>

      <div className='mb-24'>
        <p className='text-[#8592AD] font-medium mb-4'>Set Primary Source Of Funds</p>
        <div className='flex flex-wrap justify-between'>
          <div className='w-1/3 h-28 flex justify-center items-center bg-[#F3F7FA] rounded-lg cursor-pointer hover:bg-[#317BA0] hover:text-white' onClick={() => setIsModalOpen(true)}>
            <p>Add Card</p>
          </div>

          <div className='w-1/3 h-28 flex justify-center items-center bg-[#F3F7FA] rounded-lg cursor-pointer hover:bg-[#317BA0] hover:text-white' onClick={() => setIsWalletModalOpen(true)}>
            <p>Connect Wallet</p>
          </div>
        </div>

      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CardForm onVerify={handleVerifyCard} onClose={() => setIsModalOpen(false)} />
      </Modal>

      {/* Wallet Modal */}
      <Modal isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)}>
        <WalletForm onConnect={handleConnectWallet} onClose={() => setIsWalletModalOpen(false)} />
      </Modal>

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


      {/* Other sections remain unchanged */}
      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-[#F3F7FA] hover:bg-[#317BA0] py-4 rounded-lg w-2/5 text-[#317BA0] hover:text-white"
          onClick={handlePrevStep}
        >
          Prev
        </button>
        <button
          className="bg-[#F3F7FA] hover:bg-[#317BA0] py-4 rounded-lg w-2/5 text-[#317BA0] hover:text-white"
          onClick={handleSubmitFormData}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SaveB;
