'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search as SearchIcon, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'service' | 'blog' | 'page'
}

const searchData: SearchResult[] = [
  {
    id: '1',
    title: 'Life Destiny Reading',
    description: 'Deep personal analysis based on your birth date, time, and place',
    url: '/services',
    type: 'service'
  },
  {
    id: '2',
    title: 'Relationship Compatibility',
    description: 'Analyze compatibility between you and your partner',
    url: '/services',
    type: 'service'
  },
  {
    id: '3',
    title: 'Personalized Protection Talisman',
    description: 'Custom-made talisman for energy balance and protection',
    url: '/services',
    type: 'service'
  },
  {
    id: '4',
    title: 'About Master 玄印',
    description: 'Learn about the master behind Fate Compass',
    url: '/about',
    type: 'page'
  },
  {
    id: '5',
    title: 'Contact Us',
    description: 'Get in touch for your personalized reading',
    url: '/contact',
    type: 'page'
  }
]

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    const timeout = setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search submitted:', query)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🔮'
      case 'blog':
        return '📝'
      case 'page':
        return '📄'
      default:
        return '🔍'
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gold-600 transition-colors"
        aria-label="Search"
      >
        <SearchIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4"
          >
            <motion.div
              ref={searchRef}
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[70vh] overflow-hidden"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <form onSubmit={handleSearch}>
                      <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search for services, articles, or information..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none"
                      />
                    </form>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                {isSearching ? (
                  <div className="p-8 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">Searching...</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="p-4">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl">{getTypeIcon(result.type)}</div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-navy-900 group-hover:text-gold-600 transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {result.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gold-600 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query ? (
                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4">🔍</div>
                    <p className="text-gray-600">No results found for "{query}"</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Try different keywords or browse our services
                    </p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="text-gray-600">Search for services, articles, or information</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Start typing to see results
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 