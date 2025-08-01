'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, Heart, Target, Briefcase, Star, ArrowRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Testimonials from '@/components/Testimonials'
import VideoTestimonialsSimple from '@/components/VideoTestimonialsSimple'
import SEOHead from '@/components/SEOHead'
import StructuredData from '@/components/StructuredData'

export default function HomeSimple() {
  const [isLoading, setIsLoading] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [email, setEmail] = useState('')

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

        <Navigation />

        {/* ① Hero Section */}
        <section id="hero" className="relative z-10 pt-32 pb-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="mb-12">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
            </div>
          </div>
        </section>

        {/* ② Intro Section */}
        <section id="intro" className="section-padding bg-white/95 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column */}
              <div className="relative">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-4 font-serif">Master 玄印</h3>
                    <p className="text-gray-700 mb-6">Traditional Eastern Wisdom Practitioner</p>
                    <div className="flex justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">15+</div>
                        <div className="text-sm text-gray-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gold-600">1000+</div>
                        <div className="text-sm text-gray-600">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 font-serif leading-tight">
                  When You Feel Lost, 
                  <span className="text-gold-600"> Ancient Wisdom Finds You</span>
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Life's crossroads can be overwhelming. But what if you had a compass 
                  that's been guiding souls for thousands of years? That's what Eastern 
                  wisdom offers - not just answers, but a deeper understanding of your 
                  unique path.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Find Your Purpose</h3>
                      <p className="text-gray-700">Discover what you're truly meant to do in this lifetime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Career Clarity</h3>
                      <p className="text-gray-700">Understand your strengths and the perfect timing for success</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2">Relationship Harmony</h3>
                      <p className="text-gray-700">Build deeper connections and understand compatibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ③ Services Section */}
        <section id="services" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                Your <span className="text-gold-400">Destiny Awaits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the guidance that resonates with your current life situation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="card-elevated bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 glass-card float-card">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Life Purpose Reading</h3>
                  <p className="text-gray-300 mb-6">
                    Discover your true calling and the unique gifts you bring to this world
                  </p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Your core strengths and talents
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Ideal career paths and timing
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Life mission and purpose
                    </li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/8615914228258?text=I want a Life Purpose Reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Get Your Reading
                </a>
              </div>

              {/* Service 2 */}
              <div className="card-elevated bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 glass-card float-card">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Relationship Compatibility</h3>
                  <p className="text-gray-300 mb-6">
                    Understand your relationship dynamics and find true compatibility
                  </p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Partner compatibility analysis
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Communication patterns
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Timing for relationships
                    </li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/8615914228258?text=I want a Relationship Compatibility Reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Get Your Reading
                </a>
              </div>

              {/* Service 3 */}
              <div className="card-elevated bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 glass-card float-card">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Financial Timing</h3>
                  <p className="text-gray-300 mb-6">
                    Make the right financial decisions at the perfect time
                  </p>
                  <ul className="text-left space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Investment timing guidance
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Career advancement timing
                    </li>
                    <li className="flex items-center">
                      <Star className="w-4 h-4 text-gold-400 mr-2" />
                      Wealth accumulation cycles
                    </li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/8615914228258?text=I want a Financial Timing Reading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Get Your Reading
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ④ Testimonials Section */}
        <Testimonials />

        {/* ⑤ Video Testimonials Section */}
        <VideoTestimonialsSimple />

        {/* ⑥ Why Choose Us Section */}
        <section id="why-choose-us" className="section-padding bg-white relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-8 font-serif leading-tight">
                Why Choose <span className="text-gold-600">Master 玄印</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Ancient wisdom meets modern understanding for your life's journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">15+ Years Experience</h3>
                <p className="text-gray-700">Deep expertise in traditional Eastern wisdom</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">1000+ Happy Clients</h3>
                <p className="text-gray-700">Proven track record of life-changing guidance</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Personalized Approach</h3>
                <p className="text-gray-700">Every reading is unique to your situation</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-gold-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">Modern Application</h3>
                <p className="text-gray-700">Ancient wisdom for today's challenges</p>
              </div>
            </div>
          </div>
        </section>

        {/* ⑦ CTA Section */}
        <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
              Ready to <span className="text-gold-400">Discover Your Path</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Don't let life's confusion hold you back. Get the clarity you need 
              to make confident decisions and move forward with purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="https://wa.me/8615914228258?text=I want to get my reading"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-3 px-10 py-5 text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                <span>Start Your Journey</span>
              </a>
              <Link href="/services">
                <button className="btn-secondary px-10 py-5 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-navy-900">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Stay Connected</h3>
              <p className="text-gray-300 mb-6">
                Get insights and wisdom delivered to your inbox
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary px-6 py-3 font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">玄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Fate Compass</h3>
                    <p className="text-gray-400 text-sm">Your Destiny Guide</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">
                  Ancient Eastern wisdom for modern souls seeking clarity and direction.
                </p>
                <div className="flex space-x-4">
                  <a href="https://wa.me/8615914228258" className="text-gray-400 hover:text-gold-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </a>
                  <a href="mailto:contact@fatecompass.net" className="text-gray-400 hover:text-gold-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Solutions</h4>
                <ul className="space-y-3">
                  <li><a href="/services" className="text-gray-400 hover:text-gold-500 transition-colors">Life Purpose Reading</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-gold-500 transition-colors">Relationship Compatibility</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-gold-500 transition-colors">Financial Timing</a></li>
                  <li><a href="/services" className="text-gray-400 hover:text-gold-500 transition-colors">Career Guidance</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-400 hover:text-gold-500 transition-colors">About Master 玄印</a></li>
                  <li><a href="/wisdom" className="text-gray-400 hover:text-gold-500 transition-colors">Eastern Wisdom</a></li>
                  <li><a href="/blog" className="text-gray-400 hover:text-gold-500 transition-colors">Blog & Insights</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">Contact Us</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-6">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="/privacy" className="text-gray-400 hover:text-gold-500 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-400 hover:text-gold-500 transition-colors">Terms of Service</a></li>
                  <li><a href="/disclaimer" className="text-gray-400 hover:text-gold-500 transition-colors">Disclaimer</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Fate Compass. All rights reserved. Ancient wisdom for modern souls.
              </p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gold-500 text-white rounded-full shadow-lg hover:bg-gold-600 transition-all duration-300 z-50"
          >
            <ArrowRight className="w-6 h-6 transform rotate-[-90deg] mx-auto" />
          </button>
        )}
      </div>
    </>
  )
} 