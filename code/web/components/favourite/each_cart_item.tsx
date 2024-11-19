const EachCartItem = () => {
  return (
    <div className="rounded-2xl border border-[#d0d5dd] p-4">
      <div className="relative">
        {/* Image and overlay */}
        <div className="relative">
          <img
            src="house-image.jpg" // Replace with the actual image source
            alt="2 Bedroom Apartment"
            className="w-full rounded-t-2xl object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#7c7a7a] text-white text-sm font-semibold rounded-sm px-2 py-1">
            11
          </div>
          <div className="absolute top-3 right-3 bg-white/40 text-[#317ba0] text-sm font-medium rounded-full px-3 py-1">
            Available Soon
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-[#090613]">
            2 Bedroom Apartment
          </h2>
          <p className="text-sm text-[#090613]">
            Victoria Bay 3, Nike Art Gallery Road, Ikate, Lagos
          </p>
          <p className="text-sm text-[#090613] mt-2">
            Luxury 2 bedroom flat available for rent in a well-secured estate,
            good road network with spacious rooms and POP finishing.
          </p>
          <div className="text-[#1a2258] text-xl font-semibold mt-2">
            #7,000,000 <span className="text-sm font-medium">per annum</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex justify-between items-center mt-4 text-sm text-[#414042] bg-[#f3f7fa] p-2 rounded-md">
          <div className="flex items-center gap-1">
            <span>2 Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span>3 Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <span>2 Space</span>
          </div>
          <div className="flex items-center gap-1">
            <span>1500sqft</span>
          </div>
        </div>

        {/* Owner Info */}
        <div className="flex items-center mt-4">
          <div className="w-10 h-10 bg-[#d9d9d9] rounded-full"></div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-[#090613]">Caleb Joshua</p>
            <p className="text-sm text-[#090613]">House Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCartItem;
