import type { Metadata } from 'next'
import { NewsLanding } from '@/components/news-landing/news-landing'

export const metadata: Metadata = {
  title: 'IQtronic News & Development',
  description:
    'Latest IQtronic product development milestones, engineering notes and company announcements.',
  robots: { index: false, follow: false },
}

export default function Page() {
  return <NewsLanding />
}
