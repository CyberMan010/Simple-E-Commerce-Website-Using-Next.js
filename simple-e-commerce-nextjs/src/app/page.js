import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-orange-600">Welcome to Orange Bliss</h1>
      <p className="text-xl mb-8 text-orange-800">Discover amazing products that will brighten your day!</p>
      <div className="space-y-4">
        <Link href="/products" className="btn-primary inline-block text-lg">
          Shop Now
        </Link>
        <p className="text-orange-700">Experience the warmth of our curated collection</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card card-hover p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Quality Products</h2>
          <p className="text-orange-700">Handpicked for your satisfaction</p>
        </div>
        <div className="card card-hover p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Fast Delivery</h2>
          <p className="text-orange-700">Right to your doorstep</p>
        </div>
        <div className="card card-hover p-6">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">24/7 Support</h2>
          <p className="text-orange-700">We're always here to help</p>
        </div>
      </div>
    </div>
  )
}