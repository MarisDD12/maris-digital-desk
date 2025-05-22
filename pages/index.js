import WidgetCard from '../components/WidgetCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Add your agent icon here */}
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Mari's Digital Desk</h2>
            </div>
            <a
              href="https://www.notion.so/marisdigitaldesk/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              View Templates
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {/* Main Icon/Logo */}
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-3xl">M</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Mari's Widget Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Elegant, minimal productivity widgets designed to enhance your Notion workspace and boost your daily flow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="https://www.notion.so/marisdigitaldesk/Mari-s-Digital-Desk-1d672cc34758800ba4bff64df8a66c4f"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View Notion Templates
            </a>
            <button className="inline-flex items-center px-8 py-3 rounded-xl bg-white text-gray-700 font-semibold shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-gray-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Get Premium Access
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Productivity Widgets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate these beautiful widgets into your Notion pages to enhance your productivity workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <WidgetCard
            title="Weather Widget"
            href="/widgets/weather"
            iframeSrc="https://weather-widget-notion.vercel.app/"
            description="Stay informed with beautiful weather updates. Customizable styling to match your workspace aesthetic."
            price="$9.99"
            features={["Customizable themes", "Multiple locations", "7-day forecast", "Notion integration"]}
          />
          <WidgetCard
            title="Pomodoro Timer"
            href="/widgets/pomodoro"
            iframeSrc="https://focus-flow-widget.vercel.app/"
            description="Boost your focus with our elegant Pomodoro timer. Clean design, ambient sounds, and progress tracking."
            price="$12.99"
            features={["Focus sessions", "Break reminders", "Progress tracking", "Ambient sounds"]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who have enhanced their productivity with Mari's widgets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Browse All Widgets
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <h3 className="text-xl font-bold text-white">Mari's Digital Desk</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Creating beautiful, functional widgets to enhance your digital productivity experience.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">All Widgets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mari's Digital Desk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
