import WidgetCard from '../components/WidgetCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <header className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Mari's Widget Studio</h1>
        <p className="text-lg">Minimal productivity widgets for your Notion flow.</p>
        <a
          href="https://www.notion.so/marisdigitaldesk/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg shadow bg-white hover:bg-gray-100 transition text-blue-600 font-medium"
        >
          View Templates on Notion
        </a>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <WidgetCard
          title="Weather Widget"
          href="/widgets/weather"
          iframeSrc="https://weather-widget-notion.vercel.app/"
          description="Check the weather with customizable styling."
        />
        <WidgetCard
          title="Pomodoro Timer"
          href="/widgets/pomodoro"
          iframeSrc="https://focus-flow-widget.vercel.app/"
          description="Stay focused with our sleek Pomodoro timer."
        />
      </main>

      <footer className="text-center mt-16 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mari’s Digital Desk. All rights reserved.
      </footer>
    </div>
  );
}

