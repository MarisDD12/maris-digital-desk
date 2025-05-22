// pages/index.js
import React from 'react';
import Layout from '../components/Layout'; // Reusable page shell
import Card from '../components/Cards';   // Reusable product/widget card

export default function Home() {
  return (
    <Layout>
      {/* ---------- Tagline / Hero Section ---------- */}
      <div className="mb-12">
        <p className="text-lg text-gray-300">
          Templates to organize your digital flow.
        </p>
      </div>

      {/* ---------- Featured Templates ---------- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Simple Weekly Planner"
            link="https://marisdigitaldesk.notion.site/Week..."
          >
            View Template
          </Card>
          <Card
            title="Today's Focus"
            link="https://marisdigitaldesk.notion.site/Tod..."
          >
            View Template
          </Card>
        </div>
      </section>

      {/* ---------- Featured Widgets ---------- */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">✨ Featured Widgets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            title="Weather Widget"
            link="https://weather-widget-notion.vercel.app/"
          >
            Open Widget
          </Card>
          <Card
            title="Focus Flow Timer"
            link="https://focus-flow-widget.vercel.app/"
          >
            Open Widget
          </Card>
        </div>
      </section>
    </Layout>
  );
}
