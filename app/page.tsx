import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Company } from '@/components/company'
import { Pillars } from '@/components/pillars'
import { Products } from '@/components/products'
import { Engineering } from '@/components/engineering'
import { Laboratories } from '@/components/laboratories'
import { Enclosures } from '@/components/enclosures'
import { LatestNews } from '@/components/latest-news'
import { Contact } from '@/components/contact'
import { StayInformed } from '@/components/stay-informed'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <Products />
        <Engineering />
        <Laboratories />
        <Enclosures />
        <Company />
        <LatestNews />
        <Contact />
        <StayInformed />
      </main>
      <SiteFooter />
    </>
  )
}
