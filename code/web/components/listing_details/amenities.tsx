const AmenitiesCard = () => {
  const amenities = [
    'Air Conditioning',
    'Swimming Pool',
    'Pet Friendly',
    'In-Unit Laundry',
    '2 Packing Spaces',
    'Full Kitchen',
  ];

  return (
    <section className="p-6 bg-white rounded-2xl">
      <h2 className="text-[#2f3d46] text-xl font-bold font-['Montserrat'] mb-6">
        Amenities
      </h2>
      <ul className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <li key={index} className="px-4 py-2 bg-[#f8f9fa] rounded-lg">
            <span className="text-[#2f3d46] text-sm font-medium font-['Montserrat']">
              {amenity}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AmenitiesCard;
