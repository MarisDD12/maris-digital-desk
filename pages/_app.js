// pages/_app.js
import '@/styles/globals.css'; // ✅ This pulls in Tailwind CSS

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
