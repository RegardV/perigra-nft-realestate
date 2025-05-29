"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PropertyCard from '@/components/property-card'
import FilterBar from '@/components/filter-bar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  MapPin, 
  Calendar, 
  Shield, 
  Heart,
  Search,
  CheckCircle
} from 'lucide-react'
import { mockProperties } from '@/lib/mock-data'
import { Property, FilterOptions } from '@/lib/types'

export default function RentPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize filtered properties on component mount
  useEffect(() => {
    try {
      const rentalProperties = mockProperties.filter(p => p.isForRent)
      setFilteredProperties(rentalProperties)
      setIsLoading(false)
    } catch (err) {
      console.error('Error loading rental properties:', err)
      setError('Failed to load rental properties')
      setIsLoading(false)
    }
  }, [])

  const handleFilterChange = (filters: FilterOptions) => {
    try {
      let filtered = mockProperties.filter(p => p.isForRent)

      // Apply filters safely with proper validation
      if (filters?.search && filters.search.trim() !== '') {
        const searchTerm = filters.search.toLowerCase().trim()
        filtered = filtered.filter(p => 
          (p.title && p.title.toLowerCase().includes(searchTerm)) ||
          (p.city && p.city.toLowerCase().includes(searchTerm)) ||
          (p.description && p.description.toLowerCase().includes(searchTerm))
        )
      }

      if (filters?.location && filters.location.trim() !== '') {
        const locationTerm = filters.location.toLowerCase().trim()
        filtered = filtered.filter(p => 
          (p.city && p.city.toLowerCase().includes(locationTerm)) ||
          (p.state && p.state.toLowerCase().includes(locationTerm))
        )
      }

      if (filters?.propertyType && filters.propertyType.trim() !== '') {
        filtered = filtered.filter(p => p.propertyType === filters.propertyType)
      }

      if (filters?.minPrice && filters.minPrice.trim() !== '') {
        const minPrice = parseFloat(filters.minPrice)
        if (!isNaN(minPrice) && minPrice > 0) {
          filtered = filtered.filter(p => p.price >= minPrice)
        }
      }

      if (filters?.maxPrice && filters.maxPrice.trim() !== '') {
        const maxPrice = parseFloat(filters.maxPrice)
        if (!isNaN(maxPrice) && maxPrice > 0) {
          filtered = filtered.filter(p => p.price <= maxPrice)
        }
      }

      if (filters?.bedrooms && filters.bedrooms.trim() !== '') {
        const minBedrooms = parseInt(filters.bedrooms)
        if (!isNaN(minBedrooms) && minBedrooms > 0) {
          filtered = filtered.filter(p => p.bedrooms >= minBedrooms)
        }
      }

      if (filters?.bathrooms && filters.bathrooms.trim() !== '') {
        const minBathrooms = parseInt(filters.bathrooms)
        if (!isNaN(minBathrooms) && minBathrooms > 0) {
          filtered = filtered.filter(p => p.bathrooms >= minBathrooms)
        }
      }

      setFilteredProperties(filtered)
      setError(null)
    } catch (err) {
      console.error('Error filtering properties:', err)
      setError('Failed to filter properties')
    }
  }

  const rentalFeatures = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "All rental properties are thoroughly vetted and verified for quality and safety."
    },
    {
      icon: Calendar,
      title: "Flexible Leasing",
      description: "Choose from short-term and long-term rental options that fit your lifestyle."
    },
    {
      icon: Building,
      title: "Premium Locations",
      description: "Access to prime real estate locations in major cities and growing markets."
    },
    {
      icon: Heart,
      title: "Tenant Support",
      description: "24/7 customer support and maintenance services for all our rental properties."
    }
  ]

  const rentalBenefits = [
    "Professional property management",
    "Online rent payment system",
    "Quick application process",
    "Transparent pricing",
    "Maintenance request portal",
    "Community amenities access"
  ]

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-12 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Error Loading Page</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={() => window.location.reload()} variant="accent">
            Try Again
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-500/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Find Your Perfect <span className="text-accent-brand">Rental Home</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover premium rental properties in prime locations. From modern apartments to luxury homes, find the perfect place to call home with transparent pricing and professional management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="accent" size="lg" className="shadow-lg">
                <Search className="h-5 w-5 mr-2" />
                Start Your Search
              </Button>
              <Button variant="accent-outline" size="lg">
                <MapPin className="h-5 w-5 mr-2" />
                Browse by Location
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rental Features */}
      <section className="py-12 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rentalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-accent-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rental Properties */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Available Rental Properties
            </h2>
            <p className="text-muted-foreground">
              Browse our curated selection of rental properties in prime locations with professional management and transparent pricing.
            </p>
          </motion.div>

          <FilterBar onFilterChange={handleFilterChange} />

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-64 mb-4"></div>
                  <div className="bg-muted rounded h-4 mb-2"></div>
                  <div className="bg-muted rounded h-4 w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  showInvestmentInfo={false}
                  className={`animate-delay-${(index % 3 + 1) * 100}`}
                />
              ))}
            </div>
          )}

          {!isLoading && filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-muted-foreground text-lg">
                No properties match your current filters. Try adjusting your search criteria.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Rental Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes finding and securing your rental home quick and hassle-free.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Search & Filter",
                  description: "Use our advanced filters to find properties that match your preferences and budget."
                },
                {
                  step: "02",
                  title: "Schedule Viewing",
                  description: "Book virtual or in-person tours to explore properties that interest you."
                },
                {
                  step: "03",
                  title: "Apply Online",
                  description: "Submit your application with required documents through our secure online portal."
                },
                {
                  step: "04",
                  title: "Move In",
                  description: "Complete the lease agreement and get your keys to start enjoying your new home."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-accent-brand rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Rental Benefits
              </h3>
              <div className="space-y-4">
                {rentalBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent-brand flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Find Your Dream Rental?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Start your search today and discover premium rental properties with professional management and transparent pricing.
            </p>
            <Button 
              variant="accent-outline" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white shadow-lg"
            >
              <Building className="h-5 w-5 mr-2" />
              Start Your Search
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}