import { ScrollReveal } from '@/components/scroll-reveal'
import { CustomCursor } from '@/components/custom-cursor'
import { Navbar } from './navbar'
import {
  BrandStatement,
  CategoryTiles,
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
      <Navbar />
      <Hero />
      <ScrollReveal>
        <CategoryTiles />
      </ScrollReveal>
      <ScrollReveal delay={0.06}>
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
