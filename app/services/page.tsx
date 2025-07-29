'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { MessageCircle, CheckCircle, Star, Clock, Users, Shield } from 'lucide-react'
import Head from 'next/head'

const ServicesPage = () => {
  const services = [
    {
      title: "Life Purpose Reading",
      subtitle: "Find Your True Calling",
      icon: "🎯",
      price: "$29",
      duration: "3-5 business days",
      description: "Discover your life purpose, natural talents, and the path that will bring you the most fulfillment and success",
      features: [
        "Detailed life purpose analysis",
        "Natural talents and strengths identification",
        "Optimal career direction guidance",
        "Personal fulfillment assessment",
        "Life path timing recommendations",
        "Passion discovery framework",
        "Goal alignment strategies",
        "Follow-up guidance sessions"
      ],
      benefits: [
        "Find your true calling and passion",
        "Understand your unique strengths",
        "Make confident life decisions",
        "Align your actions with your purpose",
        "Create a fulfilling life plan"
      ]
    },
    {
      title: "Career & Business Guidance",
      subtitle: "Professional Success Strategy",
      icon: "💼",
      price: "$39",
      duration: "2-3 business days",
      description: "Get clarity on career decisions, timing for changes, and strategies for professional success and business growth",
      features: [
        "Career path analysis and recommendations",
        "Job change timing guidance",
        "Business opportunity assessment",
        "Professional strengths identification",
        "Leadership potential analysis",
        "Work environment compatibility",
        "Success timing predictions",
        "Career development roadmap"
      ],
      benefits: [
        "Make confident career decisions",
        "Choose the right timing for changes",
        "Identify your professional strengths",
        "Find the best work environment",
        "Plan your career advancement"
      ]
    },
    {
      title: "Relationship Compatibility",
      subtitle: "Love & Partnership Guidance",
      icon: "❤️",
      price: "$49",
      duration: "1-2 business days",
      description: "Understand your relationship patterns, improve communication, and find lasting love through compatibility analysis",
      features: [
        "Relationship compatibility assessment",
        "Communication style analysis",
        "Conflict resolution strategies",
        "Love timing predictions",
        "Partnership potential evaluation",
        "Relationship improvement guidance",
        "Marriage timing insights",
        "Long-term compatibility forecast"
      ],
      benefits: [
        "Build stronger relationships",
        "Improve communication skills",
        "Resolve relationship conflicts",
        "Find true compatibility",
        "Create lasting partnerships"
      ]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Free Consultation",
      description: "Start with a free 15-minute consultation to understand your specific situation and needs",
      icon: MessageCircle
    },
    {
      step: "02",
      title: "Information Collection",
      description: "Provide your birth date, time, and location for accurate astrological analysis",
      icon: Users
    },
    {
      step: "03",
      title: "Deep Analysis",
      description: "Master Xuan Yin performs comprehensive analysis using ancient Eastern astrology methods",
      icon: CheckCircle
    },
    {
      step: "04",
      title: "Personalized Report",
      description: "Receive your detailed personalized report with actionable guidance and recommendations",
      icon: Star
    },
    {
      step: "05",
      title: "Follow-up Support",
      description: "Get ongoing support and clarification to help you implement the guidance effectively",
      icon: Shield
    }
  ]

  return (
    <>
      <Head>
        <title>Career Guidance & Life Purpose Reading - Fate Compass</title>
        <meta name="description" content="Get professional career guidance, life purpose reading, and relationship advice. Find your true calling with ancient Eastern wisdom. 500+ satisfied clients." />
        <meta name="keywords" content="career guidance, life purpose, relationship advice, career change, job satisfaction, life direction, professional success, relationship compatibility, personal growth, career counseling" />
        <meta property="og:title" content="Career Guidance & Life Purpose Reading - Fate Compass" />
        <meta property="og:description" content="Get professional career guidance, life purpose reading, and relationship advice. Find your true calling with ancient Eastern wisdom." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fatecompass.com/services" />
        <link rel="canonical" href="https://fatecompass.com/services" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary-600 to-secondary-600">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Life Guidance Services</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Get clarity on your career, relationships, and life purpose with personalized Eastern astrology readings
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Help You Find Clarity</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the guidance that matches your current situation and needs
              </p>
            </motion.div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Service Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">{service.icon}</span>
                        <div>
                          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-lg text-gray-600">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">You'll Gain:</h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center text-gray-600">
                                <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Pricing & CTA */}
                    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-primary-600 mb-2">{service.price}</div>
                        <div className="text-gray-600 mb-4">
                          <Clock className="w-5 h-5 inline mr-1" />
                          {service.duration}
                        </div>
                      </div>
                      
                      <a
                        href="https://wa.me/8615914228258"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2 font-semibold"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Get Started Now
                      </a>
                      
                      <p className="text-sm text-gray-500 text-center mt-4">
                        Free consultation included
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simple 5-step process to get the clarity you need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4 text-primary-600 mx-auto w-12 h-12 flex items-center justify-center">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Ready to Find Your Path?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of people who have found clarity and direction through our guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/8615914228258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Start Your Free Consultation
                </a>
                <a
                  href="/about"
                  className="bg-white/20 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition-colors duration-200"
                >
                  Learn More About Master Xuan Yin
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ServicesPage 