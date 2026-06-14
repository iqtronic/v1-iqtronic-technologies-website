import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Company } from '@/components/company'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Who We Are — IQtronic Technologies',
  description:
    'IQtronic is an independent European engineering company. Engineering since 1999, Industrial IoT since 2003, proudly designed in Czechia — instrumentation, control and connectivity hardware built to run for years.',
  alternates: { canonical: '/who-we-are' },
}

export default function WhoWeArePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <Company />
      </main>
      <SiteFooter />
    </>
  )
}
