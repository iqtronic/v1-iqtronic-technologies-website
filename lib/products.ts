export type Product = {
  slug: string
  name: string
  category: string
  image: string
  tagline: string
  body: string
  specs: string[]
  highlights: { title: string; body: string }[]
  technical: { label: string; value: string }[]
  applications: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'iqsocket',
    name: 'IQSocket',
    category: 'Remote Power Control',
    image: '/images/iqsocket.png',
    tagline: 'GSM & IP controlled power switching',
    body: 'GSM and IP controlled power sockets for remote switching, reboot and monitoring of critical equipment in unattended sites. Built for routers, servers, gates and industrial machinery that must never stay offline.',
    specs: ['GSM / Wi-Fi / Ethernet', 'Temperature sensing', 'Scheduling & alerts'],
    highlights: [
      {
        title: 'Remote reboot',
        body: 'Power-cycle frozen equipment from anywhere via SMS, app or web — no site visit required.',
      },
      {
        title: 'Automatic recovery',
        body: 'Ping-watchdog logic detects dead connections and restarts hardware autonomously.',
      },
      {
        title: 'Environmental alerts',
        body: 'Built-in temperature sensing with configurable SMS and email notifications.',
      },
    ],
    technical: [
      { label: 'Connectivity', value: 'GSM 2G/4G, Wi-Fi, Ethernet' },
      { label: 'Switching', value: 'Up to 16 A resistive load' },
      { label: 'Control', value: 'SMS, mobile app, web portal, API' },
      { label: 'Sensors', value: 'Onboard temperature, optional probes' },
      { label: 'Supply', value: '110–230 V AC, 50/60 Hz' },
      { label: 'Operating temp.', value: '−20 °C to +60 °C' },
    ],
    applications: [
      'Remote router & modem reboot',
      'Telecom & broadcast sites',
      'Server room power management',
      'Gate, pump & motor control',
    ],
  },
  {
    slug: 'weather-stations',
    name: 'Industrial Weather Stations',
    category: 'Environmental Sensing',
    image: '/images/weather-station.png',
    tagline: 'Rugged calibrated meteorological systems',
    body: 'Rugged, calibrated stations measuring wind, temperature, humidity, pressure and solar radiation for energy and infrastructure. Engineered for unattended outdoor deployment over many years.',
    specs: ['IP66 enclosure', 'Calibrated sensors', 'Solar / battery powered'],
    highlights: [
      {
        title: 'Calibrated accuracy',
        body: 'Every sensor is characterised and certified in our own laboratories before shipping.',
      },
      {
        title: 'Self-powered',
        body: 'Solar and battery options enable fully autonomous installations off-grid.',
      },
      {
        title: 'Field-hardened',
        body: 'IP66 enclosures and wind-tunnel-tested housings survive extreme weather.',
      },
    ],
    technical: [
      { label: 'Parameters', value: 'Wind, temp, humidity, pressure, solar' },
      { label: 'Wind range', value: '0–75 m/s, 0–360°' },
      { label: 'Enclosure', value: 'IP66, UV-stable polymer' },
      { label: 'Connectivity', value: 'GSM / NB-IoT / Modbus' },
      { label: 'Power', value: 'Solar + battery or mains' },
      { label: 'Logging', value: 'Onboard with remote retrieval' },
    ],
    applications: [
      'Renewable energy sites',
      'Transport & road weather',
      'Agriculture & viticulture',
      'Environmental monitoring networks',
    ],
  },
  {
    slug: 'monitoring-systems',
    name: 'Monitoring Systems',
    category: 'Telemetry & SCADA',
    image: '/images/monitoring-system.png',
    tagline: 'DIN-rail telemetry & SCADA gateways',
    body: 'DIN-rail gateways and telemetry units that acquire, log and transmit field data over cellular and industrial protocols. The connective tissue between field sensors and your control room.',
    specs: ['Modbus / MQTT', 'Edge logging', 'Remote firmware update'],
    highlights: [
      {
        title: 'Protocol bridge',
        body: 'Translate between Modbus, MQTT, REST and legacy industrial buses.',
      },
      {
        title: 'Edge intelligence',
        body: 'Local logging and alarm logic keep working even when connectivity drops.',
      },
      {
        title: 'Fleet management',
        body: 'Remote firmware updates and configuration across thousands of deployed units.',
      },
    ],
    technical: [
      { label: 'I/O', value: 'Digital, analog, pulse, RS-485' },
      { label: 'Protocols', value: 'Modbus RTU/TCP, MQTT, REST' },
      { label: 'Connectivity', value: '4G/LTE, Ethernet, Wi-Fi' },
      { label: 'Mounting', value: 'DIN-rail, IP20/IP65 options' },
      { label: 'Storage', value: 'Onboard non-volatile logging' },
      { label: 'Management', value: 'Remote OTA firmware & config' },
    ],
    applications: [
      'Utility & water telemetry',
      'Industrial SCADA integration',
      'Energy metering & submetering',
      'Remote asset monitoring',
    ],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
