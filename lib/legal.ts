// Central data model for the IQtronic Legal Center.
//
// Every legal, commercial and compliance document is described by a single
// LegalDocument object. Rendering is fully data-driven: to publish another
// document, add one object to LEGAL_DOCUMENTS below — no JSX changes required.

export type LegalCategory =
  | 'Commercial'
  | 'Legal'
  | 'Support'
  | 'Privacy'
  | 'Compliance'
  | 'Technical'
  | 'Partner'

export interface LegalDocument {
  /** Sequential document number (also used to build "Document 03"). */
  id: number
  title: string
  /** One-sentence description of the document's scope. */
  description: string
  category: LegalCategory
  version: string
  /** ISO date (YYYY-MM-DD) of the last revision. */
  lastUpdated: string
  /** Publicly listed documents render; partner-only ones stay hidden. */
  public: boolean
  pdfUrl: string
}

// Filter categories shown as buttons. "All" is handled separately in the UI.
export const LEGAL_CATEGORIES: LegalCategory[] = [
  'Commercial',
  'Legal',
  'Support',
  'Privacy',
  'Compliance',
  'Technical',
  'Partner',
]

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 1,
    title: 'B2B Terms',
    description:
      'General terms and conditions governing sales to businesses, distributors and resellers.',
    category: 'Commercial',
    version: 'v2.1',
    lastUpdated: '2025-11-04',
    public: true,
    pdfUrl: '/legal/01_B2B_Terms.pdf',
  },
  {
    id: 2,
    title: 'B2C Terms',
    description:
      'Consumer sales terms covering orders, payment, delivery and statutory rights for private customers.',
    category: 'Commercial',
    version: 'v2.0',
    lastUpdated: '2025-11-04',
    public: true,
    pdfUrl: '/legal/02_B2C_Terms.pdf',
  },
  {
    id: 3,
    title: 'Warranty Policy',
    description:
      'Warranty coverage, duration and limitations applicable to IQtronic hardware products.',
    category: 'Commercial',
    version: 'v1.6',
    lastUpdated: '2025-10-18',
    public: true,
    pdfUrl: '/legal/03_Warranty_Policy.pdf',
  },
  {
    id: 4,
    title: 'RMA Policy',
    description:
      'Procedure for requesting a return material authorisation and handling of faulty devices.',
    category: 'Support',
    version: 'v1.3',
    lastUpdated: '2025-09-30',
    public: true,
    pdfUrl: '/legal/04_RMA_Policy.pdf',
  },
  {
    id: 5,
    title: 'Returns Policy',
    description:
      'Conditions, timeframes and process for returning purchased products for refund or exchange.',
    category: 'Commercial',
    version: 'v1.4',
    lastUpdated: '2025-09-30',
    public: true,
    pdfUrl: '/legal/05_Returns_Policy.pdf',
  },
  {
    id: 6,
    title: 'Shipping Policy',
    description:
      'Delivery methods, lead times, incoterms and shipping responsibilities for orders.',
    category: 'Commercial',
    version: 'v1.2',
    lastUpdated: '2025-08-22',
    public: true,
    pdfUrl: '/legal/06_Shipping_Policy.pdf',
  },
  {
    id: 7,
    title: 'Privacy Policy',
    description:
      'How IQtronic collects, processes and protects personal data in line with the GDPR.',
    category: 'Privacy',
    version: 'v3.0',
    lastUpdated: '2025-11-12',
    public: true,
    pdfUrl: '/legal/07_Privacy_Policy.pdf',
  },
  {
    id: 8,
    title: 'Cookie Policy',
    description:
      'Details of the cookies and similar technologies used on the IQtronic website.',
    category: 'Privacy',
    version: 'v1.5',
    lastUpdated: '2025-10-02',
    public: true,
    pdfUrl: '/legal/08_Cookie_Policy.pdf',
  },
  {
    id: 9,
    title: 'Website Terms',
    description:
      'Terms of use governing access to and use of the IQtronic website and its content.',
    category: 'Legal',
    version: 'v1.4',
    lastUpdated: '2025-07-15',
    public: true,
    pdfUrl: '/legal/09_Website_Terms.pdf',
  },
  {
    id: 10,
    title: 'EULA',
    description:
      'End User Licence Agreement covering the use of IQtronic firmware and software.',
    category: 'Legal',
    version: 'v2.2',
    lastUpdated: '2025-10-28',
    public: true,
    pdfUrl: '/legal/10_EULA.pdf',
  },
  {
    id: 11,
    title: 'OEM Manufacturing Terms',
    description:
      'Contractual terms for OEM manufacturing engagements and embedded controller supply.',
    category: 'Partner',
    version: 'v1.1',
    lastUpdated: '2025-06-10',
    public: false,
    pdfUrl: '/legal/11_OEM_Manufacturing_Terms.pdf',
  },
  {
    id: 12,
    title: 'Distribution Terms',
    description:
      'Terms and obligations for authorised distributors of IQtronic products.',
    category: 'Partner',
    version: 'v1.2',
    lastUpdated: '2025-06-10',
    public: false,
    pdfUrl: '/legal/12_Distribution_Terms.pdf',
  },
  {
    id: 13,
    title: 'Technical Support Policy',
    description:
      'Scope, channels and response expectations for IQtronic technical support.',
    category: 'Support',
    version: 'v1.7',
    lastUpdated: '2025-11-01',
    public: true,
    pdfUrl: '/legal/13_Technical_Support_Policy.pdf',
  },
  {
    id: 14,
    title: 'Product Lifecycle Policy',
    description:
      'Lifecycle phases, longevity commitments and end-of-life handling for products.',
    category: 'Technical',
    version: 'v1.3',
    lastUpdated: '2025-09-08',
    public: true,
    pdfUrl: '/legal/14_Product_Lifecycle_Policy.pdf',
  },
  {
    id: 15,
    title: 'Export Compliance Policy',
    description:
      'Export control obligations, restricted destinations and screening requirements.',
    category: 'Compliance',
    version: 'v1.1',
    lastUpdated: '2025-08-19',
    public: true,
    pdfUrl: '/legal/15_Export_Compliance_Policy.pdf',
  },
  {
    id: 16,
    title: 'Intellectual Property Policy',
    description:
      'Ownership, use and protection of IQtronic trademarks, patents and copyrighted material.',
    category: 'Legal',
    version: 'v1.2',
    lastUpdated: '2025-07-30',
    public: true,
    pdfUrl: '/legal/16_Intellectual_Property_Policy.pdf',
  },
  {
    id: 17,
    title: 'Environmental Compliance Policy',
    description:
      'RoHS, WEEE and REACH compliance and IQtronic environmental responsibility commitments.',
    category: 'Compliance',
    version: 'v1.4',
    lastUpdated: '2025-10-11',
    public: true,
    pdfUrl: '/legal/17_Environmental_Compliance_Policy.pdf',
  },
  {
    id: 18,
    title: 'Vulnerability Disclosure Policy',
    description:
      'How to responsibly report security vulnerabilities and our coordinated disclosure process.',
    category: 'Compliance',
    version: 'v1.0',
    lastUpdated: '2025-11-06',
    public: true,
    pdfUrl: '/legal/18_Vulnerability_Disclosure_Policy.pdf',
  },
  {
    id: 19,
    title: 'AI Usage Policy',
    description:
      'Principles governing the responsible use of artificial intelligence in IQtronic products and services.',
    category: 'Legal',
    version: 'v1.0',
    lastUpdated: '2025-11-06',
    public: true,
    pdfUrl: '/legal/19_AI_Usage_Policy.pdf',
  },
  {
    id: 20,
    title: 'Disclaimer',
    description:
      'General legal disclaimer regarding product information, liability and website content.',
    category: 'Legal',
    version: 'v1.1',
    lastUpdated: '2025-05-20',
    public: true,
    pdfUrl: '/legal/20_Disclaimer.pdf',
  },
  {
    id: 21,
    title: 'Definitions',
    description:
      'Defined terms and terminology used consistently across the IQtronic Legal Framework.',
    category: 'Legal',
    version: 'v1.2',
    lastUpdated: '2025-07-15',
    public: true,
    pdfUrl: '/legal/21_Definitions.pdf',
  },
  {
    id: 22,
    title: 'Document Precedence',
    description:
      'The order of priority applied when individual legal documents appear to conflict.',
    category: 'Legal',
    version: 'v1.1',
    lastUpdated: '2025-07-15',
    public: true,
    pdfUrl: '/legal/22_Document_Precedence.pdf',
  },
  {
    id: 23,
    title: 'Revision History',
    description:
      'A chronological record of changes and version updates across the Legal Framework.',
    category: 'Legal',
    version: 'v1.9',
    lastUpdated: '2025-11-12',
    public: true,
    pdfUrl: '/legal/23_Revision_History.pdf',
  },
]

/** Only publicly listed documents; partner-only documents stay hidden. */
export const PUBLIC_LEGAL_DOCUMENTS = LEGAL_DOCUMENTS.filter((d) => d.public)

/** "Document 03" style label derived from the numeric id. */
export function formatDocumentNumber(id: number): string {
  return `Document ${String(id).padStart(2, '0')}`
}

/** Human-readable date, e.g. "12 Nov 2025". */
export function formatLastUpdated(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
