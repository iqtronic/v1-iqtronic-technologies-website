'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

/**
 * Swap this to the final IQtronic story film when available — no other change
 * is required. While empty, the supplied poster image is shown in its place.
 */
const VIDEO_SRC = ''
const POSTER_SRC = '/images/facebook-video-poster.png'
const IQ_SYMBOL_SRC = '/images/iq-symbol.png'

/**
 * Intro + video hero for the /facebook news page.
 *
 * Sequence: the IQ symbol fades in, holds briefly, gently shrinks and fades
 * out; the 16:9 video then crossfades in and plays continuously (autoplay,
 * muted, looped, inline). A single "Watch our story" label sits over it.
 */
export function VideoHero() {
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Respect reduced-motion: skip the intro and reveal the video immediately.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) setShowVideo(true)
  }, [])

  useEffect(() => {
    if (showVideo) videoRef.current?.play().catch(() => {})
  }, [showVideo])

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-10 lg:pt-14">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-card">
        {/* IQ symbol intro */}
        {!showVideo ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={IQ_SYMBOL_SRC || '/placeholder.svg'}
              alt="IQtronic"
              width={512}
              height={512}
              priority
              onAnimationEnd={() => setShowVideo(true)}
              className="iq-intro-animate h-auto w-[30%] max-w-[220px] object-contain"
            />
          </div>
        ) : null}

        {/* Video (crossfades in after the intro) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={!showVideo}
        >
          {VIDEO_SRC ? (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster={POSTER_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          ) : (
            // Placeholder until the real film is provided.
            <Image
              src={POSTER_SRC || '/placeholder.svg'}
              alt="IQtronic story"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
              priority
            />
          )}

          {/* Readability gradient at the bottom only. */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
            aria-hidden="true"
          />

          {/* Single overlay label. */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <span aria-hidden="true">▶</span>
              Watch our story
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
