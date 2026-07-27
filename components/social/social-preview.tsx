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
  /** Defaults to the temporary sample item used for preview. */
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

  // Scale the preview down proportionally to fit the available width, without
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
    <main className="min-h-screen bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Social preview · {config.label}
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            IQtronic news post preview
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            An internal template for presenting company news in the IQtronic
            visual style. The canvas below exports at exactly {config.width} ×{' '}
            {config.height} pixels.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
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

          {/* Neutral preview workspace */}
          <div
            ref={stageRef}
            className="min-w-0 flex-1"
          >
            <div
              className="mx-auto overflow-hidden rounded-sm border border-border shadow-sm"
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
        </div>
      </div>
    </main>
  )
}
