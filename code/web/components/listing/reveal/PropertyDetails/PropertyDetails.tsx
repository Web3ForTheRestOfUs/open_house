// pages/property/[id].tsx
import { PropertyHeader } from '@/components/listing/reveal/PropertyDetails/components/PropertyHeader';
import { Section } from '@/components/listing/reveal/PropertyDetails/components/Section';
import { InfoItem } from '@/components/listing/reveal/PropertyDetails/components/InfoItem';
import { StatusBadge } from '@/components/listing/reveal/PropertyDetails/components/StatusBadge';
import { AmenitiesList } from '@/components/listing/reveal/PropertyDetails/components/AmenitiesList';
// import type { PropertyData } from '@/types';


import { PropertyData } from '../types';

export default function PropertyDetails({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <div className="container max-w-full mx-auto bg-[#F6F6F6]">
      <PropertyHeader title={property.title} price={property.price} />

      <Section title="Property Overview">
        {Object.entries(property.overview).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={value}
          />
        ))}
      </Section>

      <Section title="Utilities & Infrastructure">
        {Object.entries(property.utilities).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={
              typeof value === 'object' ? (
                <StatusBadge status={value.status} value={value.value} />
              ) : (
                value
              )
            }
          />
        ))}
      </Section>

      <Section title="Location & Accessibility">
        {Object.entries(property.location).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={value}
          />
        ))}
      </Section>

      <Section title="Environment & Security">
        {Object.entries(property.environment).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={
              typeof value === 'object' ? (
                <StatusBadge status={value.status} value={value.value} />
              ) : (
                value
              )
            }
          />
        ))}
      </Section>

      <Section title="Maintenance & Condition">
        {Object.entries(property.maintenance).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={
              typeof value === 'object' ? (
                <StatusBadge status={value.status} value={value.value} />
              ) : (
                value
              )
            }
          />
        ))}
      </Section>

      <Section title="Financial Details">
        {Object.entries(property.financialDetails).map(([key, value]) => (
          <InfoItem
            key={key}
            label={key.replace(/([A-Z])/g, ' $1').trim()}
            value={value}
          />
        ))}
      </Section>

      <Section title="Additional Features & Amenities">
        <div className="col-span-full">
          <AmenitiesList amenities={property.amenities} />
        </div>
      </Section>

      <Section title="Current Tenant's Comments">
        <div className="col-span-full whitespace-pre-line text-[#414042]">
          {property.tenantComments}
        </div>
      </Section>
    </div>
  );
}
