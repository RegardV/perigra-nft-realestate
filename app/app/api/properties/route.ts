export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const search = searchParams.get('search') || ''
    const location = searchParams.get('location') || ''
    const propertyType = searchParams.get('propertyType') || ''
    const minPrice = searchParams.get('minPrice')
    const maxPrice = searchParams.get('maxPrice')
    const bedrooms = searchParams.get('bedrooms')
    const isForRent = searchParams.get('isForRent')
    const isForInvest = searchParams.get('isForInvest')

    const skip = (page - 1) * limit

    const where: any = {}

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { city: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    if (location) {
      where.city = { contains: location, mode: 'insensitive' }
    }

    if (propertyType) {
      where.propertyType = propertyType
    }

    if (minPrice) {
      where.price = { ...where.price, gte: parseFloat(minPrice) }
    }

    if (maxPrice) {
      where.price = { ...where.price, lte: parseFloat(maxPrice) }
    }

    if (bedrooms) {
      where.bedrooms = { gte: parseInt(bedrooms) }
    }

    if (isForRent === 'true') {
      where.isForRent = true
    }

    if (isForInvest === 'true') {
      where.isForInvest = true
    }

    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.property.count({ where })
    ])

    return NextResponse.json({
      properties,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json(
      { error: 'Failed to fetch properties' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const property = await prisma.property.create({
      data: {
        title: body.title,
        description: body.description,
        address: body.address,
        city: body.city,
        state: body.state,
        zipCode: body.zipCode,
        price: body.price,
        bedrooms: body.bedrooms,
        bathrooms: body.bathrooms,
        sqft: body.sqft,
        propertyType: body.propertyType,
        imageUrl: body.imageUrl,
        images: body.images || [],
        tokenPrice: body.tokenPrice,
        totalTokens: body.totalTokens,
        availableTokens: body.availableTokens,
        expectedReturn: body.expectedReturn,
        isForRent: body.isForRent || false,
        isForInvest: body.isForInvest || false
      }
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json(
      { error: 'Failed to create property' },
      { status: 500 }
    )
  }
}