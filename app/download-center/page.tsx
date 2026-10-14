import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DownloadCenter } from '@/components/download-center'

export const metadata: Metadata = {
  title: 'Download Center — IQtronic Technologies',
  description:
    'Find IQtronic firmware, software, manuals, datasheets and certificates by product family.',
}

export default function DownloadCenterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <DownloadCenter />
      </main>
      <SiteFooter />
    </>
  )
}
