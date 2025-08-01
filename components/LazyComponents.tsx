'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// 懒加载组件
export const LazyTestimonials = dynamic(() => import('./Testimonials'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: false,
})

export const LazyVideoTestimonials = dynamic(() => import('./VideoTestimonialsSimple'), {
  loading: () => <VideoTestimonialsSkeleton />,
  ssr: false,
})

export const LazyVisualEffects = dynamic(() => import('./VisualEffects'), {
  loading: () => null,
  ssr: false,
})

export const LazySearch = dynamic(() => import('./Search'), {
  loading: () => <SearchSkeleton />,
  ssr: false,
})

// 骨架屏组件
function TestimonialsSkeleton() {
  return (
    <section className="section-padding bg-gradient-to-br from-cream-100 to-gold-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoTestimonialsSkeleton() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-pulse">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-6"></div>
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SearchSkeleton() {
  return (
    <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
  )
}

// 包装组件
export function withSuspense<T extends object>(
  Component: React.ComponentType<T>,
  fallback?: React.ReactNode
) {
  return function WrappedComponent(props: T) {
    return (
      <Suspense fallback={fallback || <div className="animate-pulse">Loading...</div>}>
        <Component {...props} />
      </Suspense>
    )
  }
} 