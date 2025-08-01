'use client'

import { useEffect, useState } from 'react'

interface MobileOptimizerProps {
  children: React.ReactNode
}

export default function MobileOptimizer({ children }: MobileOptimizerProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isFirefox, setIsFirefox] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)

  useEffect(() => {
    // 检测移动设备
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
      setIsMobile(isMobileDevice)
    }

    // 检测Firefox浏览器
    const checkFirefox = () => {
      const isFirefoxBrowser = navigator.userAgent.toLowerCase().includes('firefox')
      setIsFirefox(isFirefoxBrowser)
    }

    // 设置视口高度（修复iOS Safari 100vh问题）
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setViewportHeight(window.innerHeight)
    }

    // 初始化检查
    checkMobile()
    checkFirefox()
    setVH()

    // 监听窗口大小变化
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', setVH)

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', setVH)
      window.removeEventListener('orientationchange', setVH)
    }
  }, [])

  // 修复Firefox的onTouchStart警告
  useEffect(() => {
    if (isFirefox) {
      // 为Firefox添加触摸事件支持
      const addTouchSupport = () => {
        const elements = document.querySelectorAll('[data-touch]')
        elements.forEach(element => {
          element.addEventListener('touchstart', (e) => {
            e.preventDefault()
            element.classList.add('touch-active')
          })
          element.addEventListener('touchend', () => {
            element.classList.remove('touch-active')
          })
        })
      }

      // 延迟执行以确保DOM已加载
      setTimeout(addTouchSupport, 100)
    }
  }, [isFirefox])

  // 移动端性能优化
  useEffect(() => {
    if (isMobile) {
      // 减少动画以提高性能
      const reduceAnimations = () => {
        const style = document.createElement('style')
        style.textContent = `
          @media (max-width: 768px) {
            .animate-pulse { animation: none !important; }
            .animate-bounce { animation: none !important; }
            .animate-spin { animation: none !important; }
          }
        `
        document.head.appendChild(style)
      }

      // 优化滚动性能
      const optimizeScroll = () => {
        ;(document.body.style as any).webkitOverflowScrolling = 'touch'
        ;(document.body.style as any).overflowScrolling = 'touch'
      }

      reduceAnimations()
      optimizeScroll()
    }
  }, [isMobile])

  return (
    <div 
      className={`mobile-optimizer ${isMobile ? 'mobile-device' : ''} ${isFirefox ? 'firefox-browser' : ''}`}
      style={{
        minHeight: isMobile ? 'calc(var(--vh, 1vh) * 100)' : '100vh'
      }}
    >
      {children}
    </div>
  )
}

// 移动端触摸事件Hook
export function useTouchEvents() {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // 最小滑动距离
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      // 向左滑动
      console.log('向左滑动')
    }
    if (isRightSwipe) {
      // 向右滑动
      console.log('向右滑动')
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  }
}

// 移动端安全区域Hook
export function useSafeArea() {
  const [safeAreaInsets, setSafeAreaInsets] = useState({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  })

  useEffect(() => {
    const updateSafeArea = () => {
      const style = getComputedStyle(document.documentElement)
      setSafeAreaInsets({
        top: parseInt(style.getPropertyValue('--sat') || '0'),
        right: parseInt(style.getPropertyValue('--sar') || '0'),
        bottom: parseInt(style.getPropertyValue('--sab') || '0'),
        left: parseInt(style.getPropertyValue('--sal') || '0')
      })
    }

    updateSafeArea()
    window.addEventListener('resize', updateSafeArea)
    window.addEventListener('orientationchange', updateSafeArea)

    return () => {
      window.removeEventListener('resize', updateSafeArea)
      window.removeEventListener('orientationchange', updateSafeArea)
    }
  }, [])

  return safeAreaInsets
}

// 移动端性能监控Hook
export function usePerformanceMonitor() {
  const [performance, setPerformance] = useState({
    loadTime: 0,
    memoryUsage: 0,
    frameRate: 0
  })

  useEffect(() => {
    // 监控页面加载时间
    const measureLoadTime = () => {
      const loadTime = performance.now()
      setPerformance(prev => ({ ...prev, loadTime }))
    }

    // 监控内存使用
    const measureMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setPerformance(prev => ({ 
          ...prev, 
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // MB
        }))
      }
    }

    // 监控帧率
    let frameCount = 0
    let lastTime = performance.now()
    
    const measureFrameRate = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        setPerformance(prev => ({ ...prev, frameRate: fps }))
        frameCount = 0
        lastTime = currentTime
      }
      
      requestAnimationFrame(measureFrameRate)
    }

    measureLoadTime()
    measureMemory()
    requestAnimationFrame(measureFrameRate)

    // 定期检查内存使用
    const memoryInterval = setInterval(measureMemory, 5000)

    return () => {
      clearInterval(memoryInterval)
    }
  }, [])

  return performance
} 