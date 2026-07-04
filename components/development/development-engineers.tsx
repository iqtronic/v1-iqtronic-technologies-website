import Image from 'next/image'
import { CheckIcon } from '@/components/development/icons'

const STRENGTHS = [
  'Senior embedded engineers',
  'Industrial-grade PCB design',
  'Gold-plated PCB finish',
  'High-quality electronic components',
  'EMC-optimized hardware',
  'Long-term reliability',
  'Premium quality at competitive pricing',
]

const PCB_DETAILS = [
  {
    src: '/images/development/iqgate-pcb-detail-1.png',
    alt: 'Macro detail of a gold-plated IQtronic PCB with surface-mount components and microcontroller',
  },
  {
    src: '/images/development/iqgate-pcb-detail-2.png',
    alt: 'Macro detail of IQtronic PCB screw terminals, relays and gold-plated edge connectors',
  },
]

export function DevelopmentEngineers() {
  return (
    <section className="border-b border-border bg-background pt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: heading, paragraph, strengths */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              <span
                className="inline-block size-2 bg-accent"
                aria-hidden="true"
              />
              Engineering team
            </div>

            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Designed by Senior Engineers
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Every IQtronic product is designed by experienced embedded hardware
              and firmware engineers with decades of industrial development
              experience.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {STRENGTHS.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-pretty leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-l-2 border-border pl-4 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Team photographs and engineer profiles will be added soon.
            </p>
          </div>

          {/* Right: disassembled device + PCB detail photos */}
          <div className="lg:col-span-6">
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src="/images/development/iqgate-disassembled.png"
                  alt="Disassembled IQgate GSM controller showing its internal industrial-grade PCB, GSM module and screw terminals"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                IQgate GSM — internal construction
              </figcaption>
            </figure>

            <div className="mt-4 grid grid-cols-2 gap-4">
              {PCB_DETAILS.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border"
                >
                  <Image
                    src={photo.src || '/placeholder.svg'}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
