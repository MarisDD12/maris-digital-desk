import Link from 'next/link';

export default function WidgetCard({ title, href, iframeSrc, description, price, features = [] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Price Badge */}
      {price && (
        <div className="bg-blue-50 px-4 py-2 border-b border-gray-100">
          <span className="text-sm font-medium text-blue-700">{price}</span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Widget Preview */}
        <div className="w-full h-40 mb-4 bg-gray-50 border border-gray-200 rounded overflow-hidden">
          <iframe
            src={iframeSrc}
            className="w-full h-full"
            allow="fullscreen"
            loading="lazy"
          />
        </div>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">What's included:</h4>
            <ul className="space-y-1">
              {features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-3 h-3 text-blue-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
              {features.length > 3 && (
                <li className="text-sm text-gray-500 ml-5">
                  +{features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={href}>
            <a className="flex-1 text-center px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors rounded-md">
              Try Demo
            </a>
          </Link>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
