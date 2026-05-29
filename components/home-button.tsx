'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export function HomeButton({ dark = false }: { dark?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-6 left-6 z-[60] cursor-none *:[cursor:none]"
    >
      <Link
        href="/"
        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 group ${
          dark
            ? 'bg-black/40 text-[#C9A84C] border-[#C9A84C]/30 hover:bg-[#C9A84C] hover:text-black'
            : 'bg-white/40 text-[#2C1F14] border-[#2C1F14]/20 hover:bg-[#2C1F14] hover:text-white'
        } backdrop-blur-md shadow-lg`}
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-xs font-medium uppercase tracking-widest">Back</span>
      </Link>
    </motion.div>
  )
}
