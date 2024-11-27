import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AmenitiesBox from './components/AmenitiesBox';
import HouseOwnerCard from './about_house_owner';

const TopDetails = () => (
    <div>
        <div className='flex justify-between items-center mb-6'>
            <h1 className="text-[#8592AD]"> Listing {'>'} Individual</h1>

            <div className='flex items-center'>
                <Link href={'/user/favourites'}>
                    <div className='flex items-center'>
                    <Image
                        src="/heart.jpg" 
                        alt="Favorites Icon"
                        width={24} 
                        height={24} 
                        className='mr-2'
                    />

                    <p className='text-xs text-[#090613]'>Save to Favourites</p>
                    </div>
                </Link>

                <Link href={'#'}>
                    <div className='flex items-center mx-10'>
                    <Image
                        src="/share.jpg" 
                        alt="Share Icon"
                        width={24} 
                        height={24} 
                        className='mr-2'
                    />

                    <p className='text-xs text-[#090613]'>Share</p>
                    </div>
                </Link>

                <Link href="/user/save_for_rent">
                    <button
                    className="ml-4 px-6 py-2 bg-[#317BA0] hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    aria-label="Post your property listing"
                    >
                    Save for Rent
                    </button>
                </Link>
            </div>
        </div>

        <div className='flex'>
            <div className='w-2/3 mb-14 mr-12'>
                <div className='flex justify-between mb-6'>
                    <div>
                        <h1 className='font-semibold text-[#090613] text-2xl'>Newly Built 2 Bedroom Apartment</h1>

                        <div className='flex items-center'>
                            <Image
                                src="/location.jpg" 
                                alt="Location Icon"
                                width={14} 
                                height={14} 
                            />
                            <p className='text-sm text-[#1A2258]'>Ikate, Lekki, Lagos</p>

                        </div>
                    </div>

                    <div>
                        <h1 className='text-3xl text-[#1A2258] font-semibold'>#7,000,000</h1>
                    </div>
                </div>

                <div className='w-full h-[441px] bg-white mb-4 relative'>
                    <Image
                        src="/realEstate1.jpg" 
                        alt="Landing Image"
                        layout="fill"
                        objectFit="cover" 
                        className="absolute" 
                    />
                </div>

                <div className='flex mb-8'>
                    <div className='bg-white w-full h-40 relative'>
                        <Image
                            src="/livingRoom.jpg" 
                            alt="Living Room"
                            layout="fill"
                            objectFit="cover" 
                            className="absolute" 
                        />
                    </div>
                    <div className='bg-white w-full h-40 relative mx-4'>
                        <Image
                            src="/real-estate.jpg" 
                            alt="Landing Image"
                            layout="fill"
                            objectFit="cover" 
                            className="absolute" 
                        />
                    </div>
                    <div className='bg-white w-full h-40 relative'>
                        <Image
                            src="/diningRoom.jpg" 
                            alt="Landing Image"
                            layout="fill"
                            objectFit="cover" 
                            className="absolute" 
                        />
                    </div>
                </div>

                <AmenitiesBox />

            </div>

            <div className='w-1/3'>
                <p className='text-[#414042] font-medium text-xl bg-[#EAF6FF] p-2.5 w-max mb-6'>Available Now</p>
                <HouseOwnerCard />
            </div>
        </div>

    </div>
  );
  
export default TopDetails;