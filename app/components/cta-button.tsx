"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { LucideIcon } from 'lucide-react'

interface CTAButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: "accent" | "accent-outline" | "default"
  size?: "default" | "sm" | "lg" | "xl"
  icon?: LucideIcon
  className?: string
  disabled?: boolean
}

const CTAButton = ({ 
  children, 
  onClick, 
  href, 
  variant = "accent", 
  size = "default",
  icon: Icon,
  className = "",
  disabled = false
}: CTAButtonProps) => {
  const buttonContent = (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{children}</span>
      </motion.div>
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />
    </Button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block"
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {buttonContent}
    </motion.div>
  )
}

export default CTAButton