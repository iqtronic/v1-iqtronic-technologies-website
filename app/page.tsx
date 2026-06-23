import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { CurrentDevelopment } from '@/components/current-development'
import { WhoWeAreTeaser } from '@/components/who-we-are-teaser'
import { Pillars } from '@/components/pillars'
import { Products } from '@/components/products'
import { Engineering } from '@/components/engineering'
import { Laboratories } from '@/components/laboratories'
import { Enclosures } from '@/components/enclosures'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <CurrentDevelopment />
        <Products />
        <Pillars />
        <Engineering />
        <Laboratories />
        <Enclosures />
        <WhoWeAreTeaser />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
