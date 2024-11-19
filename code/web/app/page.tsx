import SearchPanel from '@/components/landing_page/search_panel';
import EachHouseListing from '@/components/landing_page/each_house_listing';
import CarouselImage from '@/components/landing_page/carousel_image';
import AddListingCTA from '@/components/landing_page/add_listing_cta';
import PageIndicatorPanel from '@/components/landing_page/page_indicator';
import Footer from '@/components/nav/footer';

export default function Page() {
  const numberOfListings = 6;

  return (
    <div>
      <div className="p-4">
        <CarouselImage />

        <SearchPanel />

        <div className="grid grid-cols-5 gap-3">
          {/* First 3 columns */}
          <div className="col-span-3 grid grid-rows-2 gap-4">
            {Array.from({ length: numberOfListings }, (_, index) => (
              <EachHouseListing key={`first-row-${index}`} />
            ))}
          </div>

          {/* Last 2 columns */}
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <AddListingCTA />
          </div>
        </div>
        <div className="my-10"></div>

        <PageIndicatorPanel currentPage={5} lastPage={10} />
        <div className="my-36"></div>
      </div>
      <Footer />
    </div>
  );
}
