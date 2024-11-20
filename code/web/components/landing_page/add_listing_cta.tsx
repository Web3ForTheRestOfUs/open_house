import React from 'react';

const AddListingCTA: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
        <span className="text-gray-900 text-base">
          Have a verified property?
        </span>
        <button
          className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          onClick={() => {/* Add your click handler here */}}
          aria-label="Post your property listing"
        >
          Post Property
        </button>
      </div>
    </div>
  );
};

export default AddListingCTA;