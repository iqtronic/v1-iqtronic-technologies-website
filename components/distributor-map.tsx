'use client'

import { useRef, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import {
  DISTRIBUTORS,
  GEO_NAME_BY_COUNTRY,
  REGION_MARKERS,
  type Distributor,
  type Region,
} from '@/lib/distributors'

const GEO_URL = '/world-110m.json'

// Warm IQtronic map palette (no blue):
// light orange land by default, darker orange on hover, dark orange when selected.
const COUNTRY_FILL = 'oklch(0.93 0.045 60)'
const COUNTRY_HOVER = 'oklch(0.78 0.13 50)'
const COUNTRY_SELECTED = 'oklch(0.62 0.17 42)'
const COUNTRY_STROKE = 'oklch(0.86 0.02 60)'

// Geo names (world-110m `properties.name`) that have at least one distributor.
const COUNTRY_GEO_NAMES = new Set(
  DISTRIBUTORS.map((d) => GEO_NAME_BY_COUNTRY[d.country]).filter(Boolean),
)

type Tooltip = {
  distributors: Distributor[]
  country: string
  x: number
  y: number
}

export function DistributorMap({
  activeRegion,
  onSelectRegion,
  onSelectCountry,
}: {
  activeRegion: Region | 'All'
  onSelectRegion: (region: Region | 'All') => void
  onSelectCountry: (country: string) => void
}) {
  const [hoveredGeo, setHoveredGeo] = useState<string | null>(null)
  const [selectedGeo, setSelectedGeo] = useState<string | null>(null)
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

  function geoNameFor(country: string) {
    return GEO_NAME_BY_COUNTRY[country]
  }

  function positionTooltip(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return { x: 0, y: 0 }
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  function showMarkerTooltip(e: React.MouseEvent, country: string) {
    const list = DISTRIBUTORS.filter((d) => d.country === country)
    const { x, y } = positionTooltip(e)
    setTooltip({ distributors: list, country, x, y })
  }

  function selectCountry(country: string) {
    setSelectedGeo(geoNameFor(country) ?? null)
    onSelectCountry(country)
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
              onClick={() => {
                setSelectedGeo(null)
                onSelectRegion(tab.value)
              }}
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

      {/* Map on clean white background, no frame */}
      <div ref={containerRef} className="relative mt-8 w-full bg-background">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 165 }}
          width={980}
          height={460}
          style={{ width: '100%', height: 'auto' }}
          aria-label="Interactive world map of IQtronic distributors"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name as string
                const hasPartner = COUNTRY_GEO_NAMES.has(name)
                const isSelected = selectedGeo === name
                const isHovered = hoveredGeo === name

                let fill = COUNTRY_FILL
                if (isSelected) fill = COUNTRY_SELECTED
                else if (isHovered && hasPartner) fill = COUNTRY_HOVER

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredGeo(name)}
                    onMouseLeave={() => setHoveredGeo(null)}
                    onClick={() => {
                      if (!hasPartner) return
                      const match = DISTRIBUTORS.find(
                        (d) => GEO_NAME_BY_COUNTRY[d.country] === name,
                      )
                      if (match) selectCountry(match.country)
                    }}
                    style={{
                      default: {
                        fill,
                        stroke: COUNTRY_STROKE,
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: hasPartner ? 'pointer' : 'default',
                        transition: 'fill 0.15s ease',
                      },
                      hover: {
                        fill: hasPartner ? COUNTRY_HOVER : COUNTRY_FILL,
                        stroke: COUNTRY_STROKE,
                        strokeWidth: 0.5,
                        outline: 'none',
                        cursor: hasPartner ? 'pointer' : 'default',
                      },
                      pressed: {
                        fill: COUNTRY_SELECTED,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Individual distributor markers */}
          {DISTRIBUTORS.map((d) => (
            <Marker
              key={d.company}
              coordinates={d.coordinates}
              onMouseEnter={(e) => showMarkerTooltip(e, d.country)}
              onMouseMove={(e) => showMarkerTooltip(e, d.country)}
              onMouseLeave={() => setTooltip(null)}
              onClick={() => selectCountry(d.country)}
              style={{
                default: { cursor: 'pointer' },
                hover: { cursor: 'pointer' },
                pressed: { cursor: 'pointer' },
              }}
            >
              <circle
                r={9}
                fill="var(--color-accent)"
                opacity={0.18}
              />
              <circle
                r={4.5}
                fill="var(--color-accent)"
                stroke="var(--color-background)"
                strokeWidth={1.5}
              />
            </Marker>
          ))}
        </ComposableMap>

        {/* Marker tooltip with distributor information */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 w-56 -translate-x-1/2 -translate-y-full rounded-sm border border-border bg-card px-3 py-2.5 shadow-sm"
            style={{ left: tooltip.x, top: tooltip.y - 14 }}
            role="status"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {tooltip.country}
            </p>
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {tooltip.distributors.map((d) => (
                <li key={d.company}>
                  <p className="text-sm font-medium leading-tight tracking-tight text-foreground">
                    {d.company}
                  </p>
                  <p className="text-xs leading-tight text-muted-foreground">
                    {d.city} · {d.type}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-2 border-t border-border pt-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
              Click to view details
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
