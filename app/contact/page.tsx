'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, MessageCircle, Star, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Fastest way to reach me for consultations and questions",
      action: "+86 15914228258",
      link: "https://wa.me/8615914228258",
      color: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "For detailed inquiries and appointment scheduling",
      action: "chenxiao0801@hotmail.com",
      link: "mailto:chenxiao0801@hotmail.com",
      color: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "15-minute discovery call to understand your needs",
      action: "Book Now",
      link: "https://wa.me/8615914228258?text=Hi%20玄印,%20I'd%20like%20to%20schedule%20a%20free%20consultation",
      color: "bg-primary-500",
      textColor: "text-primary-500"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM (EST)" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM (EST)" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM (EST)" }
  ]

  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer: "Simply click the WhatsApp button or send me an email. I'll respond within 24 hours to schedule your session."
    },
    {
      question: "What information do I need to provide?",
      answer: "You'll need your birth date, time, and location. The more accurate the birth time, the more precise the reading."
    },
    {
      question: "How long does a consultation take?",
      answer: "Sessions typically last 60-90 minutes, depending on the service you choose and your specific needs."
    },
    {
      question: "Do you offer follow-up support?",
      answer: "Yes! All consultations include 30 days of email support for questions and clarification."
    },
    {
      question: "What if I'm not satisfied with my reading?",
      answer: "I'm committed to your satisfaction. If you're not happy with your consultation, I offer a full refund."
    },
    {
      question: "Can you help with urgent life decisions?",
      answer: "Yes, I offer expedited consultations for urgent matters. Contact me directly to discuss your situation."
    }
  ]

  return (
    <>
      <SEOHead
        title="Contact 玄印 · Xuan Yin - Get Your Free Consultation | Fate Compass"
        description="Ready to find your compass? Contact Master 玄印 for a free consultation. WhatsApp: +86 15914228258. Email: chenxiao0801@hotmail.com. Start your transformation today."
        keywords="contact 玄印, Xuan Yin consultation, free reading, WhatsApp consultation, Eastern astrology consultation, life guidance contact"
        ogTitle="Contact 玄印 · Xuan Yin - Get Your Free Consultation"
        ogDescription="Ready to find your compass? Contact Master 玄印 for a free consultation. Start your transformation today."
        canonical="https://fatecompass.net/contact"
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
                Ready to Find Your Compass?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
              >
                Your journey to clarity and purpose starts with a simple conversation. 
                I'm here to help you navigate life's biggest challenges with ancient Eastern wisdom.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How to Reach Me
              </h2>
              <p className="text-xl text-gray-600">
                Choose the method that works best for you. I'm here to help you find your path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    
                    <a
                      href={method.link}
                      target={method.title === "Email" ? "_self" : "_blank"}
                      rel={method.title === "Email" ? "" : "noopener noreferrer"}
                      className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        method.title === "WhatsApp" 
                          ? "bg-green-500 text-white hover:bg-green-600" 
                          : method.title === "Email"
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-primary-500 text-white hover:bg-primary-600"
                      }`}
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                When I'm Available
              </h2>
              <p className="text-xl text-gray-600">
                I work with clients worldwide, so I offer flexible hours to accommodate different time zones.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {businessHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 rounded-lg bg-gray-50"
                  >
                    <div className="text-lg font-semibold text-gray-900 mb-2">{schedule.day}</div>
                    <div className="text-gray-600">{schedule.hours}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  <Clock className="w-5 h-5 inline mr-2" />
                  All times are in Eastern Standard Time (EST)
                </p>
                <p className="text-sm text-gray-500">
                  Need a consultation outside these hours? Contact me and I'll do my best to accommodate you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose 玄印?
              </h2>
              <p className="text-xl text-gray-600">
                Here's what makes my guidance different and why thousands trust me with their life decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧭",
                  title: "Personalized Approach",
                  description: "Every reading is tailored to your unique energy pattern and life circumstances."
                },
                {
                  icon: "🌟",
                  title: "20+ Years Experience",
                  description: "Decades of mastering Eastern astrology and helping people find their path."
                },
                {
                  icon: "💝",
                  title: "Compassionate Care",
                  description: "I approach every client with empathy, understanding, and genuine care."
                },
                {
                  icon: "🎯",
                  title: "Practical Results",
                  description: "Focus on actionable advice that creates real, positive change in your life."
                },
                {
                  icon: "📞",
                  title: "Ongoing Support",
                  description: "30 days of follow-up support to help you implement the guidance effectively."
                },
                {
                  icon: "⭐",
                  title: "94% Success Rate",
                  description: "Over 2,800 lives transformed with proven results and client satisfaction."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about consultations and how I can help you.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Don't let confusion and uncertainty hold you back. Take the first step toward clarity and purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Start WhatsApp Chat</span>
              </a>
              <a
                href="mailto:chenxiao0801@hotmail.com"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
            
            <div className="mt-8 text-primary-100">
              <p className="text-lg font-semibold mb-2">Free 15-minute consultation included!</p>
              <p className="text-sm">No obligation, just clarity and guidance.</p>
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