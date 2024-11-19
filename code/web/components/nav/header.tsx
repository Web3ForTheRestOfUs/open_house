import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex">
      <div className="flex p-2 py-6 w-full border-b border-[#8592ad]">
        <div className="flex w-1/3 justify-around items-center pl-4">
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">Home</p>
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">For Sale</p>
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">For Rent</p>
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">ShortLet</p>
        </div>
        
        <div className="flex w-1/3 justify-center items-center gap-2">
          <Image
            alt="OpenHouse Logo"
            src="/mini_logo.svg"
            className="w-10 h-10"
            width={40}
            height={40}
          />
          <div className="text-[#317ba0] text-4xl font-semibold font-['Montserrat']">
            OpenHouse
          </div>
        </div>

        <div className="flex w-1/3 justify-end items-center gap-8 pr-10">
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">Register</p>
          <p className="text-[#090613] text-xl font-medium font-['Montserrat']">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default Header;