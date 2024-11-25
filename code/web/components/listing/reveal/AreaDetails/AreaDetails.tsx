// pages/property/[id].tsx
import { PropertyHeader } from '@/components/listing/reveal/PropertyDetails/components/PropertyHeader';



import { PropertyData } from '../types';

export default function AreaDetails({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <div className="container max-w-full mx-auto bg-[#F6F6F6]">
      <PropertyHeader title={property.title} price={property.price} />
      <div className='h-[768px] w-full relative mb-4 bg-white'></div>
    </div>
  );
}
