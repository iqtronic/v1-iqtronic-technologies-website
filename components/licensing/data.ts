// Licensing model for IQsocket, IQgate and IQboard products only.
// This preserves the existing IQtronic licence structure (BASE / MEDIUM / FULL),
// their descriptions, feature lists and cumulative upgrade logic.

export type TierId = 'base' | 'medium' | 'full'

export interface LicenceLevel {
  id: TierId
  name: string
  eyebrow: string
  description: string
  /** Features unlocked at this level (on top of the previous level). */
  adds: string[]
  featured?: boolean
}

export const LICENCE_LEVELS: LicenceLevel[] = [
  {
    id: 'base',
    name: 'BASE',
    eyebrow: 'Included with every device',
    description:
      'The standard licence included with every IQsocket, IQgate and IQboard device. Provides reliable remote power control and essential monitoring out of the box.',
    adds: [
      'Power control',
      'Informative messages',
      'Basic security',
      'Basic alarms',
      'Basic log',
    ],
  },
  {
    id: 'medium',
    name: 'MEDIUM',
    eyebrow: 'Everything in BASE, plus',
    description:
      'Adds advanced access control and automation for users who need scheduling, multi-user management and climate control.',
    adds: [
      'Advanced security',
      'Full user management',
      'Scheduling',
      'Thermostat functions',
    ],
    featured: true,
  },
  {
    id: 'full',
    name: 'FULL',
    eyebrow: 'Everything in MEDIUM, plus',
    description:
      'The complete feature set — advanced alarming, event-driven triggers and IP data communication for full system integration.',
    adds: ['Advanced alarms', 'Triggers', 'IP data communication'],
  },
]

export interface ComparisonRow {
  label: string
  base: boolean
  medium: boolean
  full: boolean
}

export interface ComparisonGroup {
  group: string
  rows: ComparisonRow[]
}

// Full feature matrix. Licences are cumulative: MEDIUM includes BASE,
// FULL includes MEDIUM. No features are removed or renamed.
export const COMPARISON: ComparisonGroup[] = [
  {
    group: 'Control & messaging',
    rows: [
      { label: 'Power control', base: true, medium: true, full: true },
      { label: 'Informative messages', base: true, medium: true, full: true },
    ],
  },
  {
    group: 'Security & access',
    rows: [
      { label: 'Basic security', base: true, medium: true, full: true },
      { label: 'Advanced security', base: false, medium: true, full: true },
      { label: 'Full user management', base: false, medium: true, full: true },
    ],
  },
  {
    group: 'Automation',
    rows: [
      { label: 'Scheduling', base: false, medium: true, full: true },
      { label: 'Thermostat functions', base: false, medium: true, full: true },
      { label: 'Triggers', base: false, medium: false, full: true },
    ],
  },
  {
    group: 'Alarms & logging',
    rows: [
      { label: 'Basic alarms', base: true, medium: true, full: true },
      { label: 'Basic log', base: true, medium: true, full: true },
      { label: 'Advanced alarms', base: false, medium: false, full: true },
    ],
  },
  {
    group: 'Connectivity',
    rows: [
      {
        label: 'IP data communication',
        base: false,
        medium: false,
        full: true,
      },
    ],
  },
]

export interface SupportedProduct {
  name: string
  tagline: string
  href: string
}

export const SUPPORTED_PRODUCTS: SupportedProduct[] = [
  {
    name: 'IQsocket',
    tagline: 'GSM and IP controlled smart power sockets.',
    href: '/products/iqsocket-lan',
  },
  {
    name: 'IQgate',
    tagline: 'DIN-rail gateways for industrial switching and telemetry.',
    href: '/products/iqgate-gs400',
  },
  {
    name: 'IQboard',
    tagline: 'OEM and embedded controller boards for integrators.',
    href: '/products/iqboard-oem',
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Can I upgrade later?',
    answer:
      'Yes. Any IQsocket, IQgate or IQboard device can be upgraded at any time using a software licence key. There is no need to plan the final feature set at the time of purchase.',
  },
  {
    question: 'Do I need new hardware?',
    answer:
      'No. Licences are unlocked purely in software via a licence key. No hardware replacement and no device modification is required — your existing device stays exactly as it is.',
  },
  {
    question: 'Will I lose my settings?',
    answer:
      'No. Applying a licence key only unlocks additional features. All of your existing configuration and settings remain intact.',
  },
  {
    question: 'How do I activate a licence?',
    answer:
      'Send the SMS command license=licensekey to the device, or apply the key through the IQcontrol Suite over Bluetooth. The device confirms activation with a response message. Each licence key is bound to the device IMEI.',
  },
  {
    question: 'Can I upgrade from BASE to MEDIUM?',
    answer:
      'Yes. A MEDIUM licence key unlocks advanced security, full user management, scheduling and thermostat functions on top of your existing BASE features.',
  },
  {
    question: 'Can I upgrade from MEDIUM to FULL?',
    answer:
      'Yes. A FULL licence key adds advanced alarms, triggers and IP data communication on top of the MEDIUM feature set.',
  },
]

export const HOW_STEPS = [
  'Purchase device',
  'Receive licence',
  'Activate licence',
  'Unlock additional features',
  'Upgrade any time',
]
