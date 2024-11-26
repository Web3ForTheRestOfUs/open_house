import React from "react";
import Image from "next/image";
import Link from 'next/link';

const UnderConstruction: React.FC = () => {
  return (
    <div className="relative h-[800px] w-full">
      {/* Background Image using Next.js Image */}
      <Image
        src="/underConstructionZ.jpg" // Replace with your image path
        alt="Under Construction Background"
        layout="fill"
        objectFit="cover"
        className="absolute"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Under Construction</h1>
          <p className="text-lg md:text-xl mb-16">
            We’re working hard to bring you something amazing.
          </p>
          <Link href='/'>
            <button
                className="px-6 py-3 rounded-md bg-[#317ba0] text-white text-lg font-semibold hover:bg-[#255b7c] transition"
            >
                Back to Home
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
