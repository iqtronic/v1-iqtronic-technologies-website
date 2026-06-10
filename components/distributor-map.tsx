'use client'

import { useRef, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { REGION_MARKERS, type Region } from '@/lib/distributors'

const GEO_URL = '/world-110m.json'

// Warm IQtronic map palette (no blue): light beige-orange land, darker orange on hover.
const COUNTRY_FILL = 'oklch(0.93 0.035 58)'
const COUNTRY_HOVER = 'oklch(0.72 0.14 45)'
const COUNTRY_STROKE = 'oklch(0.88 0.02 60)'

type Tooltip = {
  label: string
  partners: number
  x: number
  y: number
}

export function DistributorMap({
  activeRegion,
  onSelectRegion,
}: {
  activeRegion: Region | 'All'
  onSelectRegion: (region: Region | 'All') => void
}) {
  const [hovered, setHovered] = useState<Region | null>(null)
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const tabs: { label: string; value: Region | 'All'; partners?: number }[] = [
    { label: 'World', value: 'All' },
    ...REGION_MARKERS.map((m) => ({
      label: m.label,
      value: m.region as Region,
      partners: m.partners,
    })),
  ]

  function moveTooltip(
    e: React.MouseEvent,
    label: string,
    partners: number,
  ) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setTooltip({
      label,
      partners,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div>
      {/* Region tabs */}
      <div
        role="tablist"
        aria-label="Distributor regions"
        className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border"
      >
        {tabs.map((tab) => {
          const isActive = activeRegion === tab.value
          return (
            <button
              key={tab.value}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => onSelectRegion(tab.value)}
              className={`-mb-px border-b-2 pb-3 pt-1 text-sm font-medium tracking-tight transition-colors ${
                isActive
                  ? 'border-accent text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {tab.partners !== undefined && (
                <span className="ml-1.5 font-mono text-xs text-muted-foreground">
                  {tab.partners}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Map on clean background, no frame */}
      <div ref={containerRef} className="relative mt-8 w-full bg-background">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 165 }}
          width={980}
          height={460}
          style={{ width: '100%', height: 'auto' }}
          aria-label="World map of IQtronic distributor regions"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: COUNTRY_FILL,
                      stroke: COUNTRY_STROKE,
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    hover: {
                      fill: COUNTRY_HOVER,
                      stroke: COUNTRY_STROKE,
                      strokeWidth: 0.5,
                      outline: 'none',
                    },
                    pressed: {
                      fill: COUNTRY_HOVER,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {REGION_MARKERS.map((marker) => {
            const isActive =
              activeRegion === marker.region || hovered === marker.region
            return (
              <Marker
                key={marker.region}
                coordinates={marker.coordinates}
                onMouseEnter={(e) => {
                  setHovered(marker.region)
                  moveTooltip(e, marker.label, marker.partners)
                }}
                onMouseMove={(e) =>
                  moveTooltip(e, marker.label, marker.partners)
                }
                onMouseLeave={() => {
                  setHovered(null)
                  setTooltip(null)
                }}
                onClick={() => onSelectRegion(marker.region)}
                style={{
                  default: { cursor: 'pointer' },
                  hover: { cursor: 'pointer' },
                  pressed: { cursor: 'pointer' },
                }}
              >
                {isActive && (
                  <circle r={13} fill="var(--color-accent)" opacity={0.18} />
                )}
                <circle
                  r={isActive ? 6.5 : 5.5}
                  fill="var(--color-accent)"
                  stroke="var(--color-background)"
                  strokeWidth={1.5}
                />
                <text
                  textAnchor="middle"
                  y={-13}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.04em',
                    fill: 'var(--color-foreground)',
                    fontWeight: 500,
                    pointerEvents: 'none',
                    opacity: isActive ? 1 : 0.85,
                  }}
                >
                  {marker.label}
                </text>
              </Marker>
            )
          })}
        </ComposableMap>

        {/* Hover tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded-sm border border-border bg-card px-3 py-2 shadow-sm"
            style={{ left: tooltip.x, top: tooltip.y - 14 }}
            role="status"
          >
            <p className="text-sm font-medium tracking-tight text-foreground">
              {tooltip.label}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {tooltip.partners} partner{tooltip.partners === 1 ? '' : 's'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
