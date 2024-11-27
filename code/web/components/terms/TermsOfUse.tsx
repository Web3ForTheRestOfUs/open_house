'use client';

import React from 'react';
import { terms } from './TermsOfUseData';

const TermsOfService: React.FC = () => {
  return (
    <div className="w-full py-48">
      <h2 className="text-[#090613] font-semibold text-5xl text-center mb-6">Terms of Use</h2>
      <p className="text-2xl text-center text-[#414042] mb-20">
        Please read and accept our terms of use
      </p>
      <div className="flex justify-center ">
        <div className="w-5/6 bg-white text-black rounded-lg shadow-lg p-12">
          {terms.map((term, index) => (
            <div key={index} className="mb-10">
              <h3 className="font-semibold text-2xl mb-4">{term.question}</h3>
              <p className="text-xl text-gray-700 whitespace-pre-line">{term.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
