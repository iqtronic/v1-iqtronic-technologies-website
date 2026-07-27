import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CurrentDevelopment } from '@/components/current-development'
import { Products } from '@/components/products'
import { getArticles } from '@/lib/news'
import { CompactHero } from '@/components/news-landing/compact-hero'
import { NewsFeed } from '@/components/news-landing/news-feed'

/**
 * Shared, News-focused landing page used by both the /facebook and /linkedin
 * routes. It reuses the existing homepage building blocks (header, hero
 * sub-components, Current Development strip, product cards, footer) and the
 * single News data source (`getArticles`), so any article change in the data
 * layer appears on the homepage and both routes automatically.
 *
 * The hero is deliberately compact; the News section is the dominant content.
 * The page contains no social-network branding or posting/export controls.
 */
export function NewsLanding() {
  const articles = getArticles()

  return (
    <>
      <SiteHeader />
      <main>
        <CompactHero />
        <CurrentDevelopment />
        <NewsFeed articles={articles} />
        <Products />
      </main>
      <SiteFooter />
    </>
  )
}
