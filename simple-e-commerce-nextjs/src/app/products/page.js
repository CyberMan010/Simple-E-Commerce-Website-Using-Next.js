import ProductList from '../../components/ProductList'

async function getProducts() {
  // In a real application, you would fetch this data from an API
  return [
    { id: 1, name: 'Sunny Day Tee', price: 19.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Citrus Blast Sneakers', price: 59.99, image: '/images/product2.jpg' },
    { id: 3, name: 'Tangerine Dreams Backpack', price: 39.99, image: '/images/product3.jpg' },
  ]
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-orange-600">Our Vibrant Collection</h1>
      <ProductList products={products} />
    </div>
  )
}