'use client'

import { motion } from 'framer-motion'
import { Shield, Clock, Star, Users, Award, CheckCircle } from 'lucide-react'

const trustIndicators = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "100% Confidential",
    description: "Your privacy is our top priority"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fast Response",
    description: "Get your reading within 3-5 days"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "5-Star Rated",
    description: "Trusted by 500+ clients worldwide"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Guidance",
    description: "10+ years of Eastern astrology experience"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Certified Master",
    description: "Trained in traditional Chinese astrology"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Money Back Guarantee",
    description: "Satisfaction guaranteed or your money back"
  }
]

export default function TrustIndicators() {
  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 font-serif">
            Why Trust Master 玄印?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Professional, confidential, and proven Eastern astrology services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-cream-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center text-gold-600 flex-shrink-0">
                  {indicator.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {indicator.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {indicator.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-8 font-serif">
            Certifications & Training
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-2xl font-bold text-gold-600 mb-2">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-2xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-2xl font-bold text-gold-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-2xl font-bold text-gold-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 