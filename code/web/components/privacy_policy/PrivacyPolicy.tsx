// PrivacyPolicy.tsx
'use client';
  
import React from 'react';
import { privacyPolicy } from './PrivacyPolicyData';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="w-full py-48">
      <h2 className="text-[#090613] font-semibold text-5xl text-center mb-6">Privacy Policy</h2>
      <div className='flex justify-center'>
        <p className="text-2xl text-center text-[#414042] mb-20 w-1/2">
            This Privacy Policy explains how OpenHouse ("we," "us," or "our") collects, uses, shares, and protects your personal information when you use our decentralized platform. We are committed to protecting your privacy while providing transparent property rental services.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-5/6 bg-white text-black rounded-lg shadow-lg p-12">
          {privacyPolicy.map((policy, index) => (
            <div key={index} className="mb-10">
              <h3 className="font-semibold text-2xl mb-4">{policy.question}</h3>
              <p className="text-xl text-gray-700 whitespace-pre-line">{policy.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;