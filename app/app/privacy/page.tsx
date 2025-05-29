"use client"

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, Users, FileText, Mail } from 'lucide-react'

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Financial information for investment transactions and identity verification",
        "Property preferences and search history to improve our recommendations",
        "Usage data and analytics to enhance our platform performance",
        "Communication records when you contact our support team"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our real estate investment and rental services",
        "To process transactions and manage your investment portfolio",
        "To communicate with you about your account and our services",
        "To improve our platform and develop new features",
        "To comply with legal obligations and prevent fraud"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "We may share information with service providers who help us operate our platform",
        "Property managers and landlords may receive necessary information for rental applications",
        "We may disclose information when required by law or to protect our rights",
        "Anonymous, aggregated data may be used for research and analytics"
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data in transit and at rest",
        "Our platform undergoes regular security audits and penetration testing",
        "Access to personal information is restricted to authorized personnel only",
        "We maintain secure data centers with physical and digital security measures",
        "All financial transactions are processed through secure, PCI-compliant systems"
      ]
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
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-accent-brand" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    At Provena, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                    real estate investment and rental platform.
                  </p>
                  <p>
                    By using our services, you agree to the collection and use of information in accordance with this policy. 
                    We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent-brand" />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent-brand rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
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

      {/* Additional Sections */}
      <section className="py-12 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">You have the right to:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Opt-out of marketing communications</li>
                    <li>• Data portability</li>
                  </ul>
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
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">We use cookies to:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Remember your preferences</li>
                    <li>• Analyze site usage</li>
                    <li>• Provide personalized content</li>
                    <li>• Ensure platform security</li>
                    <li>• Improve user experience</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
                  Questions About Privacy?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please don't hesitate to contact us.
                </p>
                <div className="space-y-2">
                  <p className="text-accent-brand font-medium">privacy@provena.com</p>
                  <p className="text-muted-foreground">+1 (555) 012-3456</p>
                  <p className="text-muted-foreground">123 Real Estate Ave, NY 10001</p>
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