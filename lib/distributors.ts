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
  city: string
  website: string
  email: string
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
    city: 'Brno',
    website: 'nordic-industrial.example.com',
    email: 'sales@nordic-industrial.example.com',
    focus: 'GSM control & telemetry',
    type: 'Distributor',
    region: 'Europe',
  },
  {
    company: 'Baltic Automation s.r.o.',
    country: 'Poland',
    city: 'Wrocław',
    website: 'baltic-automation.example.com',
    email: 'info@baltic-automation.example.com',
    focus: 'Industrial IoT gateways',
    type: 'Distributor',
    region: 'Europe',
  },
  {
    company: 'MeteoTech GmbH',
    country: 'Germany',
    city: 'Munich',
    website: 'meteotech.example.com',
    email: 'kontakt@meteotech.example.com',
    focus: 'Meteorological systems',
    type: 'System Integrator',
    region: 'Europe',
  },
  {
    company: 'Helvetia Controls AG',
    country: 'Switzerland',
    city: 'Zürich',
    website: 'helvetia-controls.example.com',
    email: 'sales@helvetia-controls.example.com',
    focus: 'Remote power management',
    type: 'Reseller',
    region: 'Europe',
  },
  {
    company: 'Iberia Sensors S.L.',
    country: 'Spain',
    city: 'Barcelona',
    website: 'iberia-sensors.example.com',
    email: 'ventas@iberia-sensors.example.com',
    focus: 'Environmental monitoring',
    type: 'Distributor',
    region: 'Europe',
  },

  // North America
  {
    company: 'Cascade Telemetry Inc.',
    country: 'United States',
    city: 'Denver',
    website: 'cascade-telemetry.example.com',
    email: 'sales@cascade-telemetry.example.com',
    focus: 'Industrial IoT & SCADA',
    type: 'Distributor',
    region: 'North America',
  },
  {
    company: 'Maple Grid Solutions',
    country: 'Canada',
    city: 'Toronto',
    website: 'maplegrid.example.com',
    email: 'contact@maplegrid.example.com',
    focus: 'Energy & utilities',
    type: 'System Integrator',
    region: 'North America',
  },

  // South America
  {
    company: 'AndinaTech Ltda.',
    country: 'Brazil',
    city: 'São Paulo',
    website: 'andinatech.example.com',
    email: 'comercial@andinatech.example.com',
    focus: 'Weather & agriculture',
    type: 'Distributor',
    region: 'South America',
  },

  // Middle East
  {
    company: 'Gulf Instrumentation LLC',
    country: 'United Arab Emirates',
    city: 'Dubai',
    website: 'gulf-instrumentation.example.com',
    email: 'sales@gulf-instrumentation.example.com',
    focus: 'Oil, gas & infrastructure',
    type: 'Distributor',
    region: 'Middle East',
  },
  {
    company: 'Levant Systems Co.',
    country: 'Saudi Arabia',
    city: 'Riyadh',
    website: 'levant-systems.example.com',
    email: 'info@levant-systems.example.com',
    focus: 'Remote site monitoring',
    type: 'OEM Partner',
    region: 'Middle East',
  },

  // Asia
  {
    company: 'Lion City IoT Pte. Ltd.',
    country: 'Singapore',
    city: 'Singapore',
    website: 'lioncity-iot.example.com',
    email: 'sales@lioncity-iot.example.com',
    focus: 'Industrial IoT gateways',
    type: 'Distributor',
    region: 'Asia',
  },
  {
    company: 'Nippon Sensor Works',
    country: 'Japan',
    city: 'Osaka',
    website: 'nippon-sensor.example.com',
    email: 'contact@nippon-sensor.example.com',
    focus: 'Precision metrology',
    type: 'System Integrator',
    region: 'Asia',
  },

  // Africa
  {
    company: 'Cape Telemetry (Pty) Ltd',
    country: 'South Africa',
    city: 'Cape Town',
    website: 'cape-telemetry.example.com',
    email: 'sales@cape-telemetry.example.com',
    focus: 'Off-grid power & telemetry',
    type: 'Distributor',
    region: 'Africa',
  },

  // Oceania
  {
    company: 'Southern Cross Controls',
    country: 'Australia',
    city: 'Sydney',
    website: 'southerncross-controls.example.com',
    email: 'sales@southerncross-controls.example.com',
    focus: 'Weather & water monitoring',
    type: 'Reseller',
    region: 'Oceania',
  },
]
