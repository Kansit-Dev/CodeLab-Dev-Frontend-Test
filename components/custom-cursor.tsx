'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Expand cursor when hovering over links or buttons
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseover', updateHoverState)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseover', updateHoverState)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (typeof window === 'undefined') return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[99999] pointer-events-none rounded-full border border-neutral-500/50 mix-blend-difference hidden md:block"
      animate={{
        x: position.x - (isHovering ? 24 : 12),
        y: position.y - (isHovering ? 24 : 12),
        width: isHovering ? 48 : 24,
        height: isHovering ? 48 : 24,
        opacity: isVisible ? 1 : 0,
        backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 28,
        mass: 0.1,
      }}
    />
  )
}
