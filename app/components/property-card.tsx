"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  TrendingUp, 
  DollarSign,
  Eye
} from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { Property } from '@/lib/types'

interface PropertyCardProps {
  property: Property
  showInvestmentInfo?: boolean
  className?: string
}

const PropertyCard = ({ property, showInvestmentInfo = true, className = "" }: PropertyCardProps) => {
  // Safely handle missing property data
  if (!property) {
    return null
  }

  const {
    id,
    title = 'Property Title',
    address = '',
    city = '',
    state = '',
    price = 0,
    bedrooms = 0,
    bathrooms = 0,
    sqft = 0,
    propertyType = 'property',
    imageUrl = '',
    tokenPrice = 0,
    availableTokens = 0,
    expectedReturn = 0,
    isForRent = false,
    isForInvest = false
  } = property

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group ${className}`}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Property Image */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={(e) => {
                console.error('Image failed to load:', imageUrl)
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
          
          {/* Property Type Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-accent-brand text-white px-2 py-1 rounded-md text-xs font-medium capitalize">
              {propertyType}
            </span>
          </div>

          {/* Availability Badges */}
          <div className="absolute top-3 right-3 flex flex-col space-y-1">
            {isForRent && (
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                For Rent
              </span>
            )}
            {isForInvest && (
              <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                For Investment
              </span>
            )}
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Title and Location */}
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-accent-brand transition-colors">
              {title}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{address && city && state ? `${address}, ${city}, ${state}` : 'Location not specified'}</span>
            </div>
          </div>

          {/* Property Details */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                <span>{bathrooms}</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                <span>{formatNumber(sqft)} sqft</span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-accent-brand">
            {formatCurrency(price)}
          </div>

          {/* Investment Information */}
          {showInvestmentInfo && isForInvest && tokenPrice > 0 && (
            <div className="bg-accent-brand/10 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span>Token Price</span>
                </div>
                <span className="font-medium">{formatCurrency(tokenPrice)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-muted-foreground">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>Expected Return</span>
                </div>
                <span className="font-medium text-green-600">{expectedReturn}%</span>
              </div>
              <div className="text-xs text-muted-foreground">
                {formatNumber(availableTokens)} tokens available
              </div>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 pt-0 flex space-x-2">
          <Link href={`/listings/${id}`} className="flex-1">
            <Button variant="accent-outline" size="sm" className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
          {isForInvest && (
            <Link href={`/invest?property=${id}`} className="flex-1">
              <Button variant="accent" size="sm" className="w-full">
                <TrendingUp className="h-4 w-4 mr-2" />
                Invest
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default PropertyCard