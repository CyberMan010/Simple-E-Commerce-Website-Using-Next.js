
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import ProductDetails from './ProductDetails'; // استيراد مكون العميل

export default async function Page({ params }) {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    const product = response.data;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <div className="h-48 w-full md:w-48 relative">
                            <Image
                                src={product.image}
                                alt={product.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                            />
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                            {product.category}
                        </div>
                        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {product.title}
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">${product.price.toFixed(2)}</p>
                        <p className="mt-2 text-gray-500">{product.description}</p>
                        <div className="mt-4 flex items-center">
                            <span className="ml-1 text-gray-600">{product.rating.rate}</span>
                        </div>
                        <ProductDetails product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}
