'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import Search from './Search'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900/95 backdrop-blur-md shadow-xl border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">玄</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white font-bold">玄印命理</span>
              <span className="text-sm text-cream-300 font-medium tracking-wide">FateCompass</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link 
              href="/" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group magnetic-hover"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group magnetic-hover"
            >
              <span>Services</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/blog" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group"
            >
              <span>Blog</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group"
            >
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/wisdom" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group"
            >
              <span>Wisdom</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group"
            >
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/privacy" 
              className="text-cream-200 hover:text-white transition-colors font-semibold text-lg relative group"
            >
              <span>Privacy</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Search Button */}
            <Search />
            
            {/* CTA Button */}
            <a
              href="https://wa.me/8615914228258"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 text-lg font-semibold flex items-center space-x-3 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Consult Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-3 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900/95 backdrop-blur-md rounded-lg mt-2 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/blog" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/wisdom" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Wisdom
              </Link>
              <Link 
                href="/contact" 
                className="block text-cream-200 hover:text-white transition-colors font-medium py-3 touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Button */}
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>Consult Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
} 