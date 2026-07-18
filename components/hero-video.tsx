'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

// Placeholder video URL — replace with the final IQtronic story video when ready.
const VIDEO_SRC =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export function HeroVideo() {
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

  // Allow Escape to return to the globe while the inline video is playing.
  useEffect(() => {
    if (!playing) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') stopVideo()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [playing, stopVideo])

  return (
    <div className="group/video relative flex h-full w-full items-center justify-center lg:justify-end">
      {/* Wrapper defines the exact globe box (holds the shared transform), so the
          inline video can replace the globe at identical size and position
          without shifting the hero layout. */}
      <div className="relative mx-auto w-full origin-center overflow-hidden lg:-translate-x-[95px] lg:scale-[1.652]">
        <Image
          src="/images/hero-main-963.webp"
          alt="IQtronic industrial IoT ecosystem — hands holding a green world with the iQtronic logo, smart sockets, sensors, weather stations and connected devices"
          width={963}
          height={642}
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className={`h-auto w-full object-contain transition-opacity duration-500 lg:translate-x-[20px] ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Inline video — same box as the globe image */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          playsInline
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          preload="metadata"
          onEnded={stopVideo}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            playing
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
        />

        {/* Close / back button — only while the video is playing */}
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

      {/* Subtle darkening on hover (desktop only). Sized as a square based on its
          height so the hover area reads as centred behind the globe. Never hides
          the globe. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-300 lg:bottom-auto lg:left-auto lg:right-0 lg:top-0 lg:h-full lg:w-auto lg:aspect-square lg:group-hover/video:bg-foreground/10"
      />

      {/* Play button overlay — lower center of the globe image. Visible only when
          the globe is shown; hidden while the video is playing. */}
      {!playing ? (
        <button
          type="button"
          onClick={startVideo}
          aria-label="Watch our story"
          className="absolute bottom-[14%] left-1/2 -ml-[30px] inline-flex -translate-x-1/2 translate-y-[85px] items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
    </div>
  )
}
