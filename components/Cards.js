// components/Card.js
import React from 'react';

export default function Card({ title, link, children }) {
  return (
    <div className="bg-white text-black p-4 rounded shadow">
      <div className="h-32 bg-gray-200 rounded mb-3" />
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <a
        href={link}
        className="text-blue-600 underline text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
