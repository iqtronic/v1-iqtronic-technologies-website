import Image from 'next/image'

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

interface Step {
  title: string
  content: Block[]
}

const STEPS: Step[] = [
  {
    title: 'Requirements & System Architecture',
    content: [
      {
        type: 'paragraph',
        text: 'We analyze customer requirements and propose the optimal hardware and software architecture.',
      },
    ],
  },
  {
    title: 'Electronics Design',
    content: [
      {
        type: 'list',
        items: [
          'Schematic capture',
          'Multilayer PCB design',
          'Component selection',
          'Design for manufacturing',
          'Design optimization',
        ],
      },
    ],
  },
  {
    title: 'Embedded Firmware',
    content: [
      {
        type: 'list',
        items: [
          'Microchip PIC',
          'dsPIC',
          'STM32',
          'Ethernet',
          'GSM / LTE',
          'Bluetooth',
          'RS232 / RS485',
          'Modbus',
          'MQTT',
          'HTTPS',
          'Bootloaders',
        ],
      },
    ],
  },
  {
    title: 'Prototype Manufacturing',
    content: [
      {
        type: 'list',
        items: [
          'Small production batches',
          'Functional prototypes',
          'Assembly',
          'Testing',
        ],
      },
    ],
  },
  {
    title: 'EMC / EMI Pre-compliance',
    content: [
      {
        type: 'paragraph',
        text: 'Early EMC optimization significantly reduces certification risks and shortens development time.',
      },
      {
        type: 'paragraph',
        text: 'Every prototype is designed with EMC performance in mind before final certification.',
      },
    ],
  },
  {
    title: 'Functional Testing',
    content: [
      {
        type: 'list',
        items: [
          'Power cycling',
          'Environmental testing',
          'Long-term stability',
          'Reliability testing',
        ],
      },
    ],
  },
  {
    title: 'Certification Support',
    content: [
      {
        type: 'list',
        items: ['CE', 'EMC', 'RED', 'RoHS', 'Production preparation'],
      },
    ],
  },
  {
    title: 'Production',
    content: [
      {
        type: 'list',
        items: [
          'Small series',
          'Mass production',
          'Testing',
          'Calibration',
          'Packaging',
          'Worldwide delivery',
        ],
      },
    ],
  },
]

const EMC_IMAGES = [
  {
    src: '/images/development/dev-emc-spectrum.png',
    caption: 'Rigol DSA815 Spectrum Analyzer',
    alt: 'Benchtop RF spectrum analyzer in an EMC pre-compliance laboratory',
  },
  {
    src: '/images/development/dev-emc-chamber.png',
    caption: 'TESEQ GTEM250 EMC Chamber',
    alt: 'GTEM electromagnetic compatibility test cell in an electronics laboratory',
  },
]

function StepContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-3 flex flex-col gap-4">
      {blocks.map((block, idx) =>
        block.type === 'paragraph' ? (
          <p
            key={idx}
            className="max-w-2xl text-pretty leading-relaxed text-muted-foreground"
          >
            {block.text}
          </p>
        ) : (
          <ul
            key={idx}
            className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3"
          >
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span
                  className="mt-2 size-1.5 shrink-0 bg-accent"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  )
}

export function DevelopmentProcess() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <header className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Our development process
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From first schematic to certified production.
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            A disciplined, in-house engineering process. Every stage — hardware,
            firmware, testing and certification — is handled by the same team.
          </p>
        </header>

        <ol className="relative mt-14">
          {/* Vertical axis */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-px -translate-x-1/2 bg-border sm:left-6"
          />

          {STEPS.map((step, i) => {
            const isEmc = step.title.startsWith('EMC')
            return (
              <li
                key={step.title}
                className="relative pb-12 pl-16 last:pb-0 sm:pl-20"
              >
                {/* Numbered marker */}
                <span
                  className="absolute left-5 top-0 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent font-mono text-sm font-semibold text-accent-foreground sm:left-6"
                  aria-hidden="true"
                >
                  {`0${i + 1}`}
                </span>

                <div className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {`Step ${i + 1}`}
                </div>
                <h3 className="mt-1.5 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
                  {step.title}
                </h3>

                <StepContent blocks={step.content} />

                {isEmc && (
                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {EMC_IMAGES.map((img) => (
                      <figure key={img.src}>
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
                          <Image
                            src={img.src || '/placeholder.svg'}
                            alt={img.alt}
                            fill
                            sizes="(min-width: 640px) 40vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
