import Image from 'next/image';
import Link from 'next/link';

const EachHouseListing = () => {
  return (
    <Link 
    href="/listing/1"
    className="block mt-4 transition-transform hover:scale-[1.02] focus:scale-[1.02]"
  >
    <div className="w-full border border-[#D0D5DD] p-6 rounded-lg mb-10 flex">
      <div className='mr-4 w-72'>
        <Image
          src="/property-image.jpg" // Replace with the path to your image
          alt="Property Image"
          width={279} // Adjust the width of the image
          height={190} // Adjust the height of the image
        />
      </div>

      <div className='w-3/5'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='font-semibold text-[#090613] text-lg'>2 Bedroom Apartment</h1>

          <p className='text-[#317BA0] bg-[#F3F7FA] font-medium text-xs p-1'>Available Soon</p>
        </div>

        <div className='flex items-center mb-4'>
          <Image
            src="/location.jpg" // Replace with the path to your image
            alt="Location Icon"
            width={14} // Adjust the width of the image
            height={14} // Adjust the height of the image
          />
          <p className='text-[#090613] text-xs'>Victoria Bay 3, Nike Art Gallery Road, Ikate, Lagos</p>
        </div>

        <p className='text-xs text-[#090613] mb-5'>Luxury 2 bedroom flat available for rent in a well secured estate, good road network with spacious rooms and pop finishing.</p>

        <p className='text-[#1A2258] font-semibold text-xl mb-5'>#7,000,000 <span className='text-[#090613] text-xs font-medium'>per annum</span></p>

        <div className='flex'>
          {/* BED */}
          <div className='flex bg-[#F3F7FA] px-3 py-2 items-center'>
            <div className='border-r-2 border-[#D0D5DD] pr-1 mr-1'>
              <Image
                src="/Bed.jpg" 
                alt="Bed Icon"
                width={14} 
                height={14}
              />
            </div>
            
            <p className='text-[#414042] text-xs'>2 Beds</p>
          </div>

          {/* BATHS */}
          <div className='flex bg-[#F3F7FA] px-3 py-2 items-center'>
            <div className='border-r-2 border-[#D0D5DD] pr-1 mr-1'>
              <Image
                src="/Bathtub.jpg" 
                alt="Bathtub Icon"
                width={14} 
                height={14}
              />
            </div>
            
            <p className='text-[#414042] text-xs'>3 Baths</p>
          </div>

          <div className='flex bg-[#F3F7FA] px-3 py-2 items-center'>
            <div className='border-r-2 border-[#D0D5DD] pr-1 mr-1'>
              <Image
                src="/Space.jpg" 
                alt="Space Icon"
                width={14} 
                height={14}
              />
            </div>
            
            <p className='text-[#414042] text-xs'>2 Space</p>
          </div>

          <div className='flex bg-[#F3F7FA] px-3 py-2 items-center'>
            <div className='border-r-2 border-[#D0D5DD] pr-1 mr-1'>
              <Image
                src="/Size.jpg" 
                alt="Size Icon"
                width={14} 
                height={14}
              />
            </div>
            
            <p className='text-[#414042] text-xs'>1500 sqft</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default EachHouseListing;
