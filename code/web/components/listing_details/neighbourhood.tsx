const NeighborhoodCard = () => {
  return (
    <div className="flex">
      <div className="   bg-white rounded-2xl">
        <div className="  absolute text-[#2f3d46] text-xl font-bold font-['Montserrat']">
          Neighborhood
        </div>
        <div className="  absolute">
          <div className="left-0 top-0 absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Family-friendly community
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Safe and secure environment
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Well-maintained properties
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Mix of families and professionals
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodCard;
