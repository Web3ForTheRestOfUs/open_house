const BriefOverview = () => {
  return (
    <div className="flex">
      <div className="   border border-[#d0d5dd]">
        <div className="   absolute flex-col justify-start items-center gap-1 inline-flex">
          <div className="w-6 h-6 "></div>
          <div className="self-stretch text-[#475367] text-xs font-normal font-['Montserrat']">
            2 Bedrooms
          </div>
        </div>
        <div className="   absolute flex-col justify-start items-center gap-1 inline-flex">
          <div className="w-6 h-6 "></div>
          <div className="text-[#475367] text-xs font-normal font-['Montserrat']">
            3 Toilets
          </div>
        </div>
        <div className="   absolute flex-col justify-start items-center gap-1 inline-flex">
          <div className="w-6 h-6 "></div>
          <div className="text-[#475367] text-xs font-normal font-['Montserrat']">
            2 Parking Spaces
          </div>
        </div>
        <div className="   absolute flex-col justify-start items-center gap-2 inline-flex">
          <div className="w-5 h-5 border border-[#475367]"></div>
          <div className="text-[#475367] text-xs font-normal font-['Montserrat']">
            1,500 sqm Total Area
          </div>
        </div>
        <div className="   absolute flex-col justify-start items-center gap-1 inline-flex">
          <div className="w-6 h-6 "></div>
          <div className="text-[#475367] text-xs font-normal font-['Montserrat']">
            2 Bathrooms
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefOverview;
