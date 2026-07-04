import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LicensingHero } from '@/components/licensing/licensing-hero'
import { LicensingProducts } from '@/components/licensing/licensing-products'
import { LicensingHow } from '@/components/licensing/licensing-how'
import { LicensingLevels } from '@/components/licensing/licensing-levels'
import { LicensingComparison } from '@/components/licensing/licensing-comparison'
import { LicensingUpgrade } from '@/components/licensing/licensing-upgrade'
import { LicensingFaq } from '@/components/licensing/licensing-faq'
import { LicensingContact } from '@/components/licensing/licensing-contact'

export const metadata: Metadata = {
  title:
    'Smart Socket Licensing — IQsocket, IQgate & IQboard | IQtronic Technologies',
  description:
    'Flexible software licensing for IQsocket, IQgate and IQboard. Every device includes a BASE licence; unlock MEDIUM and FULL features at any time with a licence key — no hardware replacement required.',
  alternates: { canonical: '/iqtronic-smart-socket-licensing' },
}

export default function SmartSocketLicensingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LicensingHero />
        <LicensingProducts />
        <LicensingHow />
        <LicensingLevels />
        <LicensingComparison />
        <LicensingUpgrade />
        <LicensingFaq />
        <LicensingContact />
      </main>
      <SiteFooter />
    </>
  )
}
