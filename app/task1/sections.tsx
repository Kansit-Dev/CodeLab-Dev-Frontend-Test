'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ChevronRight } from 'lucide-react'
import { ParallaxImage } from '@/components/parallax-image'
import {
  HERO_IMAGE,
  HERO_IMAGE_SECONDARY,
  LOOKBOOK_IMAGES,
  PRODUCTS,
  PRODUCT_CATEGORIES,
  TESTIMONIALS,
  CATEGORIES,
  BRAND_STATS,
} from './data'

/* ─────────────────────────────
   Shared micro-components
───────────────────────────────*/

function SectionEyebrow({ text }: { text: string }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="h-px w-8 bg-[#D4A5A0]" />
      <p className="text-[10px] uppercase tracking-[0.4em] text-[#8B7355]">{text}</p>
      <span className="h-px w-8 bg-[#D4A5A0]" />
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  light?: boolean
}) {
  return (
    <div className="mb-16 text-center">
      <SectionEyebrow text={eyebrow} />
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl tracking-wide md:text-4xl lg:text-5xl ${
          light ? 'text-[#FAF7F2]' : 'text-[#2C1F14]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-5 max-w-xl text-sm leading-relaxed ${
            light ? 'text-[#D4C5B5]' : 'text-[#8B7355]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─────────────────────────────
   HERO — Split Editorial Layout
───────────────────────────────*/

const heroTextVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#FAF7F2]">
      {/* Background image — full bleed with dark overlay on right side */}
      <div className="absolute inset-0">
        <ParallaxImage
          src={HERO_IMAGE}
          alt="Editorial fashion — quiet luxury collection"
          priority
          className="w-full h-full"
        />
        {/* Dark overlay gradient — stronger on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A110B]/75 via-[#1A110B]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A110B]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-end px-8 pb-20 pt-36 md:px-16 md:pb-28 lg:px-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <span className="h-px w-10 bg-[#D4A5A0]" />
            <p className="text-xs uppercase tracking-[0.4em] text-[#D4C5B5]">Spring / Summer 2026</p>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="font-[family-name:var(--font-playfair)] text-balance text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.88] tracking-tight text-[#FAF7F2]"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            Embrace Your
            <br />
            <em className="not-italic text-[#D4A5A0]">Quiet Luxury</em>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mt-8 max-w-sm text-sm leading-loose text-[#D4C5B5] md:text-base"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            Discover timeless elegance crafted for the modern woman. Each piece tells a story of
            sophistication and understated beauty.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroTextVariants}
          >
            <Link
              id="hero-cta-explore"
              href="#collection"
              className="group inline-flex items-center gap-3 rounded-none border border-[#FAF7F2]/90 bg-[#FAF7F2]/10 px-8 py-4 text-xs uppercase tracking-[0.22em] text-[#FAF7F2] backdrop-blur-sm transition-all duration-300 hover:bg-[#FAF7F2] hover:text-[#2C1F14]"
            >
              Explore Collection
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              id="hero-cta-lookbook"
              href="#lookbook"
              className="text-xs uppercase tracking-[0.22em] text-[#D4C5B5] underline underline-offset-4 decoration-[#D4A5A0]/60 transition-colors hover:text-[#FAF7F2]"
            >
              View Lookbook
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4 md:mt-20"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
        >
          {BRAND_STATS.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-2xl font-light tracking-widest text-[#FAF7F2] md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#D4C5B5]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <p className="text-[9px] uppercase tracking-[0.4em] text-[#D4C5B5]/60 [writing-mode:vertical-lr]">
          Scroll
        </p>
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-[#D4C5B5]/0 to-[#D4C5B5]/60"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────
   CATEGORIES — Full-width tiles
───────────────────────────────*/

export function CategoryTiles() {
  return (
    <section id="categories" className="scroll-mt-24 bg-[#FAF7F2] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionEyebrow text="Browse" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#2C1F14] md:text-4xl">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A110B]/75 via-[#1A110B]/20 to-transparent transition-all duration-300 group-hover:from-[#1A110B]/85" />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-1 text-[10px] uppercase tracking-[0.35em] text-[#D4C5B5]/80">
                  {cat.count} pieces
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-light text-[#FAF7F2]">
                  {cat.name}
                </h3>
                <p className="mt-1.5 text-xs text-[#D4C5B5]/70">{cat.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#D4A5A0] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Shop now <ChevronRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────
   NEW ARRIVALS — Asymmetric Grid
───────────────────────────────*/

function ProductCard({
  name,
  price,
  category,
  image,
  isNew = false,
}: {
  name: string
  price: string
  category: string
  image: string
  isNew?: boolean
}) {
  return (
    <article className="group cursor-pointer">
      <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-xl bg-[#EDE8E1] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#2C1F14]/10">
        {isNew && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-[#2C1F14] px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#FAF7F2]">
            New
          </span>
        )}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          placeholder="empty"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-[#2C1F14]/65 via-[#2C1F14]/10 to-transparent pb-7 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="rounded-full border border-[#FAF7F2]/90 bg-[#FAF7F2]/10 px-7 py-2.5 text-[10px] uppercase tracking-[0.28em] text-[#FAF7F2] backdrop-blur-sm transition-all duration-200 hover:bg-[#FAF7F2] hover:text-[#2C1F14]"
          >
            Quick View
          </button>
        </div>
      </div>

      <div>
        <p className="mb-1 text-[9px] uppercase tracking-[0.32em] text-[#D4A5A0]">{category}</p>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-[family-name:var(--font-playfair)] text-[1.05rem] leading-snug text-[#2C1F14]">
            {name}
          </h3>
          <p className="shrink-0 text-sm text-[#8B7355]">{price}</p>
        </div>
      </div>
    </article>
  )
}

export function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <section id="collection" className="scroll-mt-24 bg-[#F5F1EA] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-center">
          <SectionHeading
            eyebrow="Fresh Arrivals"
            title="New Collection"
            subtitle="Thoughtfully curated pieces that define the season's aesthetic."
          />

          {/* Filter chips */}
          <div className="mb-14 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by category">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`topic-chip rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.22em] transition-all duration-300 ${
                  activeCategory === cat
                    ? 'topic-chip--selected border-[#2C1F14] bg-[#2C1F14] text-[#FAF7F2]'
                    : 'border-[#D4C5B5] text-[#8B7355] hover:border-[#8B7355] hover:text-[#2C1F14]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean 3-column product grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#lookbook"
            id="view-full-collection"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#8B7355] transition-colors hover:text-[#2C1F14]"
          >
            View full collection
            <ArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────
   BRAND STATEMENT — Dark Cinematic
───────────────────────────────*/

export function BrandStatement() {
  return (
    <section
      id="philosophy"
      className="scroll-mt-24 relative overflow-hidden bg-[#1A110B] px-6 py-36"
    >
      {/* Decorative grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

      {/* Decorative accent lines */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-[#D4A5A0]/30" />
      <div className="pointer-events-none absolute left-1/2 bottom-16 h-16 w-px -translate-x-1/2 bg-gradient-to-t from-transparent to-[#D4A5A0]/30" />

      <div className="mx-auto max-w-5xl text-center">
        <SectionEyebrow text="The Oracle Philosophy" />

        <blockquote>
          <p
            className="font-[family-name:var(--font-playfair)] text-balance text-2xl font-light italic leading-relaxed text-[#F5F1EA] md:text-3xl lg:text-4xl xl:text-5xl"
            aria-label="Brand philosophy quote"
          >
            &ldquo;Fashion is not about labels.
            <br />
            It is not about brands.
            <br />
            It is about something{' '}
            <span className="not-italic text-[#D4A5A0]">that comes from within you.</span>&rdquo;
          </p>
        </blockquote>


        {/* Decorative attribution */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#D4A5A0]/40" />
            <p className="text-[10px] uppercase tracking-[0.5em] text-[#8B7355]">The Oracle Philosophy</p>
            <span className="h-px w-12 bg-[#D4A5A0]/40" />
          </div>
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────
   LOOKBOOK — Editorial Masonry
───────────────────────────────*/

export function Lookbook() {
  return (
    <section id="lookbook" className="scroll-mt-24 bg-[#FAF7F2] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionHeading
            eyebrow="Editorial"
            title="Lookbook"
            subtitle="Explore how our pieces move, layer, and live in the real world."
          />
        </div>

        {/* Marquee wrapper */}
        <div className="lookbook-scroll relative overflow-hidden rounded-xl">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#FAF7F2] to-transparent" />

          {/* Scrolling track */}
          <div
            className="lookbook-track-inner flex flex-row flex-nowrap gap-4 pb-4"
            style={{
              width: 'max-content',
              animation: 'lookbook-marquee 32s linear infinite',
              willChange: 'transform',
            }}
          >
            {/* Two sets for seamless loop */}
            {[...LOOKBOOK_IMAGES, ...LOOKBOOK_IMAGES].map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                aria-hidden={i >= LOOKBOOK_IMAGES.length}
                className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-[#2C1F14]/12 ${
                  i % 3 === 0
                    ? 'aspect-[3/4] w-56 md:w-64'
                    : i % 3 === 1
                    ? 'aspect-[4/5] w-48 md:w-56'
                    : 'aspect-[3/4] w-56 md:w-60'
                }`}
              >
                <Image
                  src={item.src}
                  alt={i < LOOKBOOK_IMAGES.length ? item.alt : ''}
                  fill
                  sizes="256px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  placeholder="empty"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F14]/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes lookbook-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lookbook-scroll:hover .lookbook-track-inner {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

/* ─────────────────────────────
   TESTIMONIALS — Premium Cards
───────────────────────────────*/

function StarRow({ count }: { count: number }) {
  return (
    <div className="mb-5 flex items-center gap-0.5" aria-label={`${count} stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={11} className="fill-[#D4A5A0] text-[#D4A5A0]" />
      ))}
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  location,
  rating,
}: {
  quote: string
  author: string
  location: string
  rating: number
}) {
  const initials = author
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <blockquote className="group relative rounded-xl border border-[#EDE8E1] bg-white/60 p-8 shadow-sm backdrop-blur-sm transition-all duration-400 hover:border-[#D4A5A0]/50 hover:shadow-xl hover:shadow-[#2C1F14]/6 hover:-translate-y-1">
      {/* Opening quote mark */}
      <span
        className="absolute -top-4 left-7 font-[family-name:var(--font-playfair)] text-6xl leading-none text-[#D4A5A0]/40"
        aria-hidden
      >
        &ldquo;
      </span>

      <StarRow count={rating} />
      <p className="mb-6 font-[family-name:var(--font-playfair)] text-sm italic leading-loose text-[#2C1F14]/80">
        {quote}
      </p>

      <footer className="flex items-center gap-3">
        {/* Avatar initials */}
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#EDE8E1] text-xs font-semibold text-[#8B7355]">
          {initials}
        </div>
        <div>
          <cite className="block text-sm font-medium not-italic text-[#2C1F14]">{author}</cite>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#8B7355]">{location}</p>
        </div>
      </footer>
    </blockquote>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#F5F1EA] px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <SectionHeading
            eyebrow="Client Voices"
            title="What They Say"
            subtitle="Worn by women who appreciate the beauty in the understated."
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────
   NEWSLETTER — Dark Premium
───────────────────────────────*/

export function Newsletter() {
  return (
    <section
      id="newsletter"
      className="scroll-mt-24 relative overflow-hidden bg-[#2C1F14] px-6 py-28"
    >
      {/* Side image — decorative */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-2/5 lg:block">
        <Image
          src={HERO_IMAGE_SECONDARY}
          alt="Lifestyle"
          fill
          sizes="40vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1F14] via-[#2C1F14]/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-lg text-center lg:ml-16 lg:text-left">
        <SectionEyebrow text="Stay Connected" />
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-light text-[#FAF7F2] md:text-4xl">
          Join Our World
        </h2>
        <p className="mt-5 text-sm leading-loose text-[#D4C5B5]/70">
          Receive exclusive updates, early access to new collections, and curated styling
          inspiration delivered to your inbox.
        </p>

        <form
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your email address"
            className="flex-1 rounded-none border-b border-[#8B7355]/60 bg-transparent px-0 py-3 text-sm text-[#FAF7F2] placeholder:text-[#8B7355]/60 outline-none transition-colors focus:border-[#D4A5A0]"
          />
          <button
            id="newsletter-submit"
            type="submit"
            className="group shrink-0 inline-flex items-center gap-2 rounded-none bg-[#D4A5A0] px-8 py-3 text-[10px] uppercase tracking-[0.28em] text-[#2C1F14] transition-all duration-300 hover:bg-[#FAF7F2]"
          >
            Subscribe
            <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>

        <p className="mt-4 text-[10px] text-[#8B7355]/60">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────────────────
   FOOTER — Full Featured
───────────────────────────────*/

const FOOTER_LINKS = {
  Shop: ['New Arrivals', 'Dresses', 'Knitwear', 'Outerwear', 'Accessories'],
  Company: ['About Oracle', 'Sustainability', 'Careers', 'Press'],
  Support: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Contact'],
}

export function Footer() {
  return (
    <footer className="border-t border-[#EDE8E1] bg-[#FAF7F2] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        {/* Top grid */}
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-5">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link
              href="/task1"
              className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.5em] text-[#2C1F14]"
            >
              ORACLE
            </Link>
            <p className="mt-4 max-w-xs text-xs leading-loose text-[#8B7355]">
              Quiet luxury fashion for the modern woman. Timeless elegance, thoughtfully made.
            </p>
            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { label: 'Instagram', href: 'https://instagram.com', mark: 'IG' },
                { label: 'X / Twitter', href: 'https://twitter.com', mark: 'X' },
                { label: 'Pinterest', href: 'https://pinterest.com', mark: 'PT' },
              ].map(({ label, href, mark }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-full border border-[#D4C5B5] text-[10px] font-medium text-[#8B7355] transition-all hover:border-[#2C1F14] hover:text-[#2C1F14]"
                >
                  {mark}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#2C1F14]">{col}</p>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-[#8B7355] transition-colors hover:text-[#2C1F14]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#EDE8E1] pt-8 sm:flex-row">
          <p className="text-[10px] text-[#8B7355]">© 2026 Oracle. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
              <a key={link} href="#" className="text-[10px] text-[#8B7355] hover:text-[#2C1F14]">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
