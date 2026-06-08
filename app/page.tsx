import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Company } from '@/components/company'
import { Pillars } from '@/components/pillars'
import { Products } from '@/components/products'
import { Engineering } from '@/components/engineering'
import { Laboratories } from '@/components/laboratories'
import { Contact } from '@/components/contact'
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
        <Company />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
