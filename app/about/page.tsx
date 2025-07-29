'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Award, Users, Clock, Heart, Target, Shield, ArrowRight, Phone } from 'lucide-react'
import Navigation from '@/components/Navigation'
import SEOHead from '@/components/SEOHead'

export default function About() {
  const values = [
    {
      icon: "🧭",
      title: "Personalized Guidance",
      description: "Every reading is tailored to your unique energy pattern and life circumstances."
    },
    {
      icon: "🌟",
      title: "Ancient Wisdom",
      description: "Drawing from 5,000 years of Eastern astrology and spiritual traditions."
    },
    {
      icon: "💝",
      title: "Compassionate Care",
      description: "Providing guidance with empathy, understanding, and genuine care for your wellbeing."
    },
    {
      icon: "🎯",
      title: "Practical Results",
      description: "Focusing on actionable advice that creates real, positive change in your life."
    }
  ]

  const achievements = [
    {
      icon: "👥",
      label: "Lives Transformed",
      value: "2,847+",
      description: "People who found their true path"
    },
    {
      icon: "⭐",
      label: "Success Rate",
      value: "94%",
      description: "Client satisfaction rate"
    },
    {
      icon: "📅",
      label: "Years Experience",
      value: "20+",
      description: "Mastering Eastern wisdom"
    },
    {
      icon: "🌍",
      label: "Countries Served",
      value: "15+",
      description: "Global reach and impact"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "玄印 helped me discover my true calling. I was lost in my career, but now I'm doing what I love and making a real difference.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada", 
      text: "The relationship compatibility analysis saved my marriage. We now understand each other better than ever before.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      text: "I felt completely directionless until I met 玄印. The life purpose reading gave me clarity and confidence to make major changes.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ]

  return (
    <>
      <SEOHead
        title="About 玄印 · Xuan Yin - Master of Eastern Wisdom | Fate Compass"
        description="Meet Master 玄印, a 20+ year expert in Eastern astrology. Learn how ancient wisdom helps lost souls find their compass and transform their lives."
        keywords="Master 玄印, Xuan Yin, Eastern astrology expert, BaZi master, life guidance, spiritual teacher, Eastern wisdom"
        ogTitle="About 玄印 · Xuan Yin - Master of Eastern Wisdom"
        ogDescription="Meet Master 玄印, expert in Eastern astrology helping lost souls find their compass for 20+ years."
        canonical="https://fatecompass.net/about"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Meet Master 玄印
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  For over 20 years, I have dedicated my life to helping lost souls find their compass 
                  through ancient Eastern wisdom. My journey began in the mountains of China, where I 
                  studied under master astrologers and learned the sacred art of BaZi analysis.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, I guide people worldwide who feel lost, confused, or stuck in life. Whether 
                  you're struggling with career decisions, relationship issues, or searching for your 
                  life purpose, I provide personalized guidance that transforms lives.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/8615914228258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Start Your Journey</span>
                  </a>
                  <Link href="/services">
                    <button className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                      View Services
                    </button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl text-white font-bold">玄</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">玄印 · Xuan Yin</h3>
                    <p className="text-primary-600 font-medium mb-4">Master of Eastern Wisdom</p>
                    <p className="text-gray-600 mb-6">
                      "Your destiny is written in the stars, but you hold the pen. 
                      Let me help you write a beautiful story."
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">20+</div>
                        <div className="text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">2,847+</div>
                        <div className="text-gray-600">Lives Changed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                My Approach & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every reading is guided by these core principles that have helped thousands find their path.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Impact & Results
              </h2>
              <p className="text-xl text-gray-600">
                The numbers tell the story of transformation and hope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{achievement.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  The Journey of 玄印
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    My journey began in the misty mountains of China, where I first encountered the 
                    ancient wisdom of Eastern astrology. Under the guidance of master astrologers, 
                    I learned to read the patterns of destiny written in the stars and elements.
                  </p>
                  <p>
                    For years, I studied the sacred texts, practiced the art of BaZi analysis, and 
                    learned to understand the subtle energies that influence our lives. But my true 
                    calling came when I realized that this ancient wisdom could help modern people 
                    who felt lost and directionless.
                  </p>
                  <p>
                    Today, I combine traditional Eastern astrology with modern understanding to provide 
                    guidance that is both spiritually profound and practically useful. My mission is 
                    simple: to help lost souls find their compass and transform their lives.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏔️</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Ancient Wisdom, Modern Application</h3>
                    <p className="text-gray-600 mb-6">
                      "The mountains taught me patience, the rivers taught me flow, 
                      and the stars taught me that every soul has a unique path to follow."
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary-600">5,000+</div>
                        <div className="text-gray-600">Years of Tradition</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-primary-600">15+</div>
                        <div className="text-gray-600">Countries Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What People Say About 玄印
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from people whose lives were transformed through ancient wisdom.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands who have found their compass with 玄印's guidance. 
              Your transformation begins with a simple conversation.
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
              <Link href="/services">
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                  Explore Services
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