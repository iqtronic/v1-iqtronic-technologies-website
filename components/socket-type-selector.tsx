'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SocketOption {
  name: string
  suffix: string
  code: string
  image: string
  availability: string
}

const SOCKET_OPTIONS: SocketOption[] = [
  {
    name: 'Schuko',
    suffix: 'S',
    code: 'IQTS_IP200-S',
    image: '/images/sockets/schuko-type-f.png',
    availability: 'In stock',
  },
  {
    name: 'French',
    suffix: 'E',
    code: 'IQTS_IP200-E',
    image: '/images/sockets/french-type-e.png',
    availability: 'In stock',
  },
  {
    name: 'Swiss',
    suffix: 'J',
    code: 'IQTS_IP200-J',
    image: '/images/sockets/swiss-type-j.png',
    availability: '2 weeks lead time',
  },
  {
    name: 'UK',
    suffix: 'G',
    code: 'IQTS_IP200-G',
    image: '/images/sockets/uk-type-g.png',
    availability: '2 weeks lead time',
  },
  {
    name: 'Israel',
    suffix: 'H',
    code: 'IQTS_IP200-H',
    image: '/images/sockets/israel-type-h.png',
    availability: 'Production on request',
  },
  {
    name: 'USA',
    suffix: 'US',
    code: 'IQTS_IP200-US',
    image: '/images/sockets/usa-type-b.png',
    availability: 'Production on request',
  },
  {
    name: 'Italian',
    suffix: 'I',
    code: 'IQTS_IP200-I',
    image: '/images/sockets/italian-type-l.png',
    availability: 'Production on request',
  },
]

export function SocketTypeSelector() {
  const [selected, setSelected] = useState<string | null>(null)
  const active = SOCKET_OPTIONS.find((o) => o.code === selected) ?? null

  return (
    <div className="mt-6 border-t border-border pt-6">
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Socket Type
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {SOCKET_OPTIONS.map((option) => {
          const isSelected = selected === option.code
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setSelected(option.code)}
              aria-pressed={isSelected}
              className={cn(
                'flex flex-col items-center gap-1.5 rounded-sm border bg-card p-2 transition-colors',
                isSelected
                  ? 'border-accent ring-1 ring-accent'
                  : 'border-border hover:border-accent/50',
              )}
            >
              <div className="relative size-[52px] overflow-hidden rounded-sm border border-border bg-secondary">
                <Image
                  src={option.image || '/placeholder.svg'}
                  alt={`${option.name} socket`}
                  fill
                  sizes="52px"
                  className="object-contain p-1.5"
                />
              </div>
              <span className="text-xs font-medium tracking-tight text-foreground">
                {option.name}
              </span>
            </button>
          )
        })}
      </div>

      {active ? (
        <div className="mt-4 rounded-sm border border-border bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Ordering code
          </div>
          <p className="mt-1 font-mono text-base font-semibold tracking-tight text-foreground">
            {active.code}
          </p>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Availability
          </div>
          <p className="mt-1 text-sm font-medium text-foreground">
            {active.availability}
          </p>
        </div>
      ) : null}
    </div>
  )
}
