import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { EnclosuresPage } from '@/components/enclosures-page'

export const metadata: Metadata = {
  title: 'Enclosures — IQtronic Technologies',
  description: 'Own tooling, injection moulds and OEM customization for IQtronic hardware.',
  alternates: { canonical: '/enclosures' },
}

export default function EnclosuresRoute() {
  return (
    <>
      <SiteHeader />
      <main>
        <EnclosuresPage />
      </main>
      <SiteFooter />
    </>
  )
}
