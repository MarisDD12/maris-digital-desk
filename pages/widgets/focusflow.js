// pages/widgets/focusflow.js
import Link from 'next/link';
import Image from 'next/image';

export default function FocusFlowWidgetPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">⏱️ Focus Flow Timer</h1>
        <p className="text-gray-300 mb-6">
          A minimalist Pomodoro timer widget designed to help you focus in 25-minute sprints. Easily embed it in Notion and customize the glow, sound, and display.
        </p>

        <div className="w-full h-64 mb-6 relative rounded overflow-hidden border border-white">
          <Image
            src="/assets/focusflow-preview.png"
            alt="Focus Flow Timer Preview"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <a
          href="https://focus-flow-widget.vercel.app/widget.html"
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
