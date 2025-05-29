import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  try {
    if (typeof amount !== 'number' || isNaN(amount)) {
      return '$0'
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  } catch (error) {
    console.error('Error formatting currency:', error)
    return '$0'
  }
}

export function formatNumber(num: number): string {
  try {
    if (typeof num !== 'number' || isNaN(num)) {
      return '0'
    }
    return new Intl.NumberFormat('en-US').format(num)
  } catch (error) {
    console.error('Error formatting number:', error)
    return '0'
  }
}

export function calculateTokens(totalPrice: number, tokenPrice: number): number {
  try {
    if (typeof totalPrice !== 'number' || typeof tokenPrice !== 'number' || tokenPrice === 0) {
      return 0
    }
    return Math.floor(totalPrice / tokenPrice)
  } catch (error) {
    console.error('Error calculating tokens:', error)
    return 0
  }
}

export function calculateExpectedReturn(investment: number, returnRate: number): number {
  try {
    if (typeof investment !== 'number' || typeof returnRate !== 'number') {
      return 0
    }
    return investment * (returnRate / 100)
  } catch (error) {
    console.error('Error calculating expected return:', error)
    return 0
  }
}

export function safeParseInt(value: string, defaultValue: number = 0): number {
  try {
    const parsed = parseInt(value, 10)
    return isNaN(parsed) ? defaultValue : parsed
  } catch (error) {
    console.error('Error parsing integer:', error)
    return defaultValue
  }
}

export function safeParseFloat(value: string, defaultValue: number = 0): number {
  try {
    const parsed = parseFloat(value)
    return isNaN(parsed) ? defaultValue : parsed
  } catch (error) {
    console.error('Error parsing float:', error)
    return defaultValue
  }
}