const AboutTheHouseCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      {/* Title */}
      <h2 className="text-[#2f3d46] text-xl font-bold font-['Montserrat'] mb-4">
        About the House
      </h2>

      {/* List of features */}
      <ul className="space-y-2 text-[#2f3d46] text-base font-medium font-['Montserrat'] list-disc pl-4">
        <li>Brand new 2-bedroom flat/apartment</li>
        <li>1,500 sqm total living space</li>
        <li>2 bathrooms + extra toilet (3 total)</li>
        <li>Modern, fully equipped kitchen</li>
      </ul>

      {/* Service charge section */}
      <div className="mt-6 bg-[#f8f9fa] rounded-lg p-4">
        <div>
          <span className="text-black text-base font-bold font-['Montserrat']">
            Service Charge:
          </span>
          <span className="text-black text-base font-medium font-['Montserrat']">
            {' '}
            #1,500,000/year
          </span>
        </div>
        <div className="text-[#2f3d46] text-xs font-medium font-['Montserrat'] mt-1">
          Includes security, diesel, compound cleaners
        </div>
      </div>
    </div>
  );
};

export default AboutTheHouseCard;
