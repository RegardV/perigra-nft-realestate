"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Mail, 
  ArrowLeft, 
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link for password reset request
    const subject = encodeURIComponent('Password Reset Request - Provena')
    const body = encodeURIComponent(
      `I would like to reset my password for my Provena account.\n\nEmail: ${email}\n\nPlease send me instructions to reset my password.`
    )
    const mailtoLink = `mailto:support@provena.com?subject=${subject}&body=${body}`
    
    // Open default email client
    window.location.href = mailtoLink
    setIsSubmitted(true)
  }

  const steps = [
    {
      icon: Mail,
      title: "Enter Your Email",
      description: "Provide the email address associated with your account"
    },
    {
      icon: Shield,
      title: "Check Your Inbox",
      description: "We'll send you password reset instructions"
    },
    {
      icon: CheckCircle,
      title: "Reset Password",
      description: "Follow the link to create a new secure password"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <section className="pt-24 pb-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <Link href="/login">
                  <Button variant="ghost" className="mb-6">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Login
                  </Button>
                </Link>
                
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Forgot Your Password?
                </h1>
                <p className="text-xl text-muted-foreground">
                  No worries! We'll help you reset your password and get back to managing your real estate investments.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">How it works:</h2>
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-10 h-10 bg-accent-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-accent-brand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Right Side - Reset Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
                {!isSubmitted ? (
                  <>
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl font-bold text-foreground">
                        Reset Password
                      </CardTitle>
                      <p className="text-muted-foreground">
                        Enter your email address and we'll send you reset instructions
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        <Button type="submit" variant="accent" size="lg" className="w-full">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Reset Instructions
                        </Button>

                        <div className="text-center">
                          <span className="text-muted-foreground">Remember your password? </span>
                          <Link 
                            href="/login" 
                            className="text-accent-brand hover:text-accent-brand-dark font-medium transition-colors"
                          >
                            Sign in
                          </Link>
                        </div>
                      </form>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        Check Your Email
                      </CardTitle>
                      <p className="text-muted-foreground">
                        We've sent password reset instructions to {email}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>Didn't receive the email? Check your spam folder</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>The reset link will expire in 24 hours</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button 
                          variant="accent-outline" 
                          size="lg" 
                          className="w-full"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Try Different Email
                        </Button>
                        
                        <Link href="/contact" className="block">
                          <Button variant="ghost" size="lg" className="w-full">
                            Contact Support
                          </Button>
                        </Link>
                      </div>

                      <div className="text-center">
                        <Link 
                          href="/login" 
                          className="text-accent-brand hover:text-accent-brand-dark font-medium transition-colors"
                        >
                          Back to Login
                        </Link>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}