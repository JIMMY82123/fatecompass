'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Jessica L.",
    avatar: "J",
    review: "The compatibility section was eye-opening! I now understand why I connect easily with some people and struggle with others. My relationships have improved dramatically since applying these insights.",
    rating: 5,
    category: "Relationship"
  },
  {
    id: 2,
    name: "Robert K.",
    avatar: "R",
    review: "Using the wealth timing guidance in my BaZi report, I launched my business at the perfect moment. We reached profitability much faster than expected! This isn't just fortune-telling—it's practical strategic planning.",
    rating: 5,
    category: "Finance"
  },
  {
    id: 3,
    name: "Sophia P.",
    avatar: "S",
    review: "After struggling with health issues for years, my BaZi reading highlighted specific areas to focus on. The dietary recommendations complemented my medical treatment perfectly, and my energy has completely transformed.",
    rating: 5,
    category: "Health"
  },
  {
    id: 4,
    name: "Daniel C.",
    avatar: "D",
    review: "The true solar time calculation made all the difference. This reading accurately identified my strengths and helped me restructure my work accordingly. My income increased by 30% within six months!",
    rating: 5,
    category: "Career"
  },
  {
    id: 5,
    name: "Emma W.",
    avatar: "E",
    review: "I was lost in my career. The BaZi reading showed me exactly what I was meant to do. Now I'm working in a field that truly aligns with my natural talents.",
    rating: 5,
    category: "Career"
  },
  {
    id: 6,
    name: "Michael C.",
    avatar: "M",
    review: "The talisman arrived safely. It's beautiful and feels powerful. I've noticed a significant improvement in my overall sense of well-being since wearing it.",
    rating: 5,
    category: "Protection"
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 font-serif leading-tight">
            See what our clients say about their BaZi AI analysis journey
          </h2>
        </motion.div>

        {/* Horizontal Testimonials Grid */}
        <div className="relative scroll-shadow">
          <div className="flex overflow-x-auto scrollbar-hide horizontal-scroll horizontal-scroll-touch horizontal-scroll-performance horizontal-scroll-smooth horizontal-scroll-accessible horizontal-scroll-keyboard horizontal-scroll-memory pb-8 gap-6 md:gap-8 horizontal-cards">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 md:w-96 bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 testimonial-card"
              >
                {/* Avatar */}
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-bold text-lg">{testimonial.avatar}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 testimonial-name">
                  {testimonial.name}
                </h3>

                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-600 italic leading-relaxed testimonial-text">
                  "{testimonial.review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-semibold text-sm md:text-base">100% Confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-semibold text-sm md:text-base">Ancient Wisdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-semibold text-sm md:text-base">Proven Results</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 