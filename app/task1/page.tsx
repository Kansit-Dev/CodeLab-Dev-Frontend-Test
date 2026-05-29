import { ScrollReveal } from '@/components/scroll-reveal'
import { CustomCursor } from '@/components/custom-cursor'
import { MarqueeBanner } from '@/components/marquee'
import { HomeButton } from '@/components/home-button'
import { Navbar } from './navbar'
import {
  BrandStatement,
  Footer,
  Hero,
  Lookbook,
  NewArrivals,
  Newsletter,
  Testimonials,
} from './sections'

export default function OracleLandingPage() {
  return (
    <main className="bg-[var(--oracle-cream)] cursor-none">
      <CustomCursor />
      <HomeButton />
      <MarqueeBanner text="FREE WORLDWIDE SHIPPING ON ORDERS OVER $200 — THE NEW SPRING/SUMMER COLLECTION HAS ARRIVED — " />
      <Navbar />
      <Hero />
      <ScrollReveal>
        <NewArrivals />
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <BrandStatement />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Lookbook />
      </ScrollReveal>
      <ScrollReveal delay={0.12}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.14}>
        <Newsletter />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
