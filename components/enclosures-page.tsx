import Image from 'next/image'

const ENCLOSURES = [
  {
    id: 'own-tooling',
    title: 'Own Tooling',
    body: 'In-house tool design and manufacturing for precise, repeatable housings — developed around the requirements of each product.',
    images: [
      { src: '/images/enclosures.png', alt: 'IQtronic in-house enclosure tooling' },
      { src: '/images/engineering-quality-enclosure.png', alt: 'IQtronic enclosure engineering detail' },
    ],
  },
  {
    id: 'injection-moulds',
    title: 'Injection Moulds',
    body: 'Industrial injection moulding for durable technical enclosures, from first prototype to repeatable series production.',
    images: [
      { src: '/images/iqtronic-enclosure-din-rail.png', alt: 'IQtronic DIN rail enclosure' },
      { src: '/images/iqtronic-enclosure-ip66.png', alt: 'IQtronic IP66 enclosure' },
    ],
  },
  {
    id: 'oem-customization',
    title: 'OEM Customization',
    body: 'Housings tailored to your hardware, brand and installation: colours, labelling, mounting and connector configurations.',
    images: [
      { src: '/images/iqtronic-enclosure-oem.png', alt: 'IQtronic OEM enclosure customization' },
      { src: '/images/engineering-quality-teaser.png', alt: 'IQtronic custom product engineering' },
    ],
  },
]

export function EnclosuresPage() {
  return (
    <section id="enclosures" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Industrial enclosures</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">From tooling to finished housing.</h1>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">We develop the tooling, moulding and customization that turn engineered electronics into durable, production-ready products.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ENCLOSURES.map((item) => (
            <article id={item.id} key={item.id} className="overflow-hidden rounded-sm border border-border bg-card">
              <div className="border-b border-border p-7 lg:min-h-56 lg:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{item.id === 'own-tooling' ? 'M-01' : item.id === 'injection-moulds' ? 'M-02' : 'M-03'}</p>
                <h2 className="mt-5 text-2xl font-medium tracking-tight">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
              <div className="grid gap-2 bg-secondary/40 p-2">
                {item.images.map((image) => (
                  <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-background">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
