'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { margin: '-60px', once: false })

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay: isInView ? delay : 0, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
