'use client'

import { useEffect, useState } from 'react'

const MESSAGES = [
  'From concept to certified product.',
  'Products Designed To Last.',
  'Not the biggest.\nSimply the best.',
  'More value.\nLess waste.',
  'Technology built to last.',
  'Designed for decades,\nnot seasons.',
  'Engineering before marketing.',
  'Extraordinary products\nat the best value.',
  'More features.\nLess compromise.',
  'Industrial quality\nwithout industrial pricing.',
  'Products with history.',
  'Products with a story.',
  'Products designed to evolve.',
  'Making More From Less.',
  'Original ideas.\nReal engineering.',
  'Innovation starts here.\nOthers follow.',
  'Engineering the future,\nnot replicating the past.',
  'Twenty-five years of innovation.\nCountless products inspired by it.',
  "We don't follow the market.\nWe help shape it.",
  'Proud to be among the innovators.',
]

export function RotatingSlogan() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let fadeTimeout: ReturnType<typeof setTimeout>
    const interval = setInterval(() => {
      // Fade out, swap the message, then fade back in.
      setVisible(false)
      fadeTimeout = setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length)
        setVisible(true)
      }, 500)
    }, 5000)
    return () => {
      clearInterval(interval)
      clearTimeout(fadeTimeout)
    }
  }, [])

  return (
    <p
      aria-live="polite"
      className={`flex min-h-[4rem] max-w-xl items-start whitespace-pre-line text-balance text-2xl font-semibold leading-snug tracking-tight text-foreground transition-opacity duration-500 sm:min-h-[5rem] sm:text-3xl ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {MESSAGES[index]}
    </p>
  )
}
