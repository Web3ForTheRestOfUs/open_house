'use client'
import React, { useState, ReactNode } from 'react';
import { FileText, Map, Users, Video } from 'lucide-react';

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
  <div className={`flex border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  children, 
  isSelected, 
  onClick, 
  className = '' 
}) => (
  <button
    className={`
      flex items-center gap-2 px-6 py-4 text-lg font-semibold transition-all
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
);

const TabComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('details');

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

  return (
    <div className="w-full max-w-4xl mx-auto">
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

      <div className="p-6">
        {activeTab === 'details' && (
          <div>Property Details Content</div>
        )}
        {activeTab === 'map' && (
          <div>Map Content</div>
        )}
        {activeTab === 'guide' && (
          <div>Area Guide Content</div>
        )}
        {activeTab === 'tour' && (
          <div>Virtual Tour Content</div>
        )}
      </div>
    </div>
  );
};

export default TabComponents;