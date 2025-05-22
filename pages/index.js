export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-orange-400 text-black text-xs font-bold flex items-center justify-center rounded">
              M
            </div>
            <h1 className="text-lg font-medium">Mari&apos;s Digital Desk</h1>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-white">Get updates</a>
            <a
              href="https://marisdigitaldesk.notion.site/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              View Notion Templates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-64 bg-gradient-to-r from-amber-50 via-orange-50 to-green-50 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center relative">
              <h1 className="text-6xl font-bold text-green-700 mb-2">
                Mari&apos;s
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 tracking-wider">
                DIGITAL DESK
              </h2>
              <div className="w-32 h-1 bg-orange-400 mx-auto mt-2"></div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-8 left-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full border-4 border-gray-900 flex items-center justify-center">
            <div className="text-2xl">👩🏽‍💻</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gray-900 text-white pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Mari&apos;s Digital Desk</h1>
            <p className="text-xl text-gray-300 mb-2">Templates to organize your digital flow.</p>
            <p className="text-gray-400 max-w-4xl">
              Your go-to hub for thoughtfully crafted Notion templates, designed to bring calm, structure, and creativity to your digital workspace.
            </p>
          </div>

          {/* Featured Widgets */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">✨</span>
              <h2 className="text-2xl font-bold">Featured Widgets</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Weather Widget Card */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
                <div className="h-48 bg-gray-700 relative">
                  <iframe
                    src="https://weather-widget-notion.vercel.app/"
                    className="w-full h-full"
                    allow="fullscreen"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                    $9.99
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
                      Weather Widget
                    </h3>
                    <div className="text-xs text-gray-500 mt-1">
                      marisdigitaldesk.notion.site
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                      Personal Productivity
                    </span>
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                      Weather
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Stay informed with beautiful weather updates. Customizable styling to match your workspace aesthetic.
                  </p>
                  <div className="flex gap-2">
                    <a href="/widgets/weather" className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                      Try Demo
                    </a>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded transition-colors">
                      Buy Widget
                    </button>
                  </div>
                </div>
              </div>

              {/* Pomodoro Timer Card */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
                <div className="h-48 bg-gray-700 relative">
                  <iframe
                    src="https://focus-flow-widget.vercel.app/"
                    className="w-full h-full"
                    allow="fullscreen"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                    $12.99
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
                      Pomodoro Timer
                    </h3>
                    <div className="text-xs text-gray-500 mt-1">
                      marisdigitaldesk.notion.site
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                      Personal Productivity
                    </span>
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium">
                      Focus Timer
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Boost your focus with our elegant Pomodoro timer. Clean design, ambient sounds, and progress tracking.
                  </p>
                  <div className="flex gap-2">
                    <a href="/widgets/pomodoro" className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                      Try Demo
                    </a>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded transition-colors">
                      Buy Widget
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">🍎</span>
              <h2 className="text-2xl font-bold">How It Works</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <div>1. Pick a widget that fits your flow</div>
              <div>2. Embed it in your Notion in 1 click</div>
              <div>3. Start organizing with clarity</div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔖</span>
              <h2 className="text-2xl font-bold">About Mari&apos;s Digital Desk</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">Hi, I&apos;m Mari!</p>
              <p>
                I create modern, minimal templates to help people build calm into their digital lives. 
                This desk is where I keep the tools I wish I had when I started.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <p className="italic">Created by Mari&apos;s Digital Desk</p>
            <p className="text-sm">Templates to organize your digital flow.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Support</a>
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-50 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Mari&apos;s Digital Desk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
