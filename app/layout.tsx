import React from 'react'
import type { Metadata } from 'next'
import { Inter, Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import MobileOptimizer from '@/components/MobileOptimizer'

const inter = Inter({ subsets: ['latin'] })
const notoSerif = Noto_Serif_SC({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: '玄印 · Xuan Yin - Guided by Eastern Wisdom | Your Destiny. Decoded.',
  description: 'Feeling lost? I am lost and need direction. Let 玄印 guide you with ancient Eastern wisdom. Find your compass when you feel lost in life. Professional destiny reading for lost souls seeking clarity.',
  keywords: 'feeling lost, i am lost, feel lost, lost feeling, compass, destiny, life purpose, career guidance, relationship advice, personal growth, Eastern astrology, BaZi reading, life direction, spiritual guidance, fortune telling, Chinese astrology, life path, self-discovery, career change, relationship compatibility, personal development, spiritual awakening, life coaching, astrological reading, life purpose finder, lost soul, direction, guidance',
  authors: [{ name: '玄印 · Xuan Yin' }],
  metadataBase: new URL('https://fatecompass.net'),
  openGraph: {
    title: '玄印 · Xuan Yin - Guided by Eastern Wisdom | Your Destiny. Decoded.',
    description: 'Feeling lost? Let 玄印 guide you with ancient Eastern wisdom. Find your compass when you feel lost in life.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '玄印 · Xuan Yin - Eastern Wisdom for Lost Souls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '玄印 · Xuan Yin - Guided by Eastern Wisdom | Your Destiny. Decoded.',
    description: 'Feeling lost? Let 玄印 guide you with ancient Eastern wisdom.',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
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
    <html lang="en">
      <head>
        <link rel="canonical" href="https://fatecompass.net" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <MobileOptimizer />
        {children}
      </body>
    </html>
  )
} 