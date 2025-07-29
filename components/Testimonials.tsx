'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "I was completely lost in my career. 玄印's analysis helped me discover my true calling. Now I'm finally doing what I love and making a real difference in people's lives!",
    location: "New York, USA",
    problem: "Career Confusion",
    emotion: "Overwhelmed → Fulfilled",
    service: "BaZi Analysis"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "My relationship was falling apart. The compatibility analysis showed us exactly what we needed to fix. We're stronger than ever now and planning our wedding!",
    location: "Toronto, Canada",
    problem: "Relationship Issues",
    emotion: "Heartbroken → In Love",
    service: "Relationship Compatibility"
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "I felt stuck and directionless. 玄印's reading revealed my life purpose and gave me the confidence to make major changes. I've never been happier!",
    location: "London, UK",
    problem: "Life Purpose",
    emotion: "Lost → Purposeful",
    service: "Life Purpose Reading"
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "After losing my job, I was desperate for guidance. 玄印's career analysis led me to a better opportunity I never considered. I'm making 40% more now!",
    location: "Seoul, Korea",
    problem: "Career Transition",
    emotion: "Desperate → Thriving",
    service: "Career Guidance"
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "I was struggling with self-doubt and couldn't decide on my next steps. The reading gave me clarity and renewed confidence. I finally feel like myself again!",
    location: "Madrid, Spain",
    problem: "Self-Doubt",
    emotion: "Confused → Confident",
    service: "Personal Guidance"
  },
  {
    id: 6,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Divorce left me questioning everything. 玄印 helped me understand my patterns and find hope for the future. I'm dating again and feeling optimistic!",
    location: "Sydney, Australia",
    problem: "Life Crisis",
    emotion: "Hopeless → Hopeful",
    service: "Life Transition"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-blue-900/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real People, Real Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how ancient Eastern wisdom has transformed lives and brought clarity to confused souls.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `-${currentIndex * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full cursor-pointer border border-white/10"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 mr-4">
                        <Image 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.location}</p>
                        <p className="text-purple-400 text-sm font-medium">{testimonial.service}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {testimonial.problem}
                      </span>
                      <span className="text-green-400 font-semibold">
                        {testimonial.emotion}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">2,847+</div>
            <div className="text-gray-400">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">94%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">4.9★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 