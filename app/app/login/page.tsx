"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Web3WalletSignIn from '@/components/web3-wallet-signin'
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff,
  Building,
  ArrowRight,
  Wallet,
  Shield,
  Zap,
  Star
} from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('web3') // Default to Web3 tab for prominence
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle traditional login logic here
    console.log('Traditional login attempt:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWeb3Success = (walletAddress: string) => {
    console.log('Web3 login successful:', walletAddress)
    // Handle successful Web3 authentication
  }

  const handleWeb3Error = (error: string) => {
    console.error('Web3 login error:', error)
    // Handle Web3 authentication error
  }

  const loginMethods = [
    {
      id: 'web3',
      label: 'Web3 Wallet',
      icon: Wallet,
      description: 'Connect with your Web3 wallet',
      featured: true
    },
    {
      id: 'traditional',
      label: 'Email & Password',
      icon: Mail,
      description: 'Sign in with your email and password',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Login Section */}
      <section className="pt-24 pb-12 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Branding */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-brand to-accent-brand-dark rounded-lg flex items-center justify-center">
                  <Building className="h-7 w-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-accent-brand to-accent-brand-dark bg-clip-text text-transparent">
                  Perigra
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Welcome Back
                </h1>
                <p className="text-xl text-muted-foreground">
                  Sign in to your account to continue building your real estate portfolio and managing your investments.
                </p>
              </div>

              {/* Login Method Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Choose your preferred sign-in method:</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {/* Web3 Login Benefits - Featured */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`p-6 rounded-lg border-2 transition-all cursor-pointer relative ${
                      activeTab === 'web3' 
                        ? 'border-accent-brand bg-gradient-to-br from-accent-brand/10 to-accent-brand-dark/5 shadow-lg' 
                        : 'border-accent-brand/50 hover:border-accent-brand bg-accent-brand/5'
                    }`}
                    onClick={() => setActiveTab('web3')}
                  >
                    {/* Featured Badge */}
                    <div className="absolute -top-2 -right-2">
                      <div className="bg-accent-brand text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-current" />
                        <span>RECOMMENDED</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-brand/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Wallet className="h-6 w-6 text-accent-brand" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-2">Web3 Wallet Sign-In</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          The future of secure, decentralized authentication
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="flex items-center space-x-1 text-xs text-accent-brand font-medium">
                            <Shield className="h-3 w-3" />
                            <span>Secure</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-accent-brand font-medium">
                            <Zap className="h-3 w-3" />
                            <span>Fast</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-accent-brand font-medium">
                            <Wallet className="h-3 w-3" />
                            <span>Modern</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Traditional Login Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      activeTab === 'traditional' 
                        ? 'border-accent-brand bg-accent-brand/5' 
                        : 'border-border/50 hover:border-accent-brand/50'
                    }`}
                    onClick={() => setActiveTab('traditional')}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-4 w-4 text-accent-brand" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Email & Password</h4>
                        <p className="text-sm text-muted-foreground">Traditional login with email verification</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Login Forms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center"
            >
              <Card className="w-full max-w-md bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Sign In to Perigra
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Access your real estate investment dashboard
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/50">
                      <TabsTrigger 
                        value="web3" 
                        className="flex items-center space-x-2 data-[state=active]:bg-accent-brand data-[state=active]:text-white relative"
                      >
                        <Wallet className="h-4 w-4" />
                        <span className="hidden sm:inline">Web3</span>
                        {/* Highlight indicator */}
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-brand rounded-full animate-pulse" />
                      </TabsTrigger>
                      <TabsTrigger value="traditional" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span className="hidden sm:inline">Email</span>
                      </TabsTrigger>
                    </TabsList>

                    {/* Web3 Wallet Login - Now First */}
                    <TabsContent value="web3">
                      <div className="mb-4 p-3 bg-accent-brand/10 border border-accent-brand/20 rounded-lg">
                        <div className="flex items-center space-x-2 text-accent-brand text-sm font-medium">
                          <Star className="h-4 w-4 fill-current" />
                          <span>Recommended: Secure Web3 Authentication</span>
                        </div>
                      </div>
                      <Web3WalletSignIn 
                        onSuccess={handleWeb3Success}
                        onError={handleWeb3Error}
                      />
                    </TabsContent>

                    {/* Traditional Login */}
                    <TabsContent value="traditional" className="space-y-6">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">
                            Password
                          </label>
                          <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="pl-10 pr-10"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                          <Link 
                            href="/forgot-password" 
                            className="text-sm text-accent-brand hover:text-accent-brand-dark transition-colors"
                          >
                            Forgot your password?
                          </Link>
                        </div>

                        {/* Submit Button */}
                        <Button 
                          type="submit" 
                          variant="accent" 
                          size="lg" 
                          className="w-full"
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          Sign In
                        </Button>
                      </form>

                      {/* Social Login */}
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                          </div>
                          <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">
                              Or continue with
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="w-full">
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google
                          </Button>
                          <Button variant="outline" className="w-full">
                            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Facebook
                          </Button>
                        </div>
                      </div>

                      {/* Web3 Promotion */}
                      <div className="p-3 bg-accent-brand/5 border border-accent-brand/20 rounded-lg">
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground mb-2">
                            Want a more secure experience?
                          </p>
                          <Button
                            variant="accent-outline"
                            size="sm"
                            onClick={() => setActiveTab('web3')}
                            className="text-xs"
                          >
                            <Wallet className="h-3 w-3 mr-1" />
                            Try Web3 Sign-In
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Sign Up Link */}
                  <div className="text-center mt-6 pt-6 border-t border-border/50">
                    <span className="text-muted-foreground">Don't have an account? </span>
                    <Link 
                      href="/signup" 
                      className="text-accent-brand hover:text-accent-brand-dark font-medium transition-colors"
                    >
                      Sign up
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}