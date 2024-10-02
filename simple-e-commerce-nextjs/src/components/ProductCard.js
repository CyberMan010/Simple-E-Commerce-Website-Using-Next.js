import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  return (
    <div className="card card-hover">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={300} 
        height={300} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-orange-600">{product.name}</h2>
        <p className="text-orange-800 mb-4">${product.price.toFixed(2)}</p>
        <Link 
          href={`/products/${product.id}`}
          className="btn-secondary inline-block"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}