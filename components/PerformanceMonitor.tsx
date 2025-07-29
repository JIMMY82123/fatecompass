'use client'

import { useEffect, useState } from 'react'

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstPaint: 0,
    firstContentfulPaint: 0
  })

  useEffect(() => {
    // Performance monitoring
    const measurePerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (navigation) {
          setMetrics({
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: 0, // Would need PerformanceObserver for this
            firstContentfulPaint: 0 // Would need PerformanceObserver for this
          })
        }
      }
    }

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
      return () => window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
      <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
    </div>
  )
} 