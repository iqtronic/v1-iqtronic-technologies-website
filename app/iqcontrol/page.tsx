import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'IQcontrol Mobile Applications — IQtronic Technologies',
  description:
    'Control IQtronic devices from your smartphone. IQcontrol Classic and IQ-Control Next Generation mobile apps for Bluetooth and SMS communication on Android and iOS.',
  alternates: { canonical: '/iqcontrol' },
}

const PLAY_CLASSIC =
  'https://play.google.com/store/apps/details?id=com.iqtronic.iqcontrol'
const PLAY_NEXT =
  'https://play.google.com/store/apps/details?id=com.iqcontrol.iqcontrol1'
const APP_STORE = 'https://apps.apple.com/app/id6476329863'

const APPS = [
  {
    id: 'iqcontrol-classic',
    name: 'IQcontrol Classic',
    description:
      'IQcontrol is a terminal application designed to control IQtronic devices over Bluetooth and SMS communication.',
    features: [
      'Bluetooth communication',
      'Terminal mode',
      'Device configuration',
      'Monitoring',
      'Firmware support',
    ],
    shots: [
      { src: '/iqcontrol-classic-terminal.png', alt: 'IQcontrol Classic terminal screen' },
      { src: '/iqcontrol-classic-config.png', alt: 'IQcontrol Classic device configuration screen' },
    ],
    downloads: [
      { label: 'Google Play', href: PLAY_CLASSIC, variant: 'primary' as const },
    ],
  },
  {
    id: 'iqcontrol-next',
    name: 'IQ-Control Next Generation',
    description:
      'The next generation Bluetooth application for IQtronic devices.',
    features: [
      'Modern user interface',
      'Bluetooth communication',
      'Device configuration',
      'Cross-platform support',
      'Android and iOS support',
    ],
    shots: [
      { src: '/iqcontrol-next-dashboard.png', alt: 'IQ-Control Next Generation dashboard screen' },
      { src: '/iqcontrol-next-devices.png', alt: 'IQ-Control Next Generation device list screen' },
    ],
    downloads: [
      { label: 'Android', href: PLAY_NEXT, variant: 'primary' as const },
      { label: 'iOS', href: APP_STORE, variant: 'outline' as const },
    ],
  },
]

const SUPPORTED_DEVICES = [
  'IQsocket',
  'IQsocket LAN',
  'Bluetooth adapters',
  'Future IQtronic devices',
]

const DOWNLOAD_CARDS = [
  {
    title: 'Google Play',
    subtitle: 'IQcontrol Classic',
    href: PLAY_CLASSIC,
  },
  {
    title: 'Google Play',
    subtitle: 'IQ-Control Next Generation',
    href: PLAY_NEXT,
  },
  {
    title: 'Apple App Store',
    subtitle: 'IQ-Control Next Generation',
    href: APP_STORE,
  },
]

function DownloadButton({
  label,
  href,
  variant,
}: {
  label: string
  href: string
  variant: 'primary' | 'outline'
}) {
  const base =
    'inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-opacity'
  const styles =
    variant === 'primary'
      ? 'bg-primary text-primary-foreground hover:opacity-90'
      : 'border border-border text-foreground hover:bg-secondary'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  )
}

export default function IQcontrolPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Mobile Applications"
          title="IQcontrol Mobile Applications"
          description="Control IQtronic devices from your smartphone."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'IQcontrol' }]}
        />

        {/* App sections */}
        {APPS.map((app, index) => (
          <section
            key={app.id}
            id={app.id}
            className={
              index % 2 === 0
                ? 'border-b border-border bg-background'
                : 'border-b border-border bg-card'
            }
          >
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Text column */}
                <div className="lg:col-span-5">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {`App 0${index + 1}`}
                  </div>
                  <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    {app.name}
                  </h2>
                  <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>

                  <ul className="mt-8 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
                    {app.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 bg-card px-4 py-3 text-sm text-foreground"
                      >
                        <span
                          className="inline-block size-1.5 shrink-0 bg-accent"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {app.downloads.map((dl) => (
                      <DownloadButton
                        key={dl.label}
                        label={dl.label}
                        href={dl.href}
                        variant={dl.variant}
                      />
                    ))}
                  </div>
                </div>

                {/* Screenshots column */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-6">
                    {app.shots.map((shot) => (
                      <div
                        key={shot.src}
                        className="relative aspect-[9/19] w-full overflow-hidden rounded-sm border border-border bg-background"
                      >
                        <Image
                          src={shot.src || '/placeholder.svg'}
                          alt={shot.alt}
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
        ))}

        {/* Supported devices */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Compatibility
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Supported devices.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {SUPPORTED_DEVICES.map((device) => (
                <div key={device} className="flex flex-col bg-card p-8">
                  <span
                    className="inline-block size-2 bg-accent"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-medium tracking-tight text-foreground">
                    {device}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download section */}
        <section className="bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Downloads
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Get the apps.
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Download IQcontrol from the official app stores.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {DOWNLOAD_CARDS.map((card) => (
                <a
                  key={`${card.title}-${card.subtitle}`}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-sm border border-border bg-background p-8 transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {card.subtitle}
                    </div>
                    <h3 className="mt-4 text-xl font-medium tracking-tight text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Download
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
