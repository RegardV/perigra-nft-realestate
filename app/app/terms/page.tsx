"use client"

import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Scale, Shield, AlertTriangle, Users, Mail } from 'lucide-react'

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: "User Accounts and Responsibilities",
      content: [
        "You must be at least 18 years old to use our services",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must provide accurate and complete information when creating your account",
        "You are responsible for all activities that occur under your account",
        "You must notify us immediately of any unauthorized use of your account"
      ]
    },
    {
      icon: Shield,
      title: "Investment Terms",
      content: [
        "All investments carry risk and past performance does not guarantee future results",
        "You acknowledge that real estate investments can lose value",
        "Minimum investment amounts and fees are clearly disclosed before any transaction",
        "Investment returns are not guaranteed and may vary based on property performance",
        "You have the right to sell your tokens subject to market conditions and platform rules"
      ]
    },
    {
      icon: Scale,
      title: "Platform Usage",
      content: [
        "You may not use our platform for any illegal or unauthorized purpose",
        "You agree not to interfere with or disrupt the platform's functionality",
        "You may not attempt to gain unauthorized access to other user accounts",
        "Content you submit must not violate any laws or infringe on others' rights",
        "We reserve the right to suspend or terminate accounts that violate these terms"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimers and Limitations",
      content: [
        "Our platform is provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our liability is limited to the amount you have paid for our services",
        "We do not guarantee the accuracy of third-party information on our platform",
        "Force majeure events may affect our ability to provide services"
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
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our platform. By using Perigra, you agree to be bound by these terms.
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
                  <h2 className="text-2xl font-bold text-foreground">Agreement to Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms of Service ("Terms") govern your use of the Perigra platform and services. 
                    By accessing or using our platform, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to these Terms, please do not use our services. We may update these Terms 
                    from time to time, and your continued use of the platform constitutes acceptance of any changes.
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

      {/* Additional Important Terms */}
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
                  <CardTitle>Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    All content, features, and functionality of our platform are owned by Perigra and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• You may not copy or reproduce our content</li>
                    <li>• Our trademarks may not be used without permission</li>
                    <li>• User-generated content remains your property</li>
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
                  <CardTitle>Termination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">
                    Either party may terminate this agreement at any time. Upon termination, your access to the platform will cease.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• You may close your account at any time</li>
                    <li>• We may suspend accounts for violations</li>
                    <li>• Investment positions remain valid after termination</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Governing Law and Disputes</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. 
                    Any disputes arising from these Terms or your use of our platform will be resolved through binding arbitration.
                  </p>
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
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
                  Questions About These Terms?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms of Service, please contact our legal team.
                </p>
                <div className="space-y-2">
                  <p className="text-accent-brand font-medium">legal@Perigra.com</p>
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