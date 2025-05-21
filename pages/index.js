import WidgetCard from '../components/WidgetCard';

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-12 space-y-12 bg-gray-50">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Mari's Widget Studio</h1>
        <p className="mt-2 text-lg">Minimal productivity widgets for your Notion flow.</p>
        <a
          href="https://www.notion.so/marisdigitaldesk/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 rounded-lg shadow bg-white hover:bg-gray-100 transition"
        >
          View Templates on Notion
        </a>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <footer className="text-center mt-12 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mari’s Digital Desk. All rights reserved.
      </footer>
    </div>
  );
}
