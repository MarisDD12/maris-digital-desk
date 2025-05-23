// components/Layout.js
import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
  {/* Hero Banner */}
  <div className="relative w-full h-[400px]">
    <Image
      src="/assets/banner2.png"
      alt="Hero banner"
      layout="fill"
      objectFit="cover"
      className="opacity-90"
    />
  </div>

  {/* Avatar and Heading */}
  <div className="max-w-5xl mx-auto w-full px-6 -mt-20 relative z-10 flex flex-col sm:flex-row items-center gap-6">
    <div className="w-30 h-30 rounded-full overflow-hidden border-4 border-white flex items-center justify-center bg-white">
      <Image
        src="/assets/avatar.png"
        alt="Mari Avatar"
        width={120}
        height={120}
        className="object-cover"
      />
    </div>
    <div className="text-center sm:text-left">
      <h1 className="text-3xl md:text-4xl font-bold">Mari’s Digital Desk</h1>
      <p className="text-gray-300 mt-1">Templates to organize your digital flow.</p>
    </div>
  </div>

  {/* Main content */}
  <main className="pb-16 pt-10 px-4 sm:px-8">{children}</main>
</div>

      </div>

      <Footer />
    </div>
  );
}
