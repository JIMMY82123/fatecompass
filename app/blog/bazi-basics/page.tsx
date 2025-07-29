'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Share2, MessageCircle } from 'lucide-react'

const BaziBasicsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Astrology Basics
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              BaZi Basics: Understanding Your Astrological Code
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              BaZi, also known as Four Pillars, is one of the most important astrological theories in Chinese traditional culture. This article will guide you through the basic concepts of BaZi to help you understand your astrological characteristics.
            </p>
            
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                January 20, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                8 min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <div className="prose prose-lg max-w-none">
              <h2>What is BaZi?</h2>
              <p>
                BaZi, also known as Four Pillars, is one of the most important astrological theories in Chinese traditional culture. It is based on the theory of Heavenly Stems and Earthly Branches,
                analyzing the four time units (year, month, day, hour) of a person's birth to infer their personality traits,
                destiny direction, and life opportunities.
              </p>

              <h3>Basic Structure of BaZi</h3>
              <p>
                BaZi consists of four pillars, each containing one Heavenly Stem and one Earthly Branch:
              </p>
              <ul>
                <li><strong>Year Pillar</strong>: Represents family background and ancestral influence</li>
                <li><strong>Month Pillar</strong>: Represents personality traits and inner qualities</li>
                <li><strong>Day Pillar</strong>: Represents core characteristics and life goals</li>
                <li><strong>Hour Pillar</strong>: Represents later life fortune and children's destiny</li>
              </ul>

              <h3>Heavenly Stems and Earthly Branches System</h3>
              <p>
                Heavenly Stems and Earthly Branches are the basic units used in Chinese traditional culture to record time:
              </p>
              
              <h4>Ten Heavenly Stems</h4>
              <p>Jia, Yi, Bing, Ding, Wu, Ji, Geng, Xin, Ren, Gui</p>
              
              <h4>Twelve Earthly Branches</h4>
              <p>Zi, Chou, Yin, Mao, Chen, Si, Wu, Wei, Shen, You, Xu, Hai</p>

              <h3>Five Elements Theory</h3>
              <p>
                The Five Elements (Metal, Wood, Water, Fire, Earth) are the core theory of BaZi analysis. Each Heavenly Stem and Earthly Branch corresponds to specific Five Elements attributes:
              </p>
              <ul>
                <li><strong>Metal</strong>: Represents strength, decisiveness, and justice</li>
                <li><strong>Wood</strong>: Represents growth, development, and innovation</li>
                <li><strong>Water</strong>: Represents wisdom, flexibility, and adaptability</li>
                <li><strong>Fire</strong>: Represents passion, vitality, and leadership</li>
                <li><strong>Earth</strong>: Represents stability, reliability, and inclusiveness</li>
              </ul>

              <h3>How to Interpret BaZi</h3>
              <p>
                BaZi interpretation requires comprehensive consideration of the following aspects:
              </p>
              
              <h4>1. Day Master Strength</h4>
              <p>
                The Day Master refers to the Heavenly Stem of the Day Pillar, representing the person themselves. Analyzing the strength of the Day Master is the first step in BaZi analysis.
                A strong Day Master usually has a strong personality, while a weak Day Master is more gentle.
              </p>

              <h4>2. Five Elements Balance</h4>
              <p>
                The balance of the Five Elements in the chart determines the overall fortune. Too much or too little of any element can cause problems.
                A balanced chart usually indicates a harmonious life.
              </p>

              <h4>3. Favorable and Unfavorable Elements</h4>
              <p>
                Based on the Day Master's attributes, we can determine which elements are favorable and which are unfavorable.
                Favorable elements bring good fortune, while unfavorable elements may cause challenges.
              </p>

              <h3>Practical Applications</h3>
              <p>
                BaZi analysis can be applied to various aspects of life:
              </p>
              
              <h4>Career Guidance</h4>
              <p>
                By analyzing the Five Elements configuration, we can identify suitable career directions and timing for career changes.
              </p>

              <h4>Relationship Compatibility</h4>
              <p>
                Comparing two people's BaZi charts can reveal compatibility and potential challenges in relationships.
              </p>

              <h4>Health Analysis</h4>
              <p>
                Different Five Elements correspond to different body organs, helping us understand health tendencies.
              </p>

              <h4>Fortune Timing</h4>
              <p>
                BaZi can help predict favorable and unfavorable periods for various life activities.
              </p>

              <h3>Conclusion</h3>
              <p>
                BaZi is a profound system that combines ancient wisdom with practical applications. Understanding your BaZi can provide valuable insights into your personality, potential, and life path.
                However, it's important to remember that BaZi is a tool for guidance, not a deterministic prediction of your future.
              </p>

              <p>
                If you're interested in learning more about your BaZi or getting a professional analysis, feel free to contact us for personalized guidance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share Article
                </button>
                <a
                  href="https://wa.me/8615914228258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get BaZi Analysis
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BaziBasicsPage 