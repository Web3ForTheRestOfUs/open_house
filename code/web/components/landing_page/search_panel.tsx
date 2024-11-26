'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFilters {
  location: string;
  rentType: string;
  propertyType: string;
  bedrooms: string;
  priceRange: string;
}

const SearchPanel = () => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    rentType: '',
    propertyType: '',
    bedrooms: '',
    priceRange: '',
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search filters:', filters);
  };

  return (
    <div className="w-full mx-auto mb-28">
      <form className="w-full" onSubmit={handleSearch}>


        <div className="flex flex-wrap items-center gap-x-7">
          {/* Location Input */}
          <div className="flex-1 min-w-[240px]">
            <input
              type="text"
              placeholder="Enter a state, locality or area"
              value={filters.location}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, location: e.target.value }))
              }
              className="w-full px-6 py-3 rounded border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
            />
          </div>

          {/* Rent Type Select */}
          <select
            value={filters.rentType}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, rentType: e.target.value }))
            }
            className="px-4 py-3 rounded border border-gray-200 text-gray-500 text-sm cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent w-44"
          >
            <option value="">Rent</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>

          {/* Property Type Select */}
          <select
            value={filters.propertyType}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, propertyType: e.target.value }))
            }
            className="px-4 py-3 rounded border border-gray-200 text-gray-500 text-sm cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent w-44"
          >
            <option value="">Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>

          {/* Bedrooms Select */}
          <select
            value={filters.bedrooms}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, bedrooms: e.target.value }))
            }
            className="px-4 py-3 rounded border border-gray-200 text-gray-500 text-sm cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent w-44"
          >
            <option value="">Bedroom</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4+">4+ Bedrooms</option>
          </select>

          {/* Price Range Select */}
          <select
            value={filters.priceRange}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, priceRange: e.target.value }))
            }
            className="px-4 py-3 rounded border border-gray-200 text-gray-500 text-sm cursor-pointer hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent w-44"
          >
            <option value="">Price</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000+">$3,000+</option>
          </select>

          {/* Search Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-[#317BA0] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2 w-40"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPanel;
