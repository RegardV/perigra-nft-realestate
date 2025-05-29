"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  TrendingUp, 
  Building, 
  List, 
  LogIn, 
  UserPlus, 
  Menu, 
  X,
  Sun,
  Moon,
  Monitor
} from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/invest', label: 'Invest', icon: TrendingUp },
    { href: '/rent', label: 'Rent', icon: Building },
    { href: '/listings', label: 'Listings', icon: List },
  ]

  const authItems = [
    { href: '/login', label: 'Login', icon: LogIn },
    { href: '/signup', label: 'Sign Up', icon: UserPlus },
  ]

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-4 w-4" />
    
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const cycleTheme = () => {
    if (!mounted) return
    
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-accent-brand to-accent-brand-dark rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-accent-brand to-accent-brand-dark bg-clip-text text-transparent">
                  Perigra
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive ? "accent" : "ghost"}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                )
              })}
            </nav>

            {/* Desktop Auth & Theme */}
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={cycleTheme}
                className="p-2"
              >
                {getThemeIcon()}
              </Button>
              {authItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={item.href === '/signup' ? "accent" : "accent-outline"}
                      size="sm"
                      className="flex items-center space-x-2"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0.0, 0.2, 1]
              }}
              className="mobile-menu-container fixed top-16 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-background/95 dark:bg-background/90 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl overflow-hidden">
                {/* Enhanced background for better readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95 dark:from-slate-dark/90 dark:to-slate-dark/95" />
                
                {/* Menu Content */}
                <div className="relative p-6 space-y-4">
                  {/* Navigation Items */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Navigation
                    </div>
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      const isActive = pathname === item.href
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link href={item.href}>
                            <Button
                              variant={isActive ? "accent" : "ghost"}
                              size="lg"
                              className="w-full justify-start space-x-3 h-12 text-base font-medium"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon className="h-5 w-5" />
                              <span>{item.label}</span>
                            </Button>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border/50 my-4" />

                  {/* Theme Toggle */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Settings
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => {
                          cycleTheme()
                          setIsMobileMenuOpen(false)
                        }}
                        className="w-full justify-start space-x-3 h-12 text-base font-medium"
                      >
                        {getThemeIcon()}
                        <span>
                          {!mounted ? 'Theme' : 
                           theme === 'light' ? 'Light Mode' : 
                           theme === 'dark' ? 'Dark Mode' : 'System Mode'}
                        </span>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border/50 my-4" />

                  {/* Auth Items */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Account
                    </div>
                    {authItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <Link href={item.href}>
                            <Button
                              variant={item.href === '/signup' ? "accent" : "accent-outline"}
                              size="lg"
                              className="w-full justify-start space-x-3 h-12 text-base font-medium"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <Icon className="h-5 w-5" />
                              <span>{item.label}</span>
                            </Button>
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Additional Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="pt-4 border-t border-border/50"
                  >
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">
                        Perigra - Tokenized Real Estate Platform
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header