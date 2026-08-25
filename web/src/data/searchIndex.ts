import { KEYWORD_CLUSTERS } from './keywords'
import { seoArticles, type SeoBlock } from './seoArticles'
import { workCases } from './works'
import {
  SITE,
  conferences,
  consultationItems,
  faq,
  footIndications,
  footOperations,
  footPrices,
  kneeIndications,
  kneeOperations,
  kneePrices,
  pageSeo,
  routes,
  turnkeyItems,
} from './content'

export type SearchCategory =
  | 'Страница'
  | 'Стопы'
  | 'Колено'
  | 'Цены'
  | 'Консультация'
  | 'Под ключ'
  | 'Вопросы'
  | 'Работы'
  | 'Конференции'
  | 'Запись'

export type SearchEntry = {
  id: string
  title: string
  description: string
  href: string
  category: SearchCategory
  /** Нормализованная строка для поиска */
  haystack: string
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[«»""„]/g, '"')
    .replace(/[^\p{L}\p{N}\s+-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function entry(
  partial: Omit<SearchEntry, 'haystack'> & { keywords?: string[] },
): SearchEntry {
  const haystack = normalize(
    [partial.title, partial.description, partial.category, ...(partial.keywords ?? [])].join(' '),
  )
  const { keywords: _k, ...rest } = partial
  return { ...rest, haystack }
}

function buildIndex(): SearchEntry[] {
  const items: SearchEntry[] = [
    entry({
      id: 'page-home',
      title: 'Главная',
      description: pageSeo.home.description,
      href: routes.home,
      category: 'Страница',
      keywords: [...KEYWORD_CLUSTERS.brand, ...KEYWORD_CLUSTERS.general],
    }),
    entry({
      id: 'page-feet',
      title: 'Хирургия стоп',
      description: pageSeo.feet.description,
      href: routes.feet,
      category: 'Стопы',
      keywords: [...KEYWORD_CLUSTERS.feet, ...KEYWORD_CLUSTERS.symptoms],
    }),
    entry({
      id: 'page-knee',
      title: 'Хирургия колена',
      description: pageSeo.knee.description,
      href: routes.knee,
      category: 'Колено',
      keywords: [...KEYWORD_CLUSTERS.knee, ...KEYWORD_CLUSTERS.symptoms],
    }),
    entry({
      id: 'page-services',
      title: 'Цены и прайс',
      description: pageSeo.services.description,
      href: routes.services,
      category: 'Цены',
      keywords: [...KEYWORD_CLUSTERS.prices],
    }),
    entry({
      id: 'page-consultation',
      title: 'Консультация',
      description: pageSeo.consultation.description,
      href: routes.consultation,
      category: 'Консультация',
      keywords: [...KEYWORD_CLUSTERS.consult],
    }),
    entry({
      id: 'page-turnkey',
      title: 'Операция «под ключ»',
      description: pageSeo.turnkey.description,
      href: routes.turnkey,
      category: 'Под ключ',
      keywords: [...KEYWORD_CLUSTERS.turnkey],
    }),
    entry({
      id: 'page-works',
      title: 'Работы до и после',
      description: pageSeo.works.description,
      href: routes.works,
      category: 'Работы',
      keywords: ['до и после', 'результаты операций', 'клинические случаи'],
    }),
    entry({
      id: 'page-conferences',
      title: 'Конференции',
      description: pageSeo.conferences.description,
      href: routes.conferences,
      category: 'Конференции',
      keywords: ['ортобиология', 'РАХСГС', 'Артромост', 'съезд'],
    }),
    entry({
      id: 'page-faq',
      title: 'Частые вопросы',
      description: pageSeo.faq.description,
      href: routes.faq,
      category: 'Вопросы',
      keywords: [...KEYWORD_CLUSTERS.consult, ...KEYWORD_CLUSTERS.prices],
    }),
    entry({
      id: 'page-contact',
      title: 'Запись на приём',
      description: pageSeo.contact.description,
      href: routes.contact,
      category: 'Запись',
      keywords: [...KEYWORD_CLUSTERS.booking, ...SITE.cities, SITE.phones.primaryDisplay],
    }),
  ]

  for (const item of footPrices) {
    items.push(
      entry({
        id: `price-foot-${item.name}`,
        title: item.name,
        description: `${item.price} · хирургия стоп`,
        href: routes.services,
        category: 'Цены',
        keywords: ['цена', 'стоимость', 'прайс', 'стопы'],
      }),
    )
  }

  for (const item of kneePrices) {
    items.push(
      entry({
        id: `price-knee-${item.name}`,
        title: item.name,
        description: `${item.price} · хирургия колена`,
        href: routes.services,
        category: 'Цены',
        keywords: ['цена', 'стоимость', 'прайс', 'колено'],
      }),
    )
  }

  for (const text of footIndications) {
    items.push(
      entry({
        id: `ind-foot-${text}`,
        title: text,
        description: 'Показание · хирургия стоп',
        href: routes.feet,
        category: 'Стопы',
      }),
    )
  }

  for (const text of footOperations) {
    items.push(
      entry({
        id: `op-foot-${text}`,
        title: text,
        description: 'Операция на стопе',
        href: routes.feet,
        category: 'Стопы',
      }),
    )
  }

  for (const text of kneeIndications) {
    items.push(
      entry({
        id: `ind-knee-${text}`,
        title: text,
        description: 'Показание · хирургия колена',
        href: routes.knee,
        category: 'Колено',
      }),
    )
  }

  for (const text of kneeOperations) {
    items.push(
      entry({
        id: `op-knee-${text}`,
        title: text,
        description: 'Операция на колене',
        href: routes.knee,
        category: 'Колено',
      }),
    )
  }

  for (const text of consultationItems) {
    items.push(
      entry({
        id: `consult-${text}`,
        title: text,
        description: `Входит в консультацию · ${SITE.consultationPrice} ₽`,
        href: routes.consultation,
        category: 'Консультация',
      }),
    )
  }

  for (const text of turnkeyItems) {
    items.push(
      entry({
        id: `turnkey-${text}`,
        title: text,
        description: 'Входит в операцию «под ключ»',
        href: routes.turnkey,
        category: 'Под ключ',
      }),
    )
  }

  faq.forEach((item, index) => {
    items.push(
      entry({
        id: `faq-${index}`,
        title: item.q,
        description: item.a,
        href: item.links?.[0]?.to ?? routes.faq,
        category: 'Вопросы',
      }),
    )
  })

  conferences.forEach((item, index) => {
    items.push(
      entry({
        id: `conf-${index}`,
        title: `${item.title} (${item.year})`,
        description: item.detail,
        href: routes.conferences,
        category: 'Конференции',
      }),
    )
  })

  for (const work of workCases) {
    items.push(
      entry({
        id: `work-${work.id}`,
        title: work.title,
        description: `${work.caption}${work.year ? ` · ${work.year}` : ''}`,
        href: routes.works,
        category: 'Работы',
        keywords: [work.alt, work.tag, 'до и после'],
      }),
    )
  }

  const seoRouteMap: Record<string, string> = {
    'seo-home': routes.home,
    'seo-feet': routes.feet,
    'seo-knee': routes.knee,
    'seo-services': routes.services,
    'seo-consultation': routes.consultation,
    'seo-turnkey': routes.turnkey,
    'seo-contact': routes.contact,
  }

  for (const article of Object.values(seoArticles)) {
    const articleHref = seoRouteMap[article.id] ?? routes.home
    items.push(
      entry({
        id: `seo-${article.id}`,
        title: article.title,
        description: article.lead,
        href: articleHref,
        category: 'Страница',
      }),
    )
    for (const block of article.blocks as readonly SeoBlock[]) {
      items.push(
        entry({
          id: `seo-block-${article.id}-${block.heading}`,
          title: block.heading,
          description: block.paragraphs[0] ?? '',
          href: block.links?.[0]?.to ?? articleHref,
          category: 'Страница',
          keywords: block.bullets,
        }),
      )
    }
  }

  for (const city of SITE.cities) {
    items.push(
      entry({
        id: `city-${city}`,
        title: `Приём: ${city}`,
        description: 'География приёма и записи',
        href: routes.contact,
        category: 'Запись',
        keywords: [...KEYWORD_CLUSTERS.geo, city],
      }),
    )
  }

  return items
}

export const searchIndex: SearchEntry[] = buildIndex()

export type SearchHit = SearchEntry & { score: number }

function scoreEntry(entryItem: SearchEntry, tokens: string[], raw: string): number {
  let score = 0
  const title = normalize(entryItem.title)
  const description = normalize(entryItem.description)

  if (title === raw) score += 120
  else if (title.startsWith(raw)) score += 80
  else if (title.includes(raw)) score += 55

  if (entryItem.haystack.includes(raw)) score += 25

  for (const token of tokens) {
    if (token.length < 2) continue
    if (title.includes(token)) score += 18
    else if (description.includes(token)) score += 8
    else if (entryItem.haystack.includes(token)) score += 5
    else return 0
  }

  if (entryItem.category === 'Страница') score += 4
  if (entryItem.category === 'Цены' || entryItem.category === 'Вопросы') score += 2

  return score
}

export function searchSite(query: string, limit = 8): SearchHit[] {
  const raw = normalize(query)
  if (!raw) return []

  const tokens = raw.split(' ').filter(Boolean)
  const hits: SearchHit[] = []

  for (const item of searchIndex) {
    const score = scoreEntry(item, tokens, raw)
    if (score > 0) hits.push({ ...item, score })
  }

  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'ru'))

  const seen = new Set<string>()
  const unique: SearchHit[] = []
  for (const hit of hits) {
    const key = `${hit.href}|${hit.title}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(hit)
    if (unique.length >= limit) break
  }

  return unique
}
