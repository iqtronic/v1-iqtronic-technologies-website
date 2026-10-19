import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Laboratories } from '@/components/laboratories'

export const metadata: Metadata = {
  title: 'Laboratories — IQtronic Technologies',
  description: 'Accredited EMC, microwave and wind tunnel testing facilities at IQtronic Technologies.',
  alternates: { canonical: '/laboratories' },
}

export default function LaboratoriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pb-14 lg:pt-24">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Accredited laboratories</p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">In-house testing facilities.</h1>
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">Characterise, certify and qualify products before they ship. Our laboratories ensure every device meets the highest industrial standards.</p>
          </div>
        </div>
        <Laboratories />
      </main>
      <SiteFooter />
    </>
  )
}
