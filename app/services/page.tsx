'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Star, Clock, Users, Target, Heart, Shield, ArrowRight, Phone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function Services() {
  const services = [
    {
      id: 'bazi-analysis',
      title: "Life Purpose Reading",
      subtitle: "BaZi Destiny Analysis",
      icon: "🎯",
      description: "Discover your true calling and life path through ancient BaZi analysis. Understand your natural talents, optimal timing, and the path that will bring you the most fulfillment.",
      duration: "60-90 minutes",
      price: "From $99",
      features: [
        "Personal destiny map analysis",
        "Career and life purpose guidance", 
        "Optimal timing for major decisions",
        "Natural talents and strengths identification",
        "Life path recommendations",
        "Detailed written report"
      ],
      benefits: [
        "Find your true calling",
        "Make confident life decisions",
        "Understand your unique gifts",
        "Navigate life transitions"
      ],
      process: [
        "Birth date and time analysis",
        "Personal consultation session",
        "Detailed report preparation",
        "Follow-up guidance"
      ]
    },
    {
      id: 'career-guidance',
      title: "Career & Business Guidance",
      subtitle: "Professional Path Analysis", 
      icon: "💼",
      description: "Navigate career transitions and business decisions with confidence. Get clarity on when to make moves, which opportunities to pursue, and how to maximize your professional success.",
      duration: "45-60 minutes",
      price: "From $129",
      features: [
        "Career compatibility analysis",
        "Business timing recommendations",
        "Success strategy development",
        "Industry and role guidance",
        "Investment and financial timing",
        "Professional development plan"
      ],
      benefits: [
        "Make confident career moves",
        "Choose the right opportunities",
        "Maximize professional success",
        "Time major decisions perfectly"
      ],
      process: [
        "Career history review",
        "Current situation analysis", 
        "Future opportunity mapping",
        "Action plan development"
      ]
    },
    {
      id: 'relationship-compatibility',
      title: "Relationship Compatibility",
      subtitle: "Love & Partnership Analysis",
      icon: "❤️",
      description: "Understand relationship dynamics and find lasting harmony. Whether you're single, dating, or married, discover how to build stronger, more fulfilling relationships.",
      duration: "45-75 minutes", 
      price: "From $89",
      features: [
        "Partner compatibility analysis",
        "Relationship timing insights",
        "Communication style guidance",
        "Conflict resolution strategies",
        "Marriage timing recommendations",
        "Relationship growth plan"
      ],
      benefits: [
        "Find true compatibility",
        "Improve communication",
        "Resolve relationship conflicts",
        "Build lasting partnerships"
      ],
      process: [
        "Individual personality analysis",
        "Partner compatibility assessment",
        "Relationship dynamics review",
        "Harmony-building strategies"
      ]
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Free Consultation",
      description: "15-minute discovery call to understand your needs",
      icon: "📞"
    },
    {
      step: 2, 
      title: "Birth Data Collection",
      description: "Provide your birth date, time, and location",
      icon: "📅"
    },
    {
      step: 3,
      title: "Deep Analysis",
      description: "玄印 performs detailed astrological analysis",
      icon: "🔮"
    },
    {
      step: 4,
      title: "Personal Session",
      description: "60-90 minute consultation with detailed guidance",
      icon: "💬"
    },
    {
      step: 5,
      title: "Written Report",
      description: "Comprehensive report with actionable insights",
      icon: "📋"
    },
    {
      step: 6,
      title: "Follow-up Support",
      description: "30-day email support for questions and guidance",
      icon: "📧"
    }
  ]

  return (
    <>
      <SEOHead
        title="Professional Life Guidance Services | 玄印 · Xuan Yin"
        description="Feeling lost in your career or relationships? Get professional guidance from Master 玄印. Life purpose readings, career advice, and relationship compatibility analysis. Find your compass today."
        keywords="career guidance, life purpose reading, relationship compatibility, BaZi analysis, Eastern astrology, professional advice, career change, relationship advice"
        ogTitle="Professional Life Guidance Services | 玄印 · Xuan Yin"
        ogDescription="Get professional guidance for career, relationships, and life purpose. Master 玄印 helps you find your true path."
        canonical="https://fatecompass.net/services"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Professional Life Guidance Services
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              >
                Feeling lost, confused, or stuck? Let ancient Eastern wisdom guide you to clarity, 
                purpose, and success. Choose the guidance that matches your current needs.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How We Help You Find Clarity
              </h2>
              <p className="text-xl text-gray-600">
                Each service is designed to address specific life challenges and provide actionable guidance.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Service Info */}
                    <div>
                      <div className="flex items-center mb-6">
                        <span className="text-5xl mr-4">{service.icon}</span>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-lg text-primary-600 font-medium">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-2" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="w-5 h-5 mr-2" />
                          <span>1-on-1 Session</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <Check className="w-4 h-4 text-primary-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">You'll Gain:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-center mb-6">
                          <div className="text-4xl font-bold text-primary-600 mb-2">
                            {service.price}
                          </div>
                          <p className="text-gray-600">One-time consultation</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Process:</h4>
                          <ul className="space-y-2">
                            {service.process.map((step, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <a
                          href="https://wa.me/8615914228258"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Phone className="w-5 h-5" />
                          <span>Get Started Now</span>
                        </a>
                        <Link href="/about">
                          <button className="w-full border-2 border-primary-500 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                            Learn More About 玄印
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Your journey to clarity and purpose in 6 simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-sm font-semibold text-primary-600 mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Find Your Path?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands who have transformed their lives with 玄印's guidance. 
              Your journey to clarity and purpose starts with a simple conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Start Your Free Consultation</span>
              </a>
              <Link href="/about">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  Learn More About Master 玄印
                </button>
              </Link>
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
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