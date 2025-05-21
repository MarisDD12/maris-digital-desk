import Link from 'next/link';

export default function WidgetCard({ title, href, iframeSrc, description }) {
  return (
    <div className="rounded-2xl shadow-lg p-4 hover:shadow-xl transition bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-full h-48 mb-2">
        <iframe
          src={iframeSrc}
          className="w-full h-full rounded-md"
          allow="fullscreen"
        ></iframe>
      </div>
      <p className="mb-4 text-base">{description}</p>
      <Link href={href}>
        <a className="inline-block px-4 py-2 rounded-lg shadow-sm bg-gray-100 hover:bg-gray-200 transition">
          Try it
        </a>
      </Link>
    </div>
  );
}
