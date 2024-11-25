// pages/property/[id].tsx
import { PropertyHeader } from '@/components/listing/reveal/PropertyDetails/components/PropertyHeader';
import Image from 'next/image';



import { PropertyData } from '../types';

export default function MapDetails({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <div className="container max-w-full mx-auto bg-[#F6F6F6]">
      <PropertyHeader title={property.title} price={property.price} />
      <div className='h-[768px] w-full relative mb-4'>
        <Image
            src="/Maps.svg" 
            alt="Maps Image"
            layout="fill"
            objectFit="cover" 
            className="absolute" 
        />
      </div>

    

    </div>
  );
}
