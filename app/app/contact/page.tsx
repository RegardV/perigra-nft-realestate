"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Building,
  Users
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Provena Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:info@provena.com?subject=${subject}&body=${body}`
    
    // Open default email client
    window.location.href = mailtoLink
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@provena.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 012-3456",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Real Estate Ave, NY 10001",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 8am-6pm EST",
      description: "We're here to help"
    }
  ]

  const departments = [
    {
      icon: Building,
      title: "Investment Support",
      email: "investments@provena.com",
      description: "Questions about investing and portfolio management"
    },
    {
      icon: Users,
      title: "Rental Support",
      email: "rentals@provena.com",
      description: "Help with finding and renting properties"
    },
    {
      icon: MessageSquare,
      title: "General Inquiries",
      email: "info@provena.com",
      description: "General questions and support"
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
              Contact <span className="text-accent-brand">Provena</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you with your real estate investment and rental needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-accent-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-accent-brand font-medium mb-2">
                        {info.details}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      />
                    </div>

                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Contact by Department
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to the right team for faster assistance.
                </p>
              </div>

              {departments.map((dept, index) => {
                const Icon = dept.icon
                return (
                  <motion.div
                    key={dept.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-6 w-6 text-accent-brand" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {dept.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {dept.description}
                            </p>
                            <a
                              href={`mailto:${dept.email}`}
                              className="text-accent-brand hover:text-accent-brand-dark font-medium transition-colors"
                            >
                              {dept.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
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
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
              },
              {
                question: "Can I schedule a call with your team?",
                answer: "Yes! Contact us through any of the methods above and we'll be happy to schedule a call at your convenience."
              },
              {
                question: "Do you offer support outside business hours?",
                answer: "While our main support hours are Monday-Friday 8am-6pm EST, you can always send us an email and we'll respond as soon as possible."
              }
            ].map((faq, index) => (
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

      <Footer />
    </div>
  )
}