export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Mari's Widget Studio</h1>
        <p className="text-xl mb-8">Testing deployment...</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Weather Widget</h2>
            <div className="w-full h-48 bg-gray-700 mb-4 flex items-center justify-center">
              <iframe
                src="https://weather-widget-notion.vercel.app/"
                className="w-full h-full"
              />
            </div>
            <p className="text-gray-300 mb-4">Beautiful weather updates for your workspace.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Try Demo
            </button>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Pomodoro Timer</h2>
            <div className="w-full h-48 bg-gray-700 mb-4 flex items-center justify-center">
              <iframe
                src="https://focus-flow-widget.vercel.app/"
                className="w-full h-full"
              />
            </div>
            <p className="text-gray-300 mb-4">Focus timer to boost your productivity.</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
