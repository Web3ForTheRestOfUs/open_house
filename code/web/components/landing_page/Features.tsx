import React from 'react';

interface FeatureProps {
  icon?: React.ReactNode; // Make icon optional and accept any valid React node
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <article className="w-full max-w-md h-80 p-6 bg-white border border-gray-300 flex flex-col items-center flex-wrap">
      <div className="w-12 h-12 bg-sky-100 rounded-full mb-8">{icon}</div>
      <h3 className="text-2xl font-semibold text-black font-['Montserrat'] mb-8">
        {title}
      </h3>
      <p className="text-center text-xl text-black font-['Montserrat']">
        {description}
      </p>
    </article>
  );
};

// FeaturesSection.jsx
const FeaturesSection = () => {
  const features = [
    {
      title: 'Decentralized Platform',
      description:
        'Built on blockchain technology, ensuring transparency, security, and trust in all transactions.',
    },
    {
      title: 'Auto-Save for Rent',
      description:
        'Save properties you love and start auto-saving towards rent with flexible options to add funds.',
    },
    {
      title: 'Tokenized Incentives',
      description:
        'Earn tokens by contributing property details, writing reviews, or providing valuable insights.',
    },
    {
      title: 'Community-Driven Reviews',
      description:
        'Access verified, anonymous reviews from tenants and Scouts to make informed decisions.',
    },
    {
      title: 'Property Listing',
      description:
        'Explore curated property listing with detailed information, high-quality photos and virtual tours',
    },
    {
      title: 'Map-Based Exploration',
      description: 'Discover properties with ease using interactive map views',
    },
  ];

  return (
    <section className="container mx-auto px-16 py-20">
      <h2 className="text-[32px] font-semibold text-[#317ba0] font-['Montserrat'] text-center mb-16">
        OpenHouse Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
