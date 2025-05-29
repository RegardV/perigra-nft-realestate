"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Search, 
  Filter, 
  MapPin, 
  Home, 
  DollarSign,
  Bed,
  X
} from 'lucide-react'
import { FilterOptions } from '@/lib/types'

interface FilterBarProps {
  onFilterChange: (filters: FilterOptions) => void
  showInvestmentFilters?: boolean
}

const FilterBar = ({ onFilterChange, showInvestmentFilters = false }: FilterBarProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    minReturn: '',
    maxReturn: '',
    availability: ''
  })

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    try {
      const newFilters = { ...filters, [key]: value }
      setFilters(newFilters)
      onFilterChange(newFilters)
    } catch (error) {
      console.error('Error updating filters:', error)
    }
  }

  const clearFilters = () => {
    try {
      const clearedFilters: FilterOptions = {
        search: '',
        location: '',
        propertyType: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        bathrooms: '',
        minReturn: '',
        maxReturn: '',
        availability: ''
      }
      setFilters(clearedFilters)
      onFilterChange(clearedFilters)
    } catch (error) {
      console.error('Error clearing filters:', error)
    }
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-lg p-4 mb-8"
    >
      {/* Main Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full lg:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search properties..."
            value={filters.search || ''}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Location Filter */}
        <div className="relative w-full lg:w-48">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
          <Select 
            value={filters.location || 'all-locations'} 
            onValueChange={(value) => handleFilterChange('location', value === 'all-locations' ? '' : value)}
          >
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-locations">All Locations</SelectItem>
              <SelectItem value="new-york">New York, NY</SelectItem>
              <SelectItem value="austin">Austin, TX</SelectItem>
              <SelectItem value="miami">Miami, FL</SelectItem>
              <SelectItem value="portland">Portland, OR</SelectItem>
              <SelectItem value="aspen">Aspen, CO</SelectItem>
              <SelectItem value="boston">Boston, MA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type Filter */}
        <div className="relative w-full lg:w-48">
          <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
          <Select 
            value={filters.propertyType || 'all-types'} 
            onValueChange={(value) => handleFilterChange('propertyType', value === 'all-types' ? '' : value)}
          >
            <SelectTrigger className="pl-10">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="loft">Loft</SelectItem>
              <SelectItem value="cabin">Cabin</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Advanced Filters Toggle */}
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full lg:w-auto"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="w-full lg:w-auto text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-border/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Price Range
              </label>
              <div className="flex space-x-2">
                <Input
                  placeholder="Min"
                  value={filters.minPrice || ''}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                  type="number"
                />
                <Input
                  placeholder="Max"
                  value={filters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                  type="number"
                />
              </div>
            </div>

            {/* Bedrooms */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                Bedrooms
              </label>
              <Select 
                value={filters.bedrooms || 'any-bedrooms'} 
                onValueChange={(value) => handleFilterChange('bedrooms', value === 'any-bedrooms' ? '' : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-bedrooms">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Bathrooms
              </label>
              <Select 
                value={filters.bathrooms || 'any-bathrooms'} 
                onValueChange={(value) => handleFilterChange('bathrooms', value === 'any-bathrooms' ? '' : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any-bathrooms">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Availability
              </label>
              <Select 
                value={filters.availability || 'all-availability'} 
                onValueChange={(value) => handleFilterChange('availability', value === 'all-availability' ? '' : value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-availability">All</SelectItem>
                  <SelectItem value="rent">For Rent</SelectItem>
                  <SelectItem value="invest">For Investment</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Investment Filters */}
            {showInvestmentFilters && (
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-foreground">
                  Expected Return (%)
                </label>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Min %"
                    value={filters.minReturn || ''}
                    onChange={(e) => handleFilterChange('minReturn', e.target.value)}
                    type="number"
                  />
                  <Input
                    placeholder="Max %"
                    value={filters.maxReturn || ''}
                    onChange={(e) => handleFilterChange('maxReturn', e.target.value)}
                    type="number"
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default FilterBar