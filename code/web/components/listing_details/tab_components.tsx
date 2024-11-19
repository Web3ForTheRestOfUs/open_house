const TabComponents = () => {
  return (
    <div className="flex">
      <div className="   border border-[#d0d5dd]">
        <div className="  absolute text-[#2f3d46] text-xl font-semibold font-['Montserrat']">
          Property Details
        </div>
        <div className="  absolute text-[#2f3d46] text-xl font-semibold font-['Montserrat']">
          Virtual Tour
        </div>
        <div className="h-6   absolute">
          <div className=" top-0 absolute text-[#2f3d46] text-xl font-semibold font-['Montserrat']">
            Map
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
        </div>
        <div className="h-6   absolute">
          <div className=" top-0 absolute text-[#2f3d46] text-xl font-semibold font-['Montserrat']">
            Area Guide
          </div>
          <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
        </div>
        <div className="w-6 h-6 left-[14.54px]  absolute"></div>
      </div>
    </div>
  );
};

export default TabComponents;
