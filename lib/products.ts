export type Lifecycle = 'active' | 'phase-out' | 'obsolete' | 'planned'
export type Availability =
  | 'in-stock'
  | 'made-to-order'
  | 'build-on-request'
  | 'phase-out'
  | 'obsolete'

export type EcosystemTag =
  | 'iqcontrol'
  | 'web-interface'
  | 'snmp'
  | 'modbus'
  | 'rest-api'
  | 'cloud-ready'

export interface SpecRow {
  label: string
  value: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption: string
}

export interface LicenseTier {
  name: string
  price?: string
  description: string
  features: string[]
}

export interface DocumentItem {
  title: string
  type: string
  meta?: string
}

export interface Accessory {
  name: string
  image: string
  description: string
}

/**
 * A single entry in a product's evolution timeline. The administrator only
 * supplies the referenced product slug, the production year range and an
 * optional note. Name, URL, thumbnail and lifecycle status are resolved
 * automatically from the referenced product via `getProductEvolution`.
 */
export interface EvolutionEntry {
  /** Slug of the referenced product. */
  product: string
  /** Production start year. */
  yearFrom: number
  /** Production end year. Omit for current or planned products. */
  yearTo?: number
  /** Optional short note (e.g. "First generation", "Under Development"). */
  note?: string
}

export interface Product {
  slug: string
  name: string
  family: FamilyId
  category: CategoryId
  tagline: string
  description: string
  /** Long, SEO-oriented description paragraph(s). */
  seoDescription: string
  image: string
  /** Optional SEO-oriented alt text for the product image. */
  imageAlt?: string
  price?: string
  lifecycle: Lifecycle
  lifecycleDetail: {
    productionStart?: string
    productionUntil?: string
    productionEnd?: string
    note?: string
  }
  availability: Availability
  ecosystem?: EcosystemTag[]
  ecosystemNote?: string
  iqcontrolPlatforms?: string[]
  gallery: GalleryImage[]
  applications: { title: string; description: string }[]
  accessories: Accessory[]
  specs: SpecRow[]
  documents: DocumentItem[]
  licenseOverview?: string
  licenseTiers?: LicenseTier[]
  /** Optional explicit replacement product slug for phase-out / obsolete items. */
  replacement?: string
  /**
   * Optional product evolution timeline showing previous, current and future
   * generations from the same family. If omitted, the evolution panel is not
   * displayed for this product.
   */
  evolution?: EvolutionEntry[]
  keywords: string[]
}

export type CategoryId =
  | 'iqcontrollers'
  | 'weather-stations'
  | 'bms'
  | 'phase-out'

export type FamilyId =
  | 'iqsocket'
  | 'iqgate'
  | 'iqboard'
  | 'envistation'
  | 'bms'
  | 'legacy'

export interface Family {
  id: FamilyId
  name: string
  category: CategoryId
  tagline: string
}

export interface Category {
  id: CategoryId
  name: string
  tagline: string
  families: FamilyId[]
}

export const CATEGORIES: Category[] = [
  {
    id: 'iqcontrollers',
    name: 'IQcontrollers',
    tagline: 'Remote power control, switching and reboot devices.',
    families: ['iqsocket', 'iqgate', 'iqboard'],
  },
  {
    id: 'weather-stations',
    name: 'Weather Stations',
    tagline: 'Rugged environmental sensing for outdoor sites.',
    families: ['envistation'],
  },
  {
    id: 'bms',
    name: 'Battery Monitoring Systems',
    tagline: 'Continuous health and capacity monitoring for battery banks.',
    families: ['bms'],
  },
  {
    id: 'phase-out',
    name: 'Phase Out',
    tagline: 'Legacy products no longer recommended for new designs.',
    families: ['legacy'],
  },
]

export const FAMILIES: Family[] = [
  {
    id: 'iqsocket',
    name: 'IQsocket',
    category: 'iqcontrollers',
    tagline: 'GSM and IP controlled smart power sockets.',
  },
  {
    id: 'iqgate',
    name: 'IQgate',
    category: 'iqcontrollers',
    tagline: 'DIN-rail gateways for industrial switching and telemetry.',
  },
  {
    id: 'iqboard',
    name: 'IQboard',
    category: 'iqcontrollers',
    tagline: 'OEM and embedded controller boards for integrators.',
  },
  {
    id: 'envistation',
    name: 'ENVISTATION',
    category: 'weather-stations',
    tagline: 'Calibrated weather stations for harsh environments.',
  },
  {
    id: 'bms',
    name: 'Battery Monitoring',
    category: 'bms',
    tagline: 'Per-cell and per-string battery monitoring systems.',
  },
  {
    id: 'legacy',
    name: 'Legacy',
    category: 'phase-out',
    tagline: 'Earlier generations kept for service and reference.',
  },
]

