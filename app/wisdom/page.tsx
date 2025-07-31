'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Lightbulb, Globe, Users, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SEOHead from '@/components/SEOHead'
import Navigation from '@/components/Navigation'

export default function Wisdom() {
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null)

  const easternConcepts = [
    {
      term: "BaZi (八字) - Four Pillars of Destiny",
      westernEquivalent: "Life Blueprint & Timing System",
      explanation: "Think of BaZi as your personal life blueprint, similar to how Western astrology uses birth charts. It's like having a detailed map of your life's journey, showing when to take action and when to wait. Unlike Western astrology which focuses on personality, BaZi reveals the timing of life events and your optimal life path.",
      example: "Just as a business consultant analyzes market timing for launching products, BaZi shows you the best times for career moves, relationships, and major life decisions."
    },
    {
      term: "Five Elements (五行) - Wood, Fire, Earth, Metal, Water",
      westernEquivalent: "Energy Types & Personality Archetypes",
      explanation: "The Five Elements are like personality types combined with energy patterns. Think of them as your natural strengths and how you interact with the world. It's similar to Myers-Briggs personality types but with added timing and compatibility insights.",
      example: "A 'Fire' person might be naturally charismatic and energetic (like an ENFP), while a 'Water' person is adaptable and intuitive (like an INFJ). Understanding your element helps you work with your natural strengths."
    },
    {
      term: "Destiny vs. Free Will",
      westernEquivalent: "Life Coaching with Cosmic Timing",
      explanation: "Eastern wisdom doesn't mean your life is predetermined. Instead, it's like having a weather forecast for your life - you can't change the weather, but you can prepare for it. Your choices still matter, but now you know the best timing for your decisions.",
      example: "If you know it's going to rain tomorrow, you bring an umbrella. Similarly, if BaZi shows a challenging period ahead, you can prepare and make better choices during that time."
    },
    {
      term: "Qi (气) - Life Force Energy",
      westernEquivalent: "Vital Energy & Personal Power",
      explanation: "Qi is your personal energy field - think of it as your life force, similar to concepts in yoga or meditation. When your Qi is balanced, you feel confident, healthy, and aligned. When it's blocked, you feel stuck or overwhelmed.",
      example: "Just as you might feel 'drained' after a stressful day or 'energized' after exercise, Qi explains these energy states and how to maintain optimal balance."
    },
    {
      term: "Yin & Yang Balance",
      westernEquivalent: "Work-Life Balance & Energy Management",
      explanation: "Yin and Yang represent the natural rhythms of life - active and restful periods, masculine and feminine energies within us all. It's about finding harmony between different aspects of your life, similar to modern work-life balance concepts.",
      example: "A successful career (Yang) needs rest and reflection (Yin). Understanding your natural Yin-Yang balance helps you create sustainable success without burnout."
    }
  ]

  const americanCaseStudies = [
    {
      name: "Sarah M., 34, Marketing Executive",
      location: "San Francisco, CA",
      challenge: "Feeling stuck in her career despite success, questioning if she was on the right path",
      solution: "BaZi analysis revealed her natural leadership timing and optimal career direction",
      result: "Within 6 months, Sarah transitioned to a VP role at a startup, feeling more aligned with her true purpose",
      quote: "Master 玄印 helped me understand that my 'stuck' feeling was actually perfect timing for a major career shift. I've never felt more confident about my decisions."
    },
    {
      name: "Michael R., 28, Software Engineer",
      location: "Austin, TX",
      challenge: "Struggling with relationship patterns, always attracting the wrong partners",
      solution: "Relationship compatibility reading showed his energy patterns and timing for meaningful connections",
      result: "Michael learned to recognize compatible energy and met his current partner 3 months later",
      quote: "The reading explained why my relationships kept failing. Now I understand what to look for and when to be open to love."
    },
    {
      name: "Jennifer L., 41, Small Business Owner",
      location: "Miami, FL",
      challenge: "Business was struggling despite hard work, needed guidance on timing and strategy",
      solution: "Destiny reading revealed her optimal business timing and energy alignment",
      result: "Jennifer restructured her business approach and saw 40% growth within a year",
      quote: "Master 玄印's guidance helped me understand that timing is everything in business. I stopped fighting against the current and started flowing with it."
    },
    {
      name: "David K., 31, Healthcare Professional",
      location: "Seattle, WA",
      challenge: "Feeling lost and directionless despite professional success",
      solution: "Life purpose reading uncovered his hidden talents and optimal life path",
      result: "David discovered his passion for holistic health and started a successful wellness practice",
      quote: "I was making good money but felt empty inside. The reading showed me how to align my career with my soul's purpose."
    }
  ]

  const culturalFusion = [
    {
      title: "Ancient Wisdom, Modern Application",
      description: "We bridge the gap between Eastern philosophy and Western psychology, combining the depth of ancient knowledge with the practicality of modern life coaching.",
      examples: [
        "BaZi timing principles applied to career planning",
        "Five Elements personality insights for relationship compatibility",
        "Qi energy management for stress reduction and productivity"
      ]
    },
    {
      title: "Scientific Approach to Spiritual Guidance",
      description: "While we honor the spiritual aspects of Eastern wisdom, we present it in a way that resonates with Western analytical thinking and evidence-based approaches.",
      examples: [
        "Pattern recognition in life events and timing",
        "Energy psychology principles for personal development",
        "Systematic analysis of life cycles and transitions"
      ]
    },
    {
      title: "Practical Results, Not Just Philosophy",
      description: "We focus on actionable insights that lead to measurable improvements in your life, career, and relationships.",
      examples: [
        "Specific timing recommendations for major decisions",
        "Concrete strategies for relationship improvement",
        "Practical tools for energy management and stress reduction"
      ]
    }
  ]

  const toggleTerm = (term: string) => {
    setExpandedTerm(expandedTerm === term ? null : term)
  }

  return (
    <>
      <SEOHead
        title="Eastern Wisdom Explained | Fate Compass - Ancient Knowledge for Modern Life"
        description="Discover how Eastern astrology concepts translate to Western understanding. Learn about BaZi, Five Elements, and how ancient wisdom applies to modern American life."
        keywords="Eastern astrology explained, BaZi meaning, Five Elements, Chinese astrology terms, Eastern wisdom Western culture, life coaching with astrology"
        ogTitle="Eastern Wisdom Explained | Fate Compass"
        ogDescription="Learn how ancient Eastern wisdom translates to modern American life. Understand BaZi, Five Elements, and more."
        canonical="https://fatecompass.net/wisdom"
      />

      <Navigation />
      
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
                Eastern Wisdom, Western Life
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Discover how ancient Eastern concepts translate to modern American understanding and practical life guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-gold-400" />
                  <span>Cultural Bridge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lightbulb className="w-5 h-5 text-gold-400" />
                  <span>Practical Wisdom</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gold-400" />
                  <span>Real Results</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Master Introduction */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-96 h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                    <div className="w-80 h-80 bg-gradient-to-br from-cream-100 to-cream-200 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="w-72 h-72 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center overflow-hidden relative">
                        <Image
                          src="/images/master-xuan-yin.jpg"
                          alt="Master 玄印 - Traditional Eastern Wisdom Practitioner"
                          fill
                          className="object-cover rounded-full"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/10 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                  Meet Master 玄印
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  A traditional Eastern wisdom practitioner who bridges ancient knowledge with modern understanding. 
                  Master 玄印 embodies the timeless wisdom that has guided generations for thousands of years.
                </p>
                <div className="space-y-4">
                                     <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md transform rotate-6">
                       <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                         <div className="w-2 h-2 bg-gradient-to-br from-gold-600 to-amber-700 rounded-sm"></div>
                       </div>
                     </div>
                     <div>
                       <h3 className="font-semibold text-navy-900">Traditional Training</h3>
                       <p className="text-gray-700 text-sm">Rooted in authentic Eastern philosophy and practice</p>
                     </div>
                   </div>
                                     <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md transform -rotate-6">
                       <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                         <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-sm"></div>
                       </div>
                     </div>
                     <div>
                       <h3 className="font-semibold text-navy-900">Modern Application</h3>
                       <p className="text-gray-700 text-sm">Translates ancient wisdom for contemporary life</p>
                     </div>
                   </div>
                                     <div className="flex items-start space-x-3">
                     <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-md transform rotate-6">
                       <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                         <div className="w-2 h-2 bg-gradient-to-br from-green-600 to-emerald-700 rounded-sm"></div>
                       </div>
                     </div>
                     <div>
                       <h3 className="font-semibold text-navy-900">Proven Results</h3>
                       <p className="text-gray-700 text-sm">Helped thousands find clarity and purpose</p>
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Eastern Concepts Explained */}
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
                Eastern Concepts, Western Understanding
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                We translate ancient Eastern wisdom into concepts that resonate with modern American life and values.
              </p>
            </motion.div>

            <div className="space-y-6">
              {easternConcepts.map((concept, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream-50 rounded-2xl p-6 border border-cream-200"
                >
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleTerm(concept.term)}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 mb-2 font-serif">
                        {concept.term}
                      </h3>
                      <p className="text-gold-600 font-medium">
                        {concept.westernEquivalent}
                      </p>
                    </div>
                    {expandedTerm === concept.term ? (
                      <ChevronUp className="w-6 h-6 text-navy-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-navy-600" />
                    )}
                  </div>
                  
                  {expandedTerm === concept.term && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-cream-300"
                    >
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {concept.explanation}
                      </p>
                      <div className="bg-white rounded-lg p-4 border border-cream-200">
                        <h4 className="font-semibold text-navy-900 mb-2">Real-World Example:</h4>
                        <p className="text-gray-700 italic">{concept.example}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* American Success Stories */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Real American Success Stories
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See how Eastern wisdom has transformed the lives of people just like you across America.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {americanCaseStudies.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-cream-200"
                >
                                     <div className="flex items-center space-x-3 mb-4">
                     <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-amber-600 rounded-lg flex items-center justify-center shadow-md transform rotate-6">
                       <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                         <div className="w-3 h-3 bg-gradient-to-br from-gold-600 to-amber-700 rounded-sm"></div>
                       </div>
                     </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">{story.name}</h3>
                      <p className="text-gray-600 text-sm">{story.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">The Challenge:</h4>
                      <p className="text-gray-700 text-sm">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">The Solution:</h4>
                      <p className="text-gray-700 text-sm">{story.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-2">The Result:</h4>
                      <p className="text-gray-700 text-sm">{story.result}</p>
                    </div>
                    <div className="bg-cream-50 rounded-lg p-4 border-l-4 border-gold-500">
                      <p className="text-gray-700 italic text-sm">"{story.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Fusion */}
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
                Bridging East and West
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                How we combine ancient Eastern wisdom with modern Western understanding to create practical, life-changing guidance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {culturalFusion.map((fusion, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-cream-50 rounded-2xl p-8 border border-cream-200"
                >
                                     <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg transform rotate-12">
                     <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                       <div className="w-5 h-5 bg-gradient-to-br from-gold-600 to-amber-700 rounded-lg relative">
                         <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute bottom-0.5 left-0.5 w-1 h-1 bg-white rounded-sm"></div>
                         <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-white rounded-sm"></div>
                       </div>
                     </div>
                   </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-4 font-serif text-center">
                    {fusion.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {fusion.description}
                  </p>
                  <ul className="space-y-2">
                    {fusion.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why This Works */}
        <section className="py-20 bg-gradient-to-r from-navy-900 to-purple-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Why This Approach Works
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Eastern wisdom provides the depth and timing insights that Western approaches often lack, 
                while we present it in a way that fits your modern American lifestyle and values.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gold-300 mb-4">What Western Approaches Miss:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Timing for major life decisions</li>
                    <li>• Energy compatibility in relationships</li>
                    <li>• Life cycle patterns and transitions</li>
                    <li>• Natural talent alignment</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gold-300 mb-4">What Eastern Wisdom Adds:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Precise timing for optimal results</li>
                    <li>• Deep energy compatibility analysis</li>
                    <li>• Life purpose and destiny mapping</li>
                    <li>• Practical tools for daily alignment</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-cream-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 font-serif">
                Ready to Experience This Wisdom?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join thousands of Americans who have discovered how Eastern wisdom can transform their modern lives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/services">
                  <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                    <ArrowRight className="w-5 h-5" />
                    <span>Explore Services</span>
                  </button>
                </Link>
                <a
                  href="https://wa.me/8615914228258?text=I want to learn more about Eastern wisdom and how it can help me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-navy-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-navy-600"
                >
                  <Star className="w-5 h-5" />
                  <span>Ask Questions</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
} 