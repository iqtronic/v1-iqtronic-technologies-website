import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HistoricalMaterials } from '@/components/historical-materials'

export const metadata: Metadata = {
  title: 'RF Engineering & Wireless Infrastructure (1999) — IQtronic Technologies',
  description:
    'Where it began in 1999: RF engineering and wireless infrastructure. Development and manufacturing of antennas, Yagi and parabolic systems, attenuators, lightning protectors and RF accessories for wireless internet providers and industrial networks.',
  alternates: { canonical: '/why-iqtronic/rf-engineering-1999' },
}

const GALLERY = [
  {
    src: '/images/history-1999-yagi.png',
    alt: 'Directional Yagi antenna with aluminium elements on a boom',
    caption: 'Yagi antenna',
  },
  {
    src: '/images/history-1999-parabolic.png',
    alt: 'Small parabolic dish antenna with a prime-focus feed',
    caption: 'Parabolic system',
    video: {
      webm: '/videos/parabolic-demo.webm',
      mp4: '/videos/parabolic-demo.mp4',
      poster: '/images/history-1999-parabolic.png',
    },
  },
  {
    src: '/images/history-1999-rf-accessories.png',
    alt: 'RF accessories: attenuators, lightning protectors and connectors',
    caption: 'Attenuators & RF accessories',
  },
]

const PRODUCTS = [
  'antennas',
  'Yagi antennas',
  'omnidirectional antennas',
  'parabolic systems',
  'horn antennas',
  'attenuators',
  'lightning protectors',
  'RF accessories',
]

const MATERIALS = [
  'manualCz',
  { key: 'datasheet', label: 'Antenna datasheets (PDF)' },
  { key: 'marketing', label: 'Product catalogue (PDF)' },
  { key: 'press', label: 'Press articles (PDF)' },
]

export default function RfEngineering1999Page() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-background">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-7xl px-6 py-4 lg:px-10"
          >
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <li>
                <Link
                  href="/why-iqtronic"
                  className="transition-colors hover:text-accent"
                >
                  Why IQtronic
                </Link>
              </li>
              <li aria-hidden="true" className="text-muted-foreground/40">
                /
              </li>
              <li className="text-foreground">RF Engineering — 1999</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
            <div className="font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
              1999
            </div>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              RF Engineering &amp; Wireless Infrastructure
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Where it began — one of the early wireless internet providers in
              the region, designing and manufacturing its own RF hardware.
            </p>

            {/* Big hero image */}
            <figure className="mt-10 overflow-hidden rounded-sm border border-border bg-secondary">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/history-1999-rf-hero.png"
                  alt="Late-1990s wireless infrastructure mast with Yagi and parabolic antennas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 1200px, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>
        </section>

        {/* Description + specifics */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  The beginning
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Built on radio-frequency engineering.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  One of the early wireless internet providers in the region, we
                  developed and manufactured a full range of RF hardware in
                  house.
                </p>
                <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                  Products were supplied to wireless internet providers and
                  industrial communication networks — the foundation for
                  everything that followed.
                </p>

                <div className="mt-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Development &amp; manufacturing
                  </div>
                  <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                    {PRODUCTS.map((item) => (
                      <li key={item} className="flex gap-3 text-muted-foreground">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <HistoricalMaterials items={MATERIALS} className="mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Photo gallery
            </div>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Products from the era
            </h2>
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GALLERY.map((photo) => (
                <li key={photo.src}>
                  <figure>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-secondary">
                      {photo.video ? (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster={photo.video.poster}
                          aria-label={photo.alt}
                          className="absolute inset-0 h-full w-full object-cover"
                        >
                          <source src={photo.video.webm} type="video/webm" />
                          <source src={photo.video.mp4} type="video/mp4" />
                          {photo.alt}
                        </video>
                      ) : (
                        <Image
                          src={photo.src || '/placeholder.svg'}
                          alt={photo.alt}
                          fill
                          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {photo.caption}
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>

            <div className="mt-14 border-t border-border pt-10">
              <Link
                href="/why-iqtronic"
                className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.16em] text-accent transition-colors hover:text-foreground"
              >
                <span aria-hidden="true">←</span>
                Back to timeline
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
