const SearchPanel = () => {
  return (
    <div className="flex justify-center">
      <div className=" justify-start items-center gap-7 inline-flex">
        <div className="pl-[23px] pr-[100px] py-3.5 rounded border border-[#d0d5dd] justify-start items-center flex">
          <div className="text-[#98a2b3] text-sm font-normal font-['Montserrat']">
            Enter a state, locality or area
          </div>
        </div>
        <div className=" pl-4 pr-[11px] py-3.5 rounded border border-[#d0d5dd] justify-end items-start gap-[93px] flex">
          <div className="text-[#98a2b3] text-sm font-normal font-['Montserrat']">
            Rent
          </div>
          <div className="w-4 self-stretch justify-center items-center inline-flex">
            <div className="w-4 h-4 relative"></div>
          </div>
        </div>
        <div className=" pl-4 pr-[11px] py-3.5 rounded border border-[#d0d5dd] justify-end items-start gap-[93px] flex">
          <div className="text-[#98a2b3] text-sm font-normal font-['Montserrat']">
            Type
          </div>
          <div className="w-4 self-stretch justify-center items-center inline-flex">
            <div className="w-4 h-4 relative"></div>
          </div>
        </div>
        <div className=" pl-4 pr-[11px] py-3.5 rounded border border-[#d0d5dd] justify-end items-start gap-[60px] flex">
          <div className="text-[#98a2b3] text-sm font-normal font-['Montserrat']">
            Bedroom
          </div>
          <div className="w-4 self-stretch justify-center items-center inline-flex">
            <div className="w-4 h-4 relative"></div>
          </div>
        </div>
        <div className=" pl-4 pr-[11px] py-3.5 rounded border border-[#d0d5dd] justify-end items-start gap-[91px] flex">
          <div className="text-[#98a2b3] text-sm font-normal font-['Montserrat']">
            Price
          </div>
          <div className="w-4 self-stretch justify-center items-center inline-flex">
            <div className="w-4 h-4 relative"></div>
          </div>
        </div>
        <div className=" px-4 py-1.5 bg-[#317ba0] rounded-lg justify-center items-center gap-2.5 flex">
          <div className="text-white text-base font-medium font-['Montserrat']">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
