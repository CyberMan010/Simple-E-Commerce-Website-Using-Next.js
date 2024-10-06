

// import React from 'react';
// import { ShoppingBag, Truck, Headphones, ThumbsUp } from 'lucide-react';
//  import Image from 'next/image'

// export default function AboutUs() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Our Store</h1>
        
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           <div className="md:flex">
//             <div className="md:flex-shrink-0">
//                          <Image  width={200} height={5000} alt='' src='data:image/jpeg;base64,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'/>

//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Our Story</div>
//               <p className="mt-2 text-gray-600">
//                 Founded in 2010, our e-commerce store has been dedicated to providing high-quality products and exceptional customer service. We believe in the power of online shopping to connect people with the items they love, no matter where they are in the world.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <FeatureCard 
//             icon={<ShoppingBag className="h-12 w-12 text-indigo-500" />}
//             title="Wide Selection"
//             description="Browse through thousands of products across various categories."
//           />
//           <FeatureCard 
//             icon={<Truck className="h-12 w-12 text-indigo-500" />}
//             title="Fast Shipping"
//             description="Get your orders delivered quickly and efficiently to your doorstep."
//           />
//           <FeatureCard 
//             icon={<Headphones className="h-12 w-12 text-indigo-500" />}
//             title="24/7 Support"
//             description="Our customer service team is always ready to assist you."
//           />
//           <FeatureCard 
//             icon={<ThumbsUp className="h-12 w-12 text-indigo-500" />}
//             title="Satisfaction Guaranteed"
//             description="We stand behind the quality of our products with a 100% satisfaction guarantee."
//           />
//         </div>

//         <div className="mt-16 bg-indigo-700 rounded-lg text-white p-8">
//           <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//           <p className="text-lg">
//             To provide our customers with a seamless online shopping experience, offering a curated selection of high-quality products at competitive prices, all while maintaining exceptional customer service and fostering long-lasting relationships with our clients.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//       {icon}
//       <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
//       <p className="mt-2 text-gray-600">{description}</p>
//     </div>
//   );
// }












import React from 'react';
import { ShoppingBag, Truck, Headphones, ThumbsUp, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-indigo-900/90">
          <img 
            src="data:image/jpeg;base64,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" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Since 2010, we've been transforming the way people shop online. 
            More than just a store, we're a destination for those who seek quality, 
            value, and an exceptional shopping experience.
          </p>
          <button className="mt-8 inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-50 transition-colors">
            Explore Our Products <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<ShoppingBag />}
            title="Curated Selection"
            description="Thoughtfully chosen products that meet our high standards for quality and value."
          />
          <FeatureCard 
            icon={<Truck />}
            title="Swift Delivery"
            description="Reliable shipping options to get your purchases to you when you need them."
          />
          <FeatureCard 
            icon={<Headphones />}
            title="Expert Support"
            description="Our knowledgeable team is here to help with any questions or concerns."
          />
          <FeatureCard 
            icon={<ThumbsUp />}
            title="Satisfaction Promise"
            description="Your happiness is our priority. Love your purchase or get your money back."
          />
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to redefine online shopping. By combining 
              cutting-edge technology with old-fashioned customer service, 
              we create an experience that's both modern and personal. 
              Every product, every interaction, every decision we make is 
              guided by our commitment to your satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard number="1M+" label="Happy Customers" />
          <StatCard number="50K+" label="Products Available" />
          <StatCard number="100+" label="Countries Served" />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
        {React.cloneElement(icon, { className: "h-6 w-6" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}