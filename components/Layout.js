// components/Layout.js
import React from 'react';
import Image from 'next/image';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[32rem]">
        <Image
          src="/assets/banner.png" // Replace with your actual banner file
          alt="Hero banner"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Avatar and Heading */}
      <div className="max-w-5xl mx-auto px-6 -mt-24 sm:-mt-28 md:-mt-32 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/assets/avatar.png"
              alt="Mari Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Mari’s Digital Desk</h1>
            <p className="text-gray-300">
              Templates to organize your digital flow.
            </p>
          </div>
        </div>

        <main>{children}</main>
      </div>
    </div>
  );
}
