'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface ParallaxImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
}

export function ParallaxImage({ src, alt, priority = false, className = '' }: ParallaxImageProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Move the image slightly slower than the scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center"
          placeholder="empty"
        />
      </motion.div>
    </div>
  )
}
