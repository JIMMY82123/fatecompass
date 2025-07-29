'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, MapPin, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react'

const ContactPage = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+86 15914228258",
      description: "24/7 online consultation, quick response",
      action: "Start Chat",
      href: "https://wa.me/8615914228258",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      value: "chenxiao0801@hotmail.com",
      description: "Detailed consultation, professional response",
      action: "Send Email",
      href: "mailto:chenxiao0801@hotmail.com",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+86 15914228258",
      description: "Voice consultation, instant communication",
      action: "Call Now",
      href: "tel:+8615914228258",
      color: "bg-purple-500"
    }
  ]

  const socialMedia = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "bg-blue-600"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "bg-blue-400"
    }
  ]

  const businessHours = [
    { day: "Monday - Friday", time: "9:00 AM - 9:00 PM" },
    { day: "Saturday - Sunday", time: "10:00 AM - 10:00 PM" },
    { day: "Holidays", time: "10:00 AM - 8:00 PM" }
  ]

  const faqs = [
    {
      question: "How accurate is BaZi analysis?",
      answer: "BaZi analysis is based on thousands of years of Eastern astrological tradition. While it provides valuable insights into personality and life patterns, it should be used as guidance rather than absolute prediction. Master Xuan Yin's analysis combines traditional wisdom with modern understanding for the most accurate results."
    },
    {
      question: "How long does a consultation take?",
      answer: "A typical BaZi consultation takes 60-90 minutes. This includes detailed analysis of your birth chart, discussion of your questions, and personalized recommendations. Relationship compatibility analysis may take 2-3 hours for comprehensive couple analysis."
    },
    {
      question: "What information do I need to provide?",
      answer: "For accurate BaZi analysis, you'll need your exact birth date, time, and place. The more precise the birth time, the more accurate the analysis. If you don't know your exact birth time, we can work with approximate times and still provide valuable insights."
    },
    {
      question: "Can BaZi analysis help with career decisions?",
      answer: "Yes! BaZi analysis can provide valuable insights into your natural talents, strengths, and suitable career paths. It can help you understand your work style, leadership potential, and timing for career changes or opportunities."
    },
    {
      question: "Is the consultation confidential?",
      answer: "Absolutely. All consultations and personal information are kept strictly confidential. We respect your privacy and ensure that your personal details and analysis results are never shared with third parties."
    },
    {
      question: "Do you offer follow-up consultations?",
      answer: "Yes, we offer follow-up consultations to discuss how the guidance has been working for you, answer new questions, or provide additional insights as your situation evolves. Many clients find regular check-ins valuable for ongoing guidance."
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional astrological consultation services available anytime,
              let's explore the mysteries of life together
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Methods</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to contact us, we're here to serve you anytime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className={`${method.color} rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-xl font-semibold text-primary-600 mb-2">{method.value}</p>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Hours</h2>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-gray-900">{schedule.day}</span>
                    </div>
                    <span className="text-gray-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6">
                * All times are in China Standard Time (CST)
              </p>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Follow Us</h2>
              <p className="text-gray-600 mb-8">
                Stay connected with us on social media for daily wisdom, updates, and insights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-xl text-center hover:opacity-90 transition-opacity duration-200`}
                  >
                    <social.icon className="w-8 h-8 mx-auto mb-2" />
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and Eastern astrology
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait to discover your true potential. Contact us today and let Master Xuan Yin guide you through the wisdom of Eastern astrology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8615914228258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
              </a>
              <a
                href="mailto:chenxiao0801@hotmail.com"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 font-semibold text-lg"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 