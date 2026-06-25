import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ScreenshotCarousel } from '@/components/screenshot-carousel'

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
      'IQcontrol Classic is a terminal-style application for communicating with IQtronic devices over Bluetooth and SMS. Send and receive commands, adjust device parameters, monitor live status and work directly with supported hardware from your Android phone.',
    features: [
      'Bluetooth and SMS communication',
      'Terminal command mode',
      'Device parameter configuration',
      'Live status monitoring',
      'Firmware-aware command support',
      'Android support',
    ],
    shots: [
      { src: '/iqcontrol/classic/iqtronic-iqcontrol-classic-android.png', alt: 'IQcontrol Classic Android application' },
      { src: '/iqcontrol/classic/classic-2.png', alt: 'IQcontrol Classic — connection type with GSM SMS' },
      { src: '/iqcontrol/classic/classic-3.jpg', alt: 'IQcontrol Classic — app screens overview' },
      { src: '/iqcontrol/classic/classic-4.png', alt: 'IQcontrol Classic — device screen' },
      { src: '/iqcontrol/classic/classic-5.png', alt: 'IQcontrol Classic — device controls' },
      { src: '/iqcontrol/classic/classic-6.png', alt: 'IQcontrol Classic — communication log' },
      { src: '/iqcontrol/classic/classic-7.png', alt: 'IQcontrol Classic — quick control' },
      { src: '/iqcontrol/classic/classic-8.png', alt: 'IQcontrol Classic — settings' },
    ],
    downloads: [
      { label: 'Google Play', href: PLAY_CLASSIC, variant: 'primary' as const },
    ],
  },
  {
    id: 'iqcontrol-next',
    name: 'IQ-Control Next Generation',
    description:
      'IQ-Control Next Generation is the modern IQtronic mobile app, rebuilt with a cleaner interface and a streamlined workflow for pairing, configuring and controlling Bluetooth devices. Available for both Android and iOS, it offers broader device support and a more intuitive experience.',
    features: [
      'Modern, redesigned interface',
      'Bluetooth pairing and control',
      'Guided device configuration',
      'Live monitoring and status',
      'Cross-platform: Android and iOS',
      'Support for current and future devices',
    ],
    shots: [
      { src: '/iqcontrol/next/iqtronic-iqcontrol-next-android.png', alt: 'IQcontrol Next Generation Android application' },
      { src: '/iqcontrol/next/next-2.png', alt: 'IQ-Control Next Generation — connection options' },
      { src: '/iqcontrol/next/next-3.png', alt: 'IQ-Control Next Generation — device dashboard' },
      { src: '/iqcontrol/next/next-4.jpg', alt: 'IQ-Control Next Generation — device controls' },
      { src: '/iqcontrol/next/next-5.jpg', alt: 'IQ-Control Next Generation — status view' },
      { src: '/iqcontrol/next/next-6.jpg', alt: 'IQ-Control Next Generation — configuration' },
      { src: '/iqcontrol/next/next-7.jpg', alt: 'IQ-Control Next Generation — settings' },
      { src: '/iqcontrol/next/next-8.png', alt: 'IQ-Control Next Generation — device list' },
      { src: '/iqcontrol/next/next-9.png', alt: 'IQ-Control Next Generation — monitoring' },
      { src: '/iqcontrol/next/next-10.jpg', alt: 'IQ-Control Next Generation — command view' },
      { src: '/iqcontrol/next/next-11.png', alt: 'IQ-Control Next Generation — device details' },
    ],
    downloads: [
      { label: 'Android', href: PLAY_NEXT, variant: 'primary' as const },
      { label: 'iOS', href: APP_STORE, variant: 'outline' as const },
    ],
  },
]

const SUITE = {
  id: 'iqcontrol-suite',
  eyebrow: 'Windows Software',
  name: 'IQcontrol Suite',
  platform: 'Windows 10 / 11',
  subtitle: 'Professional Windows administration software',
  description:
    'IQcontrol Suite is a complete desktop package for advanced device administration. Professional desktop software for configuration, administration and service of IQsocket devices.',
  features: [
    'Terminal application for direct device control',
    'Command editor',
    'Bulk import and editing of authorized phone numbers',
    'Voice IVR editor',
    'Custom voice self-service creation',
    'Advanced device configuration',
    'Maintenance and service tools',
  ],
  shots: [
    { src: '/iqcontrol/suite/iqtronic-iqcontrol-suite-windows.png', alt: 'IQcontrol Suite for Windows' },
    { src: '/iqcontrol/suite/suite-1.png', alt: 'IQcontrol Suite — device settings with firmware, IVR, security list and configuration tools' },
    { src: '/iqcontrol/suite/suite-2.png', alt: 'IQcontrol Suite — commands editor with command and answer parameters' },
  ],
}

