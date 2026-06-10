'use client'

import { useMemo, useState } from 'react'
import {
  DISTRIBUTORS,
  REGIONS,
  REGION_MARKERS,
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
      <DistributorMap activeRegion={region} onSelectRegion={handleRegion} />

      {/* Region marker legend */}
      <div className="mt-6 flex flex-wrap gap-px overflow-hidden rounded-sm border border-border bg-border">
        <button
          type="button"
          onClick={() => handleRegion('All')}
          aria-pressed={region === 'All'}
          className={`flex items-center gap-2 bg-card px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-foreground ${
            region === 'All' ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          <span
            className={`inline-block size-1.5 ${
              region === 'All' ? 'bg-accent' : 'bg-muted-foreground'
            }`}
            aria-hidden="true"
          />
          All regions
        </button>
        {REGION_MARKERS.map((m) => (
          <button
            key={m.region}
            type="button"
            onClick={() => handleRegion(m.region)}
            aria-pressed={region === m.region}
            className={`flex items-center gap-2 bg-card px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-foreground ${
              region === m.region ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            <span
              className={`inline-block size-1.5 ${
                region === m.region ? 'bg-accent' : 'bg-muted-foreground'
              }`}
              aria-hidden="true"
            />
            {m.label}
            <span className="text-muted-foreground/70">{m.partners}</span>
          </button>
        ))}
      </div>

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

                {orderedCountries.map((c) => (
                  <div key={c} className="mt-8">
                    <h4 className="text-sm font-medium tracking-tight text-muted-foreground">
                      {c}
                    </h4>
                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {byCountry.get(c)!.map((d) => (
                        <DistributorCard key={d.company} distributor={d} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function DistributorCard({
  distributor: d,
}: {
  distributor: (typeof DISTRIBUTORS)[number]
}) {
  return (
    <div className="flex flex-col rounded-sm border border-border bg-card p-6">
      <div className="flex items-start justify-between gap-3">
        <h5 className="text-base font-medium tracking-tight">{d.company}</h5>
        <span className="shrink-0 rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          {d.type}
        </span>
      </div>

      <dl className="mt-5 flex flex-col gap-3 border-t border-border pt-5 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Location
          </dt>
          <dd className="text-right text-foreground">
            {d.city}, {d.country}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Focus
          </dt>
          <dd className="text-right text-foreground">{d.focus}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
            Email
          </dt>
          <dd className="text-right">
            <a
              href={`mailto:${d.email}`}
              className="text-foreground transition-colors hover:text-accent"
            >
              {d.email}
            </a>
          </dd>
        </div>
      </dl>

      <a
        href={`https://${d.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
      >
        Visit website
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
