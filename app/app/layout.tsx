import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Perigra - Tokenized Real Estate Platform',
  description: 'Revolutionizing real estate investment through tokenization. Connect investors and renters on our innovative Web3 platform.',
  keywords: 'real estate, tokenization, Web3, blockchain, investment, rental, property, NFT',
  authors: [{ name: 'Perigra Team' }],
  creator: 'Perigra',
  publisher: 'Perigra',
  openGraph: {
    title: 'Perigra - Tokenized Real Estate Platform',
    description: 'Revolutionizing real estate investment through tokenization. Connect investors and renters on our innovative Web3 platform.',
    url: 'https://perigra.com',
    siteName: 'Perigra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Perigra - Tokenized Real Estate Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perigra - Tokenized Real Estate Platform',
    description: 'Revolutionizing real estate investment through tokenization. Connect investors and renters on our innovative Web3 platform.',
    images: ['/og-image.jpg'],
    creator: '@perigra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}