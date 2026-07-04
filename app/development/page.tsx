import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DevelopmentEngineers } from '@/components/development/development-engineers'
import { DevelopmentHero } from '@/components/development/development-hero'
import { DevelopmentProcess } from '@/components/development/development-process'
import { DevelopmentWhy } from '@/components/development/development-why'
import { DevelopmentModels } from '@/components/development/development-models'
import { DevelopmentCta } from '@/components/development/development-cta'

export const metadata: Metadata = {
  title: 'Development — Engineering from Idea to Production | IQtronic Technologies',
  description:
    'Complete electronic product development — from the first schematic to certified production. For 25+ years IQtronic has developed industrial electronics, embedded firmware and complete IoT solutions, with EMC pre-compliance and certification support under one roof.',
  alternates: { canonical: '/development' },
}

export default function DevelopmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <DevelopmentEngineers />
        <DevelopmentHero />
        <DevelopmentProcess />
        <DevelopmentWhy />
        <DevelopmentModels />
        <DevelopmentCta />
      </main>
      <SiteFooter />
    </>
  )
}
