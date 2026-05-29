'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from './data'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 cursor-none *:[cursor:none] ${
        scrolled
          ? 'bg-[#FAF7F2]/96 backdrop-blur-md border-b border-[#EDE8E1]/80 py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Left links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <NavLink key={link.href} href={link.href} onNavigate={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <Link
          href="/task1"
          className="font-[family-name:var(--font-playfair)] text-base tracking-[0.5em] text-[#2C1F14] transition-opacity hover:opacity-70"
        >
          ORACLE
        </Link>

        {/* Right links */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.slice(2).map((link) => (
            <NavLink key={link.href} href={link.href} onNavigate={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded p-2 text-[#2C1F14] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#EDE8E1]/80 bg-[#FAF7F2]/98 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    href={link.href}
                    className="block py-2 text-sm"
                    onNavigate={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  href,
  children,
  className = '',
  onNavigate,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onNavigate?: () => void
}) {
  return (
    <Link
      href={href}
      className={`oracle-nav-link group relative text-xs uppercase tracking-[0.22em] text-[#2C1F14]/70 transition-colors duration-300 hover:text-[#2C1F14] ${className}`}
      onClick={onNavigate}
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#D4A5A0] transition-all duration-300 group-hover:w-full" />
    </Link>
  )
}
