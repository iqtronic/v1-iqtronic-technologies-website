import { Fragment } from 'react'

/**
 * Registered IQtronic trademarks. A superscript ® is appended after each
 * occurrence so visitors can see these are registered brand names. Matching is
 * case-insensitive but the original casing in the text is preserved.
 */
const REGISTERED_BRANDS = ['IQtronic', 'ENVISTATION', 'SENSORAGE']

const BRAND_PATTERN = new RegExp(`(${REGISTERED_BRANDS.join('|')})`, 'gi')

/**
 * Renders a product/brand name, adding a small superscript ® after any
 * registered trademark word. Purely presentational — pass the plain name string
 * (e.g. "IQtronic Controllers" or "ENVISTATION").
 */
export function BrandName({ name }: { name: string }) {
  const parts = name.split(BRAND_PATTERN)

  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null
        const isBrand = REGISTERED_BRANDS.some(
          (brand) => brand.toLowerCase() === part.toLowerCase(),
        )
        if (!isBrand) return <Fragment key={index}>{part}</Fragment>
        return (
          <Fragment key={index}>
            {part}
            <sup className="ml-0.5 text-[0.55em] font-normal align-super">®</sup>
          </Fragment>
        )
      })}
    </>
  )
}
