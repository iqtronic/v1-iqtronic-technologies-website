'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SocketVariant {
  suffix: string
  type: string
  region: string
  image: string
}

const BASE_CODE = 'IQTS_IP200-X'

const SOCKET_VARIANTS: SocketVariant[] = [
  {
    suffix: 'IQTS_IP200-S',
    type: 'Schuko / Type F',
    region: 'Europe',
    image: '/images/sockets/schuko-type-f.png',
  },
  {
    suffix: 'IQTS_IP200-E',
    type: 'French / Type E',
    region: 'France, Belgium',
    image: '/images/sockets/french-type-e.png',
  },
  {
    suffix: 'IQTS_IP200-J',
    type: 'Swiss / Type J',
    region: 'Switzerland',
    image: '/images/sockets/swiss-type-j.png',
  },
  {
    suffix: 'IQTS_IP200-G',
    type: 'UK / Type G',
    region: 'United Kingdom',
    image: '/images/sockets/uk-type-g.png',
  },
  {
    suffix: 'IQTS_IP200-H',
    type: 'Israel / Type H',
    region: 'Israel',
    image: '/images/sockets/israel-type-h.png',
  },
  {
    suffix: 'IQTS_IP200-US',
    type: 'USA / Type B',
    region: 'USA and Canada',
    image: '/images/sockets/usa-type-b.png',
  },
]

export function SocketVersions() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Socket Versions
          </div>
          <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Available socket versions
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            IQsocket products are available with multiple international socket
            versions. The required socket type is defined by the ordering
            suffix.
          </p>
          <p className="mt-3 font-mono text-sm text-foreground">
            Base ordering code:{' '}
            <span className="font-semibold">{BASE_CODE}</span>
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOCKET_VARIANTS.map((variant) => {
            const isSelected = selected === variant.suffix
            return (
              <button
                key={variant.suffix}
                type="button"
                onClick={() => setSelected(variant.suffix)}
                aria-pressed={isSelected}
                className={cn(
                  'flex h-full flex-col rounded-sm border bg-background p-4 text-left transition-colors',
                  isSelected
                    ? 'border-accent ring-1 ring-accent'
                    : 'border-border hover:border-accent/50',
                )}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-sm border border-border bg-secondary">
                  <Image
                    src={variant.image || '/placeholder.svg'}
                    alt={`${variant.type} socket`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col">
                  <h3 className="text-base font-medium tracking-tight text-foreground">
                    {variant.type}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent">
                    {variant.suffix}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {variant.region}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {selected ? (
          <div className="mt-8 rounded-sm border border-border bg-background p-5">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Selected version
            </div>
            <p className="mt-2 font-mono text-lg font-semibold tracking-tight text-foreground">
              {selected}
            </p>
          </div>
        ) : null}

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Availability depends on the current production batch. Please confirm
          the required socket version before ordering.
        </p>
      </div>
    </section>
  )
}
