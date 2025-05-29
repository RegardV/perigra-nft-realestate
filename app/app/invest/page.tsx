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
  TrendingUp, 
  DollarSign, 
  BarChart3, 
  PieChart, 
  Target,
  Calculator,
  ArrowUpRight
} from 'lucide-react'
import { mockProperties } from '@/lib/mock-data'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { Property, FilterOptions } from '@/lib/types'

export default function InvestPage() {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const investmentProperties = mockProperties.filter(p => p.isForInvest)
      setFilteredProperties(investmentProperties)
      setIsLoading(false)
    } catch (err) {
      console.error('Error loading investment properties:', err)
      setError('Failed to load investment properties')
      setIsLoading(false)
    }
  }, [])

  const handleFilterChange = (filters: FilterOptions) => {
    try {
      let filtered = mockProperties.filter(p => p.isForInvest)

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

      setFilteredProperties(filtered)
      setError(null)
    } catch (err) {
      console.error('Error filtering properties:', err)
      setError('Failed to filter properties')
    }
  }

  const investmentStats = [
    {
      icon: DollarSign,
      label: "Total Investment Volume",
      value: "$50M+",
      change: "+12.5%"
    },
    {
      icon: BarChart3,
      label: "Average ROI",
      value: "8.5%",
      change: "+2.1%"
    },
    {
      icon: PieChart,
      label: "Active Properties",
      value: "500+",
      change: "+45"
    },
    {
      icon: Target,
      label: "Successful Exits",
      value: "150+",
      change: "+23"
    }
  ]

  const investmentTips = [
    {
      title: "Diversify Your Portfolio",
      description: "Spread investments across different property types and locations to minimize risk."
    },
    {
      title: "Start Small",
      description: "Begin with smaller investments to understand the platform and market dynamics."
    },
    {
      title: "Research Markets",
      description: "Study local market trends and growth potential before making investment decisions."
    },
    {
      title: "Monitor Performance",
      description: "Regularly track your investments and reinvest returns for compound growth."
    }
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
      
      <section className="pt-24 pb-12 bg-gradient-to-br from-accent-brand/10 to-accent-brand-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Real Estate <span className="text-accent-brand">Investment</span> Made Simple
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in tokenized real estate with as little as $100. Build a diversified portfolio and earn passive income through rental distributions and property appreciation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="accent" size="lg" className="shadow-lg">
                <Calculator className="h-5 w-5 mr-2" />
                Investment Calculator
              </Button>
              <Button variant="accent-outline" size="lg">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent-brand" />
                        </div>
                        <div className="flex items-center text-green-600 text-sm">
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          {stat.change}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Investment Opportunities
            </h2>
            <p className="text-muted-foreground">
              Discover vetted properties with strong return potential and start building your real estate portfolio today.
            </p>
          </motion.div>

          <FilterBar 
            onFilterChange={handleFilterChange}
            showInvestmentFilters={true}
          />

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
                  showInvestmentInfo={true}
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

      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment Tips & Strategies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from our experts and maximize your real estate investment returns with these proven strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {tip.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-accent-brand to-accent-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Building Your Real Estate Portfolio Today
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of investors who are already earning passive income through tokenized real estate investments.
            </p>
            <Button 
              variant="accent-outline" 
              size="lg"
              className="bg-white text-accent-brand hover:bg-gray-100 border-white shadow-lg"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Start Investing Now
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}