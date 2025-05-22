import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Mari’s Digital Desk</h1>
        <div className="w-10 h-10 bg-white rounded-full" /> {/* Logo placeholder */}
      </header>

      {/* This centers and constrains content */}
      <main className="max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
