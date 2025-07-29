'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* 404 Number */}
            <div className="text-9xl md:text-[12rem] font-bold text-navy-900/10 mb-8 font-serif">
              404
            </div>
            
            {/* Main Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6 font-serif">
              Page Not Found
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off into the cosmic void. 
              Perhaps it's time to consult the stars for guidance?
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Home className="w-5 h-5" />
                  <span>Return Home</span>
                </motion.button>
              </Link>
              
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-navy-900 text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-navy-900 hover:text-white transition-all duration-300 flex items-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Explore Services</span>
                </motion.button>
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 font-serif">
                Popular Pages
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/services">
                  <div className="p-4 border border-cream-200 rounded-lg hover:bg-cream-50 transition-colors">
                    <h3 className="font-semibold text-navy-900 mb-2">Services</h3>
                    <p className="text-sm text-gray-600">Discover our destiny readings</p>
                  </div>
                </Link>
                
                <Link href="/about">
                  <div className="p-4 border border-cream-200 rounded-lg hover:bg-cream-50 transition-colors">
                    <h3 className="font-semibold text-navy-900 mb-2">About</h3>
                    <p className="text-sm text-gray-600">Learn about Master 玄印</p>
                  </div>
                </Link>
                
                <Link href="/contact">
                  <div className="p-4 border border-cream-200 rounded-lg hover:bg-cream-50 transition-colors">
                    <h3 className="font-semibold text-navy-900 mb-2">Contact</h3>
                    <p className="text-sm text-gray-600">Get in touch with us</p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Cosmic Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-600 italic">
                "Sometimes getting lost is the only way to find your true path."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Master 玄印</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
} 