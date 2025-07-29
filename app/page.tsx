'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, Heart, Target, Briefcase, Star, ArrowRight, ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
    alert('Thank you for subscribing! We\'ll keep you updated with ancient wisdom insights.')
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
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
      
      <main className="w-full overflow-hidden">
        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium font-display">Loading ancient wisdom...</p>
            </div>
          </div>
        )}

        <Navigation />

        {/* 1️⃣ Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-navy-900/60"></div>
            <div className="absolute inset-0 ink-wash"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl md:text-7xl font-display text-white tracking-wide mb-6">
                玄印命理 · FateCompass
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-cream-200 italic font-serif mb-8">
                In the rhythm of yin and yang, your path is written.
              </p>
              
              <motion.button
                onClick={() => scrollToSection('intro')}
                className="bg-gold-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </section>

        {/* 2️⃣ Intro Section */}
        <section id="intro" className="py-20 cream-gradient relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6">
                命理，能为你照见什么？
              </h2>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                当迷茫成为常态，古老的智慧就是你的指南针
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-display text-navy-900 mb-4">💘 爱情问题</h3>
                <p className="text-navy-700">
                  反复遇到同一种人，感情总是无疾而终？<br/>
                  合盘分析揭示你的情感模式与真命天子
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-display text-navy-900 mb-4">💰 财运问题</h3>
                <p className="text-navy-700">
                  努力却总是破财，投资时机总是不对？<br/>
                  八字分析揭示你的财富时机与最佳路径
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-display text-navy-900 mb-4">🕊️ 迷茫无助</h3>
                <p className="text-navy-700">
                  不知人生方向，内心空虚找不到意义？<br/>
                  八字解读揭示你的生命使命与人生目标
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3️⃣ Services Section */}
        <section id="services" className="py-20 navy-gradient relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Professional Services, Precise Readings
              </h2>
              <p className="text-xl text-cream-200 max-w-3xl mx-auto">
                选择最适合你的服务，开启命运探索之旅
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-display text-white mb-4">八字详批</h3>
                <p className="text-cream-200 mb-6">
                  看清命盘结构与运势起伏，揭示人生目标、事业路径和重大决策时机
                </p>
                <div className="text-2xl font-bold text-gold-400 mb-4">$49 - $89</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about BaZi Analysis service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>立即测算</span>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="text-2xl font-display text-white mb-4">情感合盘</h3>
                <p className="text-cream-200 mb-6">
                  分析你们之间的缘分轨迹，发现你的真命天子，了解如何经营长久幸福的感情关系
                </p>
                <div className="text-2xl font-bold text-gold-400 mb-4">$39 - $69</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about Relationship Compatibility service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>立即测算</span>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-display text-white mb-4">护符开运</h3>
                <p className="text-cream-200 mb-6">
                  专属定制能量守护符，在困难时期保护你，增强你的运势
                </p>
                <div className="text-2xl font-bold text-gold-400 mb-4">$29 - $59</div>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn about Protection & Guidance service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>立即测算</span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4️⃣ Testimonials Section */}
        <section id="testimonials" className="py-20 bg-cream-100 relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display text-navy-900 mb-6">
                Real People, Real Results
              </h2>
              <p className="text-xl text-navy-700 max-w-3xl mx-auto">
                See how ancient Eastern wisdom has transformed lives and brought clarity to confused souls
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-display text-navy-900 mb-4">Anna L.</h3>
                <p className="text-navy-700 mb-4 italic">"我终于放下了那段感情。玄印的分析让我看清了真相。"</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-display text-navy-900 mb-4">Michael C.</h3>
                <p className="text-navy-700 mb-4 italic">"我的关系正在分崩离析。兼容性分析向我们展示了需要修复的确切内容。"</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-display text-navy-900 mb-4">Emma W.</h3>
                <p className="text-navy-700 mb-4 italic">"我感到被困住且没有方向。玄印的解读揭示了我的人生目标并给了我信心。"</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5️⃣ Final Call Section */}
        <section id="final-call" className="py-20 relative">
          {/* Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-navy-900/70"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                Ready to Explore Your Destiny?
              </h2>
              <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
                你已经走得够久，是时候有人告诉你，方向在哪里。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/8615914228258?text=I want to get a free initial reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get your first reading for free</span>
                </a>
                <button 
                  onClick={() => scrollToSection('footer')}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Subscribe for spiritual tips</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6️⃣ Footer */}
        <footer id="footer" className="bg-navy-900 text-white py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">玄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-display">玄印 · Xuan Yin</h3>
                    <p className="text-cream-300 text-sm">Guided by Eastern Wisdom</p>
                  </div>
                </div>
                <p className="text-cream-300 mb-6 max-w-md">
                  愿迷路的灵魂，也能再次找到归途。
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
                    className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-navy-800 hover:bg-navy-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Email Subscription */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Subscribe to Wisdom Insights</h4>
                  <form onSubmit={handleEmailSubmit} className="flex space-x-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2 rounded-lg text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                    <button 
                      type="submit"
                      className="bg-navy-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-navy-600 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-cream-300">
                  <li><Link href="/services" className="hover:text-white transition-colors">BaZi Analysis</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Relationship Compatibility</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Protection & Guidance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Career Guidance</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-cream-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">About 玄印</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Astrology Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-navy-800 mt-12 pt-8 text-center text-cream-300">
              <p>© 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin</p>
              <p className="text-sm mt-2">愿迷路的灵魂，也能再次找到归途。</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
} 