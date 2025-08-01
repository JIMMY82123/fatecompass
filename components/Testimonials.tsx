'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Anna L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    review: "This reading gave me clarity and peace. Now I know where I'm going.",
    rating: 5,
    category: "Life Purpose"
  },
  {
    id: 2,
    name: "Michael C.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    review: "The talisman arrived safely. It's beautiful and feels powerful.",
    rating: 5,
    category: "Protection"
  },
  {
    id: 3,
    name: "Emma W.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
    review: "I was lost in my career. The BaZi reading showed me exactly what I was meant to do.",
    rating: 5,
    category: "Career"
  },
  {
    id: 4,
    name: "David K.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    review: "The financial timing analysis was spot on. I finally knew when to invest and when to wait.",
    rating: 5,
    category: "Finance"
  },
  {
    id: 5,
    name: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    review: "I finally let go of that toxic relationship. 玄印's analysis helped me see the truth clearly.",
    rating: 5,
    category: "Relationship"
  },
  {
    id: 6,
    name: "James R.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    review: "The protection talisman has been incredible. I feel safer and more confident in my decisions.",
    rating: 5,
    category: "Protection"
  },
  {
    id: 7,
    name: "Lisa T.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    review: "I was lost in my career. The BaZi reading showed me exactly what I was meant to do.",
    rating: 5,
    category: "Career"
  },
  {
    id: 8,
    name: "Robert H.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    review: "The timing for my business launch was perfect. Eastern wisdom really works!",
    rating: 5,
    category: "Finance"
  },
  {
    id: 9,
    name: "Jennifer L.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    review: "I found my soulmate through the compatibility reading. We're getting married next month!",
    rating: 5,
    category: "Relationship"
  },
  {
    id: 10,
    name: "Thomas B.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80",
    review: "The life purpose reading changed everything. I finally understand why I'm here.",
    rating: 5,
    category: "Life Purpose"
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [])

  // Visibility detection for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.testimonials-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  // Pause auto-play when not visible
  useEffect(() => {
    if (!isVisible) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    } else {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 3000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isVisible])

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (typeof window === 'undefined') return testimonials.slice(0, 3)
    
    const isMobile = window.innerWidth < 768
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024
    
    if (isMobile) {
      // Mobile: show 1 card
      return [testimonials[currentIndex]]
    } else if (isTablet) {
      // Tablet: show 2 cards
      const start = currentIndex
      const end = start + 2
      return testimonials.slice(start, end)
    } else {
      // Desktop: show 3 cards
      const start = currentIndex
      const end = start + 3
      return testimonials.slice(start, end)
    }
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="section-padding bg-gradient-to-br from-cream-50 to-gold-50 relative overflow-hidden testimonials-section">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight">
            Real People, Real Results
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            See how ancient Eastern wisdom has transformed lives and brought clarity to confused souls
          </p>
        </motion.div>

        {/* Card Carousel */}
        <div className="relative card-carousel-container">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl card-grid">
                <AnimatePresence mode="wait">
                  {visibleTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${currentIndex}`}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -50, scale: 0.9 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="card-elevated bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center hover:scale-105 transition-all duration-300 glass-card float-card h-full flex flex-col justify-center testimonial-card card-carousel-item card-animation-optimized card-memory-optimized card-accessible"
                    >
                      {/* Avatar */}
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 relative testimonial-avatar">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover shadow-lg border-4 border-gold-100"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="inline-block bg-gradient-to-r from-gold-100 to-gold-200 text-gold-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 shadow-sm testimonial-category">
                        {testimonial.category}
                      </div>

                      {/* Review */}
                      <div className="relative mb-6 flex-grow card-body">
                        <div className="absolute -top-2 -left-2 text-4xl text-gold-200">"</div>
                        <p className="text-base md:text-lg text-gray-700 italic leading-relaxed px-4 testimonial-text">
                          {testimonial.review}
                        </p>
                        <div className="absolute -bottom-2 -right-2 text-4xl text-gold-200">"</div>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-3 font-serif testimonial-name">
                        {testimonial.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex justify-center space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                        ))}
                      </div>

                      {/* Verified Badge */}
                      <div className="inline-flex items-center space-x-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        <span>✓</span>
                        <span>Verified</span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8">
            <div className="flex justify-center space-x-2 carousel-progress-dots">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-500 carousel-progress-dot ${
                    index === currentIndex
                      ? 'bg-gold-500 scale-125 active'
                      : 'bg-gray-300 inactive'
                  }`}
                />
              ))}
            </div>
            <div className="text-center mt-3 text-sm text-gray-600 carousel-counter">
              {currentIndex + 1} / {testimonials.length}
            </div>
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
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