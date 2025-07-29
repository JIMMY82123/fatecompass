'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Heart, Target, Briefcase, Users, Calendar, Phone, Mail, Send } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

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
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    // Scroll to top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timer)
      clearInterval(quoteInterval)
      clearInterval(testimonialInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [quotes.length, testimonials.length])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
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
        {/* Mystical Background */}
        <div className="fixed inset-0 z-0">
          {/* Dark gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          
          {/* Mystical elements */}
          <div className="absolute inset-0">
            {/* Yin Yang symbol */}
            <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-gray-300 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-slate-900 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-slate-900 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Trigrams (Ba Gua) */}
            <div className="absolute top-40 right-20 opacity-15">
              <div className="space-y-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex space-x-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className={`w-8 h-2 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent border border-white'}`}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating stars */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
            
            {/* Mystical lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10">
                <defs>
                  <linearGradient id="mysticalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 Q25,25 50,50 T100,50"
                  stroke="url(#mysticalGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M0,80 Q25,55 50,80 T100,80"
                  stroke="url(#mysticalGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
              </svg>
            </div>
            
            {/* Floating Chinese characters */}
            <div className="absolute top-1/4 left-1/4 text-6xl text-white/10 font-bold animate-bounce" style={{ animationDuration: '4s' }}>
              命
            </div>
            <div className="absolute top-1/3 right-1/3 text-4xl text-white/10 font-bold animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              理
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-5xl text-white/10 font-bold animate-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }}>
              玄
            </div>
            
            {/* Energy waves */}
            <div className="absolute bottom-0 left-0 right-0 h-32">
              <div className="w-full h-full bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm">
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
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  玄印 · Xuan Yin
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
                Your Destiny. Decoded by Eastern Wisdom
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>Start Your Journey</span>
              </a>
              <Link href="/services">
                <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
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
                <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                <div className="text-gray-400">Years of Wisdom</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">2,847+</div>
                <div className="text-gray-400">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems We Solve Section */}
        <section className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
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
        <section className="py-20 bg-slate-800/50 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-blue-900/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real People, Real Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how ancient Eastern wisdom has transformed lives and brought clarity to confused souls.
              </p>
            </div>
            
            {/* Testimonials Carousel */}
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-in-out"
                  animate={{ x: `-${currentTestimonial * 33.333}%` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full cursor-pointer"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                      >
                        <div className="flex items-center mb-4">
                          <div className="relative w-12 h-12 mr-4">
                            <Image 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                              sizes="48px"
                            />
                          </div>
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
                    </div>
                  ))}
                </motion.div>
              </div>
              
              {/* Carousel Navigation */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? 5 : prev - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentTestimonial(prev => prev === 5 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
        <section className="py-20 bg-slate-900/50 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
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
        <footer className="bg-slate-900 text-white py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-purple-900/20 to-slate-900"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
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

        {/* Scroll to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
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