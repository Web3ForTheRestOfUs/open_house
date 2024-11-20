import React, { useState } from 'react';

interface CardFormProps {
  onVerify: (cardDetails: { cardNumber: string; expiry: string; cvv: string }) => void;
  onClose: () => void;
}

const CardForm: React.FC<CardFormProps> = ({ onVerify, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify({ cardNumber, expiry, cvv });
    onClose(); // Close modal after successful submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-[16px] text-[black] font-bold mb-4">Securely Link a Card</h2>

      <div className="mb-[32px]">
        <label className="block text-sm text-[#8592AD] font-medium mb-2">Enter Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent h-[60px]"
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={19} // Optional for formatting
          required
        />
      </div>

      <div className="flex gap-4 mb-[63px]">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">MM/YY</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent h-[60px]"
            placeholder="MM/YY"
            maxLength={5}
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">CVV</label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-[8px] bg-transparent h-[60px]"
            placeholder="CVV"
            maxLength={3}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#317BA0] text-white py-2 rounded-lg hover:bg-blue-600 mb-[25px]"
      >
        Verify
      </button>

      <div className='flex justify-center'>
        <div className='border border-black rounded-[8px] px-[23px] py-[29px] w-4/5'>
          <p className='text-black font-medium text-[14px] mb-[13px]'>How safe is my information</p>
          <p className='text-black text-[12px] mb-[15px]'>Your card details are not saved on any OpenHouse servers.</p>
          <p className='text-black text-[12px] mb-[15px]'>They are securely passed to your bank for processing and verification. Your bank just sends OpenHouse a confirmation to charge</p>
        </div>
      </div>
    </form>
  );
};

export default CardForm;