export const LIFECYCLE_LABELS: Record<Lifecycle, string> = {
  active: 'Active Product',
  'phase-out': 'Phase Out',
  obsolete: 'Obsolete',
  planned: 'Planned',
}

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  'in-stock': 'In Stock',
  'made-to-order': 'Made to Order',
  'build-on-request': 'Build on Request',
  'phase-out': 'Phase Out',
  obsolete: 'Obsolete',
}

export const ECOSYSTEM_LABELS: Record<EcosystemTag, string> = {
  iqcontrol: 'Works with IQControl',
  'web-interface': 'Standalone Web Interface',
  snmp: 'SNMP Compatible',
  modbus: 'Modbus Compatible',
  'rest-api': 'REST API Available',
  'cloud-ready': 'Cloud Ready',
}

const SHARED_ACCESSORIES: Record<string, Accessory> = {
  tempSensor: {
    name: 'Temperature Sensor',
    image: '/images/monitoring-system.png',
    description: 'Calibrated 1-Wire probe for ambient and equipment temperature.',
  },
  gsmModem: {
    name: 'GSM Modem',
    image: '/images/iqsocket.png',
    description: 'External quad-band modem for cellular connectivity in remote sites.',
  },
  powerAdapter: {
    name: 'Power Adapter',
    image: '/images/iqboard.png',
    description: 'Wide-range DC power supply with industrial connector.',
  },
  antenna: {
    name: 'High-Gain Antenna',
    image: '/images/monitoring-system.png',
    description: 'External antenna for improved cellular and Wi-Fi reception.',
  },
  mounting: {
    name: 'DIN-Rail Mounting Kit',
    image: '/images/iqboard.png',
    description: 'Mounting bracket set for standard 35 mm DIN rail installation.',
  },
  expansion: {
    name: 'Expansion Module',
    image: '/images/bms.png',
    description: 'Add-on I/O module for extra relays and sensor inputs.',
  },
}

