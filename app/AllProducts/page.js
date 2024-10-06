
import React from 'react';
import axios from "axios";
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductListingPage() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 w-full">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.title}</h2>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Link href={`/AllProducts/${product.id}`}>
                  <button className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}