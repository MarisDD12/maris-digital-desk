// components/Footer.js
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
      <p className="mb-2">© {new Date().getFullYear()} Mari’s Digital Desk. All rights reserved.</p>
      <div className="space-x-4">
        <a
          href="https://www.buymeacoffee.com/marisdesk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          ☕ Buy Me a Coffee
        </a>
        <a
          href="mailto:hello@marisdigitaldesk.com"
          className="hover:text-white"
        >
          ✉️ Email
        </a>
        <a
          href="https://github.com/yourusername/maris-digital-desk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          🛠️ GitHub
        </a>
      </div>
    </footer>
  );
}
