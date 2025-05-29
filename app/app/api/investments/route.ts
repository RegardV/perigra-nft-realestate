export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, propertyId, tokens, amount } = body

    // Check if property exists and has available tokens
    const property = await prisma.property.findUnique({
      where: { id: propertyId }
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    if (property.availableTokens < tokens) {
      return NextResponse.json(
        { error: 'Not enough tokens available' },
        { status: 400 }
      )
    }

    // Create investment and update property
    const [investment] = await prisma.$transaction([
      prisma.investment.create({
        data: {
          userId,
          propertyId,
          tokens,
          amount
        }
      }),
      prisma.property.update({
        where: { id: propertyId },
        data: {
          availableTokens: property.availableTokens - tokens
        }
      })
    ])

    return NextResponse.json(investment, { status: 201 })
  } catch (error) {
    console.error('Error creating investment:', error)
    return NextResponse.json(
      { error: 'Failed to create investment' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    const where = userId ? { userId } : {}

    const investments = await prisma.investment.findMany({
      where,
      include: {
        property: true,
        user: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(investments)
  } catch (error) {
    console.error('Error fetching investments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch investments' },
      { status: 500 }
    )
  }
}