import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import ContactSection from './contact';

const icons = [
  { Component: Facebook, href: '#' },
  { Component: Instagram, href: '#' },
  { Component: Youtube, href: '#' },
  {
    Component: Twitter,
    href: 'https://x.com/openhousexyz?t=bh93-qQxuZekVitRh71HjA&s=09',
  },
];
const Footer = () => {
  return (
    <div className="bg-[#317ba0] px-16 py-12">
      <div className="flex justify-between mb-8">
        <div className="w-1/3 space-y-8">
          <div className="space-y-2">
            <h2 className="text-white text-sm font-semibold font-['Montserrat']">
              OpenHouse
            </h2>
            <p className="text-white text-sm font-normal font-['Montserrat'] leading-relaxed">
              Discover a community-powered rental platform that connects renters
              to transparent, verified property listings while empowering users
              to earn rewards by sharing real insights. Find your next home with
              ease, trust, and no hidden fees.
            </p>
          </div>

          <ContactSection/>
        </div>

        <div className="w-1/4">
          <h2 className="text-white text-sm font-semibold font-['Montserrat'] mb-2">
            Company
          </h2>
          <div className="space-y-2">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/under_construction' },
              { name: 'Browse Listing', href: '/listing' },
              { name: 'Become a Scout', href: '/under_construction' },
              { name: 'FAQ', href: '/faq' },
              { name: 'Terms of Use', href: '/terms' },
              { name: 'Privacy Policy', href: '/privacy_and_policy' },
            ].map(({ name, href }) => (
              <Link key={name} href={href}>
                <p className="text-white text-xs font-normal font-['Montserrat'] mb-2">
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-1/4">
          <h2 className="text-white text-sm font-semibold font-['Montserrat'] mb-2">
            Discover
          </h2>
          <div className="space-y-2">
            {[
              { name: 'Properties for Rent', href: '/listing' },
              { name: 'Properties for Sale', href: '/under_construction' },
              { name: 'Short Let Destination', href: '/under_construction' },
            ].map(({ name, href }) => (
              <Link key={name} href={href}>
                <p
                  key={name}
                  className="text-white text-xs font-normal font-['Montserrat'] mb-2"
                >
                  {name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-white/20 mb-8" />

      <div className="flex justify-start items-start flex-col">
        <div className="flex gap-4">
          <div className="flex space-x-2">
            {icons.map(({ Component, href }, index) => (
              <Link href={href} key={index}>
                <div key={index} className="border border-white rounded-md p-1">
                  <Component className="w-3 h-3 text-white" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <p className="text-white text-xs font-normal font-['Montserrat'] my-3 gap-4">
          © OpenHouse 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
