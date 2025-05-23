// pages/index.js
import Layout from '../components/Layout';
import Card from '../components/Cards';

export default function Home() {
  return (
    <Layout>
      <div className="mb-12">
        <p className="text-lg text-gray-300">
          Templates to organize your digital flow.
        </p>
      </div>

      {/* Featured Templates */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Simple Weekly Planner"
            link="/templates/weekly"
            image="/assets/weekly-preview.png"
          >
            View Template
          </Card>
          <Card
            title="Today's Focus"
            link="/templates/focus"
            image="/assets/focus-preview.png"
          >
            View Template
          </Card>
        </div>
      </section>

      {/* Featured Widgets */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Widgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Weather Widget"
            link="/widgets/weather"
            image="/assets/weather-preview.png"
          >
            Open Widget
          </Card>
          <Card
            title="Focus Flow Timer"
            link="/widgets/focusflow"
            image="/assets/focusflow-preview.png"
          >
            Open Widget
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">📥 How It Works</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-2">
          <li>Pick a template that fits your flow</li>
          <li>Duplicate it to your Notion in 1 click</li>
          <li>Start organizing with clarity</li>
        </ol>
        <p className="text-yellow-400 mt-2">🎁 Most templates are free or pay-what-you-want.</p>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">💌 Subscribe for Freebies & New Drops</h2>
        <p className="text-gray-300 mb-4">
          Join my desk-side newsletter for occasional tips, exclusive templates, and Notion inspiration.
        </p>
        <button className="bg-white text-black font-semibold py-2 px-4 rounded shadow">
          Join Here
        </button>
      </section>

      {/* Support Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">🙌 Support the Desk</h2>
        <p className="text-gray-300 mb-2">Like what I do?</p>
        <p className="text-blue-400 underline">Buy Me a Coffee ☕ or Share the Templates 💌</p>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">🪑 About Mari’s Digital Desk</h2>
        <p className="text-gray-300">
          Hi, I'm Mari! I create modern, minimal templates to help people build calm into their digital lives. This desk is where I keep the tools I wish I had when I started.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-4">📖 FAQs</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-semibold text-white">Q: How do I duplicate a template?</p>
            <p>A: Click “Duplicate” in the top right corner of the shared Notion page.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Q: Can I resell these?</p>
            <p>A: Nope! These are for personal use only. 💛</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

