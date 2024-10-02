import Image from 'next/image'
import aboutimage from '../public/images/about-image.png'

export const metadata = {
  title: 'About Us - E-commerce Store',
  description: 'Learn more about our e-commerce store and our mission',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
          <Image
            src={aboutimage}
            alt="About our store"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
        <div className="md:w-1/2">
          <p className="mb-4">
            Welcome to our e-commerce store! We are passionate about providing high-quality products
            and excellent customer service. Our mission is to make online shopping easy, enjoyable,
            and accessible to everyone.
          </p>
          <p>
            Founded in 2023, we have quickly grown to become a trusted name in the e-commerce industry.
            We offer a wide range of products to suit all your needs and are constantly expanding our
            catalog to bring you the latest and greatest items.
          </p>
        </div>
      </div>
    </div>
  )
}