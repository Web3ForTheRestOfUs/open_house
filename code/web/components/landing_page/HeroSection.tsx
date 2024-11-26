const HeroSection = () => {
  return (
    <section className="w-full h-[664px] relative">
      <img
        className="w-full h-full absolute object-cover"
        src="https://via.placeholder.com/1440x664"
        alt="Hero background"
      />
      <div className="w-full h-full absolute bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold text-white font-['Montserrat'] mb-8">
          Your Rental Revolution
        </h1>
        <p className="max-w-[747px] text-center text-white text-2xl font-medium font-['Montserrat'] mb-12">
          Find your perfect rental property, earn tokens as a scout, and
          experience community-driven trust and transparency
        </p>
        <a href="/listing/all">
          <button className="px-8 py-4 bg-[#317ba0] rounded-lg text-white font-medium">
            Explore Properties
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
