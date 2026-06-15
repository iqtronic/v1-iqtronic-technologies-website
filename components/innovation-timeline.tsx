import { cn } from '@/lib/utils'

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

interface Milestone {
  year: string
  title: string
  content: Block[]
  /** Caption describing the primary historical image (placeholder for now). */
  image: string
  /** Number of placeholder tiles to render (primary + gallery). Defaults to 1. */
  imageCount?: number
  /** Reserved for future video support. Renders a play affordance when true. */
  video?: boolean
}

const MILESTONES: Milestone[] = [
  {
    year: '1999',
    title: 'RF Engineering & Wireless Infrastructure',
    content: [
      {
        type: 'paragraph',
        text: 'One of the early wireless internet providers in the region.',
      },
      { type: 'paragraph', text: 'Development and manufacturing of:' },
      {
        type: 'list',
        items: [
          'antennas',
          'Yagi antennas',
          'omnidirectional antennas',
          'parabolic systems',
          'horn antennas',
          'attenuators',
          'lightning protectors',
          'RF accessories',
        ],
      },
      {
        type: 'paragraph',
        text: 'Products supplied to wireless internet providers and industrial communication networks.',
      },
    ],
    image: 'Antenna collage',
    imageCount: 3,
  },
  {
    year: '2003',
    title: 'Connected Devices Before IoT',
    content: [
      {
        type: 'paragraph',
        text: 'Development of remotely controlled microwave attenuators featuring:',
      },
      {
        type: 'list',
        items: [
          'own TCP/IP stack',
          'CS8900 Ethernet controller',
          'PIC16F877 microcontroller',
          'Telnet control interface',
        ],
      },
      { type: 'paragraph', text: 'Protected utility model.' },
      {
        type: 'paragraph',
        text: 'Development of microwave laboratory equipment.',
      },
    ],
    image: 'Microwave attenuator products',
  },
  {
    year: '2004',
    title: 'GIOM Platform Development Started',
    content: [
      {
        type: 'paragraph',
        text: 'Development started on a new generation wireless networking platform under the GIOM trademark.',
      },
      { type: 'paragraph', text: 'Focus:' },
      {
        type: 'list',
        items: [
          'industrial networking',
          'wireless connectivity',
          'embedded networking software',
        ],
      },
    ],
    image: 'Early GIOM hardware',
  },
  {
    year: '2005',
    title: 'Industrial Dual Ethernet WiFi Router',
    content: [
      {
        type: 'paragraph',
        text: 'Launch of a universal dual-Ethernet WiFi router.',
      },
      { type: 'paragraph', text: 'Features included:' },
      {
        type: 'list',
        items: [
          'support for multiple PCMCIA wireless cards',
          'own TCP/IP stack',
          'routing',
          'NAT',
          'QoS traffic management',
          'data quota management',
          'Qt-based configuration software',
        ],
      },
      {
        type: 'paragraph',
        text: 'Entire software platform developed in-house in C.',
      },
    ],
    image: 'GIOM DUAL router',
  },
  {
    year: '2006',
    title: 'Advanced Wireless Router Platform',
    content: [
      {
        type: 'paragraph',
        text: 'Development of a universal WiFi router with:',
      },
      {
        type: 'list',
        items: [
          'integrated web interface',
          'output power control',
          'outdoor deployment support',
          'prime-focus antenna integration',
        ],
      },
    ],
    image: 'Router platform',
  },
  {
    year: '2006',
    title: "World's First Smart Socket For Sale",
    content: [
      { type: 'paragraph', text: 'Launch of SMART Socket TC35.' },
      { type: 'paragraph', text: 'Features:' },
      {
        type: 'list',
        items: [
          'GSM connectivity',
          'Ethernet connectivity',
          'own web interface',
          'piezo alarm',
          'digital alarm input',
        ],
      },
      {
        type: 'paragraph',
        text: 'One of the earliest remotely controlled smart sockets for industrial and professional applications.',
      },
      {
        type: 'paragraph',
        text: 'The product laid the foundation for the future IQsocket family.',
      },
    ],
    image: 'SMART Socket TC35',
  },
  {
    year: '2006',
    title: 'Smart Ripple-Control Socket',
    content: [
      {
        type: 'paragraph',
        text: 'Launch of a remotely controlled ripple-control socket.',
      },
      { type: 'paragraph', text: 'Protected utility model.' },
    ],
    image: 'HDO socket',
  },
  {
    year: '2007',
    title: 'TX20USB Weather Monitoring',
    content: [
      { type: 'paragraph', text: 'Launch of TX20USB.' },
      { type: 'paragraph', text: 'Weather monitoring system with:' },
      {
        type: 'list',
        items: [
          'wind measurement',
          'temperature measurement',
          'USB connectivity',
          'own hardware',
          'own software',
        ],
      },
      {
        type: 'paragraph',
        text: 'Introduction of custom enclosure development and manufacturing.',
      },
      {
        type: 'paragraph',
        text: 'Industrial design created in the Czech Republic.',
      },
    ],
    image: 'TX20USB product',
  },
  {
    year: '2010',
    title: 'Wind Tunnel & Ultrasonic Development',
    content: [
      { type: 'paragraph', text: 'Installation of ELD3 wind tunnel.' },
      {
        type: 'paragraph',
        text: 'Beginning of advanced ultrasonic weather station development.',
      },
    ],
    image: 'Wind tunnel',
  },
  {
    year: '2010',
    title: 'Remote Drilling Platform',
    content: [
      {
        type: 'paragraph',
        text: 'Development of a universal remotely controlled drilling platform.',
      },
      {
        type: 'paragraph',
        text: 'Complete concept-to-product cycle completed in approximately three months.',
      },
    ],
    image: 'Product photos and development images',
    imageCount: 3,
  },
  {
    year: '2010',
    title: "World's First IoT Wind Sensor",
    content: [
      {
        type: 'paragraph',
        text: 'Development of an Ethernet-enabled wind sensor with:',
      },
      {
        type: 'list',
        items: [
          'pressure measurement',
          'humidity measurement',
          'temperature measurement',
          'own TCP/IP stack',
          'HTTP',
          'Telnet',
          'SNMP',
        ],
      },
    ],
    image: 'Wind sensor platform',
  },
  {
    year: '2011',
    title: 'IQsocket Brand Introduced',
    content: [
      { type: 'paragraph', text: 'Launch of the IQsocket brand.' },
      { type: 'paragraph', text: 'Development included:' },
      {
        type: 'list',
        items: [
          'custom socket design',
          'custom molds',
          'DIN-rail versions',
          'industrial variants',
        ],
      },
      {
        type: 'paragraph',
        text: 'The IQsocket brand became the umbrella for a growing family of remote power control and monitoring products.',
      },
      {
        type: 'paragraph',
        text: 'Distributed internationally under multiple partner brands.',
      },
    ],
    image: 'IQsocket product family',
    imageCount: 3,
  },
  {
    year: '2011',
    title: 'Smart Board IoT Controller',
    content: [
      {
        type: 'paragraph',
        text: 'Introduction of compact industrial controllers with integrated networking and own TCP/IP stack.',
      },
    ],
    image: 'Smart Board products',
  },
  {
    year: '2012',
    title: 'EMC Laboratories',
    content: [
      { type: 'paragraph', text: 'Creation of in-house EMC facilities.' },
      { type: 'paragraph', text: 'Equipment included:' },
      {
        type: 'list',
        items: [
          'GTEM chamber',
          'artificial mains network',
          'safety testing equipment',
        ],
      },
    ],
    image: 'EMC laboratory',
  },
  {
    year: '2012',
    title: 'Manufacturing Expansion',
    content: [
      {
        type: 'paragraph',
        text: 'Expansion of in-house production capabilities.',
      },
      { type: 'paragraph', text: 'Facilities included:' },
      {
        type: 'list',
        items: [
          'injection molding',
          'two Europlacer SMT lines',
          'electronics manufacturing',
        ],
      },
    ],
    image: 'SMT lines and production facilities',
    imageCount: 3,
  },
  {
    year: '2015',
    title: 'Industrial IoT Expansion',
    content: [
      { type: 'paragraph', text: 'Launch of IQTB-TC840.' },
      { type: 'paragraph', text: 'Industrial IoT controller with:' },
      {
        type: 'list',
        items: ['integrated datalogger', 'sensor charts', 'remote monitoring'],
      },
    ],
    image: 'IQTB-TC840',
  },
  {
    year: '2020',
    title: 'Battery Monitoring Systems',
    content: [
      {
        type: 'paragraph',
        text: 'Development of advanced battery monitoring systems.',
      },
      { type: 'paragraph', text: 'Projects included:' },
      { type: 'list', items: ['CPM', 'BCC'] },
      { type: 'paragraph', text: 'Features:' },
      {
        type: 'list',
        items: [
          'Ethernet connectivity',
          'own TCP/IP stack',
          'custom hardware',
          'custom firmware written in C',
        ],
      },
      {
        type: 'paragraph',
        text: 'Developed for industrial energy storage applications.',
      },
    ],
    image: 'BMS hardware',
  },
  {
    year: '2026',
    title: 'Environmental Monitoring Systems',
    content: [
      {
        type: 'paragraph',
        text: 'Finalization of a new generation of environmental monitoring platforms.',
      },
      { type: 'paragraph', text: 'Focus areas:' },
      {
        type: 'list',
        items: [
          'weather monitoring',
          'industrial sensing',
          'remote telemetry',
          'environmental analytics',
        ],
      },
    ],
    image: 'Current monitoring products',
  },
]

function FrameIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-5-5L5 20" />
    </svg>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

/**
 * IQtronic-branded timeline marker. The circular ring forms the "O" loop of a
 * capital "Q", and the short diagonal stroke at the lower-right forms its tail.
 * The opaque fill masks the orange axis running behind it.
 */
function QMarker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle
        cx="10.5"
        cy="10.5"
        r="7.75"
        className="fill-background stroke-accent"
        strokeWidth="2.25"
      />
      <line
        x1="13.4"
        y1="13.4"
        x2="19.5"
        y2="19.5"
        className="stroke-accent"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TimelineMedia({
  caption,
  count = 1,
  video,
}: {
  caption: string
  count?: number
  video?: boolean
}) {
  const extra = Math.max(0, Math.min(count - 1, 3))
  return (
    <figure>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-secondary">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <FrameIcon className="size-10 text-muted-foreground/60" />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Historical image
          </span>
        </div>
        {video ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <PlayIcon className="size-6" />
            </span>
          </div>
        ) : null}
      </div>

      {extra > 0 ? (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {Array.from({ length: extra }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center rounded-sm border border-border bg-secondary"
            >
              <FrameIcon className="size-6 text-muted-foreground/50" />
            </div>
          ))}
        </div>
      ) : null}

      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

function MilestoneEntry({ milestone }: { milestone: Milestone }) {
  return (
    <article>
      <TimelineMedia
        caption={milestone.image}
        count={milestone.imageCount}
        video={milestone.video}
      />
      <div className="mt-6">
        <div className="font-mono text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
          {milestone.year}
        </div>
        <h3 className="mt-2 text-balance text-xl font-semibold tracking-tight sm:text-2xl">
          {milestone.title}
        </h3>
        <div className="mt-4 flex flex-col gap-4">
          {milestone.content.map((block, idx) =>
            block.type === 'paragraph' ? (
              <p
                key={idx}
                className="text-pretty leading-relaxed text-muted-foreground"
              >
                {block.text}
              </p>
            ) : (
              <ul key={idx} className="flex flex-col gap-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-muted-foreground"
                  >
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
      </div>
    </article>
  )
}

export function InnovationTimeline() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <header className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            Innovation timeline
          </div>
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            A history written in products
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From RF engineering to industrial IoT — twenty-five years of
            original ideas and real engineering, discovered one product at a
            time.
          </p>
        </header>

        <div className="relative mt-16 lg:mt-24">
          {/* Continuous central axis */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 bg-accent lg:left-1/2"
          />
          <ol className="flex flex-col gap-16 lg:block lg:gap-0">
            {MILESTONES.map((milestone, i) => {
              const isLeft = i % 2 === 0
              return (
                <li
                  key={`${milestone.year}-${milestone.title}`}
                  className={cn(
                    'relative',
                    // Pull alternating milestones upward on desktop so the next
                    // entry begins partway up the previous one — a compact,
                    // interleaved timeline. The first item keeps its position.
                    i > 0 && 'lg:-mt-48',
                  )}
                >
                  {/* IQtronic "Q" marker sitting on the axis */}
                  <span
                    className="absolute left-5 top-1 z-10 -translate-x-1/2 lg:left-1/2"
                    aria-hidden="true"
                  >
                    <QMarker className="size-7" />
                  </span>
                  <div
                    className={cn(
                      'pl-12 lg:w-[calc(50%-3rem)] lg:pl-0',
                      isLeft ? 'lg:mr-auto' : 'lg:ml-auto',
                    )}
                  >
                    <MilestoneEntry milestone={milestone} />
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
