'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
    alert('Thank you for subscribing! We\'ll keep you updated with ancient wisdom insights.')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SEOHead
        title="Fate Compass | Find Your Life Purpose with Eastern Wisdom"
        description="Feeling lost in life? Master 玄印 helps you discover your destiny through ancient Eastern astrology. Career guidance, relationship compatibility, and life purpose readings."
        keywords="life purpose, career guidance, relationship compatibility, Eastern astrology, BaZi reading, destiny, lost feeling, compass, 玄印"
        ogTitle="Fate Compass | Your Destiny. Decoded by 玄印"
        ogDescription="Discover your life purpose with Master 玄印. Ancient Eastern wisdom for modern souls seeking clarity and direction."
        canonical="https://fatecompass.net"
      />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          {/* Base image background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium">Loading ancient wisdom...</p>
            </div>
          </div>
        )}

        <Navigation />

        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  玄印 · Xuan Yin
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8 font-light">
                Your Destiny. Decoded by Eastern Wisdom
              </p>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Feeling lost in life? Let ancient Eastern astrology guide you to clarity, 
                purpose, and success. Discover your true path with Master 玄印.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Start Your Journey</span>
              </a>
              <Link href="/services">
                <button className="border-2 border-gray-300 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-800 transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-200">Years of Wisdom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">2,847+</div>
                <div className="text-gray-200">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">94%</div>
                <div className="text-gray-200">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        <Testimonials />

        {/* Newsletter Section */}
        <section className="py-20 bg-white/10 backdrop-blur-sm relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Weekly Wisdom
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Receive ancient insights, practical guidance, and exclusive tips to help you navigate life's challenges.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-gray-600 focus:outline-none text-gray-900"
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Free Tips</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">玄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">玄印 · Xuan Yin</h3>
                    <p className="text-gray-400 text-sm">Guided by Eastern Wisdom</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Your Destiny. Decoded. Helping lost souls find their compass through ancient Eastern wisdom.
                </p>
                
                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a 
                    href="https://wa.me/8615914228258" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="mailto:chenxiao0801@hotmail.com" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">Life Purpose Reading</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Career Guidance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Relationship Compatibility</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Business Timing</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About 玄印</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin</p>
              <p className="text-sm mt-2">Ancient wisdom for modern souls</p>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </>
  )
} 