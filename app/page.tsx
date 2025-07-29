'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, Mail, Heart, Target, Briefcase, Star, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Testimonials from '@/components/Testimonials'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Email submitted:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SEOHead
        title="Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded by Eastern Wisdom"
        description="Feeling lost in life? Master 玄印 helps you discover your destiny through ancient Eastern astrology. Career guidance, relationship compatibility, and life purpose readings."
        keywords="life purpose, career guidance, relationship compatibility, Eastern astrology, BaZi reading, destiny, lost feeling, compass, 玄印, Xuan Yin"
        ogTitle="Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded"
        ogDescription="Discover your life purpose with Master 玄印. Ancient Eastern wisdom for modern souls seeking clarity and direction."
        canonical="https://fatecompass.net"
      />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Dynamic Background */}
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
          
          {/* Dynamic floating elements */}
          <div className="absolute inset-0">
            {/* Floating ink drops */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-black/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `inkFloat ${8 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 5}s`,
                }}
              ></div>
            ))}
            
            {/* Floating mist layers */}
            <div className="absolute top-1/3 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-white/6 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-0 right-0 h-20 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
            
            {/* Subtle energy lines */}
            <div className="absolute top-1/4 left-1/6 w-24 h-0.5 bg-white/8 transform rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-20 h-0.5 bg-white/8 transform -rotate-8 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-white/8 transform rotate-6 animate-pulse" style={{animationDelay: '3s'}}></div>
            
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `customFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium">Loading ancient wisdom...</p>
            </div>
          </div>
        )}

        <Navigation />

        {/* ① Hero Section - 东方命运的呼唤 */}
        <section id="hero" className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                <span className="bg-gradient-to-r from-white via-cream-200 to-gold-300 bg-clip-text text-transparent">
                  玄印命理 · FateCompass
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8 font-light italic">
                In the rhythm of yin and yang, your path is written.
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
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                onClick={() => scrollToSection('intro')}
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Start Your Journey</span>
              </button>
              <Link href="/services">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300">
                  Explore Services
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ② Intro Section - 让访客觉得「我访问对了」 */}
        <section id="intro" className="py-20 bg-white/95 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif"
              >
                What Can Eastern Astrology Help You With?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
              >
                It's not that you're not good enough, it's just that your time hasn't come yet.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Love Problems</h3>
                <p className="text-gray-700">
                  Keep meeting the same type of person? Relationship troubles, not sure if you should continue? 
                  Compatibility analysis shows you who's truly meant for you.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Financial Problems</h3>
                <p className="text-gray-700">
                  Working hard but always losing money? Don't know when to invest or start a business? 
                  BaZi analysis reveals your wealth timing and optimal path.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Life Direction Problems</h3>
                <p className="text-gray-700">
                  Can't find life's meaning, feeling empty inside? Don't know what to do next? 
                  BaZi reading reveals your life mission and purpose.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ③ Services Section - 展示我能做啥 */}
        <section id="services" className="py-20 bg-cream-50 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif"
              >
                Professional Services, Precise Readings
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-700 max-w-3xl mx-auto"
              >
                Choose the service that best fits you and start your destiny exploration journey
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">BaZi Analysis</h3>
                <p className="text-gray-700 mb-6">
                  Deep personal destiny reading revealing your life purpose, career path, and optimal timing for major decisions.
                </p>
                <div className="text-2xl font-bold text-navy-900 mb-4">From $49</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about BaZi Analysis service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consult Now</span>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Relationship Compatibility</h3>
                <p className="text-gray-700 mb-6">
                  Discover your soulmate and learn how to build lasting, happy relationships.
                </p>
                <div className="text-2xl font-bold text-navy-900 mb-4">From $39</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about Relationship Compatibility service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consult Now</span>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Protection & Guidance</h3>
                <p className="text-gray-700 mb-6">
                  Personalized talismans and guidance to protect you during challenging times and enhance your luck.
                </p>
                <div className="text-2xl font-bold text-navy-900 mb-4">From $29</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about Protection & Guidance service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consult Now</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ④ Testimonials Section - 社会证明助力转化 */}
        <Testimonials />

        {/* ⑤ Final Call Section - 结尾唤起行动 */}
        <section id="final-call" className="py-20 bg-gradient-to-r from-navy-900 to-purple-900 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Ready to Explore Your Destiny?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                You've been trying hard enough, it's time someone tells you where to go.
                <br />
                <span className="text-gold-300 font-semibold">Limited Time: First 10 consultations get 15-minute free destiny reading</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/8615914228258?text=I want to get a free initial reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Reading Now</span>
                </a>
                <a
                  href="mailto:chenxiao0801@hotmail.com?subject=I want to learn about Master 玄印's services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Consultation</span>
                </a>
              </div>

              {/* Email Subscription */}
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-white mb-3">Subscribe for Spiritual Tips</h3>
                <form onSubmit={handleEmailSubmit} className="flex space-x-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-full text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <button 
                    type="submit"
                    className="bg-gold-500 text-white px-6 py-3 rounded-full text-sm hover:bg-gold-600 transition-colors font-semibold"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⑥ Footer Section - 联系信息 + 网络汇总 */}
        <footer id="footer" className="bg-navy-900 text-white py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">玄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif">玄印 · Xuan Yin</h3>
                    <p className="text-gray-400 text-sm">Guided by Eastern Wisdom</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  May every lost soul be gently guided.
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
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-serif">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services" className="hover:text-white transition-colors">BaZi Analysis</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Relationship Compatibility</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Protection & Guidance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Career Guidance</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-serif">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">About 玄印</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Astrology Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-300">
              <p>© 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin</p>
              <p className="text-sm mt-2">May every lost soul be gently guided.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
          </motion.button>
        )}
      </div>
    </>
  )
} 