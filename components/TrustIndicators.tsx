'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Clock, Star, CheckCircle, Lock, Globe } from 'lucide-react'

export default function TrustIndicators() {
  const trustMetrics = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      description: "Satisfied customers across the US"
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years Experience",
      description: "Ancient wisdom, modern approach"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "From verified customer reviews"
    },
    {
      icon: CheckCircle,
      number: "100%",
      label: "Confidential",
      description: "Your privacy is our priority"
    }
  ]

  const certifications = [
    {
      name: "Traditional BaZi Master",
      organization: "International BaZi Association",
      year: "2010",
      icon: Award
    },
    {
      name: "Certified Life Coach",
      organization: "International Coach Federation",
      year: "2015",
      icon: Award
    },
    {
      name: "Feng Shui Consultant",
      organization: "American Feng Shui Institute",
      year: "2012",
      icon: Award
    }
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "SSL Encrypted",
      description: "All data is protected with bank-level security"
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your information is never shared with third parties"
    },
    {
      icon: Globe,
      title: "Secure Payments",
      description: "Multiple secure payment options available"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-gold-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have found clarity and direction through ancient Eastern wisdom
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-navy-900 mb-2">{metric.number}</div>
              <div className="text-lg font-semibold text-navy-800 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-navy-900 mb-8 text-center font-serif">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-cream-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mr-4">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-navy-900">{cert.name}</div>
                    <div className="text-sm text-gray-600">{cert.organization}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500">Certified since {cert.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-navy-900 mb-8 text-center font-serif">
            Your Security & Privacy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-2">{feature.title}</h4>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-navy-900 mb-6 font-serif">
            Trusted & Verified
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-sm font-semibold text-gray-600 mb-1">SSL SECURED</div>
              <div className="text-xs text-gray-500">256-bit encryption</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-sm font-semibold text-gray-600 mb-1">GDPR COMPLIANT</div>
              <div className="text-xs text-gray-500">Privacy protected</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-sm font-semibold text-gray-600 mb-1">MONEY BACK</div>
              <div className="text-xs text-gray-500">30-day guarantee</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-cream-200">
              <div className="text-sm font-semibold text-gray-600 mb-1">24/7 SUPPORT</div>
              <div className="text-xs text-gray-500">Always here to help</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 