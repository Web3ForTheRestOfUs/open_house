import React from 'react';
import { useParams } from 'next/navigation';
import TabComponents from '@/components/listing_details/tab_components';
import BriefOverview from '@/components/listing_details/short_overview';
import AboutTheHouseCard from '@/components/listing_details/about_the_house';
import AmenitiesCard from '@/components/listing_details/amenities';
import LocationAndEnvironmentCard from '@/components/listing_details/location_and_environment';
import NeighborhoodCard from '@/components/listing_details/neighbourhood';
import ContactDetailsCard from '@/components/listing_details/contact_details';
import Footer from '@/components/nav/footer';
import Header from '@/components/nav/header';

const page = () => {
  // const params = useParams();

  return (
    <div>
      <Header/>
      <div className="p-10 ">
        <h1 className="text-[#8592AD]  "> Listing {'>'} Individual</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3">hi</div>
          <div className="col-span-2">lol</div>
        </div>
        <div>
          <BriefOverview />
        </div>
        <div className="flex border-1">
          <div className="mb-10">
            <TabComponents />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <AboutTheHouseCard />
            </div>
            <div>
              <AmenitiesCard />
            </div>
            <div>
              <LocationAndEnvironmentCard />
            </div>
            <div>
              <NeighborhoodCard />
            </div>
            <div>
              <ContactDetailsCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