const SUPPORTED_DEVICES = [
  'IQsocket',
  'IQsocket LAN',
  'Bluetooth adapters',
  'Future IQtronic devices',
]

const DOWNLOAD_CARDS = [
  {
    store: 'google-play' as const,
    subtitle: 'IQcontrol Classic',
    href: PLAY_CLASSIC,
  },
  {
    store: 'google-play' as const,
    subtitle: 'IQ-Control Next Generation',
    href: PLAY_NEXT,
  },
  {
    store: 'app-store' as const,
    subtitle: 'IQ-Control Next Generation',
    href: APP_STORE,
  },
  {
    store: 'windows' as const,
    title: 'IQcontrol Suite',
    subtitle: 'Windows software package',
    href: '#',
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

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3 5.4 10.2 4.4v6.9H3V5.4Zm0 13.2 7.2 1v-6.8H3v5.8Zm8-13.4L21 3.8v8.5h-10V5.2Zm0 13.6L21 20.2v-8.5h-10v7.1Z" />
    </svg>
  )
}

function StoreBadge({
  store,
  href,
  caption,
}: {
  store: 'google-play' | 'app-store' | 'windows'
  href: string
  caption: string
}) {
  if (store === 'windows') {
    return (
      <a
        href={href}
        aria-label={`Download for Windows — ${caption}`}
        className="inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90"
      >
        <WindowsIcon className="size-7 shrink-0" />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-80">
            Download for
          </span>
          <span className="text-base font-semibold tracking-tight">
            Windows
          </span>
        </span>
      </a>
    )
  }

  const config =
    store === 'google-play'
      ? { src: '/badge-google-play.svg', top: 'Get it on', bottom: 'Google Play' }
      : { src: '/badge-app-store.svg', top: 'Download on the', bottom: 'App Store' }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${config.top} ${config.bottom} — ${caption}`}
      className="inline-flex items-center gap-3 rounded-sm bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-90"
    >
      <img
        src={config.src || '/placeholder.svg'}
        alt=""
        aria-hidden="true"
        className="size-7 shrink-0"
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-wide opacity-80">
          {config.top}
        </span>
        <span className="text-base font-semibold tracking-tight">
          {config.bottom}
        </span>
      </span>
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
          description="IQcontrol is the mobile platform for IQtronic Bluetooth devices. Configure, monitor and control supported devices directly from your smartphone."
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
                  <ScreenshotCarousel shots={app.shots} label={app.name} />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* IQcontrol Suite — Windows desktop software */}
        <section
          id={SUITE.id}
          className="border-b border-border bg-background"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Text column */}
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {SUITE.eyebrow}
                </div>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  {SUITE.name}
                </h2>

                {/* Platform badge */}
                <span className="mt-4 inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span
                    className="inline-block size-1.5 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  {SUITE.platform}
                </span>

                <p className="mt-4 text-sm font-medium text-foreground">
                  {SUITE.subtitle}
                </p>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  {SUITE.description}
                </p>

                <ul className="mt-8 flex flex-col gap-px overflow-hidden rounded-sm border border-border bg-border">
                  {SUITE.features.map((feature) => (
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
              </div>

              {/* Screenshots column */}
              <div className="lg:col-span-7">
                <ScreenshotCarousel shots={SUITE.shots} label={SUITE.name} />
              </div>
            </div>
          </div>
        </section>

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

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DOWNLOAD_CARDS.map((card) => (
                <div
                  key={`${card.store}-${card.subtitle}`}
                  className="flex flex-col justify-between rounded-sm border border-border bg-background p-8"
                >
                  <div>
                    {'title' in card && card.title ? (
                      <div className="text-base font-medium tracking-tight text-foreground">
                        {card.title}
                      </div>
                    ) : null}
                    <div
                      className={`font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground${
                        'title' in card && card.title ? ' mt-2' : ''
                      }`}
                    >
                      {card.subtitle}
                    </div>
                  </div>
                  <div className="mt-8">
                    <StoreBadge
                      store={card.store}
                      href={card.href}
                      caption={card.subtitle}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
