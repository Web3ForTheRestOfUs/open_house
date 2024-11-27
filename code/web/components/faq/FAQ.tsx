'use client';
import React, { useState } from 'react';
import { sections } from './FAQData';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  label: string;
  faqs: FAQ[];
}

const FAQTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('general');
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  return (
    <div className="w-full py-48">
      <h2 className='text-[#090613] font-semibold text-5xl text-center mb-6'>Frequently Asked Questions</h2>
      <p className='text-2xl text-center text-[#414042] mb-20'>These are the most common asked questions about OpenHouse</p>
      {/* Tabs Header */}
      <div className='flex justify-center mb-36'>
        <div className="flex w-3/4">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`
                flex-1 text-center text-[#317BA0] px-4 py-2.5 font-medium text-xl transition-all border border-[#317BA0] mr-11 rounded-full
                ${activeTab === section.id 
                  ? 'border-[#317BA0] text-white bg-[#317BA0]' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
              `}
              onClick={() => setActiveTab(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className='flex justify-center text-black'>
        <div className="w-5/6">
          {sections
            .filter((section) => section.id === activeTab)
            .map((section) => (
              <div key={section.id}>
                {section.faqs.map((faq, index) => (
                  <div key={index} className="mb-10 bg-white px-12 py-8 rounded-lg shadow-lg">
                    {/* Question */}
                    <button
                      className="w-full text-left font-semibold flex justify-between items-center text-2xl mb-5"
                      onClick={() =>
                        setActiveQuestion(
                          activeQuestion === faq.question ? null : faq.question
                        )
                      }
                    >
                      <span>{faq.question}</span>
                      <span>{activeQuestion === faq.question ? '-' : '+'}</span>
                    </button>

                    {/* Answer */}
                    {activeQuestion === faq.question && (
                      <ul className="text-xl list-disc">
                      {faq.answers.map((answer, idx) => (
                        <p key={idx}>{answer}</p>
                      ))}
                    </ul>

                    
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQTabs;

