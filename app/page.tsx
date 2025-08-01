'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Heart, Target, Briefcase, Star, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Testimonials from '@/components/Testimonials'
import VideoTestimonialsSimple from '@/components/VideoTestimonialsSimple'
import SEOHead from '@/components/SEOHead'
import StructuredData from '@/components/StructuredData'

// 图片懒加载hook
const useImageLazyLoad = (src: string) => {
  const [imageSrc, setImageSrc] = useState<string>('')
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    if (imageRef && imageSrc === '') {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src)
                if (imageRef) observer.unobserve(imageRef)
              }
            })
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          }
        )
        observer.observe(imageRef)
      } else {
        // Fallback for older browsers
        setImageSrc(src)
      }
    }
    return () => {
      didCancel = true
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef)
      }
    }
  }, [src, imageSrc, imageRef])

  return [imageSrc, setImageRef] as const
}

export default function Home() {
  // 临时重定向到简化版本
  return <HomeSimple />
}

function HomeSimple() {
  const [isLoading, setIsLoading] = useState(false) // 改为false，立即显示内容
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    // Simulate loading with shorter time and error handling
    const timer = setTimeout(() => setIsLoading(false), 1000)
    
    // Fallback: force loading to complete after 3 seconds
    const fallbackTimer = setTimeout(() => setIsLoading(false), 3000)
    
    return () => {
      clearTimeout(timer)
      clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Email submitted:', email)
    setEmail('')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SEOHead
        title="Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded by Eastern Wisdom"
        description="Feeling lost in life? Master 玄印 helps you discover your destiny through ancient Eastern astrology. Career guidance, relationship compatibility, and life purpose readings."
        keywords="life purpose, career guidance, relationship compatibility, Eastern astrology, BaZi reading, destiny, lost feeling, compass, 玄印, Xuan Yin"
        ogTitle="Fate Compass | 玄印命理 · Xuan Yin - Your Destiny Decoded"
        ogDescription="Discover your life purpose with Master 玄印. Ancient Eastern wisdom for modern souls seeking clarity and direction."
        canonical="https://fatecompass.net"
      />
      
      <StructuredData type="website" data={{}} />
      <StructuredData type="organization" data={{}} />
      <StructuredData type="person" data={{}} />
      <StructuredData type="localBusiness" data={{}} />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Visual Effects */}
        {/* Visual Effects removed for performance */}
        
        {/* Dynamic Background */}
        <div className="fixed inset-0 z-0">
          {/* Base image background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080&q=80')`,
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Dynamic floating elements */}
          <div className="absolute inset-0">
            {/* Floating ink drops */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-black/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `inkFloat ${8 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 5}s`,
                }}
              ></div>
            ))}
            
            {/* Floating mist layers */}
            <div className="absolute top-1/3 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-white/6 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-2/3 left-0 right-0 h-20 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
            
            {/* Subtle energy lines */}
            <div className="absolute top-1/4 left-1/6 w-24 h-0.5 bg-white/8 transform rotate-12 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/5 w-20 h-0.5 bg-white/8 transform -rotate-8 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-white/8 transform rotate-6 animate-pulse" style={{animationDelay: '3s'}}></div>
            
            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `customFloat ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg font-medium">Loading ancient wisdom...</p>
            </div>
          </div>
        )}

        <Navigation />

        {/* ① Hero Section - 东方命运的呼唤 */}
        <section id="hero" className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
                              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-serif text-shadow-lg">
                  <span className="text-gold-300">
                  玄印命理 · FateCompass
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white mb-10 font-light italic text-shadow-md">
                Oriental Wisdom. For Your Life's Turning Point.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed text-shadow-sm">
                Feeling lost in life? Let ancient Eastern wisdom guide you to clarity, 
                purpose, and success. Think of it as life coaching with cosmic timing - 
                discover your true path with Master 玄印.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="https://wa.me/8615914228258?text=I want to get my reading"
                target="_blank"
                rel="noopener noreferrer"
                                  className="btn-primary flex items-center space-x-3 px-10 py-5 text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                <span>Get My Reading</span>
              </a>
              <Link href="/services">
                <button className="btn-secondary px-10 py-5 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-navy-900">
                  Explore Services
                </button>
              </Link>
              <Link href="/wisdom">
                <button className="btn-secondary px-10 py-5 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-navy-900">
                  Learn Eastern Wisdom
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ② Intro Section - 两栏结构：左图右文 */}
        <section id="intro" className="section-padding bg-white/95 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Eastern Imagery */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="card-elevated bg-gradient-to-br from-cream-100 to-gold-100 rounded-3xl p-10 glass-card float-card">
                  <div className="text-center">
                    <div className="relative w-40 h-40 mx-auto mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
                      <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                        <div className="w-36 h-36 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full flex items-center justify-center overflow-hidden">
                          <div className="w-32 h-32 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center overflow-hidden relative">
                            <Image
                              src="/images/master-xuan-yin.jpg"
                              alt="Master 玄印 - Traditional Eastern Wisdom Practitioner"
                              fill
                              className="object-cover rounded-full"
                              priority
                            />
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
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
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
                    <button className="btn-primary inline-flex items-center space-x-3 px-8 py-4 text-lg font-semibold">
                      <span>Explore Services</span>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ③ Common Challenges Section - 展示用户痛点 */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-purple-900 relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Feeling Lost? You're Not Alone
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                These are the most common challenges that bring people to seek Eastern wisdom guidance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Career Confusion</h3>
                <p className="text-gray-300 text-center">
                  "I'm successful but feel empty. Am I on the right path? When should I make a change?"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Relationship Patterns</h3>
                <p className="text-gray-300 text-center">
                  "Why do I keep attracting the wrong partners? When will I find true love?"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Life Purpose</h3>
                <p className="text-gray-300 text-center">
                  "I have everything but feel lost. What's my true calling? What am I meant to do?"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-violet-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Timing Decisions</h3>
                <p className="text-gray-300 text-center">
                  "When is the right time to start a business, move, or make major life changes?"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Energy & Health</h3>
                <p className="text-gray-300 text-center">
                  "Why do I feel drained all the time? How can I restore my energy and vitality?"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-sm"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">Financial Timing</h3>
                <p className="text-gray-300 text-center">
                  "When should I invest, start a business, or make major financial decisions?"
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ④ Testimonials Section - 社会证明助力转化 */}
        <Testimonials />
        
        {/* ⑤ Video Testimonials Section - 视频评价增强信任 */}
        <VideoTestimonialsSimple />

        {/* ⑥ Why Choose Us Section - 为什么选择我们 */}
        <section className="section-padding bg-white relative">
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
                What makes our approach different from traditional Western life coaching
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-gold-600 to-amber-700 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Ancient Wisdom</h3>
                <p className="text-gray-700">
                  3,000+ years of proven Eastern astrology principles, not just modern psychology theories
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Precise Timing</h3>
                <p className="text-gray-700">
                  Know exactly WHEN to take action, not just WHAT to do - timing is everything
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Energy Compatibility</h3>
                <p className="text-gray-700">
                  Deep relationship analysis that goes beyond surface attraction to soul-level compatibility
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-600 to-violet-700 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Proven Results</h3>
                <p className="text-gray-700">
                  2,000+ successful readings with measurable life improvements and transformations
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ③ Services Section - 展示我能做啥 */}
        <section id="services" className="section-padding bg-cream-50 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight"
              >
                Professional Services, Precise Readings
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
              >
                Choose the service that best fits you and start your destiny exploration journey
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="card-elevated bg-white rounded-3xl p-10 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-8 shadow-lg transform rotate-12">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg relative">
                      <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-sm"></div>
                      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-sm"></div>
                      <div className="absolute bottom-1 left-1 w-2 h-2 bg-white rounded-sm"></div>
                      <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-900 mb-6 font-serif">Life Destiny Reading</h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Deep personal destiny reading based on Four Pillars to understand who you truly are and what path will bring you peace, success, and alignment.
                </p>
                <div className="text-3xl font-bold text-navy-900 mb-6">$79 USD</div>
                <Link href="/services">
                  <button className="btn-primary inline-flex items-center space-x-3 px-8 py-4 text-lg font-semibold">
                    <span>Learn More</span>
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg transform -rotate-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-600 to-red-700 rounded-lg relative">
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Relationship Compatibility Reading</h3>
                <p className="text-gray-700 mb-6">
                  A deep love reading that blends Eastern energy wisdom with modern relationship insight.
                </p>
                <div className="text-2xl font-bold text-navy-900 mb-4">$69 USD</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-300 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                  </button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-cream-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-teal-700 rounded-lg relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <div className="absolute top-0 left-0 w-1 h-1 bg-green-800 rounded-sm"></div>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-green-800 rounded-sm"></div>
                      <div className="absolute bottom-0 left-0 w-1 h-1 bg-green-800 rounded-sm"></div>
                      <div className="absolute bottom-0 right-0 w-1 h-1 bg-green-800 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Personalized Talisman & Energy Guide</h3>
                <p className="text-gray-700 mb-6">
                  Not just jewelry — a spiritual compass tuned to your destiny with custom-made talismans.
                </p>
                <div className="text-2xl font-bold text-navy-900 mb-4">$129 USD</div>
                <Link href="/services">
                  <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 inline-flex items-center space-x-2">
                    <span>Learn More</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ⑦ American Celebrities Section - 美国名人运用东方智慧 */}
        <section className="section-padding bg-gradient-to-br from-cream-100 to-gold-100 relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Even American Celebrities Trust Eastern Wisdom
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover how famous Americans have used Eastern astrology and Feng Shui to achieve success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/donald-trump.jpg"
                    alt="Donald Trump"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Donald Trump</h3>
                <p className="text-gray-700 text-center mb-4">
                  "The former president has been known to consult with Feng Shui masters for his real estate projects and business decisions."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: Business Insider, 2016
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/oprah-winfrey.jpg"
                    alt="Oprah Winfrey"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Oprah Winfrey</h3>
                <p className="text-gray-700 text-center mb-4">
                  "Oprah has openly discussed using Feng Shui principles in her home and office design for better energy flow."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: O Magazine, 2018
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/bill-gates.jpg"
                    alt="Bill Gates"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Bill Gates</h3>
                <p className="text-gray-700 text-center mb-4">
                  "Microsoft's co-founder has incorporated Feng Shui principles in his home design and office layouts."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: Architectural Digest, 2020
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/madonna.jpg"
                    alt="Madonna"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Madonna</h3>
                <p className="text-gray-700 text-center mb-4">
                  "The pop icon has been known to consult with Eastern astrologers for career timing and life decisions."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: Vogue, 2019
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/tom-cruise.jpg"
                    alt="Tom Cruise"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Tom Cruise</h3>
                <p className="text-gray-700 text-center mb-4">
                  "The actor has used Feng Shui principles in his home design and has consulted with Eastern spiritual advisors."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: People Magazine, 2021
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
              >
                <div className="w-20 h-20 mx-auto mb-6 shadow-lg rounded-full overflow-hidden relative">
                  <Image
                    src="/images/celebrities/mark-zuckerberg.jpg"
                    alt="Mark Zuckerberg"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 60px, 80px"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">Mark Zuckerberg</h3>
                <p className="text-gray-700 text-center mb-4">
                  "The Facebook founder has been known to apply Eastern philosophy principles in his business decisions and personal life."
                </p>
                <div className="text-sm text-gold-600 font-semibold text-center">
                  Source: TechCrunch, 2023
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ⑤ Final Call Section - 结尾唤起行动 */}
        <section id="final-call" className="py-20 bg-gradient-to-r from-navy-900 to-purple-900 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Ready to Explore Your Destiny?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                You've been trying hard enough, it's time someone tells you where to go.
                <br />
                <span className="text-gold-300 font-semibold">Limited Time: First 10 consultations get 15-minute free destiny reading</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/8615914228258?text=I want to get a free initial reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl min-h-[44px] touch-manipulation"
                >
                  <Phone className="w-5 h-5" />
                  <span>Get Free Reading Now</span>
                </a>
                <a
                  href="mailto:chenxiao0801@hotmail.com?subject=I want to learn about Master 玄印's services"
                  className="bg-navy-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-navy-600 min-h-[44px] touch-manipulation"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Consultation</span>
                </a>
              </div>

              {/* Email Subscription */}
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-white mb-3">Subscribe for Spiritual Tips</h3>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-full text-navy-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 min-h-[44px]"
                  />
                  <button 
                    type="submit"
                    className="bg-gold-500 text-white px-6 py-3 rounded-full text-sm hover:bg-gold-600 transition-colors font-semibold min-h-[44px] touch-manipulation"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ⑥ Footer Section - 联系信息 + 网络汇总 */}
        <footer id="footer" className="bg-navy-900 text-white py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">玄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif">玄印 · Xuan Yin</h3>
                    <p className="text-gray-400 text-sm">Guided by Eastern Wisdom</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  May every lost soul be gently guided.
                </p>
                
                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <a 
                    href="https://wa.me/8615914228258" 
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href="mailto:chenxiao0801@hotmail.com" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
                
                {/* Social Media Icons */}
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-serif">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/services" className="hover:text-white transition-colors">BaZi Analysis</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Relationship Compatibility</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Protection & Guidance</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Career Guidance</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 font-serif">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/about" className="hover:text-white transition-colors">About 玄印</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Astrology Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-navy-800 mt-12 pt-8 text-center text-gray-300">
              <p>© 2025 Fate Compass · Powered by 玄印命理师 Xuan Yin</p>
              <p className="text-sm mt-2">May every lost soul be gently guided.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-gold-500 text-white p-3 rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300"
          >
            <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
          </motion.button>
        )}
      </div>
    </>
  )
} 