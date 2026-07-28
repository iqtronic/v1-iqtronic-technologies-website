import type { Metadata } from 'next'
import { NewsHeader } from '@/components/news-page/news-header'
import { VideoHero } from '@/components/news-page/video-hero'
import { FeaturedNews } from '@/components/news-page/featured-news'
import { NewsGrid } from '@/components/news-page/news-grid'
import { getNewsCardItems } from '@/components/news-page/data'

export const metadata: Metadata = {
  title: 'IQtronic News',
  description:
    'Latest IQtronic product development milestones, engineering notes and company announcements.',
  robots: { index: false, follow: false },
}

export default function Page() {
  const items = getNewsCardItems()
  const [featured, ...rest] = items

  return (
    <div className="min-h-screen bg-background">
      <NewsHeader />

      <main className="pt-16">
        {/* Intro — homepage typography, centred */}
        <section className="px-6 pb-8 pt-14 text-center lg:pb-10 lg:pt-20">
          <h1 className="mx-auto max-w-4xl text-balance text-[2.375rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.15rem] lg:text-[3.9375rem]">
            Engineering Since <span className="text-[#e0420b]">1999</span>.
            <br />
            Industrial IoT Since <span className="text-[#e0420b]">2003</span>.
          </h1>
        </section>

        {/* IQ intro animation → full-width 16:9 video */}
        <VideoHero />

        {/* Latest News */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-24">
            <header className="mb-12 text-center">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Newsroom
              </div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Latest News
              </h2>
            </header>

            {featured ? <FeaturedNews item={featured} /> : null}

            {rest.length > 0 ? (
              <div className="mt-16 border-t border-border pt-16">
                <NewsGrid items={rest} />
              </div>
            ) : null}
          </div>
        </section>

        {/* Closing CTA — natural continuation to the main IQtronic site */}
        <section className="border-t border-border bg-card">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Discover the products behind the story.
            </h2>
            <a
              href="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Products
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
