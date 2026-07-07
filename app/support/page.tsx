import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Support } from '@/components/support'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Support — IQtronic Technologies',
  description:
    'The IQtronic support hub. Choose your product family for documentation, firmware, video tutorials, a knowledge base, downloads and direct support.',
}

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Support />
      </main>
      <SiteFooter />
    </>
  )
}
