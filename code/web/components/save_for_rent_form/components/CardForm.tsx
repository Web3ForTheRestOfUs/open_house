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
      <h2 className="text-base text-black font-bold mb-4">Securely Link a Card</h2>

      <div className="mb-8">
        <label className="block text-sm text-[#8592AD] font-medium mb-2">Enter Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={16} 
          required
        />
      </div>

      <div className="flex gap-4 mb-16">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">MM/YY</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
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
            className="w-full outline-none border-2 border-[#E8F0FC] px-2 py-1 rounded-lg bg-transparent h-16"
            placeholder="CVV"
            maxLength={3}
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#317BA0] text-white py-2 rounded-lg hover:bg-blue-600 mb-6"
      >
        Verify
      </button>

      <div className='flex justify-center'>
        <div className='border border-black rounded-lg px-6 py-7 w-4/5'>
          <p className='text-black font-medium text-sm mb-3'>How safe is my information</p>
          <p className='text-black text-xs mb-4'>Your card details are not saved on any OpenHouse servers.</p>
          <p className='text-black text-xs mb-4'>They are securely passed to your bank for processing and verification. Your bank just sends OpenHouse a confirmation to charge</p>
        </div>
      </div>
    </form>
  );
};

export default CardForm;
