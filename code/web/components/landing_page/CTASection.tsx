import Image from 'next/image';

const LandingPageCTA = () => {
  return (
    <section className="bg-white py-20 px-16">
      <div className="container mx-auto flex items-center justify-center">
        <div className="max-w-[432px]">
          <h2 className="text-[32px] font-semibold text-[#317ba0] font-['Montserrat'] mb-8">
            Join The Revolution
          </h2>
          <p className="text-xl text-black font-['Montserrat'] mb-12">
            Ready to transform the way you rent, save, and earn? Sign up today
            and become part of the OpenHouse movement
          </p>
          <button className="px-4 py-1.5 bg-[#317ba0] rounded-lg text-white font-medium">
            Create Account
          </button>
        </div>
        <div className="bg-white h-96 relative w-1/3">
          <Image
            src="/joinRevolution.svg" 
            alt="Join Image"
            layout="fill"
            objectFit="cover" 
            className="absolute" 
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageCTA;
