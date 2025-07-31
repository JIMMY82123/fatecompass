'use client'

import { motion } from 'framer-motion'
import { Play, Star, Quote } from 'lucide-react'
import { useState } from 'react'

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState(0)

  const videoTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      quote: "Master 玄印's reading completely changed my perspective on my career. I finally understood why I felt stuck and what I needed to do next.",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "#",
      category: "Career Guidance"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      quote: "The relationship compatibility reading was incredibly accurate. It helped me understand my partner better and improve our communication.",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "#",
      category: "Relationship"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, FL",
      rating: 5,
      quote: "I was skeptical at first, but the financial timing analysis was spot on. I made the right investment at the perfect time.",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "#",
      category: "Financial Timing"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight">
            Real Stories, Real Results
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Watch how ancient Eastern wisdom has transformed lives and brought clarity to confused souls
          </p>
        </motion.div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-elevated bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 glass-card float-card"
            >
              {/* Video Thumbnail */}
              <div className="relative h-56 bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.videoThumbnail})` }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-10 h-10 text-navy-900 ml-1" />
                  </div>
                </button>
                <div className="absolute top-6 left-6">
                  <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {testimonial.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">{testimonial.name}</h3>
                    <p className="text-base text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="relative bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 wave-animation">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-yellow-500 breathing-light" />
                  <p className="text-gray-900 italic leading-relaxed pl-4 font-bold text-shadow-sm">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cream-50 to-gold-50 rounded-2xl p-8 border border-cream-200 particle-bg">
            <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">
              Why Our Clients Trust Us
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200 magnetic-hover">
                <div className="text-3xl font-bold text-gold-600 mb-2">98%</div>
                <div className="text-sm text-gray-800 font-bold">Satisfaction Rate</div>
              </div>
              <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200 magnetic-hover">
                <div className="text-3xl font-bold text-gold-600 mb-2">24hr</div>
                <div className="text-sm text-gray-800 font-bold">Response Time</div>
              </div>
              <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200 magnetic-hover">
                <div className="text-3xl font-bold text-gold-600 mb-2">100%</div>
                <div className="text-sm text-gray-800 font-bold">Confidential</div>
              </div>
              <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200 magnetic-hover">
                <div className="text-3xl font-bold text-gold-600 mb-2">30-day</div>
                <div className="text-sm text-gray-800 font-bold">Money Back</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 