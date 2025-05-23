// pages/widgets/weather.js
import Link from 'next/link';
import Image from 'next/image';

export default function WeatherWidgetPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🌦️ Weather Widget</h1>
        <p className="text-gray-300 mb-6">
          A clean, customizable weather widget you can embed into your Notion workspace. Adjust background, text color, glow, and location.
        </p>

        <div className="w-full h-64 mb-6 relative rounded overflow-hidden border border-white">
          <Image
            src="/assets/weather-preview.png"
            alt="Weather Widget Preview"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <a
          href="https://weather-widget-notion.vercel.app/widget.html?color=4ade80&glow=8&loc=Orlando&units=F&transparent=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded font-semibold hover:bg-green-400 transition"
        >
          Open Widget
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
