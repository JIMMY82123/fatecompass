'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const testimonials = [
    {
      name: "Jessica L.",
      review: "The compatibility section was eye-opening! I now understand why I connect easily with some people and struggle with others. My relationships have improved dramatically since applying these insights.",
      rating: 5,
      category: "Relationship"
    },
    {
      name: "Robert K.",
      review: "Using the wealth timing guidance in my BaZi report, I launched my business at the perfect moment. We reached profitability much faster than expected! This isn't just fortune-telling—it's practical strategic planning.",
      rating: 5,
      category: "Finance"
    },
    {
      name: "Sophia P.",
      review: "After struggling with health issues for years, my BaZi reading highlighted specific areas to focus on. The dietary recommendations complemented my medical treatment perfectly, and my energy has completely transformed.",
      rating: 5,
      category: "Health"
    },
    {
      name: "Daniel C.",
      review: "The true solar time calculation made all the difference. This reading accurately identified my strengths and helped me restructure my work accordingly. My income increased by 30% within six months!",
      rating: 5,
      category: "Career"
    },
    {
      name: "Emma W.",
      review: "I was lost in my career. The BaZi reading showed me exactly what I was meant to do. Now I'm working in a field that truly aligns with my natural talents.",
      rating: 5,
      category: "Career"
    },
    {
      name: "Michael C.",
      review: "The talisman arrived safely. It's beautiful and feels powerful. I've noticed a significant improvement in my overall sense of well-being since wearing it.",
      rating: 5,
      category: "Protection"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-play testimonials with hover pause
  useEffect(() => {
    if (isHovered) return // 暂停自动播放
    
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [testimonials.length, isHovered])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextTestimonial = () => {
    console.log('Next button clicked, current:', currentTestimonial)
    setCurrentTestimonial((prev) => {
      const next = (prev + 1) % testimonials.length
      console.log('Setting to:', next)
      return next
    })
  }

  const prevTestimonial = () => {
    console.log('Prev button clicked, current:', currentTestimonial)
    setCurrentTestimonial((prev) => {
      const next = (prev - 1 + testimonials.length) % testimonials.length
      console.log('Setting to:', next)
      return next
    })
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md shadow-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">玄</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">玄印命理</span>
                <span className="text-sm text-gold-300 font-medium tracking-wide">FateCompass</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-gold-300 transition-colors font-semibold">Home</Link>
              <Link href="/services" className="text-white hover:text-gold-300 transition-colors font-semibold">Services</Link>
              <Link href="/about" className="text-white hover:text-gold-300 transition-colors font-semibold">About</Link>
              <Link href="/contact" className="text-white hover:text-gold-300 transition-colors font-semibold">Contact</Link>
            </div>

            <a
              href="https://wa.me/8615914228258"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-4 py-2 rounded-full font-semibold hover:bg-gold-400 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="text-gold-300">玄印命理 · FateCompass</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-10 font-light italic">
            Oriental Wisdom. For Your Life's Turning Point.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Feeling lost in life? Let ancient Eastern wisdom guide you to clarity, 
            purpose, and success. Think of it as life coaching with cosmic timing - 
            discover your true path with Master 玄印.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/8615914228258?text=I want to get my reading"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-900 px-10 py-5 rounded-full font-semibold hover:bg-gold-400 transition-colors flex items-center space-x-3 text-lg"
            >
              <Phone className="w-6 h-6" />
              <span>Get My Reading</span>
            </a>
            <Link href="/services">
              <button className="border-2 border-white text-white px-10 py-5 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-colors text-lg">
                Explore Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white/95 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight">
                Who is Master 玄印?
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed">
                With over 10 years of deep study in Eastern wisdom and the ancient Four Pillars system, 
                Master 玄印 has helped hundreds of Americans find their true path. Think of it as 
                combining the depth of ancient knowledge with the practicality of modern life coaching.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg transform rotate-12">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">Life Purpose Discovery</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Understand your unique talents and the path that will bring you true fulfillment - like having a personal life coach with cosmic timing insights.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg transform -rotate-6">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full relative">
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">Relationship Clarity</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Find your soulmate or understand why certain relationships keep repeating - using energy compatibility analysis that goes beyond surface attraction.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg transform rotate-6">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-900 mb-3">Financial Timing</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">Know the best times to invest, start businesses, or make major financial decisions - like having a financial advisor who understands cosmic timing.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/services">
                  <button className="bg-gold-500 text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors inline-flex items-center space-x-3 text-lg">
                    <span>Explore Services</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cream-100 to-gold-100 rounded-3xl p-10 shadow-xl">
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="w-36 h-36 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full flex items-center justify-center overflow-hidden">
                        <div className="w-32 h-32 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center overflow-hidden relative">
                          <div className="text-white text-6xl font-bold">玄</div>
                          <div className="absolute inset-0 bg-black/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-navy-900 mb-6 font-serif">Ancient Eastern Wisdom</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    For thousands of years, Eastern astrology has guided souls through life's most challenging moments. 
                    Now, this wisdom is available to you through Master 玄印.
                  </p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-gold-300 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-navy-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-purple-900 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              See what our clients say about their BaZi AI analysis journey
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

                        {/* Testimonial Card */}
            <div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-center">
                {/* Debug info */}
                <div className="text-xs text-gray-400 mb-2">
                  当前: {currentTestimonial} | 总数: {testimonials.length} | 悬停: {isHovered ? '是' : '否'}
                </div>
                {/* Avatar */}
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gray-700 font-bold text-xl">{testimonials[currentTestimonial].name.charAt(0)}</span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {testimonials[currentTestimonial].name}
                </h3>

                {/* Rating */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-200 italic leading-relaxed text-lg mb-6">
                  "{testimonials[currentTestimonial].review}"
                </p>

                {/* Category */}
                <div className="inline-block bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].category}
                </div>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gold-400 scale-125'
                      : 'bg-gray-400 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress Counter */}
            <div className="text-center mt-4 text-sm text-gray-300">
              {currentTestimonial + 1} / {testimonials.length} (每3秒自动切换)
            </div>
            
            {/* Status Info */}
            <div className="text-center mt-4">
              <div className="text-white text-sm mb-2">
                {isHovered ? '⏸️ 已暂停' : '▶️ 自动播放中'} | {currentTestimonial + 1} / {testimonials.length}
              </div>
              <button 
                onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                className="bg-gold-500 text-navy-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors"
              >
                手动切换测试
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
        </button>
      )}
    </div>
  )
} 