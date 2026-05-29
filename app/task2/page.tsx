'use client'

import { motion, useTransform } from 'framer-motion'
import { ScrollReveal } from '@/components/scroll-reveal'
import { CrystalBall } from './crystal-ball'
import { HomeButton } from '@/components/home-button'
import {
  FloatingEmbers,
  FortuneHeader,
  QuestionPanel,
  TableTarotFan,
} from './fortune-motion'
import { useFortuneController } from './use-fortune-controller'

export default function FortuneTellingPage() {
  const { state, actions } = useFortuneController()
  const { step, question, selectedCards, parallax, selectedTopic } = state
  const { bgX, bgY } = parallax

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#170607] pb-8 text-[#ead7ba]">
      <HomeButton dark />
      
      {/* Understated Brand Identity */}
      <div className="absolute left-10 top-10 z-50 pointer-events-none hidden lg:block">
        <span className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.4em] text-[#e7c56c]/40 uppercase">
          Oracle
        </span>
      </div>

      <motion.div
        className="fixed inset-[-2%] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/tarot-bg-clean-stand.png')",
          x: bgX,
          y: bgY
        }}
        aria-hidden
      />
      <div
        className="fixed inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(54,9,25,0.08),rgba(10,0,2,0.34)_62%,rgba(8,0,0,0.68)_100%)]"
        aria-hidden
      />
      <motion.div 
        className="fixed inset-0 bg-[#230207]/16 mix-blend-multiply" 
        style={{ x: useTransform(bgX, (v: number) => v * 1.5), y: useTransform(bgY, (v: number) => v * 1.5) }}
        aria-hidden 
      />
      <div
        className="fixed inset-x-0 bottom-0 h-[42vh] bg-gradient-to-t from-[#610b0e]/44 via-[#2a0506]/8 to-transparent"
        aria-hidden
      />

      <FloatingEmbers />
      <CrystalBall intensity={question.length} />
      
      {step === 'selection' && (
        <TableTarotFan selectedCards={selectedCards} onCardClick={actions.toggleCard} />
      )}

      {step === 'question' && (
        <>
          <ScrollReveal>
            <FortuneHeader />
          </ScrollReveal>
          <QuestionPanel 
            selectedTopic={selectedTopic}
            onTopicChange={actions.setSelectedTopic}
            onQuestionChange={actions.setQuestion} 
            onNext={actions.handleNextStep} 
          />
        </>
      )}
    </main>
  )
}
