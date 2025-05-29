export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const property = await prisma.property.findUnique({
      where: { id: params.id },
      include: {
        investments: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        },
        rentals: {
          include: {
            user: {
              select: { id: true, name: true, email: true }
            }
          }
        }
      }
    })

    if (!property) {
      return NextResponse.json(
        { error: 'Property not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error fetching property:', error)
    return NextResponse.json(
      { error: 'Failed to fetch property' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    const property = await prisma.property.update({
      where: { id: params.id },
      data: body
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error updating property:', error)
    return NextResponse.json(
      { error: 'Failed to update property' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.property.delete({
      where: { id: params.id }
    })

    return NextResponse.json({ message: 'Property deleted successfully' })
  } catch (error) {
    console.error('Error deleting property:', error)
    return NextResponse.json(
      { error: 'Failed to delete property' },
      { status: 500 }
    )
  }
}