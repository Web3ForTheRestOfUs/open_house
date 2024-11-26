import Image from 'next/image';

const WelcomeSection = () => {
  return (
    <section className="flex w-full px-16 py-20 mx-auto items-center">
      <div className="w-1/2 mr-24">
        <h2 className="text-[32px] font-semibold text-[#317ba0] font-['Montserrat'] mb-8">
          Welcome To OpenHouse
        </h2>
        <p className="text-[#414042] text-2xl font-medium font-['Montserrat'] leading-loose text-justify">
          OpenHouse is a decentralized rental platform revolutionizing the
          property market. We empower tenants, Scouts, and landlords through
          transparency, blockchain verification and tokenized incentives.
          Whether you're looking to find your next home, document properties, or
          connect with honest reviews, OpenHouse creates a trusted
          community-driven ecosystem. Join us to simplify renting, eliminate
          hidden fees, and unlock new earning opportunities.
        </p>
      </div>

      <div className="bg-white h-96 relative w-1/3 rounded-lg shadow-2xl mt-20">
        <Image
          src="/welcomeImage1.jpg"
          alt="Welcome Image"
          layout="fill"
          objectFit="cover" 
          className="absolute rounded-lg shadow-lg" 
        />
      </div>
    </section>
  );
};
export default WelcomeSection;
