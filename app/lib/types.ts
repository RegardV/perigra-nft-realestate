export interface Property {
  id: string
  title: string
  description: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  bedrooms: number
  bathrooms: number
  sqft: number
  propertyType: string
  imageUrl: string
  images: string[]
  tokenPrice: number
  totalTokens: number
  availableTokens: number
  expectedReturn: number
  isAvailable: boolean
  isForRent: boolean
  isForInvest: boolean
  createdAt: Date
  updatedAt: Date
}

export interface FilterOptions {
  search?: string
  location?: string
  propertyType?: string
  minPrice?: string
  maxPrice?: string
  bedrooms?: string
  bathrooms?: string
  minReturn?: string
  maxReturn?: string
  availability?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

export interface User {
  id: string
  email: string
  name?: string
  role: string
  createdAt: Date
  updatedAt: Date
}

export interface Investment {
  id: string
  userId: string
  propertyId: string
  tokens: number
  amount: number
  createdAt: Date
}

export interface Rental {
  id: string
  userId: string
  propertyId: string
  startDate: Date
  endDate: Date
  monthlyRent: number
  status: string
  createdAt: Date
}