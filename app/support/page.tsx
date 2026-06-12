import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { Support } from '@/components/support'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Support — IQtronic Technologies',
  description:
    'The IQtronic support hub: open a support ticket, download datasheets, manuals, software and firmware, manage licenses, and find warranty and service information.',
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
