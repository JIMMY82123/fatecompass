'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function VisualEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Subtle Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Elegant Energy Lines */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />
      
      {/* Subtle Vertical Lines */}
      <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-white/4 to-transparent" />
      <div className="absolute top-0 left-2/3 h-full w-px bg-gradient-to-b from-transparent via-white/3 to-transparent" />

      {/* Gentle Light Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute w-32 h-32 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
            background: `radial-gradient(circle, rgba(245, 158, 11, 0.03) 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
        />
      ))}

      {/* Subtle Mist Layers */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-16 bg-gradient-to-r from-transparent via-white/2 to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-3/4 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-white/1 to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 3,
        }}
      />
    </div>
  )
} 