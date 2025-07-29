'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Shield, Heart, Target, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import SEOHead from '@/components/SEOHead'
import Navigation from '@/components/Navigation'
import Breadcrumb from '@/components/Breadcrumb'
import TrustIndicators from '@/components/TrustIndicators'

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Life Destiny Reading",
      subtitle: "Deep Personal Destiny Reading",
      description: "A deep reading based on your birth date, time, and place using the ancient East Asian system of 'Four Pillars' to understand who you truly are and what path will bring you peace, success, and alignment.",
      features: [
        "Complete birth chart analysis (Four Pillars)",
        "Career path, financial strengths and blockages",
        "Health balance and love timing insights",
        "10-year destiny forecast (high and low periods)",
        "Personality strengths, inner patterns, and life purpose",
        "Practical advice on lucky colors and daily energy routines"
      ],
      price: "$79 USD",
      duration: "3-5 business days",
      icon: "📊",
      color: "from-blue-500 to-purple-600",
      buttonColor: "from-blue-500 to-purple-600",
      whatsappText: "I want to learn about Life Destiny Reading service"
    },
    {
      id: 2,
      title: "Relationship Compatibility Reading",
      subtitle: "Soulmate Discovery & Analysis",
      description: "A deep love reading that blends Eastern energy wisdom with modern relationship insight to help you understand your emotional patterns and timing for meaningful connections.",
      features: [
        "Compatibility reading between you and your partner",
        "How your energies attract, challenge, or balance each other",
        "Emotional patterns in the relationship",
        "Timing insights for reconciliation and love windows",
        "Prediction of next meaningful love connection (if single)",
        "Modern relationship insight with Eastern wisdom"
      ],
      price: "$69 USD",
      duration: "3-5 business days",
      icon: "💕",
      color: "from-pink-500 to-red-600",
      buttonColor: "from-pink-500 to-red-600",
      whatsappText: "I want to learn about Relationship Compatibility Reading service"
    },
    {
      id: 3,
      title: "Personalized Talisman & Energy Guide",
      subtitle: "Custom Spiritual Compass",
      description: "Not just jewelry — a spiritual compass tuned to your destiny. A handcrafted talisman designed based on your birth elements to balance your energy and attract luck, protection, and alignment.",
      features: [
        "Custom-made physical talisman (925 silver)",
        "Designed based on your birth elements (wood, fire, earth, metal, water)",
        "Symbol chosen for your life path (dragon, phoenix, circle of balance)",
        "Energy alignment guide (PDF)",
        "Instruction for when and how to wear or place it",
        "Spiritual blessing message and sacred-style packaging"
      ],
      price: "$129 USD",
      duration: "7-10 business days",
      icon: "🛡️",
      color: "from-green-500 to-teal-600",
      buttonColor: "from-green-500 to-teal-600",
      whatsappText: "I want to learn about Personalized Talisman & Energy Guide service"
    }
  ]

  const faqs = [
    {
      question: "Do I need to know my birth time?",
      answer: "Yes, the time helps make your reading accurate. If you're unsure, we can still offer a basic version."
    },
    {
      question: "Who is the reading from?",
      answer: "All reports are handcrafted by Master Xuan Yin — not AI-generated."
    },
    {
      question: "What does the talisman do?",
      answer: "It's like a spiritual amplifier. Based on your unique energy, it helps attract luck, protection, and alignment."
    },
    {
      question: "How long does it take to receive my reading?",
      answer: "Life Destiny and Relationship readings take 3-5 business days. Talismans take 7-10 business days including tracked global shipping."
    },
    {
      question: "What format will I receive my reading in?",
      answer: "All readings come as personalized written PDF reports in English. Talismans include both the physical item and a digital energy alignment guide."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including PayPal, credit cards, and bank transfers. Payment is required before the reading begins."
    }
  ]

  return (
    <>
      <SEOHead
        title="Services | Fate Compass - BaZi Analysis, Relationship Compatibility & Protection"
        description="Professional Eastern astrology services: BaZi analysis, relationship compatibility, and protection guidance. Transform your life with ancient wisdom."
        keywords="BaZi analysis, relationship compatibility, protection talisman, Eastern astrology services, destiny reading, life purpose"
        ogTitle="Professional Services | Fate Compass"
        ogDescription="Transform your life with our professional Eastern astrology services. BaZi analysis, relationship compatibility, and protection guidance."
        canonical="https://fatecompass.net/services"
      />

      <Navigation />
      
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                Professional Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your life with ancient Eastern wisdom. Choose the service that resonates with your journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>Ancient Wisdom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-400" />
                  <span>Proven Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Breadcrumb items={[{ label: 'Services' }]} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-cream-200 overflow-hidden"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white text-center`}>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-2 font-serif">{service.title}</h3>
                    <p className="text-white/90">{service.subtitle}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-navy-900 mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Duration */}
                    <div className="flex justify-between items-center mb-6 p-4 bg-cream-50 rounded-lg">
                      <div>
                        <div className="text-2xl font-bold text-navy-900">{service.price}</div>
                        <div className="text-sm text-gray-600">Starting price</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        <div className="text-xs text-gray-500">Delivery time</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://wa.me/8615914228258?text=${encodeURIComponent(service.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${service.buttonColor} text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Consult Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose Master 玄印?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Experience the difference that comes from genuine expertise and ancient wisdom
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">10+ Years Experience</h3>
                <p className="text-gray-700">
                  Master 玄印 has dedicated over a decade to studying and practicing Eastern astrology, 
                  bringing you authentic, time-tested wisdom.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">100% Confidential</h3>
                <p className="text-gray-700">
                  Your privacy is sacred. All personal information and readings are kept completely 
                  confidential and secure.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif">Personalized Approach</h3>
                <p className="text-gray-700">
                  Every reading is uniquely tailored to your specific situation and needs. 
                  No generic templates, only personalized insights.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <TrustIndicators />

        {/* FAQ Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700">
                Everything you need to know about our services
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-md border border-cream-200"
                >
                  <h3 className="text-lg font-semibold text-navy-900 mb-3 font-serif">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Ready to Transform Your Life?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Take the first step towards clarity, purpose, and success. Contact Master 玄印 today 
                for your personalized reading.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/8615914228258?text=I want to learn more about your services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  <span>Start Your Journey</span>
                </a>
                <a
                  href="mailto:chenxiao0801@hotmail.com?subject=I want to learn about Master 玄印's services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center space-x-2"
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