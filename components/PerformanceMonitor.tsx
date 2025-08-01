'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

interface PerformanceMetrics {
  loadTime: number
  memoryUsage: number
  frameRate: number
  memoryLeaks: number
  layoutShifts: number
}

interface MemoryLeakDetector {
  timers: Set<NodeJS.Timeout>
  intervals: Set<NodeJS.Timeout>
  eventListeners: Set<{ element: Element; event: string; handler: EventListener }>
  observers: Set<IntersectionObserver | ResizeObserver>
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    frameRate: 0,
    memoryLeaks: 0,
    layoutShifts: 0
  })
  
  const [isVisible, setIsVisible] = useState(false)
  const leakDetector = useRef<MemoryLeakDetector>({
    timers: new Set(),
    intervals: new Set(),
    eventListeners: new Set(),
    observers: new Set()
  })
  
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const layoutShiftObserverRef = useRef<PerformanceObserver | null>(null)

  // 内存泄漏检测
  const detectMemoryLeaks = useCallback(() => {
    const leaks = leakDetector.current
    const leakCount = leaks.timers.size + leaks.intervals.size + leaks.eventListeners.size + leaks.observers.size
    
    setMetrics(prev => ({ ...prev, memoryLeaks: leakCount }))
    
    // 清理过期的定时器
    leaks.timers.forEach(timer => {
      if (timer.hasRef && !timer.hasRef()) {
        leaks.timers.delete(timer)
      }
    })
    
    leaks.intervals.forEach(interval => {
      if (interval.hasRef && !interval.hasRef()) {
        leaks.intervals.delete(interval)
      }
    })
  }, [])

  // 监控帧率
  const measureFrameRate = useCallback(() => {
    frameCountRef.current++
    const currentTime = performance.now()
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current))
      setMetrics(prev => ({ ...prev, frameRate: fps }))
      frameCountRef.current = 0
      lastTimeRef.current = currentTime
    }
    
    requestAnimationFrame(measureFrameRate)
  }, [])

  // 监控内存使用
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024 // MB
      setMetrics(prev => ({ ...prev, memoryUsage }))
    }
  }, [])

  // 监控布局偏移
  const measureLayoutShifts = useCallback(() => {
    if ('PerformanceObserver' in window) {
      try {
        layoutShiftObserverRef.current = new PerformanceObserver((list) => {
          let layoutShiftScore = 0
          for (const entry of list.getEntries()) {
            if ((entry as any).hadRecentInput) continue
            layoutShiftScore += (entry as any).value
          }
          setMetrics(prev => ({ ...prev, layoutShifts: layoutShiftScore }))
        })
        
        layoutShiftObserverRef.current.observe({ entryTypes: ['layout-shift'] })
      } catch (error) {
        console.warn('Layout Shift monitoring not supported:', error)
      }
    }
  }, [])

  // 安全的定时器创建
  const createSafeTimer = useCallback((callback: () => void, delay: number) => {
    const timer = setTimeout(() => {
      callback()
      leakDetector.current.timers.delete(timer)
    }, delay)
    leakDetector.current.timers.add(timer)
    return timer
  }, [])

  // 安全的定时器创建
  const createSafeInterval = useCallback((callback: () => void, delay: number) => {
    const interval = setInterval(callback, delay)
    leakDetector.current.intervals.add(interval)
    return interval
  }, [])

  // 安全的事件监听器添加
  const addSafeEventListener = useCallback((
    element: Element,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ) => {
    element.addEventListener(event, handler, options)
    leakDetector.current.eventListeners.add({ element, event, handler })
  }, [])

  // 清理所有资源
  const cleanup = useCallback(() => {
    const leaks = leakDetector.current
    
    // 清理定时器
    leaks.timers.forEach(timer => clearTimeout(timer))
    leaks.timers.clear()
    
    // 清理定时器
    leaks.intervals.forEach(interval => clearInterval(interval))
    leaks.intervals.clear()
    
    // 清理事件监听器
    leaks.eventListeners.forEach(({ element, event, handler }) => {
      element.removeEventListener(event, handler)
    })
    leaks.eventListeners.clear()
    
    // 清理观察器
    leaks.observers.forEach(observer => observer.disconnect())
    leaks.observers.clear()
    
    // 清理布局偏移观察器
    if (layoutShiftObserverRef.current) {
      layoutShiftObserverRef.current.disconnect()
      layoutShiftObserverRef.current = null
    }
  }, [])

  useEffect(() => {
    // 测量页面加载时间
    const loadTime = performance.now()
    setMetrics(prev => ({ ...prev, loadTime }))

    // 开始监控
    measureFrameRate()
    measureLayoutShifts()
    
    // 定期检查内存和泄漏
    const memoryInterval = createSafeInterval(() => {
      measureMemory()
      detectMemoryLeaks()
    }, 5000)

    // 组件卸载时清理
    return () => {
      cleanup()
      if (memoryInterval) {
        clearInterval(memoryInterval)
        leakDetector.current.intervals.delete(memoryInterval)
      }
    }
  }, [measureFrameRate, measureLayoutShifts, measureMemory, detectMemoryLeaks, createSafeInterval, cleanup])

  // 导出清理函数供其他组件使用
  useEffect(() => {
    (window as any).__performanceMonitor = {
      cleanup,
      createSafeTimer,
      createSafeInterval,
      addSafeEventListener,
      metrics
    }
  }, [cleanup, createSafeTimer, createSafeInterval, addSafeEventListener, metrics])

  // 只在开发环境显示
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="performance-indicator">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="performance-toggle"
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '12px',
          cursor: 'pointer',
          zIndex: 9999
        }}
      >
        {isVisible ? '隐藏' : '性能'}
      </button>
      
      {isVisible && (
        <div
          className="performance-panel"
          style={{
            position: 'fixed',
            top: '40px',
            right: '10px',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            padding: '12px',
            borderRadius: '8px',
            fontSize: '12px',
            fontFamily: 'monospace',
            zIndex: 9999,
            minWidth: '200px'
          }}
        >
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>性能监控</div>
          <div>加载时间: {metrics.loadTime.toFixed(2)}ms</div>
          <div>内存使用: {metrics.memoryUsage.toFixed(1)}MB</div>
          <div>帧率: {metrics.frameRate}fps</div>
          <div>内存泄漏: {metrics.memoryLeaks}</div>
          <div>布局偏移: {metrics.layoutShifts.toFixed(3)}</div>
          <button
            onClick={cleanup}
            style={{
              marginTop: '8px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '10px',
              cursor: 'pointer'
            }}
          >
            清理资源
          </button>
        </div>
      )}
    </div>
  )
}

// Hook for components to use safe timers
export function useSafeTimer() {
  const createTimer = useCallback((callback: () => void, delay: number) => {
    const timer = setTimeout(() => {
      callback()
    }, delay)
    
    // 注册到监控器
    if ((window as any).__performanceMonitor) {
      (window as any).__performanceMonitor.leakDetector?.timers.add(timer)
    }
    
    return timer
  }, [])

  const createInterval = useCallback((callback: () => void, delay: number) => {
    const interval = setInterval(callback, delay)
    
    // 注册到监控器
    if ((window as any).__performanceMonitor) {
      (window as any).__performanceMonitor.leakDetector?.intervals.add(interval)
    }
    
    return interval
  }, [])

  return { createTimer, createInterval }
}

// Hook for components to use safe event listeners
export function useSafeEventListener() {
  const addEventListener = useCallback((
    element: Element,
    event: string,
    handler: EventListener,
    options?: AddEventListenerOptions
  ) => {
    element.addEventListener(event, handler, options)
    
    // 注册到监控器
    if ((window as any).__performanceMonitor) {
      (window as any).__performanceMonitor.leakDetector?.eventListeners.add({ element, event, handler })
    }
  }, [])

  return { addEventListener }
} 