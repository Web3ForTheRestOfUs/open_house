import React from 'react';
import { Home, Bath, Toilet, Car, Square } from 'lucide-react';

const BriefOverview = () => {
  const features = [
    {
      icon: <Home className="w-6 h-6 text-gray-600" />,
      label: '2 Bedrooms'
    },
    {
      icon: <Bath className="w-6 h-6 text-gray-600" />,
      label: '2 Bathrooms'
    },
    {
      icon: <Toilet className="w-6 h-6 text-gray-600" />,
      label: '3 Toilets'
    },
    {
      icon: <Car className="w-6 h-6 text-gray-600" />,
      label: '2 Parking Spaces'
    },
    {
      icon: <Square className="w-6 h-6 text-gray-600" />,
      label: '1,500 sqm Total Area'
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto p-4" aria-label="Property Features Overview">
      <ul className="flex flex-wrap items-center justify-center gap-8 border border-gray-200 rounded-lg p-6">
        {features.map((feature, index) => (
          <li 
            key={index}
            className="flex flex-col items-center gap-2 min-w-[120px]"
          >
            <div className="flex items-center justify-center">
              {feature.icon}
            </div>
            <span className="text-sm text-gray-600 text-center font-normal">
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BriefOverview;