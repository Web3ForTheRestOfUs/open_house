import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-white text-sm font-semibold font-['Montserrat']">
        Contact Enquiries
      </h2>
      <div className="space-y-3">
        <a
          href="mailto:info@openhouse.ng"
          className="flex items-center space-x-2 group hover:opacity-80 transition-opacity"
        >
          <Mail className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-normal font-['Montserrat']">
            info@openhouse.ng
          </span>
        </a>

        <a
          href="tel:+2348012345678"
          className="flex items-center space-x-2 group hover:opacity-80 transition-opacity"
        >
          <Phone className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-normal font-['Montserrat']">
            +234 8012 345 6789
          </span>
        </a>

        <a
          href="https://maps.google.com/?q=789+Market+St,+Suite+10,+Lagos+Island,+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group hover:opacity-80 transition-opacity"
        >
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white text-xs font-normal font-['Montserrat']">
            789 Market St, Suite 10, Lagos Island, Nigeria
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
