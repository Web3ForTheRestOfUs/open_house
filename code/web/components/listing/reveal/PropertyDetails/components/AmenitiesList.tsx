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