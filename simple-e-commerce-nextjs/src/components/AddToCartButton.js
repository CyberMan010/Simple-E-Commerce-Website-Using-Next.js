'use client'

import { useState } from 'react'

export default function AddToCartButton({ productName }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    alert(`Added ${productName} to cart!`)
    // Here you would typically call a function to actually add the item to the cart
  }

  return (
    <button 
      onClick={handleAddToCart}
      className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${
        isAdded 
          ? 'bg-orange-200 text-orange-800 hover:bg-orange-300' 
          : 'bg-orange-500 text-white hover:bg-orange-600'
      }`}
    >
      {isAdded ? 'Added to Cart' : 'Add to Cart'}
    </button>
  )
}