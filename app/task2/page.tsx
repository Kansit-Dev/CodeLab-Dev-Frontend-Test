import { ScrollReveal } from '@/components/scroll-reveal'
import { CrystalBall } from './crystal-ball'
import { HomeButton } from '@/components/home-button'
import {
  FloatingEmbers,
  FortuneHeader,
  QuestionPanel,
  TableTarotFan,
} from './fortune-motion'

export default function FortuneTellingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#170607] pb-8 text-[#ead7ba]">
      <HomeButton dark />
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/tarot-bg-clean-stand.png')" }}
        aria-hidden
      />
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(54,9,25,0.08),rgba(10,0,2,0.34)_62%,rgba(8,0,0,0.68)_100%)]"
        aria-hidden
      />
      <div className="fixed inset-0 bg-[#230207]/16 mix-blend-multiply" aria-hidden />
      <div
        className="fixed inset-x-0 bottom-0 h-[42vh] bg-gradient-to-t from-[#610b0e]/44 via-[#2a0506]/8 to-transparent"
        aria-hidden
      />

      <FloatingEmbers />
      <CrystalBall />
      <TableTarotFan />

      <ScrollReveal>
        <FortuneHeader />
      </ScrollReveal>
      <QuestionPanel />
    </main>
  )
}
