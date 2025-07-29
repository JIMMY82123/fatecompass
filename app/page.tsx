'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { ChevronRight, Star, MessageCircle, Target, Heart, Briefcase } from 'lucide-react'

const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const quotes = [
    "Feeling lost? Let 玄印 be your compass",
    "Your destiny is written in the stars - discover it today",
    "Find your compass when life feels uncertain"
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

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 4000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => {
      clearInterval(quoteInterval)
      clearInterval(testimonialInterval)
    }
  }, [quotes.length, testimonials.length])

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
            }}
          ></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-secondary-900/70"></div>
          
          {/* Animated Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-white/8 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            Your Destiny. Decoded by 玄印
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            <div className="min-h-[2rem] flex items-center justify-center">
              {quotes.map((quote, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentQuote === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {quote}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Feeling lost, confused, or stuck in life? You're not alone. Millions of people struggle with finding their true path, 
              making career decisions, or understanding their relationships. When you feel lost, 玄印 becomes your compass, 
              guiding you through life's biggest challenges with ancient Eastern wisdom that has helped people find direction for over 5,000 years.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🧭</div>
                <h3 className="text-lg font-semibold mb-2">Find Your Compass</h3>
                <p className="text-sm text-white/80">Discover your true calling and life direction</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="text-lg font-semibold mb-2">Career Clarity</h3>
                <p className="text-sm text-white/80">Make confident career and business decisions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h3 className="text-lg font-semibold mb-2">Relationship Harmony</h3>
                <p className="text-sm text-white/80">Build stronger, more fulfilling relationships</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Your Free Reading
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Are You Feeling Lost With...</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These are the most common challenges our clients face before finding their compass
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Life Purpose Confusion",
                description: "Feeling lost and unsure about your direction in life? Not knowing what you're meant to do?",
                symptoms: ["Feeling stuck", "Lack of motivation", "Questioning everything"]
              },
              {
                icon: Briefcase,
                title: "Career Uncertainty",
                description: "Struggling with career decisions, job changes, or finding the right path professionally?",
                symptoms: ["Job dissatisfaction", "Career confusion", "Fear of change"]
              },
              {
                icon: Heart,
                title: "Relationship Problems",
                description: "Having trouble with love, marriage, or understanding your partner better?",
                symptoms: ["Communication issues", "Trust problems", "Compatibility doubts"]
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-primary-600">
                  <problem.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Common symptoms:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {problem.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real People, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how others found their compass and direction when they needed it most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full mt-1">
                      {testimonial.problem}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Ancient Wisdom Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How 5,000 years of Eastern astrology helps lost souls find their compass
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">玄印's Approach</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Unlike modern life coaches who give generic advice, 玄印 uses ancient Eastern astrology 
                to provide personalized guidance based on your unique birth chart. This 5,000-year-old system 
                reveals your natural talents, life purpose, and optimal timing for important decisions.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After helping over 500 people worldwide find clarity in their darkest moments, 玄印 
                has developed a proven system that combines ancient wisdom with modern understanding to deliver 
                life-changing results for lost souls seeking direction.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-500">Lives Changed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">20+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-500">Success Rate</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧭</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Your Personal Compass</h4>
                  <p className="text-gray-600">
                    Your birth chart is as unique as your fingerprint. We analyze your specific 
                    astrological makeup to provide guidance tailored to your exact situation and needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help You Find Your Compass</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the guidance that matches your current situation and needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Life Purpose Reading",
                description: "Discover your true calling, natural talents, and the path that will bring you the most fulfillment and success",
                price: "$29",
                icon: "🧭",
                benefits: ["Find your passion", "Understand your strengths", "Choose the right direction"]
              },
              {
                title: "Career & Business Guidance",
                description: "Get clarity on career decisions, timing for changes, and strategies for professional success",
                price: "$39",
                icon: "💼",
                benefits: ["Make confident decisions", "Timing for changes", "Professional strategies"]
              },
              {
                title: "Relationship Compatibility",
                description: "Understand your relationship patterns, improve communication, and find lasting love",
                price: "$49",
                icon: "❤️",
                benefits: ["Better communication", "Resolve conflicts", "Find true compatibility"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="text-3xl font-bold text-primary-600 mb-6">{service.price}</div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-3">You'll discover:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center justify-center">
                        <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/8615914228258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Started Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Free Life Guidance Tips</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of people discovering their true path with weekly insights and guidance
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Free Tips
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">玄</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">玄印 · Xuan Yin</span>
                <span className="text-sm text-gray-400">Guided by Eastern Wisdom</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg">Your Destiny. Decoded.</p>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage 