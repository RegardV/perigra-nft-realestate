"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { Testimonial } from '@/lib/types'

interface TestimonialsProps {
  testimonials?: Testimonial[]
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Real Estate Investor',
    content: 'Perigra has completely transformed how I invest in real estate. The ability to start with just $100 and diversify across multiple properties is incredible. I\'ve seen consistent returns and the platform is so easy to use.',
    avatar: 'https://i.ytimg.com/vi/xh6DFbvj6eA/maxresdefault.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    content: 'As someone in tech, I appreciate the blockchain technology behind Perigra. The transparency and security give me confidence in my investments. Plus, the passive income from rental distributions is fantastic.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Marketing Manager',
    content: 'I was hesitant about real estate investing because of the high barriers to entry. Perigra changed that completely. Now I own fractions of multiple properties and earn monthly income. It\'s been a game-changer for my financial goals.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Financial Advisor',
    content: 'I recommend Perigra to my clients who want real estate exposure without the traditional hassles. The platform is professional, transparent, and the returns have been solid. It\'s a great addition to any investment portfolio.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Small Business Owner',
    content: 'Finding quality rental properties through Perigra has been amazing. The verification process gives me peace of mind, and the professional management means I don\'t have to worry about maintenance issues.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    rating: 5
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Software Developer',
    content: 'The Web3 integration is seamless and the user experience is top-notch. I love being able to track my investments in real-time and see exactly how my money is working for me. Perigra is the future of real estate investing.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5
  }
]

const Testimonials = ({ testimonials = defaultTestimonials }: TestimonialsProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied investors and renters who trust Perigra for their real estate needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="h-8 w-8 text-accent-brand/30" />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* User Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                    <div className="relative w-12 h-12 bg-muted rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                        onError={(e) => {
                          console.error('Avatar image failed to load:', testimonial.avatar)
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-brand">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
              <div className="flex justify-center space-x-1">
                {renderStars(5)}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-brand">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent-brand">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials