"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  TrendingUp, 
  DollarSign,
  Calendar,
  Shield,
  Heart,
  Share2,
  ArrowLeft,
  Building,
  Users,
  BarChart3
} from 'lucide-react'
import { mockProperties } from '@/lib/mock-data'
import { formatCurrency, formatNumber } from '@/lib/utils'
import Link from 'next/link'

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = params.id as string
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const property = mockProperties.find(p => p.id === propertyId)

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Property Not Found</h1>
          <Link href="/listings">
            <Button variant="accent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const allImages = [property.imageUrl, ...property.images]

  const investmentDetails = [
    {
      label: "Token Price",
      value: formatCurrency(property.tokenPrice),
      icon: DollarSign
    },
    {
      label: "Total Tokens",
      value: formatNumber(property.totalTokens),
      icon: Building
    },
    {
      label: "Available Tokens",
      value: formatNumber(property.availableTokens),
      icon: Users
    },
    {
      label: "Expected Return",
      value: `${property.expectedReturn}%`,
      icon: BarChart3
    }
  ]

  const propertyFeatures = [
    "Professional property management",
    "24/7 maintenance support",
    "Online rent payment system",
    "Secure building access",
    "Community amenities",
    "Pet-friendly options"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back Navigation */}
      <section className="pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/listings">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Listings
            </Button>
          </Link>
        </div>
      </section>

      {/* Property Images */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src={allImages[currentImageIndex]}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                
                {/* Property Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-brand text-white px-3 py-1 rounded-md text-sm font-medium capitalize">
                    {property.propertyType}
                  </span>
                </div>

                {/* Availability Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {property.isForRent && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      For Rent
                    </span>
                  )}
                  {property.isForInvest && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      For Investment
                    </span>
                  )}
                </div>

                {/* Image Navigation */}
                {allImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {allImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="space-y-4">
              {allImages.slice(1, 4).map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setCurrentImageIndex(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Basic Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{property.address}, {property.city}, {property.state} {property.zipCode}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-3xl font-bold text-accent-brand">
                  {formatCurrency(property.price)}
                </div>

                {/* Property Stats */}
                <div className="flex items-center space-x-6 text-muted-foreground">
                  <div className="flex items-center">
                    <Bed className="h-5 w-5 mr-2" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-5 w-5 mr-2" />
                    <span>{formatNumber(property.sqft)} sqft</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4">Property Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {propertyFeatures.map((feature, index) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-accent-brand flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Investment Details */}
              {property.isForInvest && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-accent-brand/5 border border-accent-brand/20 rounded-lg p-6"
                >
                  <h2 className="text-xl font-semibold text-foreground mb-4">Investment Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {investmentDetails.map((detail) => {
                      const Icon = detail.icon
                      return (
                        <div key={detail.label} className="text-center">
                          <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <Icon className="h-6 w-6 text-accent-brand" />
                          </div>
                          <div className="text-lg font-bold text-foreground">
                            {detail.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {detail.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center">Interested in this property?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {property.isForRent && (
                      <Button variant="accent" size="lg" className="w-full">
                        <Building className="h-5 w-5 mr-2" />
                        Schedule Viewing
                      </Button>
                    )}
                    {property.isForInvest && (
                      <Button variant="accent" size="lg" className="w-full">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Start Investing
                      </Button>
                    )}
                    <Button variant="accent-outline" size="lg" className="w-full">
                      <Calendar className="h-5 w-5 mr-2" />
                      Contact Agent
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built</span>
                      <span className="font-medium">2020</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Parking</span>
                      <span className="font-medium">2 Spaces</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pet Policy</span>
                      <span className="font-medium">Pet Friendly</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}