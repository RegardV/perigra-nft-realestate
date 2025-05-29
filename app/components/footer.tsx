"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  TrendingUp,
  Home,
  List,
  HelpCircle,
  Info,
  Briefcase,
  ExternalLink
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Platform",
      links: [
        { href: "/", label: "Home", icon: Home },
        { href: "/invest", label: "Invest", icon: TrendingUp },
        { href: "/rent", label: "Rent", icon: Building },
        { href: "/listings", label: "Listings", icon: List },
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us", icon: Info },
        { href: "/how-it-works", label: "How It Works", icon: HelpCircle },
        { href: "/careers", label: "Careers", icon: Briefcase },
        { href: "/contact", label: "Contact", icon: Mail },
      ]
    },
    {
      title: "Contact Info",
      links: [
        { href: "mailto:info@perigra.com", label: "info@perigra.com", icon: Mail },
        { href: "tel:+1-555-0123", label: "+1 (555) 012-3456", icon: Phone },
        { href: "#", label: "123 Real Estate Ave, NY 10001", icon: MapPin },
      ]
    }
  ]

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
  ]

  return (
    <footer className="bg-slate dark:bg-slate-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-brand to-accent-brand-dark rounded-lg flex items-center justify-center">
                <Building className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Perigra</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionizing real estate investment through tokenization. 
              Connect investors and renters on our innovative platform.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-accent-brand/20 rounded-lg flex items-center justify-center hover:bg-accent-brand transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-accent-brand">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-accent-brand transition-colors text-sm"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Perigra. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Developed by</span>
              <a
                href="https://realandworks.com/rnwlanding-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-brand hover:text-accent-brand-dark transition-colors font-medium flex items-center space-x-1"
              >
                <span>www.realandworks.com</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-accent-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-accent-brand transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-accent-brand transition-colors">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer