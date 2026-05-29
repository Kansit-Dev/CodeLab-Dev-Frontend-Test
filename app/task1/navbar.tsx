'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS } from './data'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <NavLink key={link.href} href={link.href} onNavigate={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          href="/task1"
          className="font-[family-name:var(--font-playfair)] text-2xl tracking-[0.15em] text-[#2C1F14]"
        >
          ORACLE
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(2).map((link) => (
            <NavLink key={link.href} href={link.href} onNavigate={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded p-2 text-[#2C1F14] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-[#EDE8E1]/80 bg-[#FAF7F2]/98 px-6 py-4 md:hidden ${open ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                className="block text-sm"
                onNavigate={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
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
      className={`oracle-nav-link text-xs uppercase tracking-[0.2em] text-[#2C1F14] transition-colors hover:text-[#D4A5A0] ${className}`}
      onClick={onNavigate}
    >
      {children}
    </Link>
  )
}
