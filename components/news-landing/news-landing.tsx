import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { CurrentDevelopment } from '@/components/current-development'
import { News } from '@/components/news'

/**
 * Shared page used by both the /facebook and /linkedin routes. It is the
 * existing homepage, reusing the exact same components, with only two
 * differences:
 *
 *  1. The hero is rendered in its compact variant (smaller height, globe,
 *     headline and statistics) so it reads as a short introduction.
 *  2. The existing News section is shown immediately after the Current
 *     Development strip and is the dominant content of the page.
 *
 * Nothing is recreated: Hero, CurrentDevelopment and News are the real homepage
 * components using the single existing News data source.
 */
export function NewsLanding() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero compact />
        <CurrentDevelopment />
        <News />
      </main>
      <SiteFooter />
    </>
  )
}
