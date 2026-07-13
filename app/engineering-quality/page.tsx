import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Engineering Quality — IQtronic Technologies',
  description:
    'Real proof of quality, not marketing claims. Gold-plated PCBs, reinforced high-current paths, serviceable protection, EMC by design, custom enclosures and manufacturing engineered for consistency and reliability.',
  alternates: { canonical: '/engineering-quality' },
}

/**
 * Content blocks. Images and copy are placeholders and are intended to be
 * replaced with real product photography and final wording. Keep the data
 * shape (eyebrow / title / paragraphs / image) so blocks can be edited or
 * reordered without touching the layout below.
 */
const BLOCKS = [
  {
    id: 'gold-plated-pcb',
    eyebrow: 'Surface finish',
    title: 'Gold-Plated PCB',
    paragraphs: [
      'We use gold-plated contact surfaces on our circuit boards for higher resistance to oxidation, a more reliable electrical contact and long-term stability.',
      'The result is a connection that stays dependable for years, even in humid or chemically demanding environments.',
    ],
    image: {
      src: '/images/engineering-quality-gold-pcb.png',
      alt: 'Macro of a PCB with gold-plated contact pads and edge connector fingers',
    },
  },
  {
    id: 'high-current-paths',
    eyebrow: 'Power design',
    title: 'Reinforced High-Current Paths',
    paragraphs: [
      'Power traces are dimensioned with generous width, and at critical points they are deliberately reinforced with an additional layer of solder to increase current capacity.',
      'This lowers heat rise during continuous operation at maximum load and extends the service life of the power stage — a considered design decision, not a repair.',
    ],
    image: {
      src: '/images/engineering-quality-high-current.png',
      alt: 'Macro of a PCB power section with reinforced copper traces',
    },
  },
  {
    id: 'creepage-slots',
    eyebrow: 'Electrical safety',
    title: 'Extended Creepage Distances',
    paragraphs: [
      'The PCB incorporates precision-milled isolation slots to significantly increase creepage distance and dielectric strength between mains and low-voltage circuits.',
      'This improves long-term electrical safety and reliability in demanding environments, including elevated humidity and pollution levels.',
    ],
    image: {
      src: '/images/engineering-quality-creepage.png',
      alt: 'Macro of precision-milled isolation slots on a PCB separating mains and low-voltage sections',
    },
  },
  {
    id: 'protection-fuse',
    eyebrow: 'Serviceability',
    title: 'Replaceable Protection Fuse',
    paragraphs: [
      'Our devices include surge protection, yet the fuse remains easily accessible and replaceable.',
      'In the event of an extreme fault there is no need to replace the whole device — servicing is simpler and the product lasts longer.',
    ],
    image: {
      src: '/images/engineering-quality-fuse.png',
      alt: 'Replaceable glass tube fuse seated in a clip-style holder on a PCB',
    },
  },
  {
    id: 'emc-by-design',
    eyebrow: 'Compliance',
    title: 'EMC Designed from Day One',
    paragraphs: [
      'Electromagnetic compatibility is not left until the end of development. EMI filters and correct PCB layout are part of the design from the very first hardware revision.',
      'Every new product is verified continuously in our own development laboratory, at normal and maximum load, to meet EMC requirements and long-term reliability.',
    ],
    image: {
      src: '/images/engineering-quality-emc.png',
      alt: 'PCB with an EMI input filter section on a laboratory bench',
    },
  },
  {
    id: 'custom-enclosure',
    eyebrow: 'Mechanics',
    title: 'Custom Designed Enclosure',
    paragraphs: [
      'We do not use generic off-the-shelf plastic boxes. We design the mechanical parts ourselves and produce them with our own injection moulds.',
      'That lets us optimise the mechanical structure, appearance, strength and manufacturing quality for each product.',
    ],
    image: {
      src: '/images/engineering-quality-enclosure.png',
      alt: 'Custom injection-moulded plastic enclosure with top and bottom shells',
    },
  },
  {
    id: 'efficient-manufacturing',
    eyebrow: 'Manufacturing',
    title: 'Designed for Efficient Manufacturing',
    paragraphs: [
      'Products are designed to minimise manual assembly. During production the upper board simply plugs into the lower board through a board-to-board connector.',
      'This speeds up assembly and, more importantly, improves repeatability, reduces the risk of human error and delivers higher, more consistent product quality.',
    ],
    image: {
      src: '/images/engineering-quality-board-to-board.png',
      alt: 'Two stacked PCBs joined by a board-to-board connector',
    },
  },
]

export default function EngineeringQualityPage() {
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
              <li className="text-foreground">Engineering Quality</li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <span
                  className="inline-block size-2 bg-accent"
                  aria-hidden="true"
                />
                Engineering quality
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Quality you can see inside the device.
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                True product quality starts where most customers never look —
                inside the device. Rather than making marketing claims, we prefer
                to show the concrete engineering decisions behind every product.
              </p>
            </div>
          </div>
        </section>

        {/* Alternating content blocks */}
        {BLOCKS.map((block, i) => (
          <section
            key={block.id}
            id={block.id}
            className="border-b border-border bg-background"
          >
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Image */}
                <figure
                  className={
                    i % 2 === 1 ? 'lg:order-2' : undefined
                  }
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-secondary">
                    <Image
                      src={block.image.src || '/placeholder.svg'}
                      alt={block.image.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>

                {/* Text */}
                <div className={i % 2 === 1 ? 'lg:order-1' : undefined}>
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {block.eyebrow}
                  </div>
                  <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    {block.title}
                  </h2>
                  {block.paragraphs.map((paragraph, p) => (
                    <p
                      key={p}
                      className={`${
                        p === 0 ? 'mt-6' : 'mt-4'
                      } text-pretty text-lg leading-relaxed text-muted-foreground`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Full-width closing quote */}
        <section className="bg-card">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10 lg:py-32">
            <figure>
              <blockquote className="text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
                &ldquo;Quality isn&apos;t something we add at the end of
                production. It&apos;s engineered into every product from the very
                first schematic.&rdquo;
              </blockquote>
            </figure>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
