import WidgetCard from '../components/WidgetCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-900 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-orange-400 text-black text-xs font-bold flex items-center justify-center rounded">
              🐿️
            </div>
            <h1 className="text-lg font-medium">Mari's Digital Desk</h1>
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

      {/* Hero Section with Cover Image */}
      <section className="relative">
        {/* Cover Image Recreation */}
        <div className="h-64 bg-gradient-to-r from-amber-50 via-orange-50 to-green-50 relative overflow-hidden">
          {/* Recreating the illustrated cover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center relative">
              {/* Main Title in Script Font */}
              <h1 className="text-6xl font-bold text-green-700 mb-2" style={{fontFamily: 'cursive'}}>
                Mari's
              </h1>
              <h2 className="text-3xl font-semibold text-gray-700 tracking-wider">
                DIGITAL DESK
              </h2>
              <div className="w-32 h-1 bg-orange-400 mx-auto mt-2"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 right-1/4">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <div className="w-2 h-12 bg-green-500 mx-auto"></div>
              <div className="flex space-x-1 justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            {/* Notebook/Device illustration */}
            <div className="absolute left-1/4 top-12">
              <div className="w-16 h-20 bg-green-700 rounded-lg relative">
                <div className="w-12 h-16 bg-white rounded mx-auto mt-2 flex items-center justify-center">
                  <div className="w-6 h-8 bg-green-600 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="absolute -bottom-8 left-12">
          <div className="w-16 h-16 bg-amber-100 rounded-full border-4 border-gray-900 flex items-center justify-center">
            {/* Character avatar - simplified version */}
            <div className="text-2xl">👩🏽‍💻</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-gray-900 text-white pt-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Mari's Digital Desk</h1>
            <p className="text-xl text-gray-300 mb-2">Templates to organize your digital flow.</p>
            <p className="text-gray-400 max-w-4xl">
              Your go-to hub for thoughtfully crafted Notion templates, designed to bring calm, structure, and creativity to your digital workspace.
            </p>
          </div>

          {/* Featured Widgets Section */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">✨</span>
              <h2 className="text-2xl font-bold">Featured Widgets</h2>
            </div>
            
            <div className="flex items-center text-gray-400 mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              <span className="text-sm">Gallery view</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <WidgetCard
                title="Weather Widget"
                href="/widgets/weather"
                iframeSrc="https://weather-widget-notion.vercel.app/"
                description="Stay informed with beautiful weather updates. Customizable styling to match your workspace aesthetic."
                price="$9.99"
                tags={["Personal Productivity", "Weather"]}
              />
              <WidgetCard
                title="Pomodoro Timer"
                href="/widgets/pomodoro"
                iframeSrc="https://focus-flow-widget.vercel.app/"
                description="Boost your focus with our elegant Pomodoro timer. Clean design, ambient sounds, and progress tracking."
                price="$12.99"
                tags={["Personal Productivity", "Focus Timer"]}
              />
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
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🎁</span>
                <span className="text-orange-400 font-medium">Most widgets are one-time purchase or pay-what-you-want.</span>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">📮</span>
              <h2 className="text-2xl font-bold">Subscribe for Freebies & New Drops</h2>
            </div>
            
            <p className="text-gray-400 mb-4">
              Join my desk-side newsletter for occasional tips, exclusive templates, and Notion inspiration.
            </p>
            
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded border border-gray-600 transition-colors">
              Join Here
            </button>
          </section>

          {/* About Section */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🔖</span>
              <h2 className="text-2xl font-bold">About Mari's Digital Desk</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">Hi, I'm Mari!</p>
              <p>
                I create modern, minimal templates to help people build calm into their digital lives. 
                This desk is where I keep the tools I wish I had when I started.
              </p>
            </div>
          </section>

          {/* Support Section */}
          <section className="mb-12">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🙌</span>
              <h2 className="text-2xl font-bold">Support the Desk</h2>
            </div>
            
            <p className="text-gray-400 mb-4">Like what I do?</p>
            <p className="text-gray-300">
              You can <a href="#" className="text-orange-400 hover:underline">Buy Me a Coffee ☕</a> or{' '}
              <a 
                href="https://marisdigitaldesk.notion.site/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-orange-400 hover:underline"
              >
                Share the Templates 💌
              </a>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">📘</span>
              <h2 className="text-2xl font-bold">FAQs</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Q: How do I duplicate a widget?</h3>
                <p className="text-gray-400">Click "Duplicate" in the top right corner of the shared Notion page.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Q: Can I resell these?</h3>
                <p className="text-gray-400">Nope! These are for personal use only. 💛</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <p className="italic">Created by Mari's Digital Desk</p>
            <p className="text-sm">Templates to organize your digital flow.</p>
          </div>
          
          {/* Logo */}
          <div className="text-center">
            <div className="inline-block">
              <div className="text-2xl font-bold" style={{fontFamily: 'cursive'}}>Mari's</div>
              <div className="text-xs tracking-wider">DIGITAL DESK</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
