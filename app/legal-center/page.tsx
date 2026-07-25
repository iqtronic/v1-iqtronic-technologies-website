import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { LegalInformationCard } from '@/components/legal/legal-information-card'
import { LegalBrowser } from '@/components/legal/legal-browser'
import { LegalFaq } from '@/components/legal/legal-faq'
import { LegalContact } from '@/components/legal/legal-contact'

export const metadata: Metadata = {
  title: 'Legal Center | IQtronic Technologies',
  description:
    'Legal policies, warranty conditions, technical support rules, compliance documentation and the complete IQtronic Legal Framework.',
  alternates: { canonical: '/legal-center' },
}

export default function LegalCenterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Legal Framework"
          title="Legal Center"
          description="The IQtronic Legal Framework provides legal, commercial and technical policies governing the use of our products, software, services and website. These documents ensure transparency, legal certainty and long-term cooperation with customers, distributors and OEM partners."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Legal Center' }]}
        />
        <LegalInformationCard />
        <LegalBrowser />
        <LegalFaq />
        <LegalContact />
      </main>
      <SiteFooter />
    </>
  )
}
