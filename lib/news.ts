export type NewsArticle = {
  slug: string
  title: string
  date: string
  category: string
  image: string
  summary: string
  body: string[]
}

export const NEWS: NewsArticle[] = [
  {
    slug: 'weather-station-network-deployment',
    title: 'IQtronic weather station network goes live across regional energy sites',
    date: '2026-05-28',
    category: 'Deployments',
    image: '/images/news-weather-network.png',
    summary:
      'A fleet of calibrated industrial weather stations is now feeding live meteorological data to grid operators, enabling smarter renewable-energy forecasting and asset protection.',
    body: [
      'IQtronic has completed the rollout of a regional network of industrial weather stations supporting renewable-energy operators. Each station measures wind speed and direction, temperature, humidity, barometric pressure and solar radiation, transmitting calibrated readings over cellular and NB-IoT links.',
      'The stations were characterised and certified in our own laboratories before deployment, and their IP66 housings were validated for years of unattended outdoor operation. Solar and battery power options allow installation on fully off-grid sites.',
      'Live telemetry now flows into operators&apos; control rooms through our monitoring gateways, giving forecasting teams the granular, site-specific data they need to schedule generation and protect equipment ahead of severe weather.',
    ],
  },
  {
    slug: 'iqsocket-firmware-update',
    title: 'New IQSocket firmware adds smarter ping-watchdog and scheduling',
    date: '2026-04-15',
    category: 'Product Updates',
    image: '/images/news-iqsocket-firmware.png',
    summary:
      'The latest IQSocket firmware introduces improved automatic recovery logic, more flexible scheduling and refined temperature alerting for remote power control installations.',
    body: [
      'A new firmware release for the IQSocket family is now available through the Download Center. The update sharpens the ping-watchdog logic that detects dead connections and autonomously power-cycles frozen equipment, reducing the need for site visits.',
      'Scheduling has been reworked to support more granular weekly profiles, and temperature alerting now offers configurable thresholds with both SMS and email notifications.',
      'The update is recommended for all deployed units and can be applied remotely. Full release notes and the firmware package are available on the Download Center and through technical support.',
    ],
  },
  {
    slug: 'laboratory-expansion',
    title: 'IQtronic expands in-house EMC and environmental testing laboratory',
    date: '2026-03-02',
    category: 'Company',
    image: '/images/news-lab-expansion.png',
    summary:
      'An expanded laboratory adds new EMC and environmental test capacity, shortening certification cycles for both our own products and custom electronics development clients.',
    body: [
      'IQtronic has expanded its in-house laboratory with additional EMC test equipment and environmental chambers. The investment increases capacity for pre-compliance and qualification testing across our product lines and contract development projects.',
      'Keeping testing in-house means design, manufacture and validation stay under one roof — the continuity our clients rely on to move from first principles to a final compliance report without handoffs.',
      'The expanded facility is already supporting several custom electronics development programmes, helping clients shorten certification cycles and reach the field faster.',
    ],
  },
]

export function getArticle(slug: string) {
  return NEWS.find((a) => a.slug === slug)
}

// Returns articles sorted newest-first by publication date.
export function getSortedNews() {
  return [...NEWS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

// Always returns the single most recent article.
export function getLatestArticle() {
  return getSortedNews()[0]
}

export function formatNewsDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
