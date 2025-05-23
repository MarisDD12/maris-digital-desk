// pages/templates/focus.js
import Link from 'next/link';
import Image from 'next/image';

export default function FocusTemplatePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🎯 Today’s Focus</h1>
        <p className="text-gray-300 mb-6">
          A minimalist daily dashboard built for clarity and intention. Organize your top priorities and stay grounded throughout your day.
        </p>

        <div className="w-full h-64 mb-6 relative rounded overflow-hidden border border-white">
          <Image
            src="/assets/focus-preview.png"
            alt="Focus Template Preview"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <a
          href="https://marisdigitaldesk.notion.site/Tod..." // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded font-semibold hover:bg-blue-400 transition"
        >
          View Template
        </a>

        <div className="mt-8">
          <Link href="/">
            <a className="text-blue-400 underline">← Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
