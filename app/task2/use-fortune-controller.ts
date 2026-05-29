'use client'

import { useState, useEffect } from 'react'
import { useMotionValue, useTransform } from 'framer-motion'

/**
 * Controller Hook
 * Manages the state and logic for the Fortune Telling experience.
 */
export function useFortuneController() {
  const [step, setStep] = useState<'question' | 'selection'>('question')
  const [question, setQuestion] = useState('')
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [selectedTopic, setSelectedTopic] = useState(0)
  
  // Parallax Logic
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const bgX = useTransform(mouseX, [-1000, 1000], [15, -15])
  const bgY = useTransform(mouseY, [-1000, 1000], [10, -10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const toggleCard = (index: number) => {
    setSelectedCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : prev.length < 3
        ? [...prev, index]
        : prev
    )
  }

  const handleNextStep = () => {
    setStep('selection')
  }

  return {
    state: {
      step,
      question,
      selectedCards,
      selectedTopic,
      parallax: {
        bgX,
        bgY,
      }
    },
    actions: {
      setQuestion,
      setSelectedTopic,
      toggleCard,
      handleNextStep,
    }
  }
}
