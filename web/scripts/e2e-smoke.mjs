import { chromium } from 'playwright'

const BASE = process.env.E2E_BASE_URL ?? 'http://127.0.0.1:4177'

const sizes = [
  [375, 812],
  [768, 1024],
  [1280, 800],
]

const pages = [
  { path: '/', expect: /Горбатенко|ортопед/i },
  { path: '/uslugi', expect: /цен|услуг|прайс/i },
  { path: '/konsultaciya', expect: /консультац/i },
  { path: '/pod-kluch', expect: /ключ/i },
  { path: '/hirurgiya-stop', expect: /стоп/i },
  { path: '/hirurgiya-kolena', expect: /колен/i },
  { path: '/raboty', expect: /работ/i },
  { path: '/konferencii', expect: /конференц/i },
  { path: '/voprosy', expect: /вопрос/i },
  { path: '/zapis', expect: /запис/i },
  { path: '/ne-suschestvuet', expect: /не найден|404|страниц/i },
]

const browser = await chromium.launch({ headless: true })
const failures = []
let checks = 0

for (const [w, h] of sizes) {
  const context = await browser.newContext({ viewport: { width: w, height: h } })
  const page = await context.newPage()

  for (const { path, expect } of pages) {
    checks += 1
    const label = `${w}x${h} ${path}`
    try {
      const res = await page.goto(`${BASE}${path}`, {
        waitUntil: 'networkidle',
        timeout: 30000,
      })
      if (!res || (res.status() >= 500)) {
        failures.push(`${label}: bad status ${res?.status()}`)
        continue
      }

      await page.waitForSelector('h1', { timeout: 10000 })
      const text = await page.locator('body').innerText()
      if (!expect.test(text)) {
        failures.push(`${label}: body text did not match ${expect}`)
      }

      const overflow = await page.evaluate(() => {
        const cw = document.documentElement.clientWidth
        const offenders = []
        for (const el of document.querySelectorAll('body *')) {
          if (el.scrollWidth > cw + 2) {
            const cls =
              typeof el.className === 'string' ? el.className.trim() : ''
            offenders.push(`${el.tagName.toLowerCase()}${cls ? '.' + cls.split(/\s+/).slice(0, 2).join('.') : ''}`)
            if (offenders.length >= 5) break
          }
        }
        return {
          scrollWider: document.documentElement.scrollWidth > cw + 2,
          offenders,
        }
      })

      if (overflow.scrollWider) {
        failures.push(
          `${label}: horizontal overflow (${overflow.offenders.join(', ') || 'unknown'})`,
        )
      }
    } catch (err) {
      failures.push(`${label}: ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  await context.close()
}

await browser.close()

if (failures.length) {
  console.error(`FAIL ${failures.length}/${checks}`)
  for (const f of failures) console.error(' -', f)
  process.exit(1)
}

console.log(`PASS ${checks} checks across ${sizes.length} viewports × ${pages.length} pages`)
