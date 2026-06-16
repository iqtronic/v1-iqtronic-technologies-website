export type NewsItem = {
  date: string
  category: string
  title: string
  text: string
}

// Static, hardcoded development/news updates. Newest first.
// This single source feeds both the homepage "Current Development" strip
// (first two items) and the full /news page (all items).
export const NEWS_ITEMS: NewsItem[] = [
  {
    date: '2026',
    category: 'In Development',
    title: 'Environmental Monitoring Platform',
    text: 'New modular platform for industrial sensing, telemetry and environmental analytics.',
  },
  {
    date: '2026',
    category: 'In Development',
    title: 'Ultrasonic Wind Sensor',
    text: 'Next-generation ultrasonic anemometer technology for high-precision weather monitoring.',
  },
  {
    date: '2025',
    category: 'Product Development',
    title: 'Next Generation IQsocket',
    text: 'Development continues on the next generation of remote power control and monitoring products.',
  },
]
