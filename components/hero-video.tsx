'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

// Placeholder video URL — replace with the final IQtronic story video when ready.
const VIDEO_SRC =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export function HeroVideo() {
  const [open, setOpen] = useState(false)
  const hoverVideoRef = useRef<HTMLVideoElement>(null)

  const close = useCallback(() => setOpen(false), [])

  // Desktop-only: play the inline video on hover, restore the globe on leave.
  // Gated on the desktop breakpoint (the inline video is `hidden` below `lg`),
  // and `onMouseEnter` does not fire from touch taps, so mobile uses the modal.
  const isDesktop = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(min-width: 1024px)').matches

  const handleEnter = useCallback(() => {
    if (!isDesktop()) return
    const v = hoverVideoRef.current
    if (!v) return
    v.muted = true
    v.currentTime = 0
    void v.play().catch(() => {})
  }, [])

  const handleLeave = useCallback(() => {
    const v = hoverVideoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKeyDown)
    // Prevent background scroll while the modal is open.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open, close])

  return (
    <>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group/video relative flex h-full w-full items-center justify-center lg:justify-end"
      >
        {/* Wrapper defines the exact globe box (holds the shared transform),
            so the inline hover video can overlay the globe at identical size
            and position without shifting the layout. */}
        <div className="relative mx-auto w-full origin-center lg:-translate-x-[95px] lg:scale-[1.652]">
          <Image
            src="/images/iqtronic-smart-socket-iot-platform.png"
            alt="IQtronic smart socket and industrial IoT technology platform"
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-auto w-full object-contain transition-opacity duration-300 lg:group-hover/video:opacity-0"
          />

          {/* Inline hover video (desktop only) — same box as the globe image */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={hoverVideoRef}
            src={VIDEO_SRC}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-300 lg:block lg:group-hover/video:opacity-100"
          />
        </div>

        {/* Subtle darkening on hover (desktop only).
            On desktop the overlay is sized as a square based on its height
            (top/bottom/right edges pinned, width grows leftward) so the hover
            area reads as centred behind the globe. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:h-full lg:w-auto lg:aspect-square lg:group-hover/video:bg-foreground/10"
        />

        {/* Play button overlay — lower center of the globe image */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Watch our story"
          className="absolute bottom-[14%] left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 lg:opacity-0 lg:group-hover/video:opacity-100 lg:focus-visible:opacity-100"
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
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Our Story"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-sm border border-border bg-card shadow-xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-foreground">
                  Our Story
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Engineering the right solution.
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close video"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
            </div>

            <div className="bg-foreground">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                src={VIDEO_SRC}
                controls
                playsInline
                className="aspect-video w-full"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
