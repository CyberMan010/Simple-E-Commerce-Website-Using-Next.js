// import Link from 'next/link'
// import React from 'react'
// function NotFoundPage() {
// 	return (
// 	<div>
// 			<h1>Page Not Found </h1>
// 			<Link href="/"><button>Go To Home Page</button></Link>
// 	</div>
// 	)
// }

// export default NotFoundPage









import Link from 'next/link';
import React from 'react';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Return to Homepage
          </button>
        </Link>
      </div>
      
      {/* Decorative elements */}
      <div className="mt-12 text-gray-400">
        <div className="inline-block border-t-2 border-gray-300 w-8 mx-2"></div>
        <span>404</span>
        <div className="inline-block border-t-2 border-gray-300 w-8 mx-2"></div>
      </div>
    </div>
  );
}

export default NotFoundPage;