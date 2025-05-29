"use client"

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  UserPlus, 
  Search, 
  DollarSign, 
  TrendingUp,
  Building,
  Shield,
  Users,
  BarChart3,
  Coins,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react'
import CTAButton from '@/components/cta-button'

export default function HowItWorksPage() {
  const investmentSteps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up for free and complete your investor profile. Verify your identity to access all platform features.",
      details: [
        "Quick 5-minute registration",
        "Identity verification process",
        "Set investment preferences",
        "Choose notification settings"
      ]
    },
    {
      step: "02",
      icon: Search,
      title: "Browse Properties",
      description: "Explore our curated selection of investment properties with detailed analytics and market insights.",
      details: [
        "View property details and photos",
        "Analyze expected returns",
        "Review market comparisons",
        "Access property history"
      ]
    },
    {
      step: "03",
      icon: DollarSign,
      title: "Purchase Tokens",
      description: "Buy property tokens starting from just $100. Each token represents fractional ownership in the property.",
      details: [
        "Minimum investment of $100",
        "Secure blockchain transactions",
        "Instant token allocation",
        "Portfolio diversification"
      ]
    },
    {
      step: "04",
      icon: TrendingUp,
      title: "Earn Returns",
      description: "Receive regular rental income distributions and benefit from property appreciation over time.",
      details: [
        "Monthly rental distributions",
        "Property value appreciation",
        "Transparent fee structure",
        "Performance tracking"
      ]
    }
  ]

  const rentalSteps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Create Profile",
      description: "Set up your renter profile with preferences and requirements for your ideal home.",
      details: [
        "Personal information setup",
        "Rental preferences",
        "Budget requirements",
        "Location preferences"
      ]
    },
    {
      step: "02",
      icon: Search,
      title: "Search Properties",
      description: "Use our advanced filters to find properties that match your lifestyle and budget.",
      details: [
        "Advanced search filters",
        "Virtual property tours",
        "Neighborhood insights",
        "Amenity comparisons"
      ]
    },
    {
      step: "03",
      icon: Building,
      title: "Apply Online",
      description: "Submit your rental application with required documents through our secure portal.",
      details: [
        "Digital application process",
        "Document upload system",
        "Background check integration",
        "Application status tracking"
      ]
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Move In",
      description: "Complete the lease agreement and get your keys to start enjoying your new home.",
      details: [
        "Digital lease signing",
        "Move-in coordination",
        "Key handover process",
        "Welcome package"
      ]
    }
  ]

  const platformFeatures = [
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "All transactions are secured by blockchain technology, ensuring transparency and immutability."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a community of investors and renters building wealth together through real estate."
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Access comprehensive market data and analytics to make informed investment decisions."
    },
    {
      icon: Coins,
      title: "Token Liquidity",
      description: "Trade your property tokens on our marketplace for increased liquidity and flexibility."
    }
  ]

  const faqs = [
    {
      question: "What is tokenized real estate?",
      answer: "Tokenized real estate involves converting property ownership into digital tokens on a blockchain. Each token represents a fraction of the property, allowing multiple investors to own shares of a single property."
    },
    {
      question: "What's the minimum investment amount?",
      answer: "You can start investing with as little as $100. This low barrier to entry makes real estate investment accessible to everyone."
    },
    {
      question: "How do I receive rental income?",
      answer: "Rental income is distributed monthly to token holders proportional to their ownership percentage. Payments are made directly to your account."
    },
    {
      question: "Can I sell my tokens?",
      answer: "Yes, you can trade your tokens on our marketplace, providing liquidity that traditional real estate investments don't offer."
    },
    {
      question: "Are the properties professionally managed?",
      answer: "All properties on our platform are professionally managed by experienced property management companies, ensuring optimal performance and tenant satisfaction."
    }
  ]

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
              How <span className="text-accent-brand">Perigra</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our innovative platform makes real estate investment and rental simple, secure, and accessible to everyone.
            </p>
            <div className="flex justify-center">
              <Button variant="accent" size="lg" className="shadow-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo Video
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Investment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start building your real estate portfolio in four simple steps
            </p>
          </motion.div>

          <div className="space-y-12">
            {investmentSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-accent-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center mt-2">
                          <Icon className="h-6 w-6 text-accent-brand" />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground">
                      {step.description}
                    </p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent-brand flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg p-8">
                      <div className="w-24 h-24 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-12 w-12 text-accent-brand" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          Step {step.step}
                        </h4>
                        <p className="text-muted-foreground">
                          {step.title}
                        </p>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )
            })}
          </div>
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
              Rental Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find and secure your perfect rental home with our streamlined process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-accent-brand rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-accent-brand" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-center">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent-brand flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced technology and features that make Perigra the leading real estate platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our platform
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of users who are already building wealth and finding homes through Perigra.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <CTAButton
                href="/signup"
                variant="accent-outline"
                size="lg"
                className="bg-white text-accent-brand hover:bg-gray-100 border-white"
              >
                Start Investing
              </CTAButton>
              <CTAButton
                href="/rent"
                variant="accent-outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Find Rentals
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}