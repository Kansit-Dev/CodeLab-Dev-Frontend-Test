import { ScrollReveal } from '@/components/scroll-reveal'
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
    <main className="bg-[var(--oracle-cream)]">
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
