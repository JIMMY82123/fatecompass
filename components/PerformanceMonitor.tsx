'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // 监控Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // 监控LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // 发送到分析服务
        if (lastEntry.startTime < 2500) {
          console.log('✅ LCP is good')
        } else {
          console.log('⚠️ LCP needs improvement')
        }
      })
      
      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      } catch (e) {
        console.log('LCP observer not supported')
      }

      // 监控FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          const fid = entry.processingStart - entry.startTime
          console.log('FID:', fid)
          
          if (fid < 100) {
            console.log('✅ FID is good')
          } else {
            console.log('⚠️ FID needs improvement')
          }
        })
      })
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] })
      } catch (e) {
        console.log('FID observer not supported')
      }

      // 监控CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        
        console.log('CLS:', clsValue)
        
        if (clsValue < 0.1) {
          console.log('✅ CLS is good')
        } else {
          console.log('⚠️ CLS needs improvement')
        }
      })
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] })
      } catch (e) {
        console.log('CLS observer not supported')
      }

      // 监控页面加载时间
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
          
          console.log('Page Load Time:', loadTime)
          console.log('DOM Content Loaded:', domContentLoaded)
          
          if (loadTime < 3000) {
            console.log('✅ Page load time is good')
          } else {
            console.log('⚠️ Page load time needs improvement')
          }
        }
      })
    }

    // 监控图片加载性能
    const imageObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'resource' && entry.name.includes('.jpg')) {
          console.log('Image loaded:', entry.name, 'in', entry.duration, 'ms')
        }
      })
    })
    
    try {
      imageObserver.observe({ entryTypes: ['resource'] })
    } catch (e) {
      console.log('Resource observer not supported')
    }
  }, [])

  return null
} 