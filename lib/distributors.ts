// NOTE: Placeholder distributor data. Replace with real partner records when available.
// Each entry is illustrative only — company names, contacts and websites are fictional.

export type PartnerType =
  | 'Distributor'
  | 'Reseller'
  | 'System Integrator'
  | 'OEM Partner'

export type Region =
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Middle East'
  | 'Asia'
  | 'Africa'
  | 'Oceania'

export type Distributor = {
  company: string
  country: string
  countryCode: string // ISO 3166-1 alpha-2, lowercase, for flag rendering
  city: string
  website: string
  email: string
  phone: string
  focus: string
  type: PartnerType
  region: Region
}

// Approximate marker coordinates [longitude, latitude] for each region hub.
export type RegionMarker = {
  region: Region
  label: string
  coordinates: [number, number]
  partners: number
}

export const REGION_MARKERS: RegionMarker[] = [
  { region: 'Europe', label: 'Europe', coordinates: [15.2, 49.8], partners: 5 },
  { region: 'North America', label: 'North America', coordinates: [-98.5, 39.8], partners: 2 },
  { region: 'South America', label: 'South America', coordinates: [-58.4, -23.5], partners: 1 },
  { region: 'Middle East', label: 'Middle East', coordinates: [45.0, 25.0], partners: 2 },
  { region: 'Asia', label: 'Asia', coordinates: [103.8, 1.35], partners: 2 },
  { region: 'Africa', label: 'Africa', coordinates: [18.4, -33.9], partners: 1 },
  { region: 'Oceania', label: 'Oceania', coordinates: [151.2, -33.9], partners: 1 },
]

export const REGIONS: Region[] = [
  'Europe',
  'North America',
  'South America',
  'Middle East',
  'Asia',
  'Africa',
  'Oceania',
]

export const PARTNER_TYPES: PartnerType[] = [
  'Distributor',
  'Reseller',
  'System Integrator',
  'OEM Partner',
]

export const DISTRIBUTORS: Distributor[] = [
  // Europe
  {
    company: 'Nordic Industrial Systems',
    country: 'Czech Republic',
    countryCode: 'cz',
    city: 'Brno',
    website: 'nordic-industrial.example.com',
    email: 'sales@nordic-industrial.example.com',
    phone: '+420 533 110 200',
    focus: 'GSM control & telemetry',
    type: 'Distributor',
    region: 'Europe',
  },
  {
    company: 'Baltic Automation s.r.o.',
    country: 'Poland',
    countryCode: 'pl',
    city: 'Wrocław',
    website: 'baltic-automation.example.com',
    email: 'info@baltic-automation.example.com',
    phone: '+48 71 332 4180',
    focus: 'Industrial IoT gateways',
    type: 'Distributor',
    region: 'Europe',
  },
  {
    company: 'MeteoTech GmbH',
    country: 'Germany',
    countryCode: 'de',
    city: 'Munich',
    website: 'meteotech.example.com',
    email: 'kontakt@meteotech.example.com',
    phone: '+49 89 4521 7700',
    focus: 'Meteorological systems',
    type: 'System Integrator',
    region: 'Europe',
  },
  {
    company: 'Helvetia Controls AG',
    country: 'Switzerland',
    countryCode: 'ch',
    city: 'Zürich',
    website: 'helvetia-controls.example.com',
    email: 'sales@helvetia-controls.example.com',
    phone: '+41 44 562 1190',
    focus: 'Remote power management',
    type: 'Reseller',
    region: 'Europe',
  },
  {
    company: 'Iberia Sensors S.L.',
    country: 'Spain',
    countryCode: 'es',
    city: 'Barcelona',
    website: 'iberia-sensors.example.com',
    email: 'ventas@iberia-sensors.example.com',
    phone: '+34 93 220 7340',
    focus: 'Environmental monitoring',
    type: 'Distributor',
    region: 'Europe',
  },

  // North America
  {
    company: 'Cascade Telemetry Inc.',
    country: 'United States',
    countryCode: 'us',
    city: 'Denver',
    website: 'cascade-telemetry.example.com',
    email: 'sales@cascade-telemetry.example.com',
    phone: '+1 303 555 0148',
    focus: 'Industrial IoT & SCADA',
    type: 'Distributor',
    region: 'North America',
  },
  {
    company: 'Maple Grid Solutions',
    country: 'Canada',
    countryCode: 'ca',
    city: 'Toronto',
    website: 'maplegrid.example.com',
    email: 'contact@maplegrid.example.com',
    phone: '+1 416 555 0172',
    focus: 'Energy & utilities',
    type: 'System Integrator',
    region: 'North America',
  },

  // South America
  {
    company: 'AndinaTech Ltda.',
    country: 'Brazil',
    countryCode: 'br',
    city: 'São Paulo',
    website: 'andinatech.example.com',
    email: 'comercial@andinatech.example.com',
    phone: '+55 11 4003 2210',
    focus: 'Weather & agriculture',
    type: 'Distributor',
    region: 'South America',
  },

  // Middle East
  {
    company: 'Gulf Instrumentation LLC',
    country: 'United Arab Emirates',
    countryCode: 'ae',
    city: 'Dubai',
    website: 'gulf-instrumentation.example.com',
    email: 'sales@gulf-instrumentation.example.com',
    phone: '+971 4 350 1180',
    focus: 'Oil, gas & infrastructure',
    type: 'Distributor',
    region: 'Middle East',
  },
  {
    company: 'Levant Systems Co.',
    country: 'Saudi Arabia',
    countryCode: 'sa',
    city: 'Riyadh',
    website: 'levant-systems.example.com',
    email: 'info@levant-systems.example.com',
    phone: '+966 11 460 3320',
    focus: 'Remote site monitoring',
    type: 'OEM Partner',
    region: 'Middle East',
  },

  // Asia
  {
    company: 'Lion City IoT Pte. Ltd.',
    country: 'Singapore',
    countryCode: 'sg',
    city: 'Singapore',
    website: 'lioncity-iot.example.com',
    email: 'sales@lioncity-iot.example.com',
    phone: '+65 6320 1140',
    focus: 'Industrial IoT gateways',
    type: 'Distributor',
    region: 'Asia',
  },
  {
    company: 'Nippon Sensor Works',
    country: 'Japan',
    countryCode: 'jp',
    city: 'Osaka',
    website: 'nippon-sensor.example.com',
    email: 'contact@nippon-sensor.example.com',
    phone: '+81 6 6105 7720',
    focus: 'Precision metrology',
    type: 'System Integrator',
    region: 'Asia',
  },

  // Africa
  {
    company: 'Cape Telemetry (Pty) Ltd',
    country: 'South Africa',
    countryCode: 'za',
    city: 'Cape Town',
    website: 'cape-telemetry.example.com',
    email: 'sales@cape-telemetry.example.com',
    phone: '+27 21 555 0190',
    focus: 'Off-grid power & telemetry',
    type: 'Distributor',
    region: 'Africa',
  },

  // Oceania
  {
    company: 'Southern Cross Controls',
    country: 'Australia',
    countryCode: 'au',
    city: 'Sydney',
    website: 'southerncross-controls.example.com',
    email: 'sales@southerncross-controls.example.com',
    phone: '+61 2 8090 4410',
    focus: 'Weather & water monitoring',
    type: 'Reseller',
    region: 'Oceania',
  },
]
