'use client'

import { useEffect, useRef, useCallback } from 'react'

interface AnalyticsEvent {
  event: string
  properties?: Record<string, any>
  timestamp?: number
}

interface UserPath {
  page: string
  timeSpent: number
  interactions: number
}

class Analytics {
  private static instance: Analytics
  private events: AnalyticsEvent[] = []
  private userPath: UserPath[] = []
  private sessionStart: number
  private currentPage: string
  private interactionCount: number = 0

  private constructor() {
    this.sessionStart = Date.now()
    this.currentPage = window.location.pathname
    this.initializeTracking()
  }

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics()
    }
    return Analytics.instance
  }

  private initializeTracking() {
    // 页面加载追踪
    this.track('PageView', {
      url: window.location.href,
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`
    })

    // 用户交互追踪
    this.trackUserInteractions()
    
    // 性能追踪
    this.trackPerformance()
    
    // 错误追踪
    this.trackErrors()
    
    // 页面卸载前保存数据
    window.addEventListener('beforeunload', () => {
      this.saveSessionData()
    })
  }

  private trackUserInteractions() {
    // 点击追踪
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      const tagName = target.tagName.toLowerCase()
      const className = target.className
      const id = target.id
      const text = target.textContent?.slice(0, 50)

      this.track('UserClick', {
        tagName,
        className,
        id,
        text,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      })

      this.interactionCount++
    })

    // 滚动追踪
    let scrollTimeout: NodeJS.Timeout
    document.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollY = window.scrollY
        const scrollPercent = (scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

        this.track('UserScroll', {
          scrollY,
          scrollPercent: Math.round(scrollPercent),
          timestamp: Date.now()
        })
      }, 100)
    })

    // 表单交互追踪
    document.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement
      this.track('FormInput', {
        fieldName: target.name || target.id,
        fieldType: target.type,
        timestamp: Date.now()
      })
    })
  }

  private trackPerformance() {
    // 页面加载性能
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        this.track('PagePerformance', {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
          firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime
        })
      }
    })

    // 资源加载性能
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          this.track('ResourceLoad', {
            name: entry.name,
            duration: entry.duration,
            size: (entry as any).transferSize,
            type: entry.initiatorType
          })
        }
      })
    })

    try {
      resourceObserver.observe({ entryTypes: ['resource'] })
    } catch (error) {
      console.warn('Resource observer not supported:', error)
    }
  }

  private trackErrors() {
    // JavaScript错误追踪
    window.addEventListener('error', (e) => {
      this.track('JavaScriptError', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        stack: e.error?.stack
      })
    })

    // Promise错误追踪
    window.addEventListener('unhandledrejection', (e) => {
      this.track('PromiseError', {
        reason: e.reason,
        timestamp: Date.now()
      })
    })
  }

  // 追踪自定义事件
  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: Date.now()
    }

    this.events.push(analyticsEvent)

    // 发送到分析服务（这里可以集成Google Analytics、Umami等）
    this.sendToAnalytics(analyticsEvent)

    // 本地存储
    this.saveToLocalStorage(analyticsEvent)
  }

  // 追踪用户路径
  trackUserPath(page: string, timeSpent: number) {
    this.userPath.push({
      page,
      timeSpent,
      interactions: this.interactionCount
    })

    this.interactionCount = 0
  }

  // 追踪问题流程
  trackQuestionFlow(questionNumber: number, timeSpent: number, answer?: string) {
    this.track('QuestionFlow', {
      question: questionNumber,
      timeSpent,
      answer,
      timestamp: Date.now()
    })
  }

  // 追踪结果页转化
  trackResultShare(type: 'twitter' | 'facebook' | 'weibo' | 'copy') {
    this.track('ResultShare', {
      type,
      timestamp: Date.now()
    })
  }

  // 追踪转化事件
  trackConversion(type: string, value?: number) {
    this.track('Conversion', {
      type,
      value,
      timestamp: Date.now()
    })
  }

  private sendToAnalytics(event: AnalyticsEvent) {
    // 集成Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, event.properties)
    }

    // 集成Umami
    if (typeof window !== 'undefined' && (window as any).umami) {
      (window as any).umami.track(event.event, event.properties)
    }

    // 自定义分析服务
    this.sendToCustomAnalytics(event)
  }

  private sendToCustomAnalytics(event: AnalyticsEvent) {
    // 这里可以发送到自己的分析服务
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).catch(error => {
      console.warn('Analytics send failed:', error)
    })
  }

  private saveToLocalStorage(event: AnalyticsEvent) {
    try {
      const existingEvents = JSON.parse(localStorage.getItem('analytics_events') || '[]')
      existingEvents.push(event)
      
      // 只保留最近1000个事件
      if (existingEvents.length > 1000) {
        existingEvents.splice(0, existingEvents.length - 1000)
      }
      
      localStorage.setItem('analytics_events', JSON.stringify(existingEvents))
    } catch (error) {
      console.warn('Failed to save analytics to localStorage:', error)
    }
  }

  private saveSessionData() {
    const sessionData = {
      sessionId: this.sessionStart,
      duration: Date.now() - this.sessionStart,
      events: this.events,
      userPath: this.userPath,
      totalInteractions: this.userPath.reduce((sum, path) => sum + path.interactions, 0)
    }

    try {
      localStorage.setItem('analytics_session', JSON.stringify(sessionData))
    } catch (error) {
      console.warn('Failed to save session data:', error)
    }
  }

  // 获取分析数据
  getAnalyticsData() {
    return {
      events: this.events,
      userPath: this.userPath,
      sessionDuration: Date.now() - this.sessionStart,
      totalInteractions: this.userPath.reduce((sum, path) => sum + path.interactions, 0)
    }
  }
}

// React Hook for analytics
export function useAnalytics() {
  const analytics = useRef(Analytics.getInstance())

  const track = useCallback((event: string, properties?: Record<string, any>) => {
    analytics.current.track(event, properties)
  }, [])

  const trackQuestionFlow = useCallback((questionNumber: number, timeSpent: number, answer?: string) => {
    analytics.current.trackQuestionFlow(questionNumber, timeSpent, answer)
  }, [])

  const trackResultShare = useCallback((type: 'twitter' | 'facebook' | 'weibo' | 'copy') => {
    analytics.current.trackResultShare(type)
  }, [])

  const trackConversion = useCallback((type: string, value?: number) => {
    analytics.current.trackConversion(type, value)
  }, [])

  return {
    track,
    trackQuestionFlow,
    trackResultShare,
    trackConversion,
    getAnalyticsData: () => analytics.current.getAnalyticsData()
  }
}

// 分析组件
export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 初始化分析
    Analytics.getInstance()
  }, [])

  return <>{children}</>
}

// 页面追踪组件
export function PageTracker({ pageName }: { pageName: string }) {
  const { track } = useAnalytics()
  const pageStartTime = useRef(Date.now())

  useEffect(() => {
    // 页面进入
    track('PageEnter', { page: pageName })

    return () => {
      // 页面离开
      const timeSpent = Date.now() - pageStartTime.current
      track('PageLeave', { 
        page: pageName, 
        timeSpent 
      })
    }
  }, [pageName, track])

  return null
} 