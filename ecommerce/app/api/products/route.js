import { NextResponse } from 'next/server'
import dbConnect from '../../../lib/mongodb'
import Product from '../../../models/Product'

export async function GET() {
  try {
    await dbConnect()
    const products = await Product.find({})
    return NextResponse.json({ products })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    await dbConnect()
    const body = await request.json()
    const product = await Product.create(body)
    return NextResponse.json({ product }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { id, ...updateData } = body
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true })
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json({ product })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    await dbConnect()
    const body = await request.json()
    const { id } = body
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Product deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}