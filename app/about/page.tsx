'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, BookOpen, Heart, Target, Shield, Star } from 'lucide-react'
import Image from 'next/image'
import SEOHead from '@/components/SEOHead'
import Navigation from '@/components/Navigation'

export default function About() {
  const achievements = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "10+ Years Study",
      description: "Dedicated over a decade to mastering Eastern astrology and BaZi analysis"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "2,000+ Readings",
      description: "Helped thousands of people find clarity and purpose in their lives"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Ancient Wisdom",
      description: "Combines traditional knowledge with modern understanding"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Confidential",
      description: "Your privacy and trust are our highest priorities"
    }
  ]

  const philosophy = [
    {
      title: "Eastern Wisdom Guides Destiny",
      description: "We believe that ancient Eastern astrology is not superstition, but a sophisticated language for understanding life's patterns and rhythms."
    },
    {
      title: "Personalized Approach",
      description: "Every reading is uniquely tailored to your specific situation. No generic templates, only personalized insights that speak to your journey."
    },
    {
      title: "Practical Guidance",
      description: "Our goal is to provide actionable insights that help you make better decisions and navigate life's challenges with confidence."
    },
    {
      title: "Compassionate Service",
      description: "We understand that seeking guidance often comes from a place of vulnerability. We approach every consultation with empathy and care."
    }
  ]

  return (
    <>
      <SEOHead
        title="About Master 玄印 · Xuan Yin | Fate Compass - Your Eastern Astrology Guide"
        description="Learn about Master 玄印's 10+ years of Eastern astrology study, his philosophy of guiding destiny through ancient wisdom, and how he helps lost souls find their path."
        keywords="Master 玄印, Xuan Yin, Eastern astrology, BaZi master, life purpose guide, destiny reader, ancient wisdom"
        ogTitle="About Master 玄印 · Xuan Yin | Fate Compass"
        ogDescription="Discover the story behind Master 玄印, a dedicated Eastern astrology practitioner with 10+ years of experience helping people find their destiny."
        canonical="https://fatecompass.net/about"
      />

      <Navigation />
      
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                  About Master 玄印
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Your guide through the ancient wisdom of Eastern astrology, helping lost souls find their true path and purpose.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/8615914228258?text=I want to learn more about Master 玄印"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-navy-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Master 玄印</span>
                  </a>
                  <a
                    href="mailto:chenxiao0801@hotmail.com?subject=I want to learn about Master 玄印"
                    className="bg-navy-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-navy-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-navy-600"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Consultation</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-72 h-72 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="w-64 h-64 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center overflow-hidden relative">
                        <Image
                          src="/images/master-xuan-yin.jpg"
                          alt="Master 玄印 - Traditional Eastern Wisdom Practitioner"
                          fill
                          className="object-cover rounded-full"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                The Story Behind the Wisdom
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A journey of dedication, learning, and service to those seeking clarity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-navy-900 mb-6 font-serif">
                  A Decade of Dedication
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Master 玄印 began his journey into Eastern astrology over ten years ago, 
                    driven by a deep curiosity about the ancient wisdom that has guided 
                    countless generations. What started as personal study evolved into a 
                    lifelong passion for helping others find their path.
                  </p>
                  <p>
                    Through years of rigorous study of BaZi (Four Pillars of Destiny), 
                    Zi Wei Dou Shu (Purple Star Astrology), and traditional Chinese 
                    philosophy, Master 玄印 has developed a unique approach that combines 
                    ancient knowledge with modern understanding.
                  </p>
                  <p>
                    His mission is simple yet profound: to help lost souls find their 
                    compass, to guide those who feel directionless toward their true 
                    purpose, and to bring clarity to lives clouded by confusion and doubt.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-cream-100 rounded-2xl p-8"
              >
                <h4 className="text-xl font-bold text-navy-900 mb-4 font-serif">Key Learnings</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">BaZi analysis reveals not just destiny, but the optimal timing for life's major decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Relationship compatibility goes beyond surface attraction to reveal deep soul connections</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Protection and guidance can help navigate challenging periods with greater confidence</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Every person has a unique life purpose waiting to be discovered and fulfilled</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Experience & Expertise
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A track record of helping thousands find clarity and purpose
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200"
                >
                                     <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg transform rotate-12">
                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                       <div className="w-5 h-5 bg-gradient-to-br from-gold-600 to-amber-700 rounded-lg relative">
                         <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-white rounded-sm"></div>
                       </div>
                     </div>
                   </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The principles that guide our approach to helping you find your destiny
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream-50 rounded-2xl p-8 border border-cream-200"
                >
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Our Mission
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                "To guide every lost soul toward their true purpose, using the timeless wisdom 
                of Eastern astrology to illuminate the path that leads to fulfillment, 
                happiness, and success."
              </p>
              <div className="text-lg text-gold-300 font-serif italic">
                — Master 玄印 · Xuan Yin
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Let Master 玄印 guide you toward clarity, purpose, and success. 
                Your destiny awaits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/8615914228258?text=I want to start my destiny journey with Master 玄印"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Start Your Reading</span>
                </a>
                <a
                  href="mailto:chenxiao0801@hotmail.com?subject=I want to learn about Master 玄印's services"
                  className="bg-navy-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-navy-600"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Consultation</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
} 