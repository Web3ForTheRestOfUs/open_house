'use client'
import React, { useState } from 'react';

type DetailProps = {
  label: string;
  value: string;
};

const Detail: React.FC<DetailProps> = ({ label, value }) => (
  <div className="text-[#414042] mb-6">
    <p className="text-lg font-semibold mb-2">{label}</p>
    <p className="bg-[#EFEFF0] text-lg w-full p-6 rounded">{value}</p>
  </div>
);

// Mimicking blockchain response data
const mockBlockchainResponse = {
  name: 'Caleb Gabriel',
  phone: '+234 8095 765 4321',
  whatsapp: '+234 8095 765 4321',
  intentToLeave: '1-3 months',
};

const HouseOwnerCard: React.FC = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => setIsRevealed(true);

  const { name, phone, whatsapp, intentToLeave } = mockBlockchainResponse;

  return (
    <div className="relative w-full bg-white rounded-lg overflow-hidden">
      {/* Overlay for "Click to Reveal" */}
      {!isRevealed && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold cursor-pointer"
          onClick={handleReveal}
        >
          Click to Reveal
        </div>
      )}

      <div
        className={`transition-all duration-300 ${
          isRevealed ? '' : 'blur-sm pointer-events-none'
        }`}
      >
        <header className="bg-[#1A2258] rounded-t-lg text-white py-6 text-center text-xl font-semibold">
          Current Tenant
        </header>

        <div className="bg-white rounded-b-lg h-auto py-7 mx-8">
          <Detail label="Name" value={name} />
          <Detail label="Phone" value={phone} />
          <Detail label="WhatsApp" value={whatsapp} />
          <Detail label="Intent to Leave" value={intentToLeave} />
        </div>
      </div>
    </div>
  );
};

export default HouseOwnerCard;
