"use client"

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cookie, Settings, Shield, BarChart3, Target, Mail } from 'lucide-react'

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for the platform to function properly",
      examples: [
        "Authentication and login sessions",
        "Security and fraud prevention",
        "Basic site functionality",
        "User preferences and settings"
      ],
      required: true
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "Help us understand how users interact with our platform",
      examples: [
        "Page views and user journeys",
        "Feature usage statistics",
        "Performance monitoring",
        "Error tracking and debugging"
      ],
      required: false
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and content",
      examples: [
        "Personalized content recommendations",
        "Targeted advertising",
        "Social media integration",
        "Campaign effectiveness tracking"
      ],
      required: false
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enhance your experience with additional features",
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Saved searches and filters",
        "Chat and support features"
      ],
      required: false
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
            <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto">
              <Cookie className="h-8 w-8 text-accent-brand" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our platform.
            </p>
            <div className="text-sm text-muted-foreground">
              Last updated: January 1, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">What Are Cookies?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our platform.
                  </p>
                  <p>
                    We use both first-party cookies (set by Provena) and third-party cookies (set by our partners) 
                    to enhance functionality, analyze usage, and provide personalized content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Types of Cookies We Use</h2>
            <p className="text-lg text-muted-foreground">
              We categorize cookies based on their purpose and functionality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-accent-brand" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{type.title}</CardTitle>
                            {type.required && (
                              <span className="text-xs bg-accent-brand/20 text-accent-brand px-2 py-1 rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mt-2">{type.description}</p>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium text-foreground mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-brand rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-12 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Managing Your Cookie Preferences</h2>
            <p className="text-lg text-muted-foreground">
              You have control over which cookies you accept
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Browser Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    You can control cookies through your browser settings:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set cookie expiration preferences</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    Note: Blocking essential cookies may affect platform functionality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Platform Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Manage your cookie preferences directly on our platform:
                  </p>
                  <div className="space-y-3">
                    <Button variant="accent" size="sm" className="w-full">
                      <Settings className="h-4 w-4 mr-2" />
                      Cookie Preferences
                    </Button>
                    <Button variant="accent-outline" size="sm" className="w-full">
                      View Cookie Details
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Changes take effect immediately and are saved to your account.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Cookies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We work with trusted third-party services that may set their own cookies on your device. 
                    These include analytics providers, advertising networks, and social media platforms.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Analytics</h4>
                      <p className="text-sm">Google Analytics, Mixpanel</p>
                    </div>
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Advertising</h4>
                      <p className="text-sm">Google Ads, Facebook Pixel</p>
                    </div>
                    <div className="text-center p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Support</h4>
                      <p className="text-sm">Intercom, Zendesk</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-accent-brand" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Questions About Cookies?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about our use of cookies or this policy, please contact us.
                </p>
                <div className="space-y-2">
                  <p className="text-accent-brand font-medium">privacy@provena.com</p>
                  <p className="text-muted-foreground">+1 (555) 012-3456</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}