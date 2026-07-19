'use client'

import { useMemo, useState } from 'react'
import {
  DISTRIBUTORS,
  REGIONS,
  countrySlug,
  type Region,
} from '@/lib/distributors'
import { DistributorMap } from '@/components/distributor-map'

export function DistributorDirectory() {
  const [region, setRegion] = useState<Region | 'All'>('All')
  const [country, setCountry] = useState<string>('All')

  const countries = useMemo(() => {
    const pool =
      region === 'All'
        ? DISTRIBUTORS
        : DISTRIBUTORS.filter((d) => d.region === region)
    return ['All', ...Array.from(new Set(pool.map((d) => d.country))).sort()]
  }, [region])

  const filtered = useMemo(
    () =>
      DISTRIBUTORS.filter(
        (d) =>
          (region === 'All' || d.region === region) &&
          (country === 'All' || d.country === country),
      ),
    [region, country],
  )

  function handleRegion(next: Region | 'All') {
    setRegion(next)
    setCountry('All')
  }

  // When a country is selected on the map, clear filters so the target
  // section is rendered, then smooth-scroll to that country's anchor.
  function handleCountrySelect(countryName: string) {
    setRegion('All')
    setCountry('All')
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => {
        const el = document.getElementById(countrySlug(countryName))
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }

  // Group filtered results by region, then country.
  const grouped = useMemo(() => {
    const map = new Map<Region, Map<string, typeof DISTRIBUTORS>>()
    for (const d of filtered) {
      if (!map.has(d.region)) map.set(d.region, new Map())
      const byCountry = map.get(d.region)!
      if (!byCountry.has(d.country)) byCountry.set(d.country, [])
      byCountry.get(d.country)!.push(d)
    }
    return map
  }, [filtered])

  const orderedRegions = REGIONS.filter((r) => grouped.has(r))

  return (
    <div>
      {/* Map */}
      <DistributorMap
        activeRegion={region}
        onSelectRegion={handleRegion}
        onSelectCountry={handleCountrySelect}
      />

      {/* Filters */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:max-w-xl">
        <div>
          <label
            htmlFor="filter-region"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            Region
          </label>
          <select
            id="filter-region"
            value={region}
            onChange={(e) => handleRegion(e.target.value as Region | 'All')}
            className="mt-2 w-full rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          >
            <option value="All">All regions</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="filter-country"
            className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
          >
            Country
          </label>
          <select
            id="filter-country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-2 w-full rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'All countries' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {filtered.length} partner{filtered.length === 1 ? '' : 's'}
        {region !== 'All' ? ` · ${region}` : ''}
      </p>

      {/* Grouped directory */}
      {orderedRegions.length === 0 ? (
        <div className="mt-6 rounded-sm border border-border bg-card p-12 text-center text-sm text-muted-foreground">
          No partners match the current filters.
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-12">
          {orderedRegions.map((r) => {
            const byCountry = grouped.get(r)!
            const orderedCountries = Array.from(byCountry.keys()).sort()
            return (
              <div key={r}>
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <span
                    className="inline-block size-2 bg-accent"
                    aria-hidden="true"
                  />
                  <h3 className="font-mono text-sm uppercase tracking-[0.14em] text-foreground">
                    {r}
                  </h3>
                </div>

                {orderedCountries.map((c) => {
                  const entries = byCountry.get(c)!
                  return (
                    <div key={c} id={countrySlug(c)} className="mt-8 scroll-mt-28">
                      {/* Country header: flag + name + subtle separator */}
                      <div className="flex items-center gap-3 border-b border-border pb-3">
                        <img
                          src={`https://flagcdn.com/${entries[0].countryCode}.svg`}
                          alt={`${c} flag`}
                          width={22}
                          height={16}
                          className="h-4 w-[22px] shrink-0 rounded-[2px] border border-border object-cover"
                          loading="lazy"
                        />
                        <h4 className="text-sm font-medium tracking-tight text-foreground">
                          {c}
                        </h4>
                        <span className="font-mono text-xs text-muted-foreground">
                          {entries.length}
                        </span>
                      </div>

                      {/* Compact horizontal rows */}
                      <div className="flex flex-col divide-y divide-border">
                        {entries.map((d) => (
                          <DistributorRow key={d.company} distributor={d} />
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function DistributorRow({
  distributor: d,
}: {
  distributor: (typeof DISTRIBUTORS)[number]
}) {
  // Build a compact monogram from the company name as a lightweight logo stand-in.
  const monogram = d.company
    .replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div className="grid grid-cols-1 items-center gap-x-6 gap-y-3 py-5 md:grid-cols-12">
      {/* Logo + company name */}
      <div className="flex items-center gap-5 md:col-span-4">
        <span
          className="flex h-9 w-[108px] shrink-0 items-center justify-center rounded-sm border border-border bg-muted font-mono text-xs font-medium tracking-tight text-foreground"
          aria-hidden="true"
        >
          {monogram}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium tracking-tight text-foreground">
            {d.company}
          </p>
          <p className="truncate text-xs text-muted-foreground">{d.focus}</p>
        </div>
      </div>

      {/* City / region */}
      <div className="md:col-span-2">
        <p className="text-sm text-foreground">{d.city}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          {d.region}
        </p>
      </div>

      {/* Contact: website, email, phone */}
      <div className="flex flex-col gap-1 md:col-span-4">
        <a
          href={`https://${d.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-sm text-foreground transition-colors hover:text-accent"
        >
          {d.website}
        </a>
        <a
          href={`mailto:${d.email}`}
          className="truncate text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          {d.email}
        </a>
        <a
          href={`tel:${d.phone.replace(/\s+/g, '')}`}
          className="text-sm text-muted-foreground transition-colors hover:text-accent"
        >
          {d.phone}
        </a>
      </div>

      {/* Distributor type */}
      <div className="md:col-span-2 md:text-right">
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
          <span className="inline-block size-1.5 bg-accent" aria-hidden="true" />
          {d.type}
        </span>
      </div>
    </div>
  )
}
