import Link from 'next/link';

export default function WidgetCard({ title, href, iframeSrc, description, price, tags = [] }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors">
      {/* Widget Preview */}
      <div className="h-48 bg-gray-700 relative">
        <iframe
          src={iframeSrc}
          className="w-full h-full"
          allow="fullscreen"
          loading="lazy"
        />
        
        {/* Price overlay */}
        {price && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
            {price}
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Title and Link */}
        <div className="mb-3">
          <Link href={href} className="text-xl font-bold text-white hover:text-orange-400 transition-colors">
            {title}
          </Link>
          <div className="text-xs text-gray-500 mt-1">
            marisdigitaldesk.notion.site
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-500 text-white text-xs rounded font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Date */}
        <div className="text-xs text-gray-500 mb-4">
          Updated recently
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={href} className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
            Try Demo
          </Link>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded transition-colors">
            Buy Widget
          </button>
        </div>
      </div>
    </div>
  );
