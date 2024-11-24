import { Status } from "./types";

// components/PropertyDetails/StatusBadge.tsx
interface StatusBadgeProps {
    status: Status;
    value: string;
  }
  
  export const StatusBadge = ({ status, value }: StatusBadgeProps) => (
    <span className={`status status-${status} inline-block px-3 py-1 rounded-full text-sm font-medium`}>
      {value}
    </span>
  );
  
  // components/PropertyDetails/InfoItem.tsx
  interface InfoItemProps {
    label: string;
    value: string | React.ReactNode;
  }
  
  export const InfoItem = ({ label, value }: InfoItemProps) => (
    <div className="item mb-4">
      <span className="label font-semibold text-gray-600 block mb-1">{label}</span>
      <div className="value bg-gray-50 p-2 rounded-md text-gray-800">
        {value}
      </div>
    </div>
  );
  
  // components/PropertyDetails/Section.tsx
  interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  export const Section = ({ title, children }: SectionProps) => (
    <div className="section mb-10 p-5 bg-white border border-gray-200 rounded-lg">
      <h2 className="section-title text-blue-600 text-2xl mb-5 pb-2 border-b-2 border-blue-600">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {children}
      </div>
    </div>
  );
  
  // components/PropertyDetails/PropertyHeader.tsx
  interface PropertyHeaderProps {
    title: string;
    price: string;
  }
  
  export const PropertyHeader = ({ title, price }: PropertyHeaderProps) => (
    <div className="property-header text-center mb-10 pb-5 border-b-2 border-gray-200">
      <h1 className="property-title text-4xl text-gray-800 mb-2">{title}</h1>
      <div className="property-price text-2xl text-blue-600 font-semibold">{price}</div>
    </div>
  );
  
  // components/PropertyDetails/AmenitiesList.tsx
  interface AmenitiesListProps {
    amenities: string[];
  }
  
  export const AmenitiesList = ({ amenities }: AmenitiesListProps) => (
    <div className="amenities-list flex flex-wrap gap-2 mt-2">
      {amenities.map((amenity, index) => (
        <span key={index} className="amenity-tag bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          {amenity}
        </span>
      ))}
    </div>
  );
  
  // components/PropertyDetails/PropertyImages.tsx
  interface PropertyImagesProps {
    images: { src: string; alt: string }[];
  }
  
  export const PropertyImages = ({ images }: PropertyImagesProps) => (
    <div className="photos grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
      {images.map((image, index) => (
        <div key={index} className="photo w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );