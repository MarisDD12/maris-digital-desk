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
    </Layout>
  );
}

