import React from 'react';


import { useParams } from 'next/navigation';
import TabComponents from '@/components/listing/details/tab_components';
import BriefOverview from '@/components/listing/details/short_overview';
import AboutTheHouseCard from '@/components/listing/details/about_the_house';
import AmenitiesCard from '@/components/listing/details/amenities';
import LocationAndEnvironmentCard from '@/components/listing/details/location_and_environment';
import NeighborhoodCard from '@/components/listing/details/neighbourhood';
import ContactDetailsCard from '@/components/listing/details/contact_details';
import Footer from '@/components/nav/footer';
import Header from '@/components/nav/header';
import TopDetails from '@/components/listing/details/details_top';

const page = () => {
  // const params = useParams();

  return (
    <div className='bg-[#F6F6F6] pt-5 pb-8 px-16'>
      <TopDetails />

      {/* <div className="">
        

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
      </div> */}
    </div>
  );
};

export default page;
