



"use client"; 

import React, { useEffect, useState } from 'react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <h1 className="text-3xl font-bold text-center">Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="text-center mt-4">Your cart is empty.</p>
                ) : (
                    <div className="p-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex mb-4 items-center">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                                <div className="ml-4">
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                                <button 
                                    onClick={() => removeItem(item.id)} 
                                    className="ml-4 text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
