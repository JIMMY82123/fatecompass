'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Heart, Target, Briefcase, Users, Calendar, Phone, Mail, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState('')

  const quotes = [
    "When you feel lost, the ancient wisdom becomes your compass.",
    "Your destiny is written in the stars, but you hold the pen.",
    "In the chaos of life, Eastern wisdom brings clarity and peace."
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was completely lost in my career. 玄印's analysis helped me discover my true calling. Now I'm finally doing what I love and making a real difference in people's lives!",
      location: "New York, USA",
      problem: "Career Confusion",
      emotion: "Overwhelmed → Fulfilled"
    },
    {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "My relationship was falling apart. The compatibility analysis showed us exactly what we needed to fix. We're stronger than ever now and planning our wedding!",
      location: "Toronto, Canada",
      problem: "Relationship Issues",
      emotion: "Heartbroken → In Love"
    },
    {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I felt stuck and directionless. 玄印's reading revealed my life purpose and gave me the confidence to make major changes. I've never been happier!",
      location: "London, UK",
      problem: "Life Purpose",
      emotion: "Lost → Purposeful"
    },
    {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "After losing my job, I was desperate for guidance. 玄印's career analysis led me to a better opportunity I never considered. I'm making 40% more now!",
      location: "Seoul, Korea",
      problem: "Career Transition",
      emotion: "Desperate → Thriving"
    },
    {
      name: "Lisa Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was struggling with self-doubt and couldn't decide on my next steps. The reading gave me clarity and renewed confidence. I finally feel like myself again!",
      location: "Madrid, Spain",
      problem: "Self-Doubt",
      emotion: "Confused → Confident"
    },
    {
      name: "James Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Divorce left me questioning everything. 玄印 helped me understand my patterns and find hope for the future. I'm dating again and feeling optimistic!",
      location: "Sydney, Australia",
      problem: "Life Crisis",
      emotion: "Hopeless → Hopeful"
    },
    {
      name: "Anna Kowalski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was in a toxic relationship but couldn't see it clearly. The compatibility analysis opened my eyes and gave me strength to leave. I'm free and happy now!",
      location: "Warsaw, Poland",
      problem: "Toxic Relationship",
      emotion: "Trapped → Free"
    },
    {
      name: "Carlos Silva",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Financial struggles were overwhelming me. The wealth analysis showed me the right timing and opportunities to turn things around. I'm debt-free now!",
      location: "São Paulo, Brazil",
      problem: "Financial Struggles",
      emotion: "Stressed → Secure"
    },
    {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I felt spiritually empty despite material success. 玄印 helped me find deeper meaning and purpose in life. I'm finally at peace with myself!",
      location: "Tokyo, Japan",
      problem: "Spiritual Crisis",
      emotion: "Empty → Fulfilled"
    },
    {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was afraid to make big life changes. The destiny reading gave me the courage to pursue my dreams. I quit my job and started my own business!",
      location: "Barcelona, Spain",
      problem: "Fear of Change",
      emotion: "Afraid → Courageous"
    }
  ]

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => {
      clearInterval(quoteInterval)
      clearInterval(testimonialInterval)
    }
  }, [quotes.length, testimonials.length])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you for subscribing! We\'ll keep you updated with ancient wisdom insights.')
  }

  return (
    <div className="relative min-h-screen">
      <SEOHead 
        title="Fate Compass | 玄印命理师 - Your Destiny Decoded"
        description="Feeling lost? Let Master 玄印 guide you with ancient Eastern wisdom. Bazi readings, love compatibility, and spiritual guidance for confused souls seeking direction."
      />
      
      {/* Global Dynamic Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" />
        
        {/* Animated circles - distributed across the page */}
        <div className="absolute inset-0">
          {/* Large circles in different positions */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/10 rounded-full"
            style={{
              animation: 'customPulse 8s ease-in-out infinite',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-900/15 rounded-full"
            style={{
              animation: 'customPulse 10s ease-in-out infinite 2s',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-900/12 rounded-full"
            style={{
              animation: 'customPulse 12s ease-in-out infinite 4s',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-900/10 rounded-full"
            style={{
              animation: 'customPulse 9s ease-in-out infinite 1s',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute bottom-1/3 right-1/4 w-88 h-88 bg-gray-800/15 rounded-full"
            style={{
              animation: 'customPulse 11s ease-in-out infinite 3s',
              transformOrigin: 'center'
            }}
          />
          
          {/* Additional animated elements */}
          <div 
            className="absolute top-1/6 left-1/2 w-48 h-48 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-full"
            style={{
              animation: 'customPulse 15s ease-in-out infinite 5s',
              transformOrigin: 'center'
            }}
          />
          
          <div 
            className="absolute bottom-1/6 left-1/6 w-56 h-56 bg-gradient-to-br from-green-500/8 to-teal-500/8 rounded-full"
            style={{
              animation: 'customPulse 13s ease-in-out infinite 6s',
              transformOrigin: 'center'
            }}
          />
          
          {/* Floating dots - more distributed */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${
                  i % 3 === 0 ? 'w-3 h-3 bg-white/25' : 
                  i % 3 === 1 ? 'w-2 h-2 bg-blue-400/20' : 
                  'w-1 h-1 bg-yellow-400/30'
                }`}
                style={{
                  left: `${5 + (i % 10) * 9}%`,
                  top: `${10 + Math.floor(i / 10) * 25}%`,
                  animation: `customBounce ${3 + i * 0.4}s ease-in-out infinite ${i * 0.3}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated lines */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={`line-${i}`}
                className="absolute w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{
                  left: `${15 + i * 10}%`,
                  top: '0',
                  animation: `customFloat ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`
                }}
              />
            ))}
          </div>
          
          {/* Animated squares */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={`square-${i}`}
                className="absolute w-8 h-8 border border-white/10 rotate-45"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 2) * 30}%`,
                  animation: `customRotate ${20 + i * 3}s linear infinite ${i * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Mist overlay for hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent z-10" />
          
          {/* Content */}
          <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Title */}
              <h1 className="text-6xl md:text-8xl font-bold mb-4 font-serif">
                玄印 · Master Xuan Yin
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl mb-8 font-light text-gray-200">
                Let Eastern Wisdom Illuminate Your Path
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300 leading-relaxed">
                Feeling lost, confused, or stuck in life? Let ancient Eastern wisdom be your compass. 
                Master 玄印 guides lost souls to find their true path through personalized destiny readings.
              </p>

              {/* Animated Quote */}
              <div className="mb-12 h-20 flex items-center justify-center">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl italic text-gray-200 font-serif"
                >
                  "{quotes[currentQuote]}"
                </motion.p>
              </div>

              {/* Feature Icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-5xl">🧭</span>
                  <h3 className="text-xl font-semibold">Find Your Compass</h3>
                  <p className="text-sm text-gray-300">Discover your true direction</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-5xl">💼</span>
                  <h3 className="text-xl font-semibold">Career Clarity</h3>
                  <p className="text-sm text-gray-300">Navigate your professional path</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <span className="text-5xl">❤️</span>
                  <h3 className="text-xl font-semibold">Relationship Harmony</h3>
                  <p className="text-sm text-gray-300">Find lasting love and connection</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services">
                  <button className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-10 py-5 rounded-full font-semibold text-xl hover:from-primary-600 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl">
                    <span>Get Your Free Reading</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-2xl">
                    See How It Works
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems We Solve Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Problems We Solve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                When you feel lost, confused, or stuck, ancient Eastern wisdom provides the answers you've been seeking.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Career Confusion</h3>
                <p className="text-gray-300">
                  Don't know which path to take? Our destiny readings reveal your true calling and optimal career timing.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Relationship Struggles</h3>
                <p className="text-gray-300">
                  Love life in chaos? Compatibility analysis shows you who's truly meant for you and when.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Life Purpose Crisis</h3>
                <p className="text-gray-300">
                  Feeling directionless? Discover your life mission and the timing for major decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real People, Real Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how ancient Eastern wisdom has transformed lives and brought clarity to confused souls.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 6).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">{testimonial.text}</p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{testimonial.problem}</span>
                    <span className="text-green-400 font-semibold">{testimonial.emotion}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ancient Wisdom Works */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Ancient Wisdom Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                For thousands of years, Eastern astrology has guided emperors, warriors, and ordinary people through life's most difficult decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  The Science of Destiny
                </h3>
                <p className="text-gray-300 mb-6">
                  BaZi (八字) analysis is based on the precise calculation of your birth time, date, and location. This creates a unique cosmic fingerprint that reveals your personality, strengths, challenges, and optimal timing for life decisions.
                </p>
                <p className="text-gray-300 mb-6">
                  Unlike Western astrology, Eastern wisdom provides specific, actionable guidance for career choices, relationship timing, and major life transitions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Personalized Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Timing Guidance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">What You'll Discover</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h5 className="text-white font-semibold">Your Life Purpose</h5>
                      <p className="text-gray-300 text-sm">The career path that aligns with your destiny</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">💕</span>
                    <div>
                      <h5 className="text-white font-semibold">Relationship Compatibility</h5>
                      <p className="text-gray-300 text-sm">Who you're truly meant to be with</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <h5 className="text-white font-semibold">Optimal Timing</h5>
                      <p className="text-gray-300 text-sm">When to make major life changes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h5 className="text-white font-semibold">Protection & Guidance</h5>
                      <p className="text-gray-300 text-sm">How to navigate challenges successfully</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help You Find Your Compass */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Help You Find Your Compass
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three powerful services designed to guide you through life's most important decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">BaZi Analysis</h3>
                <p className="text-gray-300 mb-6">
                  Deep personal destiny reading revealing your life purpose, career path, and optimal timing for major decisions.
                </p>
                <div className="text-2xl font-bold text-white mb-4">$49</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Relationship Compatibility</h3>
                <p className="text-gray-300 mb-6">
                  Discover if your partner is truly meant for you and learn how to strengthen your relationship.
                </p>
                <div className="text-2xl font-bold text-white mb-4">$39</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Talismans & Protection</h3>
                <p className="text-gray-300 mb-6">
                  Custom spiritual protection and guidance for challenging times and important decisions.
                </p>
                <div className="text-2xl font-bold text-white mb-4">$29</div>
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
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected to Ancient Wisdom
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get weekly insights, spiritual guidance, and exclusive tips for navigating life's challenges.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Free Tips</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
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
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://wa.me/8615914228258" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+86 15914228258</span>
                  </a>
                  <a 
                    href="mailto:chenxiao0801@hotmail.com" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>chenxiao0801@hotmail.com</span>
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
                      className="flex-1 px-4 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button 
                      type="submit"
                      className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-600 transition-colors"
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
      </div>
    </div>
  )
} 