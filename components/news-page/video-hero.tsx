'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Placeholder video source. Replace this single constant with the final
 * IQtronic story video (e.g. "/videos/iqtronic-story.mp4") when ready — the
 * layout and 16:9 ratio stay identical, no redesign needed.
 */
const VIDEO_SRC =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

/**
 * Full-width 16:9 video hero. Shows a static poster placeholder until the
 * viewer presses play, then swaps to an inline HTML5 video in the same box.
 */
export function VideoHero() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const startVideo = useCallback(() => {
    setPlaying(true)
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    void v.play().catch(() => {})
  }, [])

  const stopVideo = useCallback(() => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
    setPlaying(false)
  }, [])

  useEffect(() => {
    if (!playing) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') stopVideo()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [playing, stopVideo])

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10 lg:pt-14">
        <div className="group/video relative aspect-video w-full overflow-hidden rounded-sm border border-border bg-foreground">
          {/* Poster placeholder — replaced by the video on play. */}
          <Image
            src="/images/facebook-video-poster.png"
            alt="IQtronic company story — preview"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={`object-cover transition-opacity duration-500 ${
              playing ? 'opacity-0' : 'opacity-100'
            }`}
          />

          {/* Inline video — same 16:9 box as the poster. */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            playsInline
            preload="none"
            onEnded={stopVideo}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              playing ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />

          {/* Subtle darkening only at the bottom, where the text sits — keeps the
              rest of the image bright. */}
          {!playing ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent"
            />
          ) : null}

          {/* WATCH OUR STORY overlay + play button (homepage pill style). */}
          {!playing ? (
            <button
              type="button"
              onClick={startVideo}
              aria-label="Watch our story"
              className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:bottom-8 lg:left-8"
            >
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <svg
                  viewBox="0 0 24 24"
                  className="size-3 translate-x-px"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em]">
                Watch our story
              </span>
            </button>
          ) : null}

          {/* Close button — only while the video plays. */}
          {playing ? (
            <button
              type="button"
              onClick={stopVideo}
              aria-label="Close video"
              className="absolute right-3 top-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
