"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building, 
  Users, 
  Target, 
  Award,
  TrendingUp,
  Shield,
  Globe,
  Heart,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react'

export default function AboutPage() {
  const stats = [
    {
      icon: Building,
      value: "500+",
      label: "Properties Listed",
      description: "Curated real estate opportunities"
    },
    {
      icon: Users,
      value: "10K+",
      label: "Active Users",
      description: "Investors and renters worldwide"
    },
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Total Investment",
      description: "Capital deployed through our platform"
    },
    {
      icon: Award,
      value: "8.5%",
      label: "Average ROI",
      description: "Annual return for our investors"
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in complete transparency in all our transactions and communications with our users."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making real estate investment accessible to everyone, regardless of their financial background."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Building a strong community of investors and renters who support each other's success."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously innovating to provide the best real estate investment and rental experience."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former Goldman Sachs executive with 15+ years in real estate finance and blockchain technology.",
      image: "https://i.pinimg.com/originals/64/d4/9a/64d49ab7961d710c529efbe5a2292df8.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Tech entrepreneur and blockchain expert who previously built fintech platforms at scale.",
      image: "https://i.pinimg.com/originals/57/a8/73/57a873c463c82d0db84d9e6400cb8472.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Real Estate",
      bio: "Real estate veteran with 20+ years of experience in property acquisition and management.",
      image: "https://i.pinimg.com/736x/b5/e6/d6/b5e6d6c39a235e9f7b2ec8ef12ee565d--business-headshots-professional-headshots.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Product leader who has built user-centric platforms for millions of users at top tech companies.",
      image: "https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      linkedin: "#",
      twitter: "#"
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Perigra was founded with the vision to democratize real estate investment through blockchain technology."
    },
    {
      year: "2021",
      title: "Platform Launch",
      description: "Launched our MVP with the first 50 tokenized properties and 1,000 early adopters."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $25M in Series A funding to expand our platform and property portfolio."
    },
    {
      year: "2023",
      title: "Market Expansion",
      description: "Expanded to 10 major cities and reached $50M in total investment volume."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Serving 10,000+ users across multiple markets with 500+ properties."
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
              About <span className="text-accent-brand">Perigra</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing real estate investment and rental through innovative blockchain technology, making property ownership accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Perigra, we believe that everyone should have access to real estate investment opportunities, regardless of their financial background. Our mission is to democratize real estate investment through innovative blockchain technology while providing exceptional rental experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're building a future where property investment is transparent, accessible, and profitable for all participants in our ecosystem.
              </p>
              <Button variant="accent" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Join Our Community
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <Image
                src="https://www.coworker.com/mag/wp-content/uploads/2017/08/teamwork-discussion-meeting-brainstorming-start-P59ACVM-1280x640.jpg"
                alt="Perigra team working together"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that showcase our commitment to democratizing real estate investment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
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
                      <div className="text-3xl font-bold text-accent-brand mb-2">
                        {stat.value}
                      </div>
                      <div className="text-lg font-semibold text-foreground mb-2">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Perigra
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-accent-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Perigra's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-24 h-24 bg-muted rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent-brand font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-accent-brand/10 rounded-lg flex items-center justify-center hover:bg-accent-brand/20 transition-colors"
                      >
                        <Linkedin className="h-4 w-4 text-accent-brand" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-8 h-8 bg-accent-brand/10 rounded-lg flex items-center justify-center hover:bg-accent-brand/20 transition-colors"
                      >
                        <Twitter className="h-4 w-4 text-accent-brand" />
                      </a>
                      <a
                        href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@Perigra.com`}
                        className="w-8 h-8 bg-accent-brand/10 rounded-lg flex items-center justify-center hover:bg-accent-brand/20 transition-colors"
                      >
                        <Mail className="h-4 w-4 text-accent-brand" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in Perigra's growth and evolution
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="w-20 h-20 bg-accent-brand rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {milestone.year}
                </div>
                <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-brand to-accent-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be part of the real estate revolution and help us democratize property investment for everyone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="accent-outline" 
                size="lg"
                className="bg-white text-accent-brand hover:bg-gray-100 border-white"
              >
                Start Investing
              </Button>
              <Button 
                variant="accent-outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}