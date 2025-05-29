"use client"

// Force rebuild - fixed hydration issue with renamed properties
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CTAButton from '@/components/cta-button'
import PropertyCard from '@/components/property-card'
import Testimonials from '@/components/testimonials'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  Building, 
  Shield, 
  Users, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Target
} from 'lucide-react'
import { mockProperties as importedProperties, mockTestimonials } from '@/lib/mock-data'

export default function HomePage() {
  const featuredProperties = importedProperties.slice(0, 3)

  const features = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Blockchain-powered transactions ensure complete transparency and security for all investments."
    },
    {
      icon: DollarSign,
      title: "Low Minimum Investment",
      description: "Start investing in real estate with as little as $100 through our tokenization platform."
    },
    {
      icon: BarChart3,
      title: "Passive Income",
      description: "Earn regular rental income distributions and benefit from property appreciation over time."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a community of investors and renters building wealth together through real estate."
    }
  ]

  const stats = [
    {
      value: "$50M+",
      label: "Total Investment Volume",
      description: "Capital deployed through our platform"
    },
    {
      value: "500+",
      label: "Properties Listed",
      description: "Curated real estate opportunities"
    },
    {
      value: "10K+",
      label: "Active Users",
      description: "Investors and renters worldwide"
    },
    {
      value: "8.5%",
      label: "Average ROI",
      description: "Annual return for our investors"
    }
  ]

  const benefits = [
    "Fractional ownership starting at $100",
    "Automated rental income distribution",
    "Professional property management",
    "Liquidity through token trading",
    "Diversified portfolio opportunities",
    "Transparent fee structure"
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Image with Parallax Effect - Updated to Residential Focus */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-gradient-to-br from-accent-brand/10 to-accent-brand-dark/10">
            <Image
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Beautiful residential neighborhood with modern homes and tree-lined streets"
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/65" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-brand to-accent-brand-dark rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-accent-brand to-accent-brand-dark bg-clip-text text-transparent">
                    Perigra
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  The Future of{' '}
                  <span className="text-accent-brand">Real Estate</span>{' '}
                  Investment
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Democratizing real estate through blockchain technology. Invest in tokenized properties, 
                  earn passive income, and build wealth with fractional ownership starting at just $100.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <CTAButton
                  href="/invest"
                  variant="accent"
                  size="lg"
                  className="shadow-lg"
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Start Investing
                </CTAButton>
                <CTAButton
                  href="/rent"
                  variant="accent-outline"
                  size="lg"
                >
                  <Building className="h-5 w-5 mr-2" />
                  Find Rentals
                </CTAButton>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-accent-brand" />
                  <span>Blockchain Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-accent-brand" />
                  <span>10K+ Investors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-accent-brand fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Updated with Residential Focus */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square bg-gradient-to-br from-accent-brand/20 to-accent-brand-dark/20 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern residential home with beautiful architecture representing real estate investment opportunities"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-brand/30 to-transparent" />
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                >
                  <div className="text-2xl font-bold text-accent-brand">$50M+</div>
                  <div className="text-xs text-muted-foreground">Total Volume</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                >
                  <div className="text-2xl font-bold text-accent-brand">8.5%</div>
                  <div className="text-xs text-muted-foreground">Avg ROI</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands of Investors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our growing community of real estate investors and see why Perigra is the leading platform for tokenized real estate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-bold text-accent-brand mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Perigra?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our innovative platform combines the best of traditional real estate with cutting-edge blockchain technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
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
                  <Card className="h-full text-center bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-accent-brand" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
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

      {/* How It Works Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with real estate investment in just three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse Properties",
                description: "Explore our curated selection of investment properties with detailed analytics and market insights.",
                icon: Building
              },
              {
                step: "02",
                title: "Purchase Tokens",
                description: "Buy property tokens starting from just $100. Each token represents fractional ownership in the property.",
                icon: DollarSign
              },
              {
                step: "03",
                title: "Earn Returns",
                description: "Receive regular rental income distributions and benefit from property appreciation over time.",
                icon: TrendingUp
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-accent-brand rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-brand-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <CTAButton
              href="/how-it-works"
              variant="accent-outline"
              size="lg"
            >
              Learn More
              <ArrowRight className="h-4 w-4 ml-2" />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Investment Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover hand-picked properties with strong return potential and start building your portfolio today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property: any, index: number) => (
              <PropertyCard
                key={property.id}
                property={property}
                showInvestmentInfo={true}
                className={`animate-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <CTAButton
              href="/listings"
              variant="accent"
              size="lg"
            >
              View All Properties
              <ArrowRight className="h-4 w-4 ml-2" />
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Unlock the Power of Real Estate Investment
              </h2>
              <p className="text-lg text-muted-foreground">
                Traditional real estate investment has been limited to those with significant capital. 
                Perigra changes that by making property investment accessible to everyone through tokenization.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
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

              <CTAButton
                href="/invest"
                variant="accent"
                size="lg"
              >
                <TrendingUp className="h-5 w-5 mr-2" />
                Start Your Journey
              </CTAButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80"
                alt="Beautiful residential properties showcasing real estate investment opportunities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-brand/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-brand to-accent-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of investors who are already building wealth through tokenized real estate. 
              Start with as little as $100 and watch your portfolio grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <CTAButton
                href="/signup"
                variant="accent-outline"
                size="lg"
                className="bg-white text-accent-brand hover:bg-gray-100 border-white"
              >
                <Users className="h-5 w-5 mr-2" />
                Get Started Free
              </CTAButton>
              <CTAButton
                href="/how-it-works"
                variant="accent-outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Zap className="h-5 w-5 mr-2" />
                Learn How It Works
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}