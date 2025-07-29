'use client'

import React, { useEffect, useState } from 'react'

export default function MobileOptimizer() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Add mobile-specific CSS classes to body
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile-device')
    } else {
      document.body.classList.remove('mobile-device')
    }
  }, [isMobile])

  return null
} 