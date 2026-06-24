import Image from 'next/image'

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
  {
    suffix: 'IQTS_IP200-I',
    type: 'Italian / Type L',
    region: 'Italy',
    image: '/images/sockets/italian-type-l.png',
  },
]

export function SocketVersions() {
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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOCKET_VARIANTS.map((variant) => (
            <div
              key={variant.suffix}
              className="flex items-center gap-4 rounded-sm border border-border bg-background p-3"
            >
              <div className="relative size-[70px] shrink-0 overflow-hidden rounded-sm border border-border bg-secondary">
                <Image
                  src={variant.image || '/placeholder.svg'}
                  alt={`${variant.type} socket`}
                  fill
                  sizes="70px"
                  className="object-contain p-2"
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <h3 className="text-sm font-medium tracking-tight text-foreground">
                  {variant.type}
                </h3>
                <p className="mt-0.5 font-mono text-xs text-accent">
                  {variant.suffix}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {variant.region}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Availability depends on the current production batch. Please confirm
          the required socket version before ordering.
        </p>
      </div>
    </section>
  )
}
