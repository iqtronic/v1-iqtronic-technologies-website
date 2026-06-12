import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductsOverview } from '@/components/products-overview'

export const metadata: Metadata = {
  title: 'Products — IQtronic | IP Watchdogs, Remote Power Control & Monitoring',
  description:
    'Browse IQtronic industrial products: IQcontrollers (IQsocket, IQgate, IQboard) IP watchdogs and remote power control, ENVISTATION weather stations, and battery monitoring systems. Built for long product lifetimes.',
  keywords: [
    'IP watchdog',
    'remote power control',
    'industrial watchdog',
    'network watchdog',
    'remote reboot',
    'industrial monitoring',
    'weather station',
    'battery monitoring system',
  ],
  alternates: { canonical: '/products' },
}

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <ProductsOverview />
      </main>
      <SiteFooter />
    </>
  )
}
