'use client';
import EachHouseListing from '@/components/listing/all/each_house_listing';
import CarouselImage from '@/components/listing/all/carousel_image';
import AddListingCTA from '@/components/listing/all/add_listing_cta';
import PageIndicatorPanel from '@/components/listing/all/page_indicator';
import Footer from '@/components/nav/footer';
import SearchPanel from '@/components/listing/all/search_panel';

export default function Page() {
  const numberOfListings = 6;

  return (
    <div>
      <CarouselImage />

      <div className="pt-12 px-16 bg-[#F6F6F6] border-t-2 border-[#D0D5DD]">
        <SearchPanel />

        <div className="flex w-full justify-between">
          {/* First 3 columns */}
          <div className="w-3/5 mr-10">
            {Array.from({ length: numberOfListings }, (_, index) => (
              <EachHouseListing key={`first-row-${index}`} />
            ))}
          </div>

          {/* Last 2 columns */}
          <div className="w-2/5">
            <AddListingCTA />
          </div>
        </div>

        <PageIndicatorPanel currentPage={5} lastPage={10} />
        <div className="py-36"></div>
      </div>
    </div>
  );
}