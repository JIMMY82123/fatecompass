'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Heart, Target, Briefcase, Users, Calendar, Phone, Mail, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const quotes = [
    "When you feel lost, the ancient wisdom becomes your compass.",
    "Your destiny is written in the stars, but you hold the pen.",
    "In the chaos of life, Eastern wisdom brings clarity and peace."
  ]

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Quote rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [quotes.length])

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
        {/* Image Background with Dynamic Effects */}
        <div className="fixed inset-0 z-0">
          {/* Base image background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Dynamic floating elements */}
          <div className="absolute inset-0">
            {/* Floating ink drops */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-black/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `inkFloat ${8 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 5}s`,
                }}
              ></div>
            ))}
            
            {/* Floating mist layers */}
            <div className="absolute top-1/3 left-0 right-0 h-20 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-0 right-0 h-24 bg-gradient-to-r from-transparent via-white/12 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
            
            {/* Subtle energy lines */}
            <div className="absolute top-1/4 left-1/6 w-32 h-0.5 bg-white/10 transform rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-24 h-0.5 bg-white/10 transform -rotate-8 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-0.5 bg-white/10 transform rotate-6 animate-pulse" style={{animationDelay: '3s'}}></div>
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `customFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
                }}
              ></div>
            ))}
            
            {/* Gentle water ripples at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32">
              {[...Array(5)].map((_, i) => (
                <div
                  key={`ripple-${i}`}
                  className="absolute w-full h-0.5 bg-white/20"
                  style={{
                    bottom: `${i * 8}%`,
                    animation: `riverFlow ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
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
                <button className="border-2 border-gray-700 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Mystical stats */}
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

        {/* Problems We Solve Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Problems We Solve
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                When you feel lost, confused, or stuck, ancient Eastern wisdom provides the answers you've been seeking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Confusion</h3>
                <p className="text-gray-700">
                  Don't know which path to take? Our destiny readings reveal your true calling and optimal career timing.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Struggles</h3>
                <p className="text-gray-700">
                  Love life in chaos? Compatibility analysis shows you who's truly meant for you and when.
                </p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Life Purpose Crisis</h3>
                <p className="text-gray-700">
                  Feeling directionless? Discover your life mission and the timing for major decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* Why Ancient Wisdom Works */}
        <section className="py-20 bg-white/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-100/50"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Ancient Wisdom Works
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                For thousands of years, Eastern astrology has guided emperors, warriors, and ordinary people through life's most difficult decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  The Science of Destiny
                </h3>
                <p className="text-gray-700 mb-6">
                  BaZi (八字) analysis is based on the precise calculation of your birth time, date, and location. This creates a unique cosmic fingerprint that reveals your personality, strengths, challenges, and optimal timing for life decisions.
                </p>
                <p className="text-gray-700 mb-6">
                  Unlike Western astrology, Eastern wisdom provides specific, actionable guidance for career choices, relationship timing, and major life transitions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Personalized Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Timing Guidance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">What You'll Discover</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h5 className="text-gray-900 font-semibold">Your Life Purpose</h5>
                      <p className="text-gray-700 text-sm">The career path that aligns with your destiny</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">💕</span>
                    <div>
                      <h5 className="text-gray-900 font-semibold">Relationship Compatibility</h5>
                      <p className="text-gray-700 text-sm">Who you're truly meant to be with</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <h5 className="text-gray-900 font-semibold">Optimal Timing</h5>
                      <p className="text-gray-700 text-sm">When to make major life changes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h5 className="text-gray-900 font-semibold">Protection & Guidance</h5>
                      <p className="text-gray-700 text-sm">How to navigate challenges successfully</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help You Find Your Compass */}
        <section className="py-20 bg-white/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-200/50"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How We Help You Find Your Compass
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Three powerful services designed to guide you through life's most important decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">BaZi Analysis</h3>
                <p className="text-gray-700 mb-6">
                  Deep personal destiny reading revealing your life purpose, career path, and optimal timing for major decisions.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">$49</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Compatibility</h3>
                <p className="text-gray-700 mb-6">
                  Discover if your partner is truly meant for you and learn how to strengthen your relationship.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">$39</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Protection & Guidance</h3>
                <p className="text-gray-700 mb-6">
                  Personalized talismans and guidance to protect you during challenging times and enhance your luck.
                </p>
                <div className="text-2xl font-bold text-gray-900 mb-4">$29</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200/50 to-gray-100/50"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get Weekly Wisdom
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
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

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/20 to-gray-900"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
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
                
                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Email Subscription in Footer */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Stay Connected</h4>
                  <form onSubmit={handleEmailSubmit} className="flex space-x-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                      className="flex-1 px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button 
                      type="submit"
                      className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
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