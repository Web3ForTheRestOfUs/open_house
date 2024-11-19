const AboutTheHouseCard = () => {
  return (
    <div className="flex">
      <div className="   bg-white rounded-2xl">
        <div className="  absolute text-[#2f3d46] text-xl font-bold font-['Montserrat']">
          About the House
        </div>
        <div className="  absolute">
          <div className="left-0 top-0 absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Brand new 2-bedroom flat/apartment
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            1,500 sqm total living space
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            2 bathrooms + extra toilet (3 total)
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Modern, fully equipped kitchen
          </div>
        </div>
        <div className="      absolute bg-[#f8f9fa] rounded-lg flex-col justify-center items-start  inline-flex">
          <div>
            <span className="text-black text-base font-bold font-['Montserrat']">
              Service Charge:
            </span>
            <span className="text-black text-base font-medium font-['Montserrat']">
              {' '}
              #1,500,000/year
            </span>
          </div>
          <div className="text-[#2f3d46] text-xs font-medium font-['Montserrat']">
            Includes security, diesel, compound cleaners
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheHouseCard;
