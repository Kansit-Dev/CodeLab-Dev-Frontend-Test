'use client'

import { motion } from 'framer-motion'

export function MarqueeBanner({ text }: { text: string }) {
  return (
    <div className="w-full bg-[#1A110B] text-[#FAF7F2] py-2 overflow-hidden flex whitespace-nowrap items-center border-b border-[#3E2B1E]">
      <motion.div
        className="flex space-x-8 text-xs tracking-[0.2em] uppercase"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 20,
        }}
      >
        <span className="flex-shrink-0">{text}</span>
        <span className="flex-shrink-0">{text}</span>
        <span className="flex-shrink-0">{text}</span>
        <span className="flex-shrink-0">{text}</span>
      </motion.div>
    </div>
  )
}
