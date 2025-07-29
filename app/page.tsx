'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Heart, Target, Briefcase, Users, Calendar, Phone, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

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
      text: "I was completely lost in my career. 玄印's analysis helped me discover my true calling. Now I'm finally doing what I love!",
      location: "New York, USA",
      problem: "Career Confusion"
    },
    {
      name: "Michael Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "My relationship was falling apart. The compatibility analysis showed us exactly what we needed to fix. We're stronger than ever now.",
      location: "Toronto, Canada",
      problem: "Relationship Issues"
    },
    {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I felt stuck and directionless. 玄印's reading revealed my life purpose and gave me the confidence to make major changes.",
      location: "London, UK",
      problem: "Life Purpose"
    },
    {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "After losing my job, I was desperate for guidance. 玄印's career analysis led me to a better opportunity I never considered.",
      location: "Seoul, Korea",
      problem: "Career Transition"
    },
    {
      name: "Lisa Rodriguez",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was struggling with self-doubt and couldn't decide on my next steps. The reading gave me clarity and renewed confidence.",
      location: "Madrid, Spain",
      problem: "Self-Doubt"
    },
    {
      name: "James Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Divorce left me questioning everything. 玄印 helped me understand my patterns and find hope for the future.",
      location: "Sydney, Australia",
      problem: "Life Crisis"
    },
    {
      name: "Anna Kowalski",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I was in a toxic relationship but couldn't see it clearly. The compatibility analysis opened my eyes and gave me strength to leave.",
      location: "Warsaw, Poland",
      problem: "Toxic Relationship"
    },
    {
      name: "Carlos Silva",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Financial struggles were overwhelming me. The wealth analysis showed me the right timing and opportunities to turn things around.",
      location: "São Paulo, Brazil",
      problem: "Financial Struggles"
    },
    {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I felt spiritually empty despite material success. 玄印 helped me find deeper meaning and purpose in life.",
      location: "Tokyo, Japan",
      problem: "Spiritual Crisis"
    },
    {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "As a single mom, I was overwhelmed with decisions. The reading gave me clarity on priorities and timing for major life changes.",
      location: "Barcelona, Spain",
      problem: "Life Balance"
    }
  ]

  const services = [
    {
      title: "Life Purpose Reading",
      icon: "🎯",
      description: "Discover your true calling and life path through ancient BaZi analysis",
      features: ["Personal destiny map", "Career guidance", "Life timing insights"],
      price: "From $99"
    },
    {
      title: "Career & Business Guidance", 
      icon: "💼",
      description: "Navigate career transitions and business decisions with confidence",
      features: ["Career compatibility", "Business timing", "Success strategies"],
      price: "From $129"
    },
    {
      title: "Relationship Compatibility",
      icon: "❤️",
      description: "Understand relationship dynamics and find lasting harmony",
      features: ["Partner compatibility", "Relationship timing", "Communication insights"],
      price: "From $89"
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

  return (
    <>
      <SEOHead
        title="玄印 · Xuan Yin - Guided by Eastern Wisdom | Your Destiny. Decoded."
        description="Feeling lost? I am lost and need direction. Let 玄印 guide you with ancient Eastern wisdom. Find your compass when you feel lost in life. Professional destiny reading for lost souls seeking clarity."
        ogTitle="玄印 · Xuan Yin - Guided by Eastern Wisdom | Your Destiny. Decoded."
        ogDescription="Feeling lost? Let 玄印 guide you with ancient Eastern wisdom. Find your compass when you feel lost in life."
        canonical="https://fatecompass.net"
      />
      
      <div className="min-h-screen">
        <Navigation />
        
        {/* Hero Section with Simple Background */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Simple Gradient Background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800" />
          
          {/* Mist Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
          
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Problems We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Are you experiencing any of these challenges? Ancient Eastern wisdom has the answers you seek.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🤔",
                  title: "Career Confusion",
                  symptoms: ["Unsure about job changes", "Feeling stuck in current role", "Questioning your path"]
                },
                {
                  icon: "💔",
                  title: "Relationship Issues", 
                  symptoms: ["Dating struggles", "Marriage problems", "Communication breakdown"]
                },
                {
                  icon: "🎯",
                  title: "Life Purpose Crisis",
                  symptoms: ["Feeling directionless", "Lack of motivation", "Existential questions"]
                },
                {
                  icon: "💰",
                  title: "Financial Struggles",
                  symptoms: ["Money timing issues", "Investment decisions", "Career vs passion"]
                },
                {
                  icon: "😰",
                  title: "Life Transitions",
                  symptoms: ["Major life changes", "Timing decisions", "Fear of the unknown"]
                },
                {
                  icon: "🧘",
                  title: "Spiritual Emptiness",
                  symptoms: ["Material success but inner void", "Seeking deeper meaning", "Spiritual awakening"]
                }
              ].map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{problem.title}</h3>
                  <ul className="space-y-2">
                    {problem.symptoms.map((symptom, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Real People, Real Results
              </h2>
              <p className="text-xl text-gray-600">
                See how 玄印 has helped lost souls find their compass and transform their lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full mb-2">
                      {testimonial.problem}
                    </span>
                  </div>

                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Ancient Wisdom Works Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Ancient Wisdom Works
              </h2>
              <p className="text-xl text-gray-600">
                For thousands of years, lost souls have found their compass through Eastern astrology. 
                The same wisdom that guided emperors now guides you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  玄印's Approach
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  Unlike modern astrology, Eastern wisdom doesn't just tell you what will happen - 
                  it shows you how to navigate life's challenges with grace and purpose. 
                  Every reading is personalized to your unique energy pattern.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🧭</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Your Personal Compass</h4>
                      <p className="text-gray-600">
                        Discover your unique life path and the timing that works best for you.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Practical Guidance</h4>
                      <p className="text-gray-600">
                        Get actionable advice for career, relationships, and life decisions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Life-Changing Results</h4>
                      <p className="text-gray-600">
                        Join thousands who have transformed their lives through this ancient wisdom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Lives Changed", value: "2,847+" },
                  { label: "Success Rate", value: "94%" },
                  { label: "Years Experience", value: "20+" },
                  { label: "Countries Served", value: "15+" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl text-center shadow-lg"
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Help You Find Your Compass
              </h2>
              <p className="text-xl text-gray-600">
                Choose the guidance that matches your current needs and start your transformation today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-2xl font-bold text-primary-600 mb-6">{service.price}</div>
                  
                  <Link href="/services">
                    <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-700 transition-all duration-300">
                      Get Started Now
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get Free Life Guidance Tips
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of seekers who receive weekly insights on finding their compass and living their best life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Tips
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
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
                <div className="flex space-x-4">
                  <a href="https://wa.me/8615914228258" className="text-gray-400 hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:chenxiao0801@hotmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/services" className="hover:text-white transition-colors">Life Purpose Reading</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Career Guidance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Relationship Compatibility</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About 玄印</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>© 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
} 