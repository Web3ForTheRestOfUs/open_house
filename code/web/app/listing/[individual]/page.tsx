// app/listing/[id]/page.tsx
import React from 'react';
import TopDetails from '@/components/listing/details/details_top';
import PropertyDetails from '@/components/listing/reveal/PropertyDetails/PropertyDetails';
import { mockPropertyData } from '@/components/listing/reveal/PropertyDetails/mockPropertyData';


export default function ListingDetailsPage() {
  // Since you're using Next.js App Router, we need to handle params differently
  // const params = useParams();

  return (
    <div className='bg-[#F6F6F6] pt-5 pb-8 px-16'>
      <TopDetails />

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
  );
}