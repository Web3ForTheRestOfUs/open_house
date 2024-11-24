import React from 'react';
import { Globe, Linkedin } from 'lucide-react';

const HouseOwnerCard = () => (
  <section className="bg-white rounded-2xl overflow-hidden max-w-sm">
    <header className="bg-[#1e2a49] text-white p-4 text-center text-lg font-['Montserrat'] font-medium">
      House Owner
    </header>

    <article className="p-6 space-y-6 mb-40">
      <div className="w-24 h-24 bg-gray-200 rounded-full mb-4" />
      <h2 className="text-[#2f3d46] text-lg font-bold font-['Montserrat']">
        BAR. Caleb Gabriel
      </h2>

      <ul className="space-y-4">
        <li>
          <a
            href="https://wa.me/2348095765432"
            className="flex items-center gap-3 text-[#2f3d46] font-medium"
          >
            <img src="/whatsapp-icon.svg" alt="" className="w-5 h-5" />
            Call +234 8095 765 4321
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/esq-caleb-gabriel"
            className="flex items-center gap-3 text-[#2f3d46] font-medium"
          >
            <Linkedin className="w-5 h-5" />
            ESQ Caleb Gabriel
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center gap-3 text-[#2f3d46] font-medium"
          >
            <Globe className="w-5 h-5" />
            Visit Website
          </a>
        </li>
      </ul>
    </article>
  </section>
);

export default HouseOwnerCard;
