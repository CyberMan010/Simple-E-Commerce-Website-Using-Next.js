import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'RamadanTask E-commerce',
  description: 'Your vibrant one-stop shop for amazing products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-orange-200 transition duration-300">
             Ramadantask
            </Link>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-orange-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-orange-200 transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-200 transition duration-300">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-orange-800 text-white p-4 text-center">
          <p>&copy; 2024Ramadantask E-commerce. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}