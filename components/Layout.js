// components/Layout.js
import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Banner */}
      <div className="relative w-full h-[20rem] md:h-[24rem]">
        <Image
          src="/assets/banner2.png"
          alt="Hero banner"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Avatar and Heading */}
      <div className="max-w-5xl mx-auto w-full px-8 -mt-20 md:-mt-24 relative z-10 flex-grow">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white flex items-center justify-center bg-white">
            <Image
              src="/assets/avatar.png"
              alt="Mari Avatar"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Mari’s Digital Desk</h1>
            <p className="text-gray-300">
              Templates to organize your digital flow.
            </p>
          </div>
        </div>

        <main className="pb-16">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
