"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  DollarSign, 
  Building, 
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Eye,
  Plus
} from 'lucide-react'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { mockProperties } from '@/lib/mock-data'

export default function DashboardPage() {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d')

  // Mock user data
  const userStats = {
    totalInvestment: 25000,
    totalReturn: 2125,
    returnPercentage: 8.5,
    activeProperties: 8,
    monthlyIncome: 425,
    portfolioValue: 27125
  }

  const recentTransactions = [
    {
      id: '1',
      type: 'investment',
      property: 'Modern Downtown Apartment',
      amount: 5000,
      tokens: 50,
      date: '2024-01-15',
      status: 'completed'
    },
    {
      id: '2',
      type: 'dividend',
      property: 'Suburban Family Home',
      amount: 125,
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: '3',
      type: 'investment',
      property: 'Beachfront Condo',
      amount: 3000,
      tokens: 20,
      date: '2024-01-08',
      status: 'completed'
    }
  ]

  const portfolioProperties = mockProperties.slice(0, 4).map(property => ({
    ...property,
    userTokens: Math.floor(Math.random() * 100) + 10,
    userInvestment: Math.floor(Math.random() * 5000) + 1000,
    monthlyReturn: Math.floor(Math.random() * 200) + 50
  }))

  const performanceData = [
    { month: 'Jan', value: 22000 },
    { month: 'Feb', value: 23500 },
    { month: 'Mar', value: 24200 },
    { month: 'Apr', value: 25800 },
    { month: 'May', value: 26500 },
    { month: 'Jun', value: 27125 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dashboard Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Investment Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">
                Track your real estate portfolio performance and manage your investments
              </p>
            </div>
            <div className="flex space-x-3">
              <Button variant="accent-outline">
                <Calendar className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="accent">
                <Plus className="h-4 w-4 mr-2" />
                New Investment
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Total Investment",
                value: formatCurrency(userStats.totalInvestment),
                change: "+12.5%",
                icon: DollarSign,
                positive: true
              },
              {
                title: "Portfolio Value",
                value: formatCurrency(userStats.portfolioValue),
                change: "+8.5%",
                icon: TrendingUp,
                positive: true
              },
              {
                title: "Monthly Income",
                value: formatCurrency(userStats.monthlyIncome),
                change: "+5.2%",
                icon: BarChart3,
                positive: true
              },
              {
                title: "Active Properties",
                value: userStats.activeProperties.toString(),
                change: "+2",
                icon: Building,
                positive: true
              }
            ].map((metric, index) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-accent-brand/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent-brand" />
                        </div>
                        <div className={`flex items-center text-sm ${
                          metric.positive ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.positive ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                          )}
                          {metric.change}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.title}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Performance */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Portfolio Performance</CardTitle>
                  <div className="flex space-x-2">
                    {(['7d', '30d', '90d', '1y'] as const).map((period) => (
                      <Button
                        key={period}
                        variant={timeframe === period ? 'accent' : 'ghost'}
                        size="sm"
                        onClick={() => setTimeframe(period)}
                      >
                        {period}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Portfolio performance chart</p>
                      <p className="text-sm text-muted-foreground">
                        Current value: {formatCurrency(userStats.portfolioValue)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Portfolio Allocation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
                <CardHeader>
                  <CardTitle>Portfolio Allocation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-accent-brand mx-auto mb-4" />
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Apartments</span>
                          <span className="font-medium">45%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Houses</span>
                          <span className="font-medium">30%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Condos</span>
                          <span className="font-medium">25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Properties */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Your Properties
            </h2>
            <p className="text-muted-foreground">
              Properties in your investment portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {property.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {property.city}, {property.state}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Your Investment</p>
                        <p className="font-semibold text-foreground">
                          {formatCurrency(property.userInvestment)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Tokens Owned</p>
                        <p className="font-semibold text-foreground">
                          {formatNumber(property.userTokens)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Monthly Return</p>
                        <p className="font-semibold text-green-600">
                          {formatCurrency(property.monthlyReturn)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ROI</p>
                        <p className="font-semibold text-green-600">
                          {property.expectedReturn}%
                        </p>
                      </div>
                    </div>

                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-accent-brand h-2 rounded-full" 
                        style={{ width: `${(property.userTokens / property.totalTokens) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {((property.userTokens / property.totalTokens) * 100).toFixed(2)}% ownership
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Recent Transactions
            </h2>
            <p className="text-muted-foreground">
              Your latest investment activity
            </p>
          </motion.div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-0">
              <div className="divide-y divide-border/50">
                {recentTransactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 hover:bg-muted/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          transaction.type === 'investment' 
                            ? 'bg-blue-500/10 text-blue-600' 
                            : 'bg-green-500/10 text-green-600'
                        }`}>
                          {transaction.type === 'investment' ? (
                            <TrendingUp className="h-5 w-5" />
                          ) : (
                            <DollarSign className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {transaction.type === 'investment' ? 'Investment' : 'Dividend'}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.property}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">
                          {transaction.type === 'investment' ? '-' : '+'}{formatCurrency(transaction.amount)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}