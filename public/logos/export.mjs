import puppeteer from 'puppeteer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const previewUrl = 'http://localhost:4321/preview.html'

const EXPORTS = [
  { label: '01', selector: '.grid > div:nth-child(1) .card', filename: 'logo-01-primary-black.png' },
  { label: '02', selector: '.grid > div:nth-child(2) .card', filename: 'logo-02-cream.png' },
  { label: '03', selector: '.grid > div:nth-child(3) .card', filename: 'logo-03-white-on-dark.png' },
  { label: '04', selector: '.grid > div:nth-child(4) .card', filename: 'logo-04-white-on-red.png' },
  { label: '05', selector: '.grid > div:nth-child(5) .card', filename: 'logo-05-all-red.png' },
  { label: '06', selector: '.grid > div:nth-child(6) .card', filename: 'logo-06-stacked-light.png' },
  { label: '07', selector: '.grid > div:nth-child(7) .card', filename: 'logo-07-stacked-dark.png' },
  { label: '08', selector: '.grid > div:nth-child(8) .card', filename: 'logo-08-icons.png' },
]

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.setViewport({ width: 1200, height: 2000, deviceScaleFactor: 3 })
await page.goto(previewUrl, { waitUntil: 'networkidle2' })

// Wait for fonts to load
await new Promise(r => setTimeout(r, 2000))

for (const exp of EXPORTS) {
  const el = await page.$(exp.selector)
  if (!el) { console.log(`SKIP: ${exp.label} not found`); continue }
  const outPath = path.join(__dirname, exp.filename)
  await el.screenshot({ path: outPath })
  console.log(`✓ ${exp.filename}`)
}

await browser.close()
console.log('Done.')
