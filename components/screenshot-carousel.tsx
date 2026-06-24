'use client'

import { useState } from 'react'
import Image from 'next/image'

type Shot = { src: string; alt: string }

export function ScreenshotCarousel({
  shots,
  label,
}: {
  shots: Shot[]
  label: string
}) {
  const [index, setIndex] = useState(0)
  const count = shots.length

  if (count === 0) return null

  const go = (next: number) => setIndex((next + count) % count)
  const current = shots[index]

  return (
    <div
      className="mx-auto w-full max-w-sm"
      role="group"
      aria-roledescription="carousel"
      aria-label={`${label} screenshots`}
    >
      {/* Main viewport — keeps phone screenshot aspect ratio, never crops */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-sm border border-border bg-background">
        <Image
          src={current.src || '/placeholder.svg'}
          alt={current.alt}
          fill
          sizes="(min-width: 1024px) 24rem, 100vw"
          className="object-contain"
          priority={index === 0}
        />

        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm border border-border bg-card/90 text-foreground transition-colors hover:bg-card"
            >
              <span aria-hidden="true" className="text-sm leading-none">
                ←
              </span>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm border border-border bg-card/90 text-foreground transition-colors hover:bg-card"
            >
              <span aria-hidden="true" className="text-sm leading-none">
                →
              </span>
            </button>
          </>
        ) : null}
      </div>

      {/* Counter + dot indicators */}
      {count > 1 ? (
        <div className="mt-4 flex flex-col items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {`${index + 1} / ${count}`}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {shots.map((shot, i) => (
              <button
                key={shot.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index}
                className={`size-2 rounded-full transition-colors ${
                  i === index ? 'bg-accent' : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
