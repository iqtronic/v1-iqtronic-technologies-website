'use client'

import { useMemo, useState } from 'react'
import { PUBLIC_LEGAL_DOCUMENTS } from '@/lib/legal'
import { LegalSearch } from '@/components/legal/legal-search'
import {
  CategoryFilter,
  type CategoryValue,
} from '@/components/legal/category-filter'
import { LegalDocumentCard } from '@/components/legal/legal-document-card'

export function LegalBrowser() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryValue>('All')

  const documents = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PUBLIC_LEGAL_DOCUMENTS.filter((doc) => {
      const matchesCategory = category === 'All' || doc.category === category
      if (!matchesCategory) return false
      if (!q) return true
      return (
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.category.toLowerCase().includes(q)
      )
    })
  }, [query, category])

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-10 lg:pt-16">
        <div className="max-w-2xl">
          <LegalSearch
            value={query}
            onChange={setQuery}
            onClear={() => setQuery('')}
            resultCount={documents.length}
          />
        </div>

        <div className="mt-6">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {documents.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <LegalDocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-sm border border-dashed border-border bg-card px-6 py-16 text-center">
            <p className="text-base font-medium text-foreground">
              No documents found
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              No legal documents match your search. Try a different keyword or
              category.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setCategory('All')
              }}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
