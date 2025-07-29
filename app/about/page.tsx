'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { MessageCircle, Star, Award, Users, Heart, BookOpen } from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating every client with compassion and providing professional astrological services with sincerity"
    },
    {
      icon: Star,
      title: "Professional Authority",
      description: "Inheriting thousands of years of astrological wisdom, using professional knowledge and rich experience for accurate analysis"
    },
    {
      icon: Users,
      title: "Client First",
      description: "Always putting client needs first, providing personalized astrological analysis and advice"
    },
    {
      icon: BookOpen,
      title: "Cultural Heritage",
      description: "Committed to spreading Eastern astrological culture, helping more people understand the wisdom of traditional Chinese culture"
    }
  ]

  const achievements = [
    {
      number: "500+",
      label: "Clients Served",
      description: "Trust from clients worldwide"
    },
    {
      number: "20+",
      label: "Years Experience",
      description: "Rich astrological analysis experience"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "High recognition and praise from clients"
    },
    {
      number: "24/7",
      label: "Online Service",
      description: "Available for consultation anytime"
    }
  ]

  return (
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Inheriting Eastern astrological wisdom, with a professional attitude and sincere service,
              providing accurate life guidance for every client
            </p>
          </motion.div>
        </div>
      </section>

      {/* Master Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Master Xuan Yin</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Master Xuan Yin has had a deep interest in Eastern astrological culture since childhood. After years of study and practice,
                he has mastered profound BaZi analysis skills and rich astrological knowledge.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Having studied under multiple renowned astrological masters, he has deeply researched traditional BaZi theory, combining it with modern psychology and life philosophy,
                forming a unique astrological analysis system. He is committed to helping people better understand themselves through Eastern wisdom,
                grasp life opportunities, and create a beautiful future.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Master Xuan Yin believes that everyone has their own unique astrological characteristics. Through professional analysis and guidance,
                he can help people find the most suitable life path and achieve inner peace and fulfillment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/8615914228258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Consultation
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 text-center">
                <div className="text-8xl mb-6">🧘‍♂️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Xuan Yin</h3>
                <p className="text-gray-600 mb-6">
                  A descendant of ancient Chinese astrologers, bringing 5,000 years of wisdom to the modern world
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">20+</div>
                    <div className="text-sm text-gray-500">Years of Study</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">500+</div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and service to clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-6 mb-6 inline-block">
                  <value.icon className="w-12 h-12 text-primary-600 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge the gap between ancient Eastern wisdom and modern life challenges, 
                providing individuals with the tools and insights they need to navigate their 
                personal and professional journeys with confidence and clarity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that everyone deserves access to the profound insights that Eastern 
                astrology offers, helping them make informed decisions and live more fulfilling lives.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To become the leading platform for Eastern astrological wisdom in the Western world, 
                making this ancient knowledge accessible, relevant, and practical for modern individuals 
                seeking guidance and self-understanding.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a world where Eastern and Western wisdom work together harmoniously, 
                helping people from all cultures find their true path and purpose in life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Fate Compass?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us different and why clients trust us with their life guidance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Authentic Tradition",
                description: "Rooted in 5,000 years of Eastern astrological tradition, ensuring authentic and accurate analysis"
              },
              {
                icon: Star,
                title: "Expert Guidance",
                description: "Master Xuan Yin's 20+ years of experience provides deep insights and practical advice"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Every analysis is tailored to your unique situation and specific needs"
              },
              {
                icon: Heart,
                title: "Compassionate Service",
                description: "We approach every client with empathy, understanding, and genuine care"
              },
              {
                icon: BookOpen,
                title: "Educational Focus",
                description: "We don't just provide readings - we educate and empower you with knowledge"
              },
              {
                icon: MessageCircle,
                title: "Ongoing Support",
                description: "Continuous guidance and support throughout your journey of self-discovery"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-4 mb-6 inline-block">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Discover Your Path?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Let Master Xuan Yin guide you through the wisdom of Eastern astrology 
              and help you unlock your true potential
            </p>
            <a
              href="https://wa.me/8615914228258"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Journey Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 