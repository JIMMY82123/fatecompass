'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react'
import Link from 'next/link'
import SEOHead from '@/components/SEOHead'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding BaZi: The Four Pillars of Destiny",
      excerpt: "Discover how your birth date and time create a unique destiny map that reveals your life purpose, career path, and optimal timing for major decisions.",
      author: "Master 玄印",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "BaZi Basics",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "understanding-bazi-four-pillars-destiny"
    },
    {
      id: 2,
      title: "Finding Your Soulmate: The Art of Relationship Compatibility",
      excerpt: "Learn how Eastern astrology can help you identify true compatibility and build lasting, harmonious relationships that stand the test of time.",
      author: "Master 玄印",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Relationships",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "finding-soulmate-relationship-compatibility"
    },
    {
      id: 3,
      title: "Career Timing: When to Make Your Next Big Move",
      excerpt: "Timing is everything in career success. Discover how to identify the optimal periods for job changes, business launches, and professional growth.",
      author: "Master 玄印",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Career",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "career-timing-next-big-move"
    },
    {
      id: 4,
      title: "The Power of Protection: Ancient Talismans and Modern Life",
      excerpt: "Explore how traditional protection methods can enhance your luck, protect you during challenging times, and create positive energy in your life.",
      author: "Master 玄印",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "Protection",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "power-protection-ancient-talismans"
    },
    {
      id: 5,
      title: "Life Purpose Discovery: What Your Birth Chart Reveals",
      excerpt: "Your birth chart is like a cosmic blueprint. Learn how to read the signs that point to your unique life mission and true calling.",
      author: "Master 玄印",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Life Purpose",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "life-purpose-discovery-birth-chart"
    },
    {
      id: 6,
      title: "Financial Timing: When to Invest and When to Wait",
      excerpt: "Money flows follow cosmic patterns. Discover the best times to invest, start businesses, or make major financial decisions.",
      author: "Master 玄印",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Finance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      slug: "financial-timing-invest-wait"
    }
  ]

  const categories = [
    { name: "All", count: 6 },
    { name: "BaZi Basics", count: 1 },
    { name: "Relationships", count: 1 },
    { name: "Career", count: 1 },
    { name: "Protection", count: 1 },
    { name: "Life Purpose", count: 1 },
    { name: "Finance", count: 1 }
  ]

  const featuredPost = blogPosts[0]

  return (
    <>
      <SEOHead
        title="Astrology Blog | Fate Compass - Eastern Wisdom & Life Guidance"
        description="Discover ancient Eastern wisdom through our astrology blog. Learn about BaZi, relationships, career timing, and life purpose from Master 玄印."
        keywords="Eastern astrology blog, BaZi reading, relationship compatibility, career guidance, life purpose, destiny reading"
        ogTitle="Astrology Blog | Fate Compass"
        ogDescription="Explore ancient Eastern wisdom and life guidance through our astrology blog. Learn from Master 玄印's insights."
        canonical="https://fatecompass.net/blog"
      />

      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-serif">
                Astrology Blog
              </h1>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Explore ancient Eastern wisdom and discover insights that can transform your life. 
                Learn from Master 玄印's knowledge and experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gold-400" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gold-400" />
                  <span>Expert Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>Practical Wisdom</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Featured Article
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Start your journey into Eastern wisdom with our most popular article
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-cream-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${featuredPost.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories & Search Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-navy-900 mb-4 font-serif">
                  Browse by Category
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent w-64"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-12"
            >
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gold-500 text-white' 
                      : 'bg-white text-navy-900 hover:bg-gold-100 border border-cream-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover insights, wisdom, and practical guidance for your life journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-cream-200 overflow-hidden"
                >
                  <div className="relative h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <button className="text-gold-600 hover:text-gold-700 font-semibold flex items-center space-x-1 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Stay Updated with Ancient Wisdom
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Get the latest insights, tips, and guidance delivered to your inbox. 
                Join our community of seekers and discover your true path.
              </p>
              
              <div className="max-w-md mx-auto">
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-gray-600 mt-3">
                  No spam, just wisdom. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Ready for Your Personal Reading?
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                While our blog offers general wisdom, a personalized reading reveals your unique destiny. 
                Contact Master 玄印 for your custom analysis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/8615914228258?text=I want to get a personalized reading after reading the blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Get Personal Reading</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>View Services</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
} 