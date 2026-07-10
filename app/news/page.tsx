import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { News } from '@/components/news'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'News & Development — IQtronic Technologies',
  description:
    'Latest product development updates, engineering notes and company milestones from IQtronic Technologies.',
  alternates: {
    canonical: '/news',
    types: {
      'application/rss+xml': '/news/rss.xml',
    },
  },
}

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <News />
      </main>
      <SiteFooter />
    </>
  )
}
