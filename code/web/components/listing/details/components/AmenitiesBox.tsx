import React from 'react';
import Image from 'next/image';

const AmenitiesBox = () => (
    <div className='border border-[#D0D5DD] w-full flex'>
                    <div className='py-6 flex flex-col items-center w-full'>
                        <Image
                            src="/BedL.jpg" 
                            alt="Bed Icon"
                            width={24} 
                            height={24} 
                        />

                        <p className='text-[#475367] text-xs'>2 Bedrooms</p>
                    </div>

                    <div className='py-6 flex flex-col items-center border-x border-[#D0D5DD] w-full'>
                        <Image
                            src="/BathtubL.jpg"
                            alt="Bathtub Icon"
                            width={24} 
                            height={24} 
                        />

                        <p className='text-[#475367] text-xs'>2 Bathrooms</p>
                    </div>

                    <div className='py-6 flex flex-col items-center w-full'>
                        <Image
                            src="/Toilet.jpg" 
                            alt="Toilet Icon"
                            width={24} 
                            height={24} 
                        />

                        <p className='text-[#475367] text-xs'>3 Toilets</p>
                    </div>

                    <div className='py-6 flex flex-col items-center border-x border-[#D0D5DD] w-full'>
                        <Image
                            src="/Jeep.jpg"
                            alt="Car Icon"
                            width={24} 
                            height={24} 
                        />

                        <p className='text-[#475367] text-xs'>2 Parking Spaces</p>
                    </div>

                    <div className='py-6 flex flex-col items-center w-full'>
                        <div className='border-2 border-[#D0D5DD] w-6 h-6'></div>

                        <p className='text-[#475367] text-xs'>3 Toilets</p>
                    </div>
                    
                </div>
)

export default AmenitiesBox;