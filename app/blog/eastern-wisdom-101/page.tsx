'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Heart, Target, BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import SEOHead from '@/components/SEOHead'
import Navigation from '@/components/Navigation'

export default function EasternWisdom101() {
  const concepts = [
    {
      title: "BaZi: Your Life's GPS System",
      subtitle: "Four Pillars of Destiny Explained",
      content: `
        <p>Think of BaZi as your personal GPS for life. Just as a GPS shows you the best route to your destination, BaZi shows you the optimal path through your life journey.</p>
        
        <p>Unlike Western astrology which focuses on personality traits, BaZi reveals the <strong>timing</strong> of life events. It's like having a weather forecast for your life - you can't change the weather, but you can prepare for it.</p>
        
        <h3>How It Works:</h3>
        <ul>
          <li><strong>Year Pillar:</strong> Your overall life theme and family background</li>
          <li><strong>Month Pillar:</strong> Your career path and life purpose</li>
          <li><strong>Day Pillar:</strong> Your core personality and relationships</li>
          <li><strong>Hour Pillar:</strong> Your hidden talents and future potential</li>
        </ul>
        
        <p><strong>Real Example:</strong> A client discovered through BaZi that her "stuck" feeling in her 30s was actually perfect timing for a major career shift. Within 6 months, she transitioned from marketing to starting her own wellness business.</p>
      `
    },
    {
      title: "Five Elements: Your Energy Blueprint",
      subtitle: "Understanding Your Natural Strengths",
      content: `
        <p>The Five Elements (Wood, Fire, Earth, Metal, Water) are like personality types with added energy insights. Think of them as Myers-Briggs meets energy psychology.</p>
        
        <h3>Element Personalities:</h3>
        <ul>
          <li><strong>Wood:</strong> Growth-oriented, ambitious, natural leaders (like ENFJ types)</li>
          <li><strong>Fire:</strong> Charismatic, energetic, creative (like ENFP types)</li>
          <li><strong>Earth:</strong> Stable, nurturing, practical (like ISFJ types)</li>
          <li><strong>Metal:</strong> Organized, precise, value-driven (like ISTJ types)</li>
          <li><strong>Water:</strong> Adaptable, intuitive, wise (like INFJ types)</li>
        </ul>
        
        <p><strong>Why This Matters:</strong> Understanding your element helps you work with your natural strengths instead of against them. A Water person trying to be as outgoing as a Fire person will always feel drained.</p>
        
        <p><strong>Real Example:</strong> A Metal-dominant client was struggling in sales because she was trying to be overly friendly. Once she embraced her natural precision and value-focused approach, her sales increased by 40%.</p>
      `
    },
    {
      title: "Destiny vs. Free Will: The American Perspective",
      subtitle: "You Have Choices, But Timing Matters",
      content: `
        <p>This is where many Americans get confused. Eastern wisdom doesn't mean your life is predetermined - it means you have choices, but some times are better than others for certain decisions.</p>
        
        <h3>Think of it like this:</h3>
        <ul>
          <li>You can plant seeds anytime, but spring is the optimal time</li>
          <li>You can start a business anytime, but some periods are more favorable</li>
          <li>You can pursue relationships anytime, but some periods attract better matches</li>
        </ul>
        
        <p><strong>The Key Insight:</strong> Your free will determines WHAT you do, but cosmic timing determines WHEN you do it for optimal results.</p>
        
        <p><strong>Real Example:</strong> A client wanted to start a business for years but kept hitting obstacles. BaZi analysis showed he was in a challenging period. He waited 8 months, then launched during his favorable period. The business took off immediately.</p>
      `
    },
    {
      title: "Qi Energy: Your Personal Power Source",
      subtitle: "Managing Your Life Force Energy",
      content: `
        <p>Qi (pronounced "chee") is your personal energy field - think of it as your life force, similar to concepts in yoga or meditation. When your Qi is balanced, you feel confident, healthy, and aligned.</p>
        
        <h3>Signs of Balanced Qi:</h3>
        <ul>
          <li>Feeling energized and motivated</li>
          <li>Clear thinking and good decision-making</li>
          <li>Healthy relationships and communication</li>
          <li>Good sleep and overall well-being</li>
        </ul>
        
        <h3>Signs of Imbalanced Qi:</h3>
        <ul>
          <li>Feeling drained or overwhelmed</li>
          <li>Difficulty making decisions</li>
          <li>Relationship conflicts</li>
          <li>Poor sleep or health issues</li>
        </ul>
        
        <p><strong>Practical Application:</strong> Understanding your Qi patterns helps you manage your energy like a business manages its resources. You learn when to push forward and when to rest and recharge.</p>
        
        <p><strong>Real Example:</strong> A high-achieving executive was constantly burned out. Qi analysis revealed she was fighting her natural energy cycles. By aligning her work schedule with her energy patterns, she became more productive while feeling less stressed.</p>
      `
    },
    {
      title: "Yin & Yang: Finding Your Balance",
      subtitle: "The Art of Harmonious Living",
      content: `
        <p>Yin and Yang represent the natural rhythms of life - active and restful periods, masculine and feminine energies within us all. It's about finding harmony between different aspects of your life.</p>
        
        <h3>Yin Qualities (Restful, Receptive):</h3>
        <ul>
          <li>Reflection and planning</li>
          <li>Rest and recovery</li>
          <li>Intuition and creativity</li>
          <li>Nurturing relationships</li>
        </ul>
        
        <h3>Yang Qualities (Active, Expressive):</h3>
        <ul>
          <li>Action and achievement</li>
          <li>Leadership and decision-making</li>
          <li>Competition and growth</li>
          <li>Building and creating</li>
        </ul>
        
        <p><strong>The Modern Application:</strong> A successful career (Yang) needs rest and reflection (Yin). Understanding your natural Yin-Yang balance helps you create sustainable success without burnout.</p>
        
        <p><strong>Real Example:</strong> A startup founder was working 80-hour weeks and feeling exhausted. Yin-Yang analysis showed he was 80% Yang, 20% Yin. By incorporating more Yin activities (meditation, planning, relationship time), he became more effective while working fewer hours.</p>
      `
    }
  ]

  return (
    <>
      <SEOHead
        title="Eastern Wisdom 101: Ancient Knowledge for Modern Americans | Fate Compass"
        description="Learn how ancient Eastern concepts like BaZi, Five Elements, and Qi translate to modern American life. Practical wisdom for personal growth and success."
        keywords="Eastern wisdom explained, BaZi astrology, Five Elements, Qi energy, Yin Yang, Chinese astrology for Americans, life coaching with Eastern wisdom"
        ogTitle="Eastern Wisdom 101: Ancient Knowledge for Modern Americans"
        ogDescription="Discover how ancient Eastern wisdom translates to modern American life. Learn about BaZi, Five Elements, and more."
        canonical="https://fatecompass.net/blog/eastern-wisdom-101"
      />

      <Navigation />
      
      <div className="min-h-screen bg-cream-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-purple-900 to-navy-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 text-gold-400 mb-4">
                <BookOpen className="w-5 h-5" />
                <span className="text-sm font-medium">EDUCATION</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
                Eastern Wisdom 101
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Ancient Knowledge for Modern Americans
              </p>
              <div className="flex items-center justify-center space-x-4 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            {/* Back to Blog */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link 
                href="/blog"
                className="flex items-center space-x-2 text-navy-600 hover:text-navy-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Blog</span>
              </Link>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none mb-16"
            >
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                If you're like most Americans, Eastern wisdom might seem mysterious or even intimidating. 
                But what if I told you that ancient Eastern concepts can be explained in ways that make 
                perfect sense to the modern American mind?
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                This guide will translate complex Eastern concepts into practical wisdom you can use 
                in your daily life. Think of it as a bridge between ancient knowledge and modern application.
              </p>
            </motion.div>

            {/* Concepts */}
            <div className="space-y-16">
              {concepts.map((concept, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream-50 rounded-2xl p-8 border border-cream-200"
                >
                  <h2 className="text-3xl font-bold text-navy-900 mb-3 font-serif">
                    {concept.title}
                  </h2>
                  <p className="text-gold-600 font-medium mb-6">
                    {concept.subtitle}
                  </p>
                  <div 
                    className="prose prose-lg max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: concept.content }}
                  />
                </motion.article>
              ))}
            </div>

            {/* Conclusion */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-navy-900 to-purple-900 rounded-2xl p-8 text-white text-center"
            >
              <h2 className="text-2xl font-bold mb-4 font-serif">
                Ready to Apply This Wisdom?
              </h2>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Understanding these concepts is just the beginning. The real magic happens when you 
                apply them to your specific situation with personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/8615914228258?text=I want to learn how Eastern wisdom applies to my specific situation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-navy-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
                >
                  <Target className="w-4 h-4" />
                  <span>Get Personalized Reading</span>
                </a>
                <Link href="/wisdom">
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
} 