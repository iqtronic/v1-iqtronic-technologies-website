import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { VideoHero } from '@/components/news-page/video-hero'
import { FeaturedNews } from '@/components/news-page/featured-news'
import { NewsGrid } from '@/components/news-page/news-grid'
import { getNewsCardItems } from '@/components/news-page/data'

export const metadata: Metadata = {
  title: 'IQtronic News & Development',
  description:
    'Latest IQtronic product development milestones, engineering notes and company announcements.',
  robots: { index: false, follow: false },
}

export default function Page() {
  const items = getNewsCardItems()
  const [featured, ...rest] = items

  return (
    <>
      <SiteHeader />
      <main>
        <VideoHero />

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
            <header className="max-w-2xl">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Newsroom
              </div>
              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Latest News
              </h1>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Product development milestones, engineering notes and company
                announcements, straight from the IQtronic newsroom.
              </p>
            </header>

            {featured ? (
              <div className="mt-12">
                <FeaturedNews item={featured} />
              </div>
            ) : null}

            {rest.length > 0 ? (
              <div className="mt-16 border-t border-border pt-16">
                <NewsGrid items={rest} />
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
