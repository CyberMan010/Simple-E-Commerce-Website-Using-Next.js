import { notFound } from 'next/navigation'
import Image from 'next/image'
import AddToCartButton from '../../../components/AddToCartButton'

async function getProduct(id) {
  // In a real application, you would fetch this data from an API
  const products = [
    { id: 1, name: 'Sunny Day Tee', price: 19.99, description: 'Brighten your day with this comfortable and stylish t-shirt.', image: '/images/product1.jpg' },
    { id: 2, name: 'Citrus Blast Sneakers', price: 59.99, description: 'Step out in style with these vibrant and comfortable sneakers.', image: '/images/product2.jpg' },
    { id: 3, name: 'Tangerine Dreams Backpack', price: 39.99, description: 'Carry your essentials in this eye-catching and practical backpack.', image: '/images/product3.jpg' },
  ]
  return products.find(p => p.id === parseInt(id)) || null
}

export default async function ProductDetails({ params }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Image 
          src={product.image} 
          alt={product.name} 
          width={500} 
          height={500} 
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-orange-600">{product.name}</h1>
        <p className="text-2xl mb-4 text-orange-800">${product.price.toFixed(2)}</p>
        <p className="mb-6 text-orange-700">{product.description}</p>
        <AddToCartButton productName={product.name} />
      </div>
    </div>
  )
}