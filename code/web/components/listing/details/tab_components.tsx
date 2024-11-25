// 'use client'
// import React, { useState, ReactNode } from 'react';
// import { FileText, Map, Users, Video } from 'lucide-react';
// import PropertyDetails from '../reveal/PropertyDetails/PropertyDetails';
// import { mockPropertyData } from '../reveal/mockPropertyData';
// import MapDetails from '../reveal/MapDetails/MapDetails';
// import AreaDetails from '../reveal/AreaDetails/AreaDetails';
// import VirtualTourDetails from '../reveal/VirtualTourDetails/VirtualTourDetails';

// interface TabsListProps {
//   children: ReactNode;
//   className?: string;
// }

// interface TabsTriggerProps {
//   children: ReactNode;
//   isSelected: boolean;
//   onClick: () => void;
//   className?: string;
// }

// interface Tab {
//   id: string;
//   label: string;
//   icon: ReactNode;
// }

// // Custom Tab Components
// const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => (
//   <div className={`flex border-[#D0D5DD] rounded-t-xl ${className}`}>
//     {children}
//   </div>
// );

// const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
//   children, 
//   isSelected, 
//   onClick, 
//   className = '' 
// }) => (
//   <div className='w-full border-b border-[#D0D5DD]'>
//     <button
//       className={`
//         flex items-center gap-2 px-6 py-4 text-lg font-semibold w-full transition-all
//         ${isSelected 
//           ? 'border-b-2 border-gray-900 text-gray-900' 
//           : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//         }
//         ${className}
//       `}
//       onClick={onClick}
//       role="tab"
//       aria-selected={isSelected}
//     >
//       {children}
//     </button>
//   </div>
// );

// const TabComponents: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<string>('details');

//   const tabs: Tab[] = [
//     {
//       id: 'details',
//       label: 'Property Details',
//       icon: <FileText className="w-5 h-5" />
//     },
//     {
//       id: 'map',
//       label: 'Map',
//       icon: <Map className="w-5 h-5" />
//     },
//     {
//       id: 'guide',
//       label: 'Area Guide',
//       icon: <Users className="w-5 h-5" />
//     },
//     {
//       id: 'tour',
//       label: 'Virtual Tour',
//       icon: <Video className="w-5 h-5" />
//     }
//   ];

//   return (
//     <div className="w-full border border-[#D0D5DD] rounded-xl mb-32">
//       <TabsList>
//         {tabs.map((tab) => (
//           <TabsTrigger
//             key={tab.id}
//             isSelected={activeTab === tab.id}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.icon}
//             <span className="hidden sm:inline">{tab.label}</span>
//           </TabsTrigger>
//         ))}
//       </TabsList>

//       <div className="px-6">
//         {activeTab === 'details' && (
//           <PropertyDetails property={mockPropertyData} />
//         )}
//         {activeTab === 'map' && (
//           <MapDetails property={mockPropertyData}/>
//         )}
//         {activeTab === 'guide' && (
//           <AreaDetails property={mockPropertyData}/>
//         )}
//         {activeTab === 'tour' && (
//           <VirtualTourDetails property={mockPropertyData}/>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TabComponents;

'use client'
import React, { useState, ReactNode } from 'react';
import { FileText, Map, Users, Video } from 'lucide-react';
import PropertyDetails from '../reveal/PropertyDetails/PropertyDetails';
import { mockPropertyData } from '../reveal/mockPropertyData';
import MapDetails from '../reveal/MapDetails/MapDetails';
import AreaDetails from '../reveal/AreaDetails/AreaDetails';
import VirtualTourDetails from '../reveal/VirtualTourDetails/VirtualTourDetails';

interface TabsListProps {
  children: ReactNode;
  className?: string;
}

interface TabsTriggerProps {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

// Custom Tab Components
const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => (
  <div className={`flex border-[#D0D5DD] rounded-t-xl ${className}`}>
    {children}
  </div>
);

const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  children, 
  isSelected, 
  onClick, 
  className = '' 
}) => (
  <div className='w-full border-b border-[#D0D5DD]'>
    <button
      className={`
        flex items-center gap-2 px-6 py-4 text-lg font-semibold w-full transition-all
        ${isSelected 
          ? 'border-b-2 border-gray-900 text-gray-900' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }
        ${className}
      `}
      onClick={onClick}
      role="tab"
      aria-selected={isSelected}
    >
      {children}
    </button>
  </div>
);

const RevealPopup: React.FC<{ onReveal: () => void }> = ({ onReveal }) => (
  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg w-4/5 max-w-lg text-center text-black">
      <h3 className="text-xl font-semibold mb-4">WANT TO REVEAL MORE DETAILS?</h3>
      <p className="text-lg mb-6">Unlock full details for just 50 Tokens</p>
      <p className="mb-6">
        <strong className='mb-4'>What you’ll get:</strong>
        <ul className="list-disc list-inside text-center">
          <li>Full property details</li>
          <li>Property address</li>
        </ul>
      </p>
      <button
        className="w-full bg-[#F3F7FA] text-[#414042] py-3 px-4 rounded-lg font-semibold hover:bg-gray-500 hover:text-white"
        onClick={onReveal}
      >
        Pay 50 Tokens to Unlock
      </button>
      <p className="mt-4 text-sm text-gray-500">
        Don’t have enough tokens? <a href="#" className="text-blue-600">Become a Scout</a>
      </p>
    </div>
  </div>
);

const TabComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('details');
  const [isRevealed, setIsRevealed] = useState(false);

  const tabs: Tab[] = [
    {
      id: 'details',
      label: 'Property Details',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'map',
      label: 'Map',
      icon: <Map className="w-5 h-5" />
    },
    {
      id: 'guide',
      label: 'Area Guide',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'tour',
      label: 'Virtual Tour',
      icon: <Video className="w-5 h-5" />
    }
  ];

  const handleReveal = () => setIsRevealed(true);

  return (
    <div className="w-full border border-[#D0D5DD] rounded-xl mb-32">
      

      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            isSelected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            <span className="hidden sm:inline">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="px-6 relative">
        
        {!isRevealed && <RevealPopup onReveal={handleReveal} />}

        <div
          className={`transition-all duration-300 ${!isRevealed ? 'blur-sm pointer-events-none' : ''}`}
        >
          {/* Tab content */}
          {activeTab === 'details' && <PropertyDetails property={mockPropertyData} />}
          {activeTab === 'map' && <MapDetails property={mockPropertyData} />}
          {activeTab === 'guide' && <AreaDetails property={mockPropertyData} />}
          {activeTab === 'tour' && <VirtualTourDetails property={mockPropertyData} />}
        </div>
      </div>
    </div>
  );
};

export default TabComponents;
