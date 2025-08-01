'use client'

import { useState, useEffect } from 'react'
import { Play, Star, Quote, X, Volume2, VolumeX } from 'lucide-react'

export default function VideoTestimonialsSimple() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const videoTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      quote: "Master 玄印's reading completely changed my perspective on my career. I finally understood why I felt stuck and what I needed to do next.",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "/videos/testimonials/testimonial-01.mp4",
      category: "职业指导"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      quote: "The relationship compatibility reading was incredibly accurate. It helped me understand my partner better and improve our communication.",
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "/videos/testimonials/testimonial-02.mp4",
      category: "关系咨询"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, FL",
      rating: 5,
      quote: "I was skeptical at first, but the financial timing analysis was spot on. I made the right investment at the perfect time.",
      videoThumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=300&q=80",
      videoUrl: "/videos/testimonials/testimonial-03.mp4",
      category: "财务时机"
    }
  ]

  const openVideo = (index: number) => {
    setActiveVideo(index)
    setIsMuted(false)
  }

  const closeVideo = () => {
    setActiveVideo(null)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  if (!isClient) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight">
              Real Stories, Real Results
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Watch how ancient Eastern wisdom has transformed lives and brought clarity to confused souls
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {videoTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card-elevated bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 glass-card float-card cursor-pointer"
                onClick={() => openVideo(index)}
              >
                <div className="relative h-56 bg-gray-200">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonial.videoThumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center group">
                    <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-10 h-10 text-navy-900 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {testimonial.category}
                    </span>
                  </div>
                </div>
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
                  <div className="relative bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-yellow-500" />
                    <p className="text-gray-900 italic leading-relaxed pl-4 font-bold">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-8 font-serif leading-tight">
            Real Stories, Real Results
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Watch how ancient Eastern wisdom has transformed lives and brought clarity to confused souls
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-elevated bg-white rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 glass-card float-card cursor-pointer"
              onClick={() => openVideo(index)}
            >
              {/* Video Thumbnail */}
              <div className="relative h-56 bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.videoThumbnail})` }}
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                    <Play className="w-10 h-10 text-navy-900 ml-1" />
                  </div>
                </div>
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

                <div className="relative bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-yellow-500" />
                  <p className="text-gray-900 italic leading-relaxed pl-4 font-bold">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Container */}
              <div className="relative">
                <video
                  className="w-full h-auto"
                  controls
                  autoPlay
                  muted={isMuted}
                  playsInline
                >
                  <source src={videoTestimonials[activeVideo].videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={toggleMute}
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                  <button
                    onClick={closeVideo}
                    className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900">
                      {videoTestimonials[activeVideo].name}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {videoTestimonials[activeVideo].location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(videoTestimonials[activeVideo].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="relative bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-yellow-500" />
                  <p className="text-gray-900 italic leading-relaxed pl-4 font-bold">
                    "{videoTestimonials[activeVideo].quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="text-center">
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
        </div>
      </div>
    </section>
  )
} 