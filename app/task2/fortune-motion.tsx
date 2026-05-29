'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { TAROT_FAN, TOPIC_CHIPS } from './data'

function seededRange(seed: number, min: number, max: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return min + (x - Math.floor(x)) * (max - min)
}

export function FloatingEmbers() {
  const embers = Array.from({ length: 26 }, (_, i) => ({
    id: i,
    x: seededRange(i + 1, 15, 85),
    y: seededRange(i + 101, 22, 77),
    size: seededRange(i + 201, 1.5, 4.5),
    delay: seededRange(i + 301, 0, 4),
    duration: seededRange(i + 401, 4.5, 8.5),
    drift: seededRange(i + 501, -17, 17),
  }))

  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {embers.map((ember) => (
        <motion.span
          key={ember.id}
          className="absolute rounded-full"
          style={{
            left: `${ember.x}%`,
            top: `${ember.y}%`,
            width: ember.size,
            height: ember.size,
            background: ember.id % 3 === 0 ? '#f4c96a' : '#b678ff',
            boxShadow:
              ember.id % 3 === 0
                ? '0 0 12px rgba(244,201,106,0.8)'
                : '0 0 14px rgba(182,120,255,0.8)',
          }}
          animate={{
            x: [0, ember.drift, 0],
            y: [0, -55, -105],
            opacity: [0, 0.75, 0],
            scale: [0.8, 1.45, 0.55],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

function FiligreeCorner({
  position,
}: {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}) {
  const placement = {
    'top-left': 'left-3 top-3',
    'top-right': 'right-3 top-3 rotate-90',
    'bottom-right': 'bottom-3 right-3 rotate-180',
    'bottom-left': 'bottom-3 left-3 -rotate-90',
  }[position]

  return (
    <svg
      aria-hidden
      viewBox="0 0 72 72"
      className={`pointer-events-none absolute h-14 w-14 ${placement}`}
      fill="none"
    >
      <path d="M6 56V18C6 11.4 11.4 6 18 6h38" stroke="#d8b75f" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M15 56V23c0-4.4 3.6-8 8-8h33"
        stroke="#f1d892"
        strokeOpacity="0.38"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M22 53c13-3 13-17 2-18 15-4 24-13 28-27"
        stroke="#e4c46b"
        strokeOpacity="0.8"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <circle cx="22" cy="53" r="1.8" fill="#f1d892" opacity="0.75" />
      <circle cx="52" cy="8" r="1.6" fill="#f1d892" opacity="0.65" />
    </svg>
  )
}

function OrnateDivider() {
  return (
    <div className="mx-auto mb-4 flex w-[min(360px,72vw)] items-center justify-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b98b45]/70 to-[#b98b45]/30" />
      <span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#d7b55d] shadow-[0_0_12px_rgba(215,181,93,0.78)]" />
      <span className="h-3 w-3 rotate-45 rounded-[2px] bg-[#d7b55d] shadow-[0_0_16px_rgba(215,181,93,0.78)]" />
      <span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#d7b55d] shadow-[0_0_12px_rgba(215,181,93,0.78)]" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b98b45]/70 to-[#b98b45]/30" />
    </div>
  )
}

export function FortuneHeader() {
  return (
    <motion.header
      className="relative z-30 mx-auto w-full max-w-4xl px-5 pt-10 text-center md:pt-12"
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <h1
        className="mb-2 font-[family-name:var(--font-pridi)] text-[clamp(2rem,4.2vw,3.45rem)] font-semibold leading-tight tracking-wide"
        style={{
          color: '#e7c56c',
          textShadow: '0 0 24px rgba(231,197,108,0.38), 0 3px 8px rgba(0,0,0,0.7)',
          overflowWrap: 'anywhere',
        }}
      >
        คุณอยากถาม<span className="sm:hidden"><br /></span>เรื่องอะไร ?
      </h1>
      <OrnateDivider />
      <p
        className="mx-auto max-w-[540px] text-[clamp(0.9rem,1.55vw,1.35rem)] font-light leading-relaxed"
        style={{
          color: 'rgba(231,218,197,0.76)',
          textShadow: '0 2px 8px rgba(0,0,0,0.82)',
          overflowWrap: 'anywhere',
        }}
      >
        เลือกหัวข้อหรือพิมพ์คำถามที่คุณอยากรู้ในตอนนี้
        <br />
        หรือคุณจะข้ามขั้นตอนนี้ไปก่อนก็ได้
      </p>
    </motion.header>
  )
}

function OracleButton({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
}) {
  const primary = variant === 'primary'

  return (
    <motion.button
      type="button"
      className="oracle-cta-btn relative h-12 min-w-[168px] overflow-hidden rounded-full border px-8 font-[family-name:var(--font-pridi)] text-base font-semibold tracking-wide sm:min-w-[196px]"
      style={{
        color: primary ? '#f3e4b7' : '#ead9a2',
        borderColor: primary ? 'rgba(244,226,163,0.72)' : 'rgba(232,203,129,0.62)',
        background: primary
          ? 'linear-gradient(180deg, rgba(126,167,86,0.96), rgba(74,118,55,0.98))'
          : 'linear-gradient(180deg, rgba(201,174,99,0.95), rgba(122,89,43,0.98))',
        boxShadow: primary
          ? '0 0 0 1px rgba(44,84,39,0.55) inset, 0 12px 22px rgba(0,0,0,0.5)'
          : '0 0 0 1px rgba(91,55,28,0.55) inset, 0 12px 22px rgba(0,0,0,0.48)',
        textShadow: '0 1px 2px rgba(0,0,0,0.48)',
      }}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border border-[#f4e4aa]/72" />
      <span className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-45 border border-[#f4e4aa]/72" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export function QuestionPanel() {
  const [selected, setSelected] = useState(0)

  return (
    <ScrollReveal className="relative z-30 mx-auto flex w-full max-w-[760px] flex-col items-center px-4" delay={0.1}>
      <motion.section
        className="flex w-full flex-col items-center"
        style={{ marginTop: 'clamp(250px, 42vh, 400px)' }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="oracle-glass-panel relative w-full overflow-hidden rounded-[18px] border px-7 py-6 shadow-[0_28px_70px_rgba(0,0,0,0.62)]"
          style={{
            minHeight: 'clamp(126px, 18vh, 170px)',
            background:
              'linear-gradient(180deg, rgba(58,17,21,0.9) 0%, rgba(24,9,14,0.94) 100%)',
            borderColor: 'rgba(213,178,91,0.42)',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
          }}
        >
          <div className="pointer-events-none absolute inset-1 rounded-[14px] border border-[#ecd18b]/14" />
          <FiligreeCorner position="top-left" />
          <FiligreeCorner position="top-right" />
          <FiligreeCorner position="bottom-left" />
          <FiligreeCorner position="bottom-right" />
          <textarea
            placeholder="พิมพ์คำถามของคุณ...(ไม่บังคับ)"
            className="relative z-10 h-[112px] w-full resize-none bg-transparent pl-7 pr-7 pt-3 text-base font-light leading-relaxed outline-none placeholder:text-[#f0e6d4]/82"
            style={{ color: '#ead7ba', caretColor: '#d7b55d' }}
          />
        </div>

        <div className="relative mt-3 flex w-full max-w-[360px] flex-wrap justify-center gap-2 sm:max-w-none">
          <div className="pointer-events-none absolute -top-8 left-1/2 h-14 w-[92%] -translate-x-1/2 rounded-[50%] bg-[#5f170f]/45 blur-xl" />
          {TOPIC_CHIPS.map((chip, index) => (
            <motion.button
              key={chip}
              type="button"
              onClick={() => setSelected(index)}
              className={`topic-chip relative box-border min-w-[104px] rounded-[5px] border px-3 py-2 text-xs shadow-[0_8px_16px_rgba(0,0,0,0.5)] sm:min-w-[96px] sm:px-4 sm:text-sm${selected === index ? ' topic-chip--selected' : ''}`}
              style={{
                color: selected === index ? '#fff9eb' : '#f5ecd4',
                borderColor: selected === index ? '#e8c96f' : 'rgba(210,180,112,0.38)',
                background:
                  selected === index
                    ? 'linear-gradient(180deg, rgba(80,24,24,0.96), rgba(22,9,10,0.98))'
                    : 'linear-gradient(180deg, rgba(27,10,10,0.9), rgba(5,3,4,0.95))',
              }}
              whileTap={{ scale: 0.96 }}
            >
              {chip}
            </motion.button>
          ))}
        </div>

        <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-5">
          <OracleButton variant="primary">เริ่มเลือกไพ่</OracleButton>
          <OracleButton variant="secondary">ข้าม</OracleButton>
        </div>
      </motion.section>
    </ScrollReveal>
  )
}

export function TableTarotFan() {
  return (
    <div className="pointer-events-none absolute bottom-[7.5vh] left-1/2 z-20 h-[120px] w-[720px] max-w-[94vw] -translate-x-1/2">
      {TAROT_FAN.map((card, index) => (
        <motion.div
          key={`${card.x}-${card.r}`}
          className="absolute bottom-0 h-[92px] w-[58px] rounded-[6px] border"
          style={{
            left: `${card.x}%`,
            rotate: card.r,
            transformOrigin: 'center 120px',
            background:
              'linear-gradient(145deg, #6f3b16 0%, #2c120d 54%, #805019 100%)',
            borderColor: 'rgba(221,176,80,0.74)',
            boxShadow: '0 10px 22px rgba(0,0,0,0.42), inset 0 0 0 2px rgba(55,18,11,0.76)',
          }}
          initial={{ opacity: 0, y: 28, rotate: card.r - 6 }}
          animate={{ opacity: 0.92, y: 0, rotate: card.r }}
          transition={{ duration: 0.7, delay: 0.72 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-2 rounded-[4px] border border-[#e2b44d]/46" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="h-6 w-6 rotate-45 border border-[#e2b44d]/76" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
