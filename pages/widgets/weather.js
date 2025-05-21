export default function WeatherWidgetPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Weather Widget</h1>
      <iframe
        src="https://weather-widget-notion.vercel.app/"
        className="w-full h-[500px] rounded-lg shadow"
      ></iframe>
    </div>
  );
}
