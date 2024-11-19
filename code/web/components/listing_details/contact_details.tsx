const ContactDetailsCard = () => {
  return (
    <div className="flex">
      <div className="  relative bg-white rounded-2xl">
        <div className="  absolute text-[#2f3d46] text-xl font-bold font-['Montserrat']">
          Contact Information
        </div>
        <div className="  absolute">
          <div className="left-0 top-0 absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Representative: Ruth Oyamine
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Available for immediate viewing
          </div>
          <div className="left-0  absolute text-[#2f3d46] text-base font-medium font-['Montserrat']">
            Professional property management
          </div>
        </div>
        <div className="  px-4 py-1.5   absolute bg-[#317ba0] rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-medium font-['Montserrat']">
            Call: +234 8095 765 4321
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsCard;
