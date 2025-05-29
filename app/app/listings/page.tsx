"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PropertyCard from '@/components/property-card'
import FilterBar from '@/components/filter-bar'
import { Button } from '@/components/ui/button'
import { 
  List, 
  Grid3X3, 
  SortAsc, 
  SortDesc,
  MapPin
} from 'lucide-react'
import { mockProperties } from '@/lib/mock-data'
import { Property, FilterOptions } from '@/lib/types'

export default function ListingsPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<'date' | 'price' | 'return'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Initialize properties on component mount
  useEffect(() => {
    try {
      setFilteredProperties([...mockProperties])
      setIsLoading(false)
    } catch (err) {
      console.error('Error loading properties:', err)
      setError('Failed to load properties')
      setIsLoading(false)
    }
  }, [])

  const handleFilterChange = (filters: FilterOptions) => {
    try {
      let filtered = [...mockProperties]

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

      if (filters?.availability && filters.availability.trim() !== '') {
        if (filters.availability === 'rent') {
          filtered = filtered.filter(p => p.isForRent)
        } else if (filters.availability === 'invest') {
          filtered = filtered.filter(p => p.isForInvest)
        } else if (filters.availability === 'both') {
          filtered = filtered.filter(p => p.isForRent && p.isForInvest)
        }
      }

      if (filters?.minReturn && filters.minReturn.trim() !== '') {
        const minReturn = parseFloat(filters.minReturn)
        if (!isNaN(minReturn) && minReturn > 0) {
          filtered = filtered.filter(p => p.expectedReturn >= minReturn)
        }
      }

      if (filters?.maxReturn && filters.maxReturn.trim() !== '') {
        const maxReturn = parseFloat(filters.maxReturn)
        if (!isNaN(maxReturn) && maxReturn > 0) {
          filtered = filtered.filter(p => p.expectedReturn <= maxReturn)
        }
      }

      // Apply sorting
      filtered.sort((a, b) => {
        let aValue: number, bValue: number
        
        switch (sortBy) {
          case 'price':
            aValue = a.price || 0
            bValue = b.price || 0
            break
          case 'return':
            aValue = a.expectedReturn || 0
            bValue = b.expectedReturn || 0
            break
          case 'date':
          default:
            aValue = new Date(a.createdAt || Date.now()).getTime()
            bValue = new Date(b.createdAt || Date.now()).getTime()
            break
        }

        if (sortOrder === 'asc') {
          return aValue - bValue
        } else {
          return bValue - aValue
        }
      })

      setFilteredProperties(filtered)
      setError(null)
    } catch (err) {
      console.error('Error filtering properties:', err)
      setError('Failed to filter properties')
    }
  }

  const handleSortChange = (newSortBy: 'date' | 'price' | 'return') => {
    try {
      if (sortBy === newSortBy) {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
      } else {
        setSortBy(newSortBy)
        setSortOrder('desc')
      }
      
      // Re-apply current filters with new sorting
      handleFilterChange({})
    } catch (err) {
      console.error('Error sorting properties:', err)
    }
  }

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
      <section className="pt-24 pb-12 bg-gradient-to-br from-accent-brand/10 to-accent-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Property <span className="text-accent-brand">Listings</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of investment and rental properties. Use advanced filters to find exactly what you're looking for.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{filteredProperties.length} properties available</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar 
            onFilterChange={handleFilterChange}
            showInvestmentFilters={true}
          />

          {/* View Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0"
          >
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Showing {filteredProperties.length} properties
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Sort Controls */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button
                  variant={sortBy === 'date' ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => handleSortChange('date')}
                  className="flex items-center space-x-1"
                >
                  <span>Date</span>
                  {sortBy === 'date' && (
                    sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant={sortBy === 'price' ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => handleSortChange('price')}
                  className="flex items-center space-x-1"
                >
                  <span>Price</span>
                  {sortBy === 'price' && (
                    sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant={sortBy === 'return' ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => handleSortChange('return')}
                  className="flex items-center space-x-1"
                >
                  <span>Return</span>
                  {sortBy === 'return' && (
                    sortOrder === 'asc' ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'accent' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="p-2"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Properties Grid/List */}
          {isLoading ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-64 mb-4"></div>
                  <div className="bg-muted rounded h-4 mb-2"></div>
                  <div className="bg-muted rounded h-4 w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProperties.map((property, index) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  showInvestmentInfo={true}
                  className={`animate-delay-${(index % 6 + 1) * 100}`}
                />
              ))}
            </div>
          )}

          {!isLoading && filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-muted-foreground text-lg mb-4">
                No properties match your current filters.
              </div>
              <Button 
                variant="accent-outline" 
                onClick={() => handleFilterChange({})}
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}

          {/* Load More Button */}
          {!isLoading && filteredProperties.length > 0 && filteredProperties.length >= 12 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="accent-outline" size="lg">
                Load More Properties
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}