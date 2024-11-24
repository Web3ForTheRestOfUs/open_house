// pages/property/[id].tsx
// import { PropertyHeader } from '@/components/PropertyDetails/PropertyHeader';
// import { Section } from '@/components/PropertyDetails/Section';
// import { InfoItem } from '@/components/PropertyDetails/InfoItem';
// import { StatusBadge } from '@/components/PropertyDetails/StatusBadge';
// import { AmenitiesList } from '@/components/PropertyDetails/AmenitiesList';
// import { PropertyImages } from '@/components/PropertyDetails/PropertyImages';
// import type { PropertyData } from '@/types';

import {
  AmenitiesList,
  InfoItem,
  PropertyHeader,
  PropertyImages,
  Section,
  StatusBadge,
} from './status_badge';
import { PropertyData } from './types';

export default function PropertyDetails({
  property,
}: {
  property: PropertyData;
}) {
  return (
    <div className="container max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
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

      <Section title="Property Images">
        <div className="col-span-full">
          <PropertyImages
            images={[
              { src: '/api/placeholder/400/300', alt: 'Living Room' },
              { src: '/api/placeholder/400/300', alt: 'Kitchen' },
              { src: '/api/placeholder/400/300', alt: 'Bedroom' },
              { src: '/api/placeholder/400/300', alt: 'Bathroom' },
            ]}
          />
        </div>
      </Section>

      <Section title="Current Tenant's Comments">
        <div className="col-span-full whitespace-pre-line">
          {property.tenantComments}
        </div>
      </Section>
    </div>
  );
}