export const PRODUCTS: Product[] = [
  // ---------------- IQsocket family ----------------
  {
    slug: 'iqsocket-lan',
    name: 'IQsocket LAN',
    family: 'iqsocket',
    category: 'iqcontrollers',
    tagline: 'Ethernet IP watchdog and remote power control socket.',
    description:
      'Ethernet-connected smart socket for remote reboot, switching and monitoring of network equipment.',
    seoDescription:
      'The IQsocket LAN is an industrial IP watchdog and remote power control socket. Connected over Ethernet, it provides remote reboot, remote power switching and network monitoring for servers, routers and unattended industrial equipment. As a network watchdog it automatically reboots frozen devices, making it ideal for remote server recovery and industrial monitoring.',
    image: '/images/iqtronic-iqsocket-lan-smart-socket.jpg',
    imageAlt: 'IQtronic IQsocket LAN industrial smart socket',
    price: '€129',
    lifecycle: 'active',
    lifecycleDetail: {
      productionStart: '2003',
      productionUntil: '2035+',
      note: 'Long-term production guaranteed.',
    },
    availability: 'in-stock',
    ecosystem: ['iqcontrol', 'web-interface', 'snmp', 'rest-api'],
    iqcontrolPlatforms: ['Apple iOS', 'Android', 'Windows'],
    gallery: [
      { src: '/images/iqsocket.png', alt: 'IQsocket LAN product photo', caption: 'Product' },
      { src: '/images/monitoring-system.png', alt: 'IQsocket LAN installed in a rack', caption: 'Installation' },
      { src: '/images/engineering-lab.png', alt: 'IQsocket LAN in an application setting', caption: 'Application' },
      { src: '/images/hero-products.png', alt: 'IQsocket LAN web interface screenshot', caption: 'Web interface' },
    ],
    applications: [
      { title: 'Remote Server Recovery', description: 'Automatically reboot frozen servers and routers in unattended data closets.' },
      { title: 'Industrial Automation', description: 'Switch and cycle power to PLCs and field equipment on schedule or alarm.' },
      { title: 'Telecommunications', description: 'Keep remote base-station equipment online with automatic watchdog reboots.' },
      { title: 'Building Management', description: 'Centralised power control for HVAC and access control hardware.' },
    ],
    accessories: [
      SHARED_ACCESSORIES.tempSensor,
      SHARED_ACCESSORIES.powerAdapter,
      SHARED_ACCESSORIES.mounting,
    ],
    specs: [
      { label: 'Connectivity', value: '10/100 Ethernet' },
      { label: 'Switched outputs', value: '1 × mains relay, 16 A' },
      { label: 'Protocols', value: 'HTTP, SNMP, REST, MQTT' },
      { label: 'Sensors', value: '1-Wire temperature input' },
      { label: 'Power supply', value: '110–240 V AC' },
      { label: 'Operating temperature', value: '-20 °C to +60 °C' },
      { label: 'Enclosure', value: 'ABS, wall / DIN mount' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 4.2 · 1.1 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 3.4 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 480 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v3.18 · 820 KB' },
      { title: 'Software', type: 'ZIP', meta: 'Config tool · 12 MB' },
      { title: 'SNMP MIB', type: 'MIB', meta: '24 KB' },
      { title: 'Certificates', type: 'PDF', meta: 'CE · 210 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    licenseOverview:
      'IQsocket LAN ships with the standard control firmware. Advanced automation, logging and integration features are unlocked through software licenses.',
    licenseTiers: [
      {
        name: 'Standard',
        price: 'Included',
        description: 'Core remote switching and watchdog functions.',
        features: ['Web interface', 'Manual & scheduled switching', 'Single temperature sensor'],
      },
      {
        name: 'Pro',
        price: '€49',
        description: 'Automation and monitoring for production deployments.',
        features: ['SNMP & REST API', 'Event logging', 'Email & alert rules', 'Multi-condition automation'],
      },
      {
        name: 'Enterprise',
        price: 'Contact us',
        description: 'Fleet management across many sites.',
        features: ['Central dashboard', 'Role-based access', 'Bulk firmware updates', 'Priority support'],
      },
    ],
    keywords: ['IP watchdog', 'network watchdog', 'remote reboot', 'remote power control', 'industrial watchdog'],
    evolution: [
      { product: 'iqsocket-classic', yearFrom: 2003, yearTo: 2008, note: 'First generation' },
      { product: 'iqsocket-gsm', yearFrom: 2008, yearTo: 2012, note: 'GSM / SMS control' },
      { product: 'iqsocket-rs232', yearFrom: 2012, yearTo: 2018, note: 'Serial integration' },
      { product: 'iqsocket-lan', yearFrom: 2018, note: 'Current generation' },
    ],
  },
  {
    slug: 'iqsocket-rs232',
    name: 'IQsocket RS232',
    family: 'iqsocket',
    category: 'iqcontrollers',
    tagline: 'Serial-controlled remote power switch.',
    description:
      'RS232 controlled smart socket for integration with serial consoles, controllers and legacy industrial systems.',
    seoDescription:
      'The IQsocket RS232 is a serial remote power control socket for industrial monitoring and remote reboot. Controlled directly over an RS232 serial link, it integrates with console servers, PLCs and legacy systems where network access is unavailable.',
    image: '/images/iqtronic-iqsocket-rs232-smart-socket.jpg',
    imageAlt: 'IQtronic IQsocket RS232 industrial smart socket',
    price: '€119',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2005', productionUntil: '2032+' },
    availability: 'made-to-order',
    ecosystem: ['modbus', 'web-interface'],
    gallery: [
      { src: '/images/iqsocket.png', alt: 'IQsocket RS232 product photo', caption: 'Product' },
      { src: '/images/engineering-lab.png', alt: 'IQsocket RS232 wired to a serial console', caption: 'Installation' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'Direct serial power control for PLCs and machine controllers.' },
      { title: 'Remote Server Recovery', description: 'Out-of-band reboot via serial console servers.' },
      { title: 'Telecommunications', description: 'Power cycling for serial-managed network gear.' },
    ],
    accessories: [SHARED_ACCESSORIES.powerAdapter, SHARED_ACCESSORIES.mounting],
    specs: [
      { label: 'Connectivity', value: 'RS232 (DB9)' },
      { label: 'Switched outputs', value: '1 × mains relay, 16 A' },
      { label: 'Protocols', value: 'ASCII serial, Modbus RTU' },
      { label: 'Power supply', value: '110–240 V AC' },
      { label: 'Operating temperature', value: '-20 °C to +60 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 3.0 · 980 KB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 2.8 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 420 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v2.9 · 640 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['serial power control', 'remote reboot', 'industrial watchdog', 'RS232 switch'],
  },
  {
    slug: 'iqsocket-gsm',
    name: 'IQsocket GSM',
    family: 'iqsocket',
    category: 'iqcontrollers',
    tagline: 'Cellular SMS-controlled power socket.',
    description:
      'GSM controlled smart socket for remote switching and reboot over SMS and cellular data — no network infrastructure required.',
    seoDescription:
      'The IQsocket GSM is a cellular remote power control socket and industrial watchdog. Controlled over SMS and GSM data, it enables remote reboot and remote power control at sites with no fixed internet connection, ideal for remote monitoring and telecommunications.',
    image: '/images/iqsocket.png',
    price: '€169',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2006', productionUntil: '2034+' },
    availability: 'in-stock',
    ecosystem: ['iqcontrol', 'web-interface', 'cloud-ready'],
    iqcontrolPlatforms: ['Apple iOS', 'Android'],
    gallery: [
      { src: '/images/iqsocket.png', alt: 'IQsocket GSM product photo', caption: 'Product' },
      { src: '/images/enclosures.png', alt: 'IQsocket GSM packaging', caption: 'Packaging' },
    ],
    applications: [
      { title: 'Remote Server Recovery', description: 'Reboot equipment via SMS where no internet is available.' },
      { title: 'Environmental Monitoring', description: 'Cellular power control for off-grid monitoring stations.' },
      { title: 'Weather Monitoring', description: 'Keep remote sensing equipment powered and recoverable.' },
    ],
    accessories: [
      SHARED_ACCESSORIES.gsmModem,
      SHARED_ACCESSORIES.antenna,
      SHARED_ACCESSORIES.tempSensor,
    ],
    specs: [
      { label: 'Connectivity', value: 'Quad-band GSM / GPRS' },
      { label: 'Switched outputs', value: '1 × mains relay, 16 A' },
      { label: 'Control', value: 'SMS, GSM data, app' },
      { label: 'Sensors', value: '1-Wire temperature input' },
      { label: 'Power supply', value: '110–240 V AC' },
      { label: 'Operating temperature', value: '-20 °C to +60 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 4.0 · 1.0 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 3.1 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 460 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v3.4 · 780 KB' },
      { title: 'Certificates', type: 'PDF', meta: 'CE · 210 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['GSM power control', 'SMS reboot', 'remote power control', 'industrial watchdog', 'cellular watchdog'],
  },
  {
    slug: 'iqsocket-mobile',
    name: 'IQsocket Mobile',
    family: 'iqsocket',
    category: 'iqcontrollers',
    tagline: 'App-first portable smart power controller.',
    description:
      'Compact, app-controlled power socket combining cellular and Wi-Fi for portable and temporary installations.',
    seoDescription:
      'The IQsocket Mobile is a portable remote power control socket managed entirely from the IQControl mobile app. Combining Wi-Fi and cellular connectivity, it brings remote reboot and remote power control to temporary sites, field deployments and mobile installations.',
    image: '/images/iqsocket.png',
    price: '€149',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2014', productionUntil: '2033+' },
    availability: 'in-stock',
    ecosystem: ['iqcontrol', 'cloud-ready', 'rest-api'],
    iqcontrolPlatforms: ['Apple iOS', 'Android', 'Windows'],
    gallery: [
      { src: '/images/iqsocket.png', alt: 'IQsocket Mobile product photo', caption: 'Product' },
      { src: '/images/hero-products.png', alt: 'IQControl app screenshot', caption: 'Screenshot' },
    ],
    applications: [
      { title: 'Remote Server Recovery', description: 'Mobile-managed reboots for temporary network setups.' },
      { title: 'Building Management', description: 'Flexible power control for events and pop-up sites.' },
    ],
    accessories: [SHARED_ACCESSORIES.antenna, SHARED_ACCESSORIES.powerAdapter],
    specs: [
      { label: 'Connectivity', value: 'Wi-Fi + LTE Cat-M1' },
      { label: 'Switched outputs', value: '1 × mains relay, 16 A' },
      { label: 'Control', value: 'IQControl app, REST API' },
      { label: 'Power supply', value: '110–240 V AC' },
      { label: 'Operating temperature', value: '-10 °C to +50 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 2.1 · 920 KB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 2.6 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 410 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v1.8 · 700 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['portable power control', 'app power switch', 'remote reboot', 'mobile watchdog'],
  },

  // ---------------- IQgate family ----------------
  {
    slug: 'iqgate-gs400',
    name: 'IQgate GS400',
    family: 'iqgate',
    category: 'iqcontrollers',
    tagline: 'DIN-rail industrial gateway with relay outputs.',
    description:
      'Industrial DIN-rail gateway with multiple relay outputs, digital inputs and cellular telemetry for automation cabinets.',
    seoDescription:
      'The IQgate GS400 is an industrial gateway and network watchdog for automation cabinets. With multiple relays, digital inputs and cellular telemetry, it delivers remote power control, industrial monitoring and remote reboot in a DIN-rail form factor.',
    image: '/images/iqtronic-iqgate-gsm-controller.jpg',
    imageAlt: 'IQtronic IQgate GSM industrial controller',
    price: '€289',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2010', productionUntil: '2034+' },
    availability: 'in-stock',
    ecosystem: ['modbus', 'snmp', 'rest-api', 'web-interface'],
    gallery: [
      { src: '/images/monitoring-system.png', alt: 'IQgate GS400 product photo', caption: 'Product' },
      { src: '/images/enclosures.png', alt: 'IQgate GS400 mounted in a cabinet', caption: 'Installation' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'Relay control and I/O for automation and SCADA cabinets.' },
      { title: 'Telecommunications', description: 'Remote site management with cellular fallback.' },
      { title: 'Building Management', description: 'Distributed control of building infrastructure.' },
    ],
    accessories: [SHARED_ACCESSORIES.mounting, SHARED_ACCESSORIES.antenna, SHARED_ACCESSORIES.expansion],
    specs: [
      { label: 'Connectivity', value: 'Ethernet + LTE' },
      { label: 'Outputs', value: '4 × relay' },
      { label: 'Inputs', value: '4 × digital, 2 × analog' },
      { label: 'Protocols', value: 'Modbus TCP/RTU, SNMP, REST' },
      { label: 'Power supply', value: '12–48 V DC' },
      { label: 'Mounting', value: '35 mm DIN rail' },
      { label: 'Operating temperature', value: '-25 °C to +70 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 3.5 · 1.2 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 4.0 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 520 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v4.1 · 1.0 MB' },
      { title: 'SNMP MIB', type: 'MIB', meta: '32 KB' },
      { title: 'Certificates', type: 'PDF', meta: 'CE · 210 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['industrial gateway', 'remote power control', 'network watchdog', 'industrial monitoring', 'Modbus gateway'],
  },
  {
    slug: 'iqgate-gs500',
    name: 'IQgate GS500',
    family: 'iqgate',
    category: 'iqcontrollers',
    tagline: 'High-density industrial gateway with edge logging.',
    description:
      'Expanded DIN-rail gateway with edge data logging, more I/O and dual connectivity for demanding telemetry applications.',
    seoDescription:
      'The IQgate GS500 is a high-density industrial gateway with edge logging and dual connectivity. Designed for industrial monitoring and remote power control, it aggregates field data and supports remote reboot across large installations.',
    image: '/images/iqtronic-iqgate-gsm-controller.jpg',
    imageAlt: 'IQtronic IQgate GSM industrial controller',
    price: '€379',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2016', productionUntil: '2035+' },
    availability: 'made-to-order',
    ecosystem: ['modbus', 'snmp', 'rest-api', 'cloud-ready', 'web-interface'],
    gallery: [
      { src: '/images/monitoring-system.png', alt: 'IQgate GS500 product photo', caption: 'Product' },
      { src: '/images/engineering-lab.png', alt: 'IQgate GS500 in a telemetry rack', caption: 'Application' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'High-channel-count control and monitoring.' },
      { title: 'Environmental Monitoring', description: 'Edge logging for distributed sensor networks.' },
      { title: 'Telecommunications', description: 'Cellular telemetry for remote infrastructure.' },
    ],
    accessories: [SHARED_ACCESSORIES.expansion, SHARED_ACCESSORIES.antenna, SHARED_ACCESSORIES.mounting],
    specs: [
      { label: 'Connectivity', value: 'Dual Ethernet + LTE' },
      { label: 'Outputs', value: '8 × relay' },
      { label: 'Inputs', value: '8 × digital, 4 × analog' },
      { label: 'Logging', value: 'Edge logging, 4 GB' },
      { label: 'Protocols', value: 'Modbus, SNMP, MQTT, REST' },
      { label: 'Power supply', value: '12–48 V DC' },
      { label: 'Mounting', value: '35 mm DIN rail' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 2.2 · 1.3 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 4.6 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 540 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v2.3 · 1.1 MB' },
      { title: 'SNMP MIB', type: 'MIB', meta: '36 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['industrial gateway', 'edge logging', 'industrial monitoring', 'telemetry gateway', 'remote power control'],
  },

  // ---------------- IQboard family ----------------
  {
    slug: 'iqboard-oem',
    name: 'IQboard OEM Controller',
    family: 'iqboard',
    category: 'iqcontrollers',
    tagline: 'OEM controller board for system integrators.',
    description:
      'Bare OEM controller board with relays, I/O and connectivity options for integration into your own products.',
    seoDescription:
      'The IQboard OEM Controller is a ready-to-integrate controller board for OEMs and system integrators. It provides relay outputs, digital I/O and connectivity for remote power control and industrial monitoring inside custom industrial products.',
    image: '/images/iqtronic-iqboard-gsm-smart-controller.jpg',
    imageAlt: 'IQtronic IQboard GSM smart controller',
    price: 'From €59',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2012', productionUntil: '2035+', note: 'Volume pricing available.' },
    availability: 'build-on-request',
    ecosystem: ['modbus', 'rest-api'],
    gallery: [
      { src: '/images/iqboard.png', alt: 'IQboard OEM controller board photo', caption: 'Product' },
      { src: '/images/engineering-lab.png', alt: 'IQboard OEM under test', caption: 'Application' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'Embedded control logic for OEM machinery.' },
      { title: 'Building Management', description: 'Integrate switching into building products.' },
    ],
    accessories: [SHARED_ACCESSORIES.powerAdapter, SHARED_ACCESSORIES.expansion],
    specs: [
      { label: 'Form factor', value: 'Open board, 80 × 60 mm' },
      { label: 'Outputs', value: '2 × relay, 4 × open-collector' },
      { label: 'Inputs', value: '4 × digital, 2 × analog' },
      { label: 'Interfaces', value: 'UART, I²C, SPI, Modbus' },
      { label: 'Power supply', value: '5–24 V DC' },
      { label: 'Operating temperature', value: '-40 °C to +85 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 5.0 · 1.4 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 3.0 MB' },
      { title: 'Firmware', type: 'BIN', meta: 'v6.2 · 540 KB' },
      { title: 'Software', type: 'ZIP', meta: 'SDK · 22 MB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['OEM controller board', 'embedded controller', 'industrial monitoring', 'remote power control'],
  },
  {
    slug: 'iqboard-embedded',
    name: 'IQboard Embedded Controller',
    family: 'iqboard',
    category: 'iqcontrollers',
    tagline: 'Compact embedded module for space-constrained designs.',
    description:
      'Castellated embedded controller module for reflow-mounting into compact industrial products.',
    seoDescription:
      'The IQboard Embedded Controller is a compact, reflow-mountable controller module for space-constrained industrial designs. It brings remote power control and industrial monitoring capabilities to embedded products with minimal board area.',
    image: '/images/iqtronic-iqboard-gsm-smart-controller.jpg',
    imageAlt: 'IQtronic IQboard GSM smart controller',
    price: 'From €39',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2018', productionUntil: '2035+' },
    availability: 'build-on-request',
    ecosystem: ['modbus', 'rest-api'],
    gallery: [
      { src: '/images/iqboard.png', alt: 'IQboard embedded module photo', caption: 'Product' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'Embedded intelligence for compact devices.' },
      { title: 'Environmental Monitoring', description: 'Sensor acquisition in small sealed enclosures.' },
    ],
    accessories: [SHARED_ACCESSORIES.expansion],
    specs: [
      { label: 'Form factor', value: 'Castellated module, 40 × 30 mm' },
      { label: 'I/O', value: '12 × GPIO' },
      { label: 'Interfaces', value: 'UART, I²C, SPI' },
      { label: 'Power supply', value: '3.3 V DC' },
      { label: 'Operating temperature', value: '-40 °C to +85 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 2.0 · 1.1 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 2.4 MB' },
      { title: 'Firmware', type: 'BIN', meta: 'v3.0 · 420 KB' },
      { title: 'Software', type: 'ZIP', meta: 'SDK · 18 MB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['embedded controller', 'controller module', 'industrial monitoring', 'OEM module'],
  },

  // ---------------- ENVISTATION / Weather ----------------
  {
    slug: 'envistation-mini',
    name: 'ENVISTATION Mini',
    family: 'envistation',
    category: 'weather-stations',
    tagline: 'Compact weather station for site monitoring.',
    description:
      'Compact, solar-ready weather station measuring temperature, humidity, pressure and wind for distributed sites.',
    seoDescription:
      'The ENVISTATION Mini is a compact industrial weather station for environmental monitoring and weather monitoring. It measures temperature, humidity, pressure and wind, with solar power and cellular telemetry for remote, unattended sites.',
    image: '/images/iqtronic-envistation-ethernet-weather-station.jpg',
    imageAlt: 'IQtronic ENVISTATION Ethernet weather station',
    price: '€349',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2019', productionUntil: '2035+' },
    availability: 'in-stock',
    ecosystem: ['modbus', 'rest-api', 'cloud-ready'],
    gallery: [
      { src: '/images/weather-station.png', alt: 'ENVISTATION Mini product photo', caption: 'Product' },
      { src: '/images/wind-tunnel.png', alt: 'ENVISTATION Mini under wind-tunnel calibration', caption: 'Calibration' },
      { src: '/images/enclosures.png', alt: 'ENVISTATION Mini installed on a mast', caption: 'Installation' },
    ],
    applications: [
      { title: 'Weather Monitoring', description: 'Local meteorological data for energy and agriculture.' },
      { title: 'Environmental Monitoring', description: 'Air and climate sensing at remote sites.' },
      { title: 'Building Management', description: 'Rooftop weather data for HVAC optimisation.' },
    ],
    accessories: [SHARED_ACCESSORIES.antenna, SHARED_ACCESSORIES.mounting, SHARED_ACCESSORIES.tempSensor],
    specs: [
      { label: 'Sensors', value: 'Temp, humidity, pressure, wind' },
      { label: 'Connectivity', value: 'LTE + Modbus' },
      { label: 'Power', value: 'Solar + battery' },
      { label: 'Enclosure', value: 'IP66' },
      { label: 'Operating temperature', value: '-40 °C to +60 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 1.4 · 1.2 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 3.6 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 500 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v1.6 · 760 KB' },
      { title: 'Certificates', type: 'PDF', meta: 'CE · 210 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['weather station', 'environmental monitoring', 'weather monitoring', 'industrial monitoring'],
  },
  {
    slug: 'envistation-pro',
    name: 'ENVISTATION Pro',
    family: 'envistation',
    category: 'weather-stations',
    tagline: 'Professional weather station with expandable sensors.',
    description:
      'Professional-grade weather station with expandable, calibrated sensor suite including solar radiation and precipitation.',
    seoDescription:
      'The ENVISTATION Pro is a professional industrial weather station for demanding environmental monitoring and weather monitoring. Its expandable, calibrated sensor suite covers wind, solar radiation, precipitation and air quality for energy, research and infrastructure.',
    image: '/images/iqtronic-envistation-ethernet-weather-station.jpg',
    imageAlt: 'IQtronic ENVISTATION Ethernet weather station',
    price: '€899',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2020', productionUntil: '2036+' },
    availability: 'made-to-order',
    ecosystem: ['modbus', 'snmp', 'rest-api', 'cloud-ready'],
    gallery: [
      { src: '/images/weather-station.png', alt: 'ENVISTATION Pro product photo', caption: 'Product' },
      { src: '/images/wind-tunnel.png', alt: 'ENVISTATION Pro wind-tunnel calibration', caption: 'Calibration' },
    ],
    applications: [
      { title: 'Weather Monitoring', description: 'High-accuracy meteorology for energy forecasting.' },
      { title: 'Environmental Monitoring', description: 'Research-grade air and climate measurement.' },
      { title: 'Industrial Automation', description: 'Weather-driven control of outdoor processes.' },
    ],
    accessories: [SHARED_ACCESSORIES.expansion, SHARED_ACCESSORIES.antenna, SHARED_ACCESSORIES.mounting],
    specs: [
      { label: 'Sensors', value: 'Full meteo + solar + rain' },
      { label: 'Accuracy', value: 'Calibrated, traceable' },
      { label: 'Connectivity', value: 'LTE, Ethernet, Modbus' },
      { label: 'Power', value: 'Solar + battery / PoE' },
      { label: 'Enclosure', value: 'IP66' },
      { label: 'Operating temperature', value: '-40 °C to +60 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 1.2 · 1.5 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 5.0 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 560 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v1.3 · 900 KB' },
      { title: 'Calibration Certificate', type: 'PDF', meta: 'Per unit · 240 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['professional weather station', 'environmental monitoring', 'weather monitoring', 'meteorological station'],
  },

  // ---------------- BMS ----------------
  {
    slug: 'bms-100',
    name: 'IQbattery BMS-100',
    family: 'bms',
    category: 'bms',
    tagline: 'String-level battery monitoring system.',
    description:
      'Battery monitoring system tracking voltage, current and temperature across battery strings for UPS and backup banks.',
    seoDescription:
      'The IQbattery BMS-100 is an industrial battery monitoring system for UPS and backup power banks. It continuously measures string voltage, current and temperature, enabling industrial monitoring and predictive maintenance of critical battery infrastructure.',
    image: '/images/bms.png',
    price: '€459',
    lifecycle: 'active',
    lifecycleDetail: { productionStart: '2018', productionUntil: '2034+' },
    availability: 'in-stock',
    ecosystem: ['modbus', 'snmp', 'rest-api', 'web-interface'],
    gallery: [
      { src: '/images/bms.png', alt: 'IQbattery BMS-100 product photo', caption: 'Product' },
      { src: '/images/enclosures.png', alt: 'IQbattery BMS-100 mounted near a battery bank', caption: 'Installation' },
    ],
    applications: [
      { title: 'Telecommunications', description: 'Monitor backup batteries at remote base stations.' },
      { title: 'Building Management', description: 'UPS battery health for data closets and facilities.' },
      { title: 'Industrial Automation', description: 'Protect DC backup systems in process plants.' },
    ],
    accessories: [SHARED_ACCESSORIES.tempSensor, SHARED_ACCESSORIES.expansion, SHARED_ACCESSORIES.mounting],
    specs: [
      { label: 'Channels', value: 'Up to 48 cells / string' },
      { label: 'Measurements', value: 'Voltage, current, temperature' },
      { label: 'Connectivity', value: 'Ethernet, Modbus, SNMP' },
      { label: 'Power supply', value: '12–48 V DC' },
      { label: 'Mounting', value: 'DIN rail / wall' },
      { label: 'Operating temperature', value: '-20 °C to +60 °C' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 2.0 · 1.3 MB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 4.2 MB' },
      { title: 'Quick Start Guide', type: 'PDF', meta: 'EN · 520 KB' },
      { title: 'Firmware', type: 'BIN', meta: 'v2.5 · 1.0 MB' },
      { title: 'SNMP MIB', type: 'MIB', meta: '40 KB' },
      { title: 'Declaration of Conformity', type: 'PDF', meta: 'EU DoC · 180 KB' },
    ],
    keywords: ['battery monitoring system', 'BMS', 'industrial monitoring', 'UPS battery monitoring'],
  },

  // ---------------- Phase out / legacy ----------------
  {
    slug: 'iqsocket-classic',
    name: 'IQsocket Classic',
    family: 'legacy',
    category: 'phase-out',
    tagline: 'First-generation GSM power socket.',
    description:
      'The original GSM controlled power socket. Reliable, field-proven, and now being phased out in favour of IQsocket GSM.',
    seoDescription:
      'The IQsocket Classic is the original IQtronic GSM remote power control socket. Field-proven for remote reboot and remote power control, it is now in phase-out and recommended to be replaced by the IQsocket GSM for new designs.',
    image: '/images/iqsocket.png',
    price: '€99',
    lifecycle: 'phase-out',
    lifecycleDetail: { productionStart: '2008', productionEnd: '2028' },
    availability: 'phase-out',
    replacement: 'iqsocket-gsm',
    gallery: [
      { src: '/images/iqsocket.png', alt: 'IQsocket Classic product photo', caption: 'Product' },
    ],
    applications: [
      { title: 'Remote Server Recovery', description: 'Legacy SMS-based reboot installations.' },
    ],
    accessories: [SHARED_ACCESSORIES.gsmModem, SHARED_ACCESSORIES.antenna],
    specs: [
      { label: 'Connectivity', value: '2G GSM' },
      { label: 'Switched outputs', value: '1 × mains relay, 16 A' },
      { label: 'Control', value: 'SMS' },
      { label: 'Power supply', value: '110–240 V AC' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 2.0 · 760 KB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 2.0 MB' },
      { title: 'Firmware', type: 'BIN', meta: 'v1.9 (final) · 520 KB' },
    ],
    keywords: ['GSM power socket', 'legacy watchdog', 'remote reboot'],
  },
  {
    slug: 'iqgate-gs300',
    name: 'IQgate GS300',
    family: 'legacy',
    category: 'phase-out',
    tagline: 'Earlier-generation industrial gateway.',
    description:
      'Previous-generation DIN-rail gateway. No longer recommended for new designs; superseded by IQgate GS400.',
    seoDescription:
      'The IQgate GS300 is a previous-generation industrial gateway for remote power control and industrial monitoring. It is now obsolete and superseded by the IQgate GS400 for all new designs.',
    image: '/images/monitoring-system.png',
    lifecycle: 'obsolete',
    lifecycleDetail: { productionStart: '2003', productionEnd: '2022' },
    availability: 'obsolete',
    replacement: 'iqgate-gs400',
    gallery: [
      { src: '/images/monitoring-system.png', alt: 'IQgate GS300 product photo', caption: 'Product' },
    ],
    applications: [
      { title: 'Industrial Automation', description: 'Legacy automation cabinet installations.' },
    ],
    accessories: [SHARED_ACCESSORIES.mounting],
    specs: [
      { label: 'Connectivity', value: '10/100 Ethernet' },
      { label: 'Outputs', value: '2 × relay' },
      { label: 'Inputs', value: '2 × digital' },
      { label: 'Power supply', value: '12–24 V DC' },
    ],
    documents: [
      { title: 'Datasheet', type: 'PDF', meta: 'Rev. 1.0 (archive) · 640 KB' },
      { title: 'User Manual', type: 'PDF', meta: 'EN · 1.8 MB' },
      { title: 'Firmware', type: 'BIN', meta: 'v3.2 (final) · 480 KB' },
    ],
    keywords: ['legacy gateway', 'obsolete gateway', 'industrial monitoring'],
  },
]

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getFamily(id: FamilyId): Family | undefined {
  return FAMILIES.find((f) => f.id === id)
}

export function getCategory(id: CategoryId): Category | undefined {
  return CATEGORIES.find((c) => c.id === id)
}

export function getProductsByFamily(id: FamilyId): Product[] {
  return PRODUCTS.filter((p) => p.family === id)
}

export function getProductsByCategory(id: CategoryId): Product[] {
  return PRODUCTS.filter((p) => p.category === id)
}

export function getFamiliesByCategory(id: CategoryId): Family[] {
  return FAMILIES.filter((f) => f.category === id)
}

export function getRelatedProducts(product: Product): Product[] {
  return PRODUCTS.filter(
    (p) => p.family === product.family && p.slug !== product.slug,
  )
}

export interface ResolvedEvolutionEntry {
  slug: string
  name: string
  href: string
  image: string
  lifecycle: Lifecycle
  yearFrom: number
  yearTo?: number
  note?: string
  /** Whether this entry refers to the product currently being viewed. */
  isCurrent: boolean
}

/**
 * Resolves a product's evolution timeline into fully populated entries. The
 * name, URL, thumbnail and lifecycle status are read automatically from the
 * referenced product. Entries whose referenced product cannot be found are
 * skipped. Returns an empty array when the product has no evolution data.
 */
export function getProductEvolution(
  product: Product,
): ResolvedEvolutionEntry[] {
  if (!product.evolution || product.evolution.length === 0) return []
  return product.evolution
    .map((entry) => {
      const referenced = getProduct(entry.product)
      if (!referenced) return null
      return {
        slug: referenced.slug,
        name: referenced.name,
        href: `/products/${referenced.slug}`,
        image: referenced.image,
        lifecycle: referenced.lifecycle,
        yearFrom: entry.yearFrom,
        yearTo: entry.yearTo,
        note: entry.note,
        isCurrent: referenced.slug === product.slug,
      }
    })
    .filter((entry): entry is ResolvedEvolutionEntry => entry !== null)
}
