'use client'

import React from 'react'
import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'find-life-purpose',
      title: 'How to Find Your Life Purpose: A Complete Guide',
      excerpt: 'Feeling lost and directionless? Learn how ancient Eastern wisdom can help you discover your true calling and find meaning in your life. This comprehensive guide will show you the steps to uncover your life purpose.',
      date: '2024-01-20',
      readTime: '12 min read',
      category: 'Life Purpose',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true
    },
    {
      id: 'career-change-guide',
      title: 'Career Change Guide: When and How to Make the Right Move',
      excerpt: 'Thinking about changing careers but unsure if it\'s the right time? Learn how Eastern astrology can help you identify the perfect timing for career transitions and make confident decisions about your professional future.',
      date: '2024-01-18',
      readTime: '15 min read',
      category: 'Career Guidance',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'relationship-compatibility',
      title: 'Relationship Compatibility: How to Find Your Perfect Match',
      excerpt: 'Struggling with relationships? Discover how Eastern astrology can help you understand compatibility, improve communication, and find lasting love. Learn the secrets to building stronger, more fulfilling relationships.',
      date: '2024-01-15',
      readTime: '10 min read',
      category: 'Relationship Advice',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'overcome-self-doubt',
      title: 'Overcoming Self-Doubt: Building Confidence Through Self-Discovery',
      excerpt: 'Self-doubt holding you back? Learn how understanding your astrological makeup can help you build unshakeable confidence and overcome the limiting beliefs that prevent you from reaching your full potential.',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'Personal Growth',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'midlife-crisis',
      title: 'Midlife Crisis: Finding New Direction When Life Feels Stuck',
      excerpt: 'Feeling stuck in the middle of life? Learn how Eastern wisdom can help you navigate midlife transitions, rediscover your passion, and create a meaningful second half of life filled with purpose and fulfillment.',
      date: '2024-01-10',
      readTime: '14 min read',
      category: 'Life Transitions',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'decision-making',
      title: 'Better Decision Making: How to Choose the Right Path',
      excerpt: 'Facing a major life decision? Learn how Eastern astrology can help you make better choices by understanding your natural tendencies, optimal timing, and the potential outcomes of different paths.',
      date: '2024-01-08',
      readTime: '11 min read',
      category: 'Life Guidance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  const categories = ['All', 'Life Purpose', 'Career Guidance', 'Relationship Advice', 'Personal Growth', 'Life Transitions', 'Life Guidance']

  return (
    <>
      <Head>
        <title>Life Guidance Blog - Find Your Purpose & Direction | Fate Compass</title>
        <meta name="description" content="Get expert advice on finding your life purpose, career guidance, relationship advice, and personal growth. Learn how Eastern wisdom can help you find clarity and direction." />
        <meta name="keywords" content="life purpose, career guidance, relationship advice, personal growth, life direction, self-discovery, career change, relationship compatibility, life coaching, personal development" />
        <meta property="og:title" content="Life Guidance Blog - Find Your Purpose & Direction | Fate Compass" />
        <meta property="og:description" content="Get expert advice on finding your life purpose, career guidance, relationship advice, and personal growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fatecompass.com/blog" />
        <link rel="canonical" href="https://fatecompass.com/blog" />
      </Head>
      
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Life Guidance Blog</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Expert advice on finding your purpose, career guidance, relationships, and personal growth. 
                Learn how ancient Eastern wisdom can help you find clarity and direction in life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </motion.div>

            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover practical guidance for life's biggest challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Get Weekly Life Guidance Tips</h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of people discovering their true path with expert insights and practical advice
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Get Free Tips
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPage 