"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Code,
  Smartphone,
  Database,
  Shield,
  Zap,
  Globe,
  Mail,
  ExternalLink,
  Settings,
  TestTube,
  Palette,
  CheckCircle,
  Filter,
  Search
} from 'lucide-react'

interface JobListing {
  id: string
  title: string
  department: string
  location: string
  type: string
  salaryRange: string
  status: 'open' | 'hired'
  icon: any
  description: string
  requirements: string[]
  responsibilities: string[]
  techStack?: string[]
  featured?: boolean
}

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const jobListings: JobListing[] = [
    {
      id: 'project-manager',
      title: 'Project Manager / Team Leader',
      department: 'Management',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$14k - $18k',
      status: 'open',
      icon: Users,
      featured: true,
      description: 'Lead our development team and manage the end-to-end delivery of our Web3 real estate platform. Drive project success through effective planning, coordination, and stakeholder management.',
      requirements: [
        '5+ years of project management experience in tech/fintech',
        'Experience with Agile/Scrum methodologies',
        'Strong leadership and team management skills',
        'Knowledge of Web3 and blockchain technologies',
        'Excellent communication and stakeholder management',
        'PMP or equivalent certification preferred',
        'Experience with real estate or property tech',
        'Proficiency in project management tools (Jira, Asana, etc.)',
        'Risk management and problem-solving expertise',
        'Budget management and resource allocation skills'
      ],
      responsibilities: [
        'Lead cross-functional development teams',
        'Define project scope, timelines, and deliverables',
        'Coordinate with stakeholders and clients',
        'Manage project budgets and resource allocation',
        'Implement Agile development processes',
        'Monitor project progress and mitigate risks',
        'Facilitate team meetings and sprint planning',
        'Ensure quality delivery within deadlines',
        'Report project status to executive leadership',
        'Drive continuous improvement initiatives'
      ]
    },
    {
      id: 'blockchain-developer',
      title: 'Blockchain Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$16k - $20k',
      status: 'open',
      icon: Shield,
      featured: true,
      description: 'Develop and maintain smart contracts and blockchain infrastructure for our tokenized real estate platform. Work with cutting-edge Web3 technologies to create secure and scalable solutions.',
      requirements: [
        'Strong experience with Solidity and smart contract development',
        'Proficiency in Ethereum, Polygon, or other EVM chains',
        'Knowledge of Web3.js, Ethers.js, and blockchain APIs',
        'Experience with DeFi protocols and tokenization',
        'Understanding of gas optimization and security best practices',
        'Familiarity with IPFS and decentralized storage',
        'Experience with testing frameworks (Hardhat, Truffle)',
        'Knowledge of consensus mechanisms and blockchain architecture',
        'Understanding of cryptographic principles',
        'Experience with multi-signature wallets and governance'
      ],
      responsibilities: [
        'Design and develop smart contracts for property tokenization',
        'Implement secure payment and escrow systems',
        'Build decentralized governance mechanisms',
        'Optimize gas costs and transaction efficiency',
        'Conduct security audits and code reviews',
        'Integrate with external DeFi protocols',
        'Develop automated testing suites',
        'Monitor and maintain deployed contracts',
        'Research and implement new blockchain technologies',
        'Collaborate with frontend team on Web3 integration'
      ],
      techStack: ['Solidity', 'Ethereum', 'Web3.js', 'Hardhat', 'OpenZeppelin', 'IPFS']
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$13k - $15k',
      status: 'open',
      icon: Database,
      description: 'Build robust and scalable backend systems to support our real estate platform. Develop APIs, manage databases, and ensure seamless integration with blockchain components.',
      requirements: [
        'Strong experience with Node.js and TypeScript',
        'Proficiency in database design (PostgreSQL, MongoDB)',
        'Experience with RESTful API development',
        'Knowledge of microservices architecture',
        'Familiarity with cloud platforms (AWS, GCP, Azure)',
        'Understanding of authentication and authorization',
        'Experience with message queues and caching',
        'Knowledge of Docker and containerization',
        'Understanding of CI/CD pipelines',
        'Experience with real-time data processing'
      ],
      responsibilities: [
        'Develop and maintain RESTful APIs',
        'Design and optimize database schemas',
        'Implement authentication and authorization systems',
        'Build real-time notification systems',
        'Integrate with third-party services and APIs',
        'Optimize application performance and scalability',
        'Implement data validation and security measures',
        'Monitor system health and performance',
        'Write comprehensive tests and documentation',
        'Collaborate with frontend and blockchain teams'
      ],
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$10k - $13k',
      status: 'open',
      icon: Code,
      description: 'Create beautiful and intuitive user interfaces for our Web3 real estate platform. Work with modern React technologies and Web3 integrations to deliver exceptional user experiences.',
      requirements: [
        'Strong experience with React.js and Next.js',
        'Proficiency in TypeScript and modern JavaScript',
        'Experience with Web3 wallet integrations',
        'Knowledge of responsive design and CSS frameworks',
        'Familiarity with state management (Redux, Zustand)',
        'Understanding of component libraries and design systems',
        'Experience with testing frameworks (Jest, Cypress)',
        'Knowledge of performance optimization techniques',
        'Understanding of accessibility standards',
        'Experience with version control and collaboration tools'
      ],
      responsibilities: [
        'Develop responsive React components and pages',
        'Implement Web3 wallet connection flows',
        'Create intuitive property search and filtering interfaces',
        'Build interactive dashboards and analytics views',
        'Optimize application performance and loading times',
        'Ensure cross-browser compatibility',
        'Implement accessibility best practices',
        'Write unit and integration tests',
        'Collaborate with designers on UI/UX implementation',
        'Maintain code quality and documentation'
      ],
      techStack: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Web3.js', 'Framer Motion']
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$8k - $10k',
      status: 'open',
      icon: Settings,
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines. Ensure reliable, secure, and scalable infrastructure for our Web3 real estate platform.',
      requirements: [
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Proficiency in containerization (Docker, Kubernetes)',
        'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
        'Experience with CI/CD pipelines (GitHub Actions, Jenkins)',
        'Understanding of monitoring and logging systems',
        'Knowledge of security best practices',
        'Experience with database administration',
        'Familiarity with blockchain node management',
        'Understanding of networking and load balancing',
        'Experience with backup and disaster recovery'
      ],
      responsibilities: [
        'Design and maintain cloud infrastructure',
        'Implement and optimize CI/CD pipelines',
        'Monitor system performance and reliability',
        'Manage database deployments and backups',
        'Implement security measures and compliance',
        'Automate deployment and scaling processes',
        'Manage blockchain node infrastructure',
        'Troubleshoot production issues',
        'Optimize costs and resource utilization',
        'Document infrastructure and procedures'
      ],
      techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus']
    },
    {
      id: 'qa-engineer',
      title: 'QA/Test Engineer',
      department: 'Quality Assurance',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$8k - $10k',
      status: 'open',
      icon: TestTube,
      description: 'Ensure the quality and reliability of our Web3 real estate platform through comprehensive testing strategies. Develop automated tests and maintain quality standards.',
      requirements: [
        'Experience with manual and automated testing',
        'Knowledge of testing frameworks (Jest, Cypress, Selenium)',
        'Understanding of Web3 and blockchain testing',
        'Experience with API testing tools (Postman, Insomnia)',
        'Knowledge of performance and security testing',
        'Familiarity with bug tracking and test management tools',
        'Understanding of CI/CD integration for testing',
        'Experience with mobile and cross-browser testing',
        'Knowledge of accessibility testing',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Develop comprehensive test plans and strategies',
        'Create and maintain automated test suites',
        'Perform manual testing of new features',
        'Test smart contracts and blockchain integrations',
        'Conduct performance and load testing',
        'Identify and document bugs and issues',
        'Collaborate with development teams on quality',
        'Maintain testing environments and data',
        'Review requirements and provide feedback',
        'Ensure compliance with quality standards'
      ],
      techStack: ['Cypress', 'Jest', 'Selenium', 'Postman', 'GitHub Actions', 'TestRail']
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer / NFT Art Designer',
      department: 'Design',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salaryRange: '$8k - $10k',
      status: 'hired',
      icon: Palette,
      description: 'Create stunning user interfaces and NFT artwork for our Web3 real estate platform. Design intuitive user experiences and unique digital assets.',
      requirements: [
        'Strong portfolio in UI/UX design',
        'Experience with design tools (Figma, Sketch, Adobe Creative Suite)',
        'Knowledge of Web3 and NFT design principles',
        'Understanding of responsive and mobile design',
        'Experience with design systems and component libraries',
        'Knowledge of user research and usability testing',
        'Understanding of accessibility and inclusive design',
        'Experience with prototyping and wireframing',
        'Knowledge of front-end development basics',
        'Strong visual design and artistic skills'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile platforms',
        'Create NFT artwork and digital assets',
        'Develop and maintain design systems',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and mockups',
        'Collaborate with development teams on implementation',
        'Ensure consistent brand experience across platforms',
        'Design marketing materials and presentations',
        'Stay updated with design trends and best practices',
        'Optimize designs for accessibility and performance'
      ],
      techStack: ['Figma', 'Adobe Creative Suite', 'Principle', 'InVision', 'Zeplin', 'Miro']
    }
  ]

  const departments = ['all', 'Management', 'Engineering', 'Infrastructure', 'Quality Assurance', 'Design']

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  const openPositions = jobListings.filter(job => job.status === 'open').length

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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-accent-brand" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Join Our Team
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Help us revolutionize real estate through innovative Web3 technology. We're building the future of property investment and rental.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{openPositions} Open Positions</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Remote-First Company</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent-brand"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <Button
                    key={dept}
                    variant={selectedDepartment === dept ? "accent" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDepartment(dept)}
                    className="capitalize"
                  >
                    {dept === 'all' ? 'All Departments' : dept}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.map((job, index) => {
              const Icon = job.icon
              return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className={`h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    job.featured ? 'ring-2 ring-accent-brand/20' : ''
                  } ${job.status === 'hired' ? 'opacity-75' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            job.status === 'hired' ? 'bg-green-500/10' : 'bg-accent-brand/10'
                          }`}>
                            {job.status === 'hired' ? (
                              <CheckCircle className="h-6 w-6 text-green-500" />
                            ) : (
                              <Icon className="h-6 w-6 text-accent-brand" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <CardTitle className="text-xl">{job.title}</CardTitle>
                              {job.featured && job.status === 'open' && (
                                <Badge variant="secondary" className="bg-accent-brand/20 text-accent-brand">
                                  Featured
                                </Badge>
                              )}
                              {job.status === 'hired' && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-600">
                                  Position Filled
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{job.department}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="h-4 w-4" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{job.type}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Salary */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-5 w-5 text-accent-brand" />
                          <span className="text-lg font-bold text-accent-brand">{job.salaryRange}</span>
                          <span className="text-sm text-muted-foreground">per month</span>
                        </div>
                        {job.status === 'open' && (
                          <Button variant="accent" size="sm">
                            <Mail className="h-4 w-4 mr-2" />
                            Apply Now
                          </Button>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      {/* Tech Stack */}
                      {job.techStack && (
                        <div>
                          <h4 className="font-medium text-foreground mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Requirements Preview */}
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent-brand rounded-full mt-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                          {job.requirements.length > 3 && (
                            <li className="text-sm text-accent-brand font-medium">
                              +{job.requirements.length - 3} more requirements
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3 pt-4">
                        {job.status === 'open' ? (
                          <>
                            <Button variant="accent" className="flex-1">
                              <Mail className="h-4 w-4 mr-2" />
                              Apply Now
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </>
                        ) : (
                          <Button variant="outline" disabled className="w-full">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Position Filled
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-muted-foreground text-lg mb-4">
                No positions match your current filters.
              </div>
              <Button 
                variant="accent-outline" 
                onClick={() => {
                  setSelectedDepartment('all')
                  setSearchTerm('')
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-20 bg-sand/20 dark:bg-slate-dark/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Provena?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer competitive compensation, cutting-edge technology, and the opportunity to shape the future of real estate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Competitive Salaries",
                description: "Market-leading compensation packages with performance bonuses and equity options."
              },
              {
                icon: Globe,
                title: "Remote-First Culture",
                description: "Work from anywhere with flexible hours and a strong remote collaboration culture."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tech",
                description: "Work with the latest Web3 technologies and shape the future of real estate."
              },
              {
                icon: Users,
                title: "Amazing Team",
                description: "Join a diverse, talented team of professionals passionate about innovation."
              },
              {
                icon: Shield,
                title: "Health & Wellness",
                description: "Comprehensive health insurance, mental health support, and wellness programs."
              },
              {
                icon: Code,
                title: "Growth Opportunities",
                description: "Professional development budget, conference attendance, and career advancement paths."
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-accent-brand" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
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
              Ready to Shape the Future of Real Estate?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our mission to democratize real estate investment through innovative Web3 technology. Apply today and be part of something revolutionary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="accent-outline" 
                size="lg"
                className="bg-white text-accent-brand hover:bg-gray-100 border-white"
              >
                <Mail className="h-5 w-5 mr-2" />
                View Open Positions
              </Button>
              <Button 
                variant="accent-outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Users className="h-5 w-5 mr-2" />
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}