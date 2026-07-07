/**
 * Support data model.
 *
 * The support system is data-driven: adding support for a new product only
 * requires appending a new `ProductSupport` entry below (name, image,
 * description and the per-section content). No layout or component changes are
 * needed — the reusable template and section components consume this data.
 */

export interface SupportResource {
  /** Visible label, e.g. "User Manual". */
  label: string
  /** Optional metadata shown beside the label, e.g. "PDF · EN · 2.4 MB". */
  meta?: string
  /** Destination. Placeholder "#" until real files/pages are wired up. */
  href?: string
}

export interface SupportFaqItem {
  question: string
  answer: string
}

export interface ProductSupport {
  /** Slug used in the route /support/[family]. */
  id: string
  /** Display name, e.g. "IQtronic Controllers". */
  name: string
  /** Short one-line summary shown on the hub card and template hero. */
  tagline: string
  /** Hero / card image path under /public. */
  image: string
  imageAlt: string
  /** Short product-family description shown under the hero. */
  description: string
  documentation: SupportResource[]
  videos: SupportResource[]
  knowledgeBase: SupportFaqItem[]
  downloads: SupportResource[]
}

/**
 * Shared placeholder content. Each product will later override these with its
 * own manuals, videos, downloads and FAQ. Kept here so every family renders a
 * complete, consistent page until real content is supplied.
 */
const PLACEHOLDER_DOCUMENTATION: SupportResource[] = [
  { label: 'User Manual', meta: 'PDF', href: '#' },
  { label: 'Quick Start Guide', meta: 'PDF', href: '#' },
  { label: 'Programming Manual', meta: 'PDF', href: '#' },
  { label: 'HTTP API', meta: 'Web', href: '#' },
]

const PLACEHOLDER_VIDEOS: SupportResource[] = [
  { label: 'First Installation', meta: 'Video', href: '#' },
  { label: 'Licence Activation', meta: 'Video', href: '#' },
  { label: 'Firmware Update', meta: 'Video', href: '#' },
  { label: 'Advanced Configuration', meta: 'Video', href: '#' },
]

const PLACEHOLDER_KNOWLEDGE_BASE: SupportFaqItem[] = [
  {
    question: 'How do I activate my licence?',
    answer:
      'Placeholder answer. Step-by-step licence activation instructions for this product will be published here.',
  },
  {
    question: 'How do I insert a licence key?',
    answer:
      'Placeholder answer. This article will explain where to enter the licence key in the device or utility.',
  },
  {
    question: 'How do I update firmware?',
    answer:
      'Placeholder answer. The firmware update procedure and recommended versions will be documented here.',
  },
  {
    question: 'Cannot connect to the device',
    answer:
      'Placeholder answer. Connection troubleshooting steps (network, cabling, addressing) will be listed here.',
  },
  {
    question: 'Device not responding',
    answer:
      'Placeholder answer. Diagnostics for an unresponsive device, including power and reset checks, will be added.',
  },
  {
    question: 'Restore factory settings',
    answer:
      'Placeholder answer. The factory reset procedure for this product will be described here.',
  },
  {
    question: 'Change IP address',
    answer:
      'Placeholder answer. Instructions for changing the network address will be provided here.',
  },
  {
    question: 'Relay does not switch',
    answer:
      'Placeholder answer. Troubleshooting for relay outputs and wiring will be documented here.',
  },
  {
    question: 'Firmware update failed',
    answer:
      'Placeholder answer. Recovery steps after an interrupted or failed firmware update will be added here.',
  },
  {
    question: 'Where can I find the serial number?',
    answer:
      'Placeholder answer. The location of the serial number on the label and in the interface will be shown here.',
  },
]

const PLACEHOLDER_DOWNLOADS: SupportResource[] = [
  { label: 'Firmware', meta: 'BIN', href: '#' },
  { label: 'Windows Utility', meta: 'EXE', href: '#' },
  { label: 'Datasheet', meta: 'PDF', href: '#' },
  { label: 'Manuals', meta: 'PDF', href: '#' },
  { label: 'CE Declaration', meta: 'PDF', href: '#' },
]

/**
 * Product families exposed on the support hub. The `id` is the route slug.
 * Section content currently uses shared placeholders; replace per family as
 * real content becomes available.
 */
export const SUPPORT_FAMILIES: ProductSupport[] = [
  {
    id: 'iqtronic-controllers',
    name: 'IQtronic Controllers',
    tagline: 'Remote power control, switching and reboot devices.',
    image: '/images/iqtronic-iqgate-gsm-controller.jpg',
    imageAlt: 'IQtronic Controllers product family',
    description:
      'IQtronic Controllers cover our IQSocket, IQGate and IQBoard ranges — remote power switching, reboot and control devices for IT, industrial and infrastructure sites. Find documentation, firmware, tutorials and support for the whole family below.',
    documentation: PLACEHOLDER_DOCUMENTATION,
    videos: PLACEHOLDER_VIDEOS,
    knowledgeBase: PLACEHOLDER_KNOWLEDGE_BASE,
    downloads: PLACEHOLDER_DOWNLOADS,
  },
  {
    id: 'envistation',
    name: 'ENVISTATION',
    tagline: 'Rugged weather and meteorological systems.',
    image: '/images/iqtronic-envistation-ethernet-weather-station.jpg',
    imageAlt: 'ENVISTATION weather station product family',
    description:
      'ENVISTATION is our range of rugged weather and environmental monitoring systems for outdoor and remote sites. Access setup guides, firmware, tutorials and knowledge base articles for the family below.',
    documentation: PLACEHOLDER_DOCUMENTATION,
    videos: PLACEHOLDER_VIDEOS,
    knowledgeBase: PLACEHOLDER_KNOWLEDGE_BASE,
    downloads: PLACEHOLDER_DOWNLOADS,
  },
  {
    id: 'sensorage',
    name: 'SENSORAGE',
    tagline: 'Sensor systems, data logging and remote measurement.',
    image: '/images/iqtronic-sensorage-datalogger.png',
    imageAlt: 'SENSORAGE sensor and data-logging product family',
    description:
      'SENSORAGE covers our sensor systems, data loggers and remote measurement gateways for environmental and industrial applications. Documentation, firmware, tutorials and support for the family are collected below.',
    documentation: PLACEHOLDER_DOCUMENTATION,
    videos: PLACEHOLDER_VIDEOS,
    knowledgeBase: PLACEHOLDER_KNOWLEDGE_BASE,
    downloads: PLACEHOLDER_DOWNLOADS,
  },
  {
    id: 'bms',
    name: 'BMS',
    tagline: 'Battery monitoring systems for critical power.',
    image: '/images/bms.png',
    imageAlt: 'Battery Monitoring System product family',
    description:
      'Our Battery Monitoring Systems provide continuous health and capacity monitoring for battery banks in UPS, telecom and industrial installations. Find manuals, firmware, tutorials and troubleshooting below.',
    documentation: PLACEHOLDER_DOCUMENTATION,
    videos: PLACEHOLDER_VIDEOS,
    knowledgeBase: PLACEHOLDER_KNOWLEDGE_BASE,
    downloads: PLACEHOLDER_DOWNLOADS,
  },
  {
    id: 'legacy',
    name: 'Legacy Products',
    tagline: 'Support and files for earlier product generations.',
    image: '/images/enclosures.png',
    imageAlt: 'Legacy IQtronic products',
    description:
      'Legacy products are earlier generations kept for service and reference. Firmware, manuals and knowledge base articles for discontinued devices remain available here for as long as they are supported.',
    documentation: PLACEHOLDER_DOCUMENTATION,
    videos: PLACEHOLDER_VIDEOS,
    knowledgeBase: PLACEHOLDER_KNOWLEDGE_BASE,
    downloads: PLACEHOLDER_DOWNLOADS,
  },
]

export function getSupportFamily(id: string): ProductSupport | undefined {
  return SUPPORT_FAMILIES.find((family) => family.id === id)
}
