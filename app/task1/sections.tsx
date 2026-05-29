import Image from 'next/image'
import Link from 'next/link'
import { ParallaxImage } from '@/components/parallax-image'
import { HERO_IMAGE, LOOKBOOK_IMAGES, PRODUCTS, TESTIMONIALS } from './data'

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-16 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#8B7355]">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-playfair)] text-3xl tracking-wide text-[#2C1F14] md:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function SocialMark({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[18px] items-center justify-center text-[11px] font-semibold uppercase leading-none tracking-normal">
      {children}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0">
        <ParallaxImage
          src={HERO_IMAGE}
          alt="Editorial fashion — quiet luxury collection"
          priority
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/78 via-[#FAF7F2]/68 to-[#FAF7F2]/88" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8B7355]">Spring/Summer 2026</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-balance text-[clamp(4rem,10vw,9rem)] font-light leading-[0.9] tracking-[0.02em] text-[#2C1F14]">
          Embrace Your <br />
          Quiet Luxury
        </h1>
        <p className="mx-auto mb-12 mt-12 max-w-xl text-sm leading-relaxed text-[#8B7355] md:text-base">
          Discover timeless elegance crafted for the modern woman. Each piece tells a story of
          sophistication and understated beauty.
        </p>
        <Link
          href="#collection"
          className="inline-block rounded border border-[#2C1F14] bg-[#FAF7F2]/50 px-10 py-4 text-xs uppercase tracking-[0.2em] text-[#2C1F14] backdrop-blur-sm transition-all duration-300 hover:bg-[#2C1F14] hover:text-[#FAF7F2]"
        >
          Explore Collection
        </Link>
      </div>
    </section>
  )
}

function ProductCard({
  name,
  price,
  image,
  isNew = false,
}: {
  name: string
  price: string
  image: string
  isNew?: boolean
}) {
  return (
    <article className="group cursor-pointer">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg bg-[var(--oracle-sand)] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:shadow-[var(--oracle-ink)]/10">
        {isNew ? (
          <span className="absolute left-3 top-3 z-10 rounded bg-[var(--oracle-ink)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--oracle-cream)]">
            New
          </span>
        ) : null}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          placeholder="empty"
        />
        <div className="absolute inset-0 bg-[#2C1F14]/0 transition-all duration-300 group-hover:bg-[#2C1F14]/5" />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 text-xs uppercase tracking-[0.2em] text-[#FAF7F2] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View piece
        </span>
      </div>
      <div className="text-center">
        <h3 className="mb-1 font-[family-name:var(--font-playfair)] text-lg text-[#2C1F14]">
          {name}
        </h3>
        <p className="text-sm text-[#8B7355]">{price}</p>
      </div>
    </article>
  )
}

export function NewArrivals() {
  return (
    <section id="collection" className="scroll-mt-24 bg-[#FAF7F2] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Fresh Arrivals" title="New Collection" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link
            href="#lookbook"
            className="text-xs uppercase tracking-[0.25em] text-[var(--oracle-taupe)] transition-colors hover:text-[var(--oracle-blush)]"
          >
            View full collection →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function BrandStatement() {
  return (
    <section id="philosophy" className="scroll-mt-24 bg-[#EDE8E1]/50 px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="font-[family-name:var(--font-playfair)] text-balance text-2xl font-light italic leading-relaxed text-[#2C1F14] md:text-3xl lg:text-4xl"
          aria-label="Brand philosophy quote"
        >
          &ldquo;Fashion is not about labels. It is not about brands. It is about something else
          that comes from within you.&rdquo;
        </p>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#8B7355]">
          — The Oracle Philosophy
        </p>
      </div>
    </section>
  )
}

export function Lookbook() {
  return (
    <section id="lookbook" className="scroll-mt-24 bg-[#FAF7F2] px-6 py-24">
      {/* Inject keyframe directly so it's guaranteed to load */}
      <style>{`
        @keyframes lookbook-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .lookbook-scroll:hover .lookbook-track-inner {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Editorial" title="Lookbook" />

        {/* Marquee wrapper */}
        <div className="lookbook-scroll relative overflow-hidden rounded-lg">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FAF7F2] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent" />

          {/* Scrolling track */}
          <div
            className="lookbook-track-inner flex flex-row flex-nowrap gap-5 pb-4"
            style={{
              width: 'max-content',
              animation: 'lookbook-marquee 28s linear infinite',
              willChange: 'transform',
            }}
          >
            {/* Set 1 */}
            {LOOKBOOK_IMAGES.map((item) => (
              <div
                key={`a-${item.src}`}
                className="group relative aspect-[3/4] w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#2C1F14]/10 md:w-72"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  placeholder="empty"
                />
              </div>
            ))}
            {/* Set 2 — duplicate for seamless loop */}
            {LOOKBOOK_IMAGES.map((item) => (
              <div
                key={`b-${item.src}`}
                aria-hidden="true"
                className="group relative aspect-[3/4] w-64 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#2C1F14]/10 md:w-72"
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  placeholder="empty"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string
  author: string
  location: string
}) {
  return (
    <blockquote className="rounded-lg bg-white/50 p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <p
        className="mb-4 font-[family-name:var(--font-playfair)] text-4xl leading-none text-[#D4A5A0]"
        aria-hidden
      >
        &ldquo;
      </p>
      <p className="mb-6 font-[family-name:var(--font-playfair)] text-sm italic leading-relaxed text-[#2C1F14]">{quote}</p>
      <footer>
        <cite className="not-italic font-medium text-[#2C1F14]">
          {author}
        </cite>
        <p className="text-xs uppercase tracking-wider text-[#8B7355]">{location}</p>
      </footer>
    </blockquote>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[#EDE8E1]/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Voices" title="What They Say" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section id="newsletter" className="scroll-mt-24 border-t border-[#EDE8E1] bg-[#FAF7F2] px-6 py-24">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading eyebrow="Stay Connected" title="Join Our World" />
        <p className="-mt-10 mb-8 text-sm text-[#8B7355]">
          Receive exclusive updates, early access to new collections, and styling inspiration.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your email address"
            className="flex-1 rounded border border-[#D4C5B5] bg-transparent px-4 py-3 text-sm text-[#2C1F14] placeholder:text-[#9a8b7a] transition-colors focus:border-[#D4A5A0] focus:outline-none focus:ring-2 focus:ring-[#D4A5A0]/30"
          />
          <button
            type="submit"
            className="rounded bg-[#2C1F14] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#FAF7F2] transition-colors hover:bg-[#8B7355] focus:outline-none focus:ring-2 focus:ring-[#D4A5A0]/40"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-[#EDE8E1] bg-[#FAF7F2] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link
            href="/task1"
            className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.4em] text-[#2C1F14] opacity-80"
          >
            ORACLE
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] transition-colors hover:text-[#2C1F14]"
              aria-label="Instagram"
            >
              <SocialMark>IG</SocialMark>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] transition-colors hover:text-[#2C1F14]"
              aria-label="Twitter"
            >
              <SocialMark>X</SocialMark>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B7355] transition-colors hover:text-[#2C1F14]"
              aria-label="Facebook"
            >
              <SocialMark>f</SocialMark>
            </a>
          </div>
          <p className="text-xs text-[#8B7355]">© 2026 Oracle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
