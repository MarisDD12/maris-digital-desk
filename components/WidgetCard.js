import Link from 'next/link';
import { useState } from 'react';

export default function WidgetCard({ title, href, iframeSrc, description, price, features = [] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Price Badge */}
      {price && (
        <div className="absolute top-6 right-6 z-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {price}
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Widget Preview */}
        <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
          <iframe
            src={iframeSrc}
            className="w-full h-full transition-transform duration-300 group-hover:scale-105"
            allow="fullscreen"
            loading="lazy"
          />
          {/* Overlay for interaction */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 pointer-events-none" />
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Features</h4>
            <ul className="grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={href}>
            <a className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Try Demo
            </a>
          </Link>
          <button className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v7a2 2 0 002 2h6a2 2 0 002-2v-7m-8 0V9a2 2 0 012-2h4a2 2 0 012 2v4.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} 
           style={{ padding: '2px' }}>
        <div className="w-full h-full bg-white rounded-2xl" />
      </div>
    </div>
  );
}
