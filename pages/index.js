// pages/index.js
import React from 'react';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen px-6 py-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Mari’s Digital Desk</h1>
        <div className="w-10 h-10 bg-white rounded-full" /> {/* Logo placeholder */}
      </header>

      {/* Tagline */}
      <p className="text-lg text-gray-300 mb-12">
        Templates to organize your digital flow.
      </p>

      {/* Featured Templates */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-4 rounded shadow">
            <div className="h-32 bg-gray-200 rounded mb-3" />
            <h3 className="text-lg font-medium">Simple Weekly Planner</h3>
            <a
              href="https://marisdigitaldesk.notion.site/Week..."
              className="text-blue-600 underline text-sm"
              target="_blank" rel="noopener noreferrer"
            >View Template</a>
          </div>
          <div className="bg-white text-black p-4 rounded shadow">
            <div className="h-32 bg-gray-200 rounded mb-3" />
            <h3 className="text-lg font-medium">Today's Focus</h3>
            <a
              href="https://marisdigitaldesk.notion.site/Tod..."
              className="text-blue-600 underline text-sm"
              target="_blank" rel="noopener noreferrer"
            >View Template</a>
          </div>
        </div>
      </section>

      {/* Featured Widgets */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Widgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-4 rounded shadow">
            <div className="h-32 bg-gray-200 rounded mb-3" />
            <h3 className="text-lg font-medium">Weather Widget</h3>
            <a
              href="https://weather-widget-notion.vercel.app/"
              className="text-blue-600 underline text-sm"
              target="_blank" rel="noopener noreferrer"
            >Open Widget</a>
          </div>
          <div className="bg-white text-black p-4 rounded shadow">
            <div className="h-32 bg-gray-200 rounded mb-3" />
            <h3 className="text-lg font-medium">Focus Flow Timer</h3>
            <a
              href="https://focus-flow-widget.vercel.app/"
              className="text-blue-600 underline text-sm"
              target="_blank" rel="noopener noreferrer"
            >Open Widget</a>
          </div>
        </div>
      </section>
    </main>
  );
}
