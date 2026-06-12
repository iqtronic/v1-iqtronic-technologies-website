import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Downloads } from '@/components/downloads'

export const metadata: Metadata = {
  title: 'Downloads — IQtronic Technologies',
  description:
    'Download datasheets, manuals, software and firmware for IQtronic industrial IoT products.',
}

export default function DownloadsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Downloads />
      </main>
      <SiteFooter />
    </>
  )
}
