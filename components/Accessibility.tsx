'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Volume2, VolumeX, ZoomIn, ZoomOut } from 'lucide-react'

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [largeText, setLargeText] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Load saved preferences
    const savedHighContrast = localStorage.getItem('highContrast') === 'true'
    const savedLargeText = localStorage.getItem('largeText') === 'true'
    const savedReducedMotion = localStorage.getItem('reducedMotion') === 'true'

    setHighContrast(savedHighContrast)
    setLargeText(savedLargeText)
    setReducedMotion(savedReducedMotion)

    // Apply saved preferences
    if (savedHighContrast) document.documentElement.classList.add('high-contrast')
    if (savedLargeText) document.documentElement.classList.add('large-text')
    if (savedReducedMotion) document.documentElement.classList.add('reduced-motion')
  }, [])

  const toggleHighContrast = () => {
    const newValue = !highContrast
    setHighContrast(newValue)
    localStorage.setItem('highContrast', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }

  const toggleLargeText = () => {
    const newValue = !largeText
    setLargeText(newValue)
    localStorage.setItem('largeText', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('large-text')
    } else {
      document.documentElement.classList.remove('large-text')
    }
  }

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion
    setReducedMotion(newValue)
    localStorage.setItem('reducedMotion', newValue.toString())
    
    if (newValue) {
      document.documentElement.classList.add('reduced-motion')
    } else {
      document.documentElement.classList.remove('reduced-motion')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Accessibility Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-50 bg-navy-900 text-white p-3 rounded-full shadow-lg hover:bg-navy-800 transition-colors"
        aria-label="Accessibility options"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          <span className="text-lg">♿</span>
        </div>
      </button>

      {/* Accessibility Panel */}
      <div
        className={`fixed bottom-20 left-4 z-50 bg-white rounded-lg shadow-xl border border-gray-200 p-4 min-w-[250px] transition-all duration-300 transform ${
          isOpen 
            ? 'opacity-100 translate-x-0 pointer-events-auto' 
            : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <h3 className="font-bold text-navy-900 mb-4 text-lg">Accessibility</h3>
        
        <div className="space-y-3">
          {/* High Contrast */}
          <button
            onClick={toggleHighContrast}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              highContrast 
                ? 'bg-gold-100 border-gold-300 text-gold-800' 
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              {highContrast ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              <span className="font-medium">High Contrast</span>
            </div>
            <div className={`w-4 h-4 rounded border-2 ${
              highContrast ? 'bg-gold-500 border-gold-500' : 'border-gray-300'
            }`}>
              {highContrast && <div className="w-full h-full bg-white rounded-sm m-0.5"></div>}
            </div>
          </button>

          {/* Large Text */}
          <button
            onClick={toggleLargeText}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              largeText 
                ? 'bg-gold-100 border-gold-300 text-gold-800' 
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              {largeText ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
              <span className="font-medium">Large Text</span>
            </div>
            <div className={`w-4 h-4 rounded border-2 ${
              largeText ? 'bg-gold-500 border-gold-500' : 'border-gray-300'
            }`}>
              {largeText && <div className="w-full h-full bg-white rounded-sm m-0.5"></div>}
            </div>
          </button>

          {/* Reduced Motion */}
          <button
            onClick={toggleReducedMotion}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
              reducedMotion 
                ? 'bg-gold-100 border-gold-300 text-gold-800' 
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-3">
              {reducedMotion ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              <span className="font-medium">Reduced Motion</span>
            </div>
            <div className={`w-4 h-4 rounded border-2 ${
              reducedMotion ? 'bg-gold-500 border-gold-500' : 'border-gray-300'
            }`}>
              {reducedMotion && <div className="w-full h-full bg-white rounded-sm m-0.5"></div>}
            </div>
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            These settings help make our website more accessible for all users.
          </p>
        </div>
      </div>
    </>
  )
} 