const Header = () => {
  return (
    <div>
      <div className="  px-[50px] py-10 border-b border-[#8592ad] flex-row justify-start items-start gap-2.5 inline-flex">
        <div className="text-[#317ba0] text-4xl font-semibold font-['Montserrat']">
          OpenHouse
        </div>
        <div className="flex w-10 h-10 relative"></div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          Home
        </div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          For Sale
        </div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          For Rent
        </div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          ShortLet
        </div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          Register
        </div>
        <div className="text-[#090613] text-xl font-medium font-['Montserrat']">
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Header;
