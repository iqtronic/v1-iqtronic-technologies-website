'use client'

import { useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps'
import { REGION_MARKERS, type Region } from '@/lib/distributors'

const GEO_URL = '/world-110m.json'

export function DistributorMap({
  activeRegion,
  onSelectRegion,
}: {
  activeRegion: Region | 'All'
  onSelectRegion: (region: Region) => void
}) {
  const [hovered, setHovered] = useState<Region | null>(null)

  return (
    <div className="relative w-full overflow-hidden rounded-sm border border-border bg-secondary">
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
                    fill: 'var(--color-muted)',
                    stroke: 'var(--color-border)',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  hover: {
                    fill: 'var(--color-muted)',
                    stroke: 'var(--color-border)',
                    strokeWidth: 0.5,
                    outline: 'none',
                  },
                  pressed: {
                    fill: 'var(--color-muted)',
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
              onMouseEnter={() => setHovered(marker.region)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onSelectRegion(marker.region)}
              style={{
                default: { cursor: 'pointer' },
                hover: { cursor: 'pointer' },
                pressed: { cursor: 'pointer' },
              }}
            >
              {isActive && (
                <circle
                  r={13}
                  fill="var(--color-accent)"
                  opacity={0.18}
                />
              )}
              <circle
                r={5.5}
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
    </div>
  )
}
