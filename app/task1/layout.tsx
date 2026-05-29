import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ORACLE — Fashion Lifestyle',
  description:
    'Quiet luxury fashion for the modern woman. Discover timeless elegance, new arrivals, and editorial lookbooks.',
  openGraph: {
    title: 'ORACLE — Quiet Luxury Fashion',
    description:
      'Timeless elegance crafted for the modern woman. Explore the Spring/Summer 2026 collection.',
    type: 'website',
    siteName: 'ORACLE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORACLE — Quiet Luxury Fashion',
    description:
      'Timeless elegance crafted for the modern woman. Explore the Spring/Summer 2026 collection.',
  },
}

export default function Task1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="task1-theme min-h-screen scroll-smooth bg-[var(--oracle-cream)] font-[family-name:var(--font-inter)] text-[var(--oracle-ink)] antialiased">
      {children}
    </div>
  )
}
