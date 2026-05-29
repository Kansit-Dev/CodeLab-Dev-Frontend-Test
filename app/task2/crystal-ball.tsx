'use client'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function CrystalBall() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Map mouse position to slight translate adjustments for the glow
  const xOffset = useTransform(x, [-1000, 1000], [-15, 15])
  const yOffset = useTransform(y, [-1000, 1000], [-15, 15])

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
          style={{ x: xOffset, y: yOffset }}
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
          <circle cx="60" cy="60" r="23" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
        </svg>
        <motion.div 
          className="crystal-inner-pulse" 
          style={{ x: useTransform(x, [-1000, 1000], [-8, 8]), y: useTransform(y, [-1000, 1000], [-8, 8]) }}
        />
        <div className="crystal-sphere-depth" aria-hidden />
        <div className="crystal-pedestal-glow" aria-hidden />
      </div>
    </div>
  )
}
