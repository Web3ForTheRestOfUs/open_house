// app/listing/[id]/page.tsx
import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import PropertyDetails from '@/components/listing/reveal/lol';
import { PropertyData } from '@/components/listing/reveal/types';

// Move this to a separate file (e.g., @/data/mockPropertyData.ts)
export const mockPropertyData: PropertyData = {
  title: 'Beautiful 3-Bedroom Apartment in Lekki Phase 1',
  price: '₦2,500,000/year',
  overview: {
    houseType: '3-Bedroom Apartment',
    buildingType: 'Three Storey Building',
    floorLevel: '2nd Floor',
    houseAge: '1-3 Years',
    homeSize: 'Spacious',
    kitchenSize: 'Large Kitchen',
    bathroomSize: 'Big Bathroom',
    balcony: 'Normal Balcony',
    compound: 'Large Compound',
  },
  utilities: {
    lightSituation: { status: 'good', value: '24/7' },
    meterSituation: 'Personal Meter',
    waterSituation: { status: 'good', value: 'Steady Running Water' },
    internetFiber: 'Fiber Optic Access Available',
    internetTelcos: { status: 'good', value: 'Major Telcos Good' },
    generator: 'Estate Generator (24/7 backup)',
  },
  location: {
    location: 'Lekki Phase 1',
    nearestBusStop: 'Lekki Phase 1 Gate',
    mainRoadAccess: 'Main Road Nearby',
    accessibility: 'Accessible by Car',
    parking: 'Gated Car Parking',
  },
  environment: {
    security: 'Estate Security + Gate Security',
    floodingRisk: { status: 'good', value: 'No Flooding' },
    noiseLevel: { status: 'good', value: 'Little to No Noise' },
    neighborDemographics: 'Mostly Working Class',
    landlordWahala: { status: 'good', value: 'None' },
  },
  maintenance: {
    needRepair: { status: 'good', value: 'Needs No Repair' },
    propertyStatus: 'Not Shared',
    lastRenovation: '2023',
  },
  financialDetails: {
    yearlyRent: '₦2,500,000',
    serviceCharge: '₦250,000/year',
    paymentTerms: 'Annual',
    cautionDeposit: '₦500,000',
  },
  amenities: [
    'Pre-installed AC',
    'Built-in Wardrobes',
    'CCTV',
    'Estate Gate',
    'Street Lights',
    'Paved Roads',
    'Security',
    'Nearby Market',
    'Good Drainage',
  ],
  tenantComments: `This is a fantastic apartment in a prime location. The estate is very secure and well-maintained. Power supply is excellent with the estate generator as backup. Water is steady and the apartment is well-ventilated. The landlord is very professional and responds quickly to any issues. The neighborhood is quiet and peaceful, perfect for families or professionals. Shopping centers and restaurants are within walking distance.`,
};

export default function ListingDetailsPage() {
  // Since you're using Next.js App Router, we need to handle params differently
  // const params = useParams();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto p-4 sm:p-6 lg:p-10">
          <div className="text-[#8592AD] mb-4">
            <nav className="flex items-center space-x-2">
              <span>Listing</span>
              <span>&gt;</span>
              <span>Individual</span>
            </nav>
          </div>

          <PropertyDetails property={mockPropertyData} />
          
          {/* Uncomment these when you want to use them */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3">
              <BriefOverview />
              <TabComponents />
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-6">
                <AboutTheHouseCard />
                <AmenitiesCard />
                <LocationAndEnvironmentCard />
                <NeighborhoodCard />
                <ContactDetailsCard />
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}