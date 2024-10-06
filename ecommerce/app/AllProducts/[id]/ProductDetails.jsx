"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';

const ProductDetails = ({ product }) => {
    const addToCart = () => {
        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.image,
        };
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        localStorage.setItem('cart', JSON.stringify([...currentCart, cartItem]));
    };

    return (
        <button
            onClick={addToCart}
            className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to cart
        </button>
    );
};

export default ProductDetails;
