'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function CrystalBall({ intensity = 0 }: { intensity?: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Map mouse position to slight translate adjustments for the glow
  const xOffset = useTransform(x, [-1000, 1000], [-15, 15])
  const yOffset = useTransform(y, [-1000, 1000], [-15, 15])

  // Intensity effect: increase glow and pulse speed based on text length
  const glowBoost = Math.min(intensity * 0.02, 0.4)
  const pulseScale = 1 + Math.min(intensity * 0.005, 0.1)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      className="crystal-ball-anchor pointer-events-none absolute left-1/2 z-20 flex items-center justify-center"
      style={{ top: 'clamp(26vh, 34vh, 38vh)' }}
    >
      <div className="crystal-ball-container">
        <motion.div 
          className="crystal-ball-glow" 
          aria-hidden 
          style={{ 
            x: xOffset, 
            y: yOffset,
            opacity: 0.55 + glowBoost,
            scale: pulseScale
          }}
        />
        <div className="crystal-ball-glow crystal-ball-glow--outer" aria-hidden />
        <Image
          src="/crystal-ball-pentagram.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 45vw, 290px"
          className="crystal-ball-img"
          draggable={false}
        />
        
        {/* Magic Circle 1 - Original */}
        <svg viewBox="0 0 120 120" className="magic-circle" aria-hidden>
          <defs>
            <linearGradient id="oracle-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.58" />
              <stop offset="50%" stopColor="#dcb8ff" stopOpacity="0.68" />
              <stop offset="100%" stopColor="#8d45d6" stopOpacity="0.58" />
            </linearGradient>
          </defs>
          <path
            d="M60 8 72 46 112 46 79 69 92 108 60 84 28 108 41 69 8 46 48 46Z"
            fill="none"
            stroke="url(#oracle-line)"
            strokeWidth="2"
          />
          <circle cx="60" cy="60" r="42" fill="none" stroke="url(#oracle-line)" strokeWidth="1.4" />
        </svg>

        {/* Magic Circle 2 - Counter Rotating */}
        <svg 
          viewBox="0 0 120 120" 
          className="magic-circle" 
          aria-hidden 
          style={{ 
            width: '78%', 
            height: '78%', 
            animationDirection: 'reverse', 
            animationDuration: '32s',
            opacity: 0.4 + (glowBoost * 0.5)
          }}
        >
          <circle cx="60" cy="60" r="50" fill="none" stroke="url(#oracle-line)" strokeWidth="1" strokeDasharray="4 8" />
          <path
            d="M60 20 L65 40 L85 45 L65 50 L60 70 L55 50 L35 45 L55 40 Z"
            fill="none"
            stroke="url(#oracle-line)"
            strokeWidth="1.5"
          />
        </svg>

        <motion.div 
          className="crystal-inner-pulse" 
          style={{ 
            x: useTransform(x, [-1000, 1000], [-8, 8]), 
            y: useTransform(y, [-1000, 1000], [-8, 8]),
            scale: pulseScale
          }}
        />
        <div className="crystal-sphere-depth" aria-hidden />
        <div className="crystal-pedestal-glow" aria-hidden />
      </div>
    </div>
  )
}
