"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import CTAButton from '@/components/cta-button'
import { TrendingUp, Building, ArrowRight } from 'lucide-react'

interface HeroBannerProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
    icon?: any
  }
  secondaryCTA?: {
    text: string
    href: string
    icon?: any
  }
  backgroundImage: string
  stats?: {
    label: string
    value: string
  }[]
}

const HeroBanner = ({ 
  title, 
  subtitle, 
  description, 
  primaryCTA, 
  secondaryCTA,
  backgroundImage,
  stats 
}: HeroBannerProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover parallax-bg"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate/80 via-slate/60 to-transparent dark:from-slate-dark/80 dark:via-slate-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {title.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={index === 1 ? "text-accent-brand" : ""}
                  >
                    {word}{' '}
                  </motion.span>
                ))}
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-200 font-medium">
                {subtitle}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <CTAButton
                href={primaryCTA.href}
                variant="accent"
                size="lg"
                icon={primaryCTA.icon}
                className="shadow-lg"
              >
                {primaryCTA.text}
              </CTAButton>
              
              {secondaryCTA && (
                <CTAButton
                  href={secondaryCTA.href}
                  variant="accent-outline"
                  size="lg"
                  icon={secondaryCTA.icon}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                >
                  {secondaryCTA.text}
                </CTAButton>
              )}
            </motion.div>

            {/* Stats */}
            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-accent-brand">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20"
              >
                <div className="flex items-center space-x-2 text-white">
                  <TrendingUp className="h-5 w-5 text-accent-brand" />
                  <div>
                    <div className="text-sm font-medium">ROI</div>
                    <div className="text-lg font-bold">8.5%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20"
              >
                <div className="flex items-center space-x-2 text-white">
                  <Building className="h-5 w-5 text-accent-brand" />
                  <div>
                    <div className="text-sm font-medium">Properties</div>
                    <div className="text-lg font-bold">500+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 text-center"
        >
          <ArrowRight className="h-6 w-6 mx-auto rotate-90" />
          <div className="text-xs mt-2">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroBanner