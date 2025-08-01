import React from 'react'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import MobileOptimizer from '@/components/MobileOptimizer'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import Accessibility from '@/components/Accessibility'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    default: 'Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded by Eastern Wisdom',
    template: '%s | Fate Compass'
  },
  description: 'Feeling lost in life? Master 玄印 helps you discover your destiny through ancient Eastern astrology. Career guidance, relationship compatibility, and life purpose readings.',
  keywords: ['life purpose', 'career guidance', 'relationship compatibility', 'Eastern astrology', 'BaZi reading', 'destiny', 'lost feeling', 'compass', '玄印', 'Xuan Yin'],
  authors: [{ name: 'Master 玄印' }],
  creator: 'Master 玄印',
  publisher: 'Fate Compass',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fatecompass.net'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'zh-CN': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fatecompass.net',
    title: 'Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded',
    description: 'Discover your life purpose with Master 玄印. Ancient Eastern wisdom for modern souls seeking clarity and direction.',
    siteName: 'Fate Compass',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Fate Compass - Eastern Astrology Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded',
    description: 'Discover your life purpose with Master 玄印. Ancient Eastern wisdom for modern souls seeking clarity and direction.',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=630&q=80'],
    creator: '@fatecompass',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/master-xuan-yin.jpg" as="image" />
        <link rel="preload" href="/images/celebrities/donald-trump.jpg" as="image" />
        <link rel="preload" href="/images/celebrities/oprah-winfrey.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//ui-avatars.com" />
        <link rel="dns-prefetch" href="//upload.wikimedia.org" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://ui-avatars.com" />
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        
        {/* Performance hints */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MobileOptimizer />
        <PerformanceMonitor />
        <Accessibility />
        {children}
      </body>
    </html>
  )
} 