// pages/property/[id].tsx
import { PropertyHeader } from '@/components/listing/reveal/PropertyDetails/components/PropertyHeader';
import Image from 'next/image';



import { PropertyData } from '../types';

export default function AreaDetails({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <div className="container max-w-full mx-auto bg-[#F6F6F6]">
      <PropertyHeader title={property.title} price={property.price} />
      <div className='h-[768px] w-full relative mb-4 bg-white'>
        <Image
          src="/comingSoon1.jpg" 
          alt="Maps Image"
          layout="fill"
          objectFit="cover" 
          className="absolute" 
        />
      </div>
    </div>
  );
}
