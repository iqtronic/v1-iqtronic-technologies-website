'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import {
  PLATFORM_CONFIG,
  SAMPLE_NEWS_ITEM,
  type SocialNewsItem,
  type SocialPlatform,
} from '@/lib/social-news'
import { SocialNewsTemplate } from '@/components/social/social-news-template'
import { SocialPreviewControls } from '@/components/social/social-preview-controls'

type SocialPreviewProps = {
  platform: SocialPlatform
  /** The resolved news item to render. Defaults to the sample fallback. */
  item?: SocialNewsItem
}

export function SocialPreview({
  platform,
  item = SAMPLE_NEWS_ITEM,
}: SocialPreviewProps) {
  const config = PLATFORM_CONFIG[platform]
  const canvasRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  const [showCTA, setShowCTA] = useState(true)
  const [showGlobeMotif, setShowGlobeMotif] = useState(true)
  const [copied, setCopied] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [scale, setScale] = useState(1)

  // Scale the on-screen post proportionally to fit the available width, without
  // ever changing the canvas's internal layout or scaling above 1:1.
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const update = () => {
      const available = stage.clientWidth
      setScale(Math.min(1, available / config.width))
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [config.width])

  const handleCopyUrl = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(item.articleUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard may be unavailable; fail silently in the preview tool.
    }
  }, [item.articleUrl])

  const handleOpenArticle = useCallback(() => {
    window.open(item.articleUrl, '_blank', 'noopener,noreferrer')
  }, [item.articleUrl])

  const handleExport = useCallback(async () => {
    const node = canvasRef.current
    if (!node) return
    setExporting(true)
    try {
      // The canvas node is rendered at native size (the scale transform lives on
      // an ancestor), so capturing it directly yields the exact target pixels.
      const dataUrl = await toPng(node, {
        width: config.width,
        height: config.height,
        pixelRatio: 1,
        cacheBust: true,
        backgroundColor: '#ffffff',
      })
      const link = document.createElement('a')
      link.download = config.exportFileName
      link.href = dataUrl
      link.click()
    } catch {
      // Swallow export errors in the preview tool.
    } finally {
      setExporting(false)
    }
  }, [config.width, config.height, config.exportFileName])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-secondary/30 px-4 py-8 sm:px-6">
      {/* The social post itself is the dominant element, centred on screen. */}
      <div ref={stageRef} className="w-full max-w-[1400px]">
        <div
          className="mx-auto overflow-hidden rounded-sm shadow-[0_24px_70px_rgba(15,23,42,0.16)] ring-1 ring-border/60"
          style={{
            width: config.width * scale,
            height: config.height * scale,
          }}
        >
          <div
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <SocialNewsTemplate
              ref={canvasRef}
              platform={platform}
              showCTA={showCTA}
              showGlobeMotif={showGlobeMotif}
              {...item}
            />
          </div>
        </div>
      </div>

      {/* Secondary, visually unobtrusive controls below the post. */}
      <SocialPreviewControls
        config={config}
        showCTA={showCTA}
        onShowCTAChange={setShowCTA}
        showGlobeMotif={showGlobeMotif}
        onShowGlobeMotifChange={setShowGlobeMotif}
        onCopyUrl={handleCopyUrl}
        onOpenArticle={handleOpenArticle}
        onExport={handleExport}
        copied={copied}
        exporting={exporting}
      />
    </main>
  )
}
