const ContactDetailsCard = () => (
  <section className="p-6 bg-white rounded-2xl">
    <h2 className="text-[#2f3d46] text-xl font-bold font-['Montserrat'] mb-6">
      Contact Information
    </h2>
    <ul className="space-y-4 mb-6">
      <li className="text-[#2f3d46] text-base font-medium font-['Montserrat']">
        Representative: Ruth Oyamine
      </li>
      <li className="text-[#2f3d46] text-base font-medium font-['Montserrat']">
        Available for immediate viewing
      </li>
      <li className="text-[#2f3d46] text-base font-medium font-['Montserrat']">
        Professional property management
      </li>
    </ul>
    <a
      href="tel:+2348095765432"
      className="block w-full px-4 py-1.5 bg-[#317ba0] rounded-lg text-white text-base font-medium font-['Montserrat'] text-center"
    >
      Call: +234 8095 765 4321
    </a>
  </section>
);

export default ContactDetailsCard;
