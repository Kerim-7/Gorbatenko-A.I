import { Helmet } from 'react-helmet-async'
import { SEO, SITE, faq, type PageSeo } from '../data/content'

function absoluteUrl(path: string) {
  return `${SITE.url.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`
}

type Props = {
  page: PageSeo
  includeFaqSchema?: boolean
  includePhysicianSchema?: boolean
}

export function Seo({
  page,
  includeFaqSchema = false,
  includePhysicianSchema = false,
}: Props) {
  const ogImage = absoluteUrl(SEO.ogImage)
  const canonical = absoluteUrl(page.path)
  const keywords = page.keywords?.length ? page.keywords : [...SEO.keywords]

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO.titleShort,
    url: SITE.url,
    inLanguage: 'ru-RU',
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE.url}/zapis`,
      name: 'Записаться на консультацию',
    },
  }

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SEO.description,
    url: SITE.url,
    image: ogImage,
    telephone: [SITE.phones.primaryTel, SITE.phones.secondaryTel],
    medicalSpecialty: ['Orthopedic', 'TraumaSurgery', 'Surgical', 'Podiatry'],
    priceRange: '₽₽',
    areaServed: SITE.cities.map((city) => ({ '@type': 'Place', name: city })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: SITE.url,
      },
      ...(page.path !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: page.title.split('—')[0].trim(),
              item: canonical,
            },
          ]
        : []),
    ],
  }

  return (
    <Helmet>
      <html lang="ru" />
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={SITE.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="RU-ROS" />
      <meta name="geo.placename" content="Таганрог, Ростов-на-Дону" />
      <meta name="theme-color" content="#0b1f3a" />

      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {includePhysicianSchema ? (
        <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
      ) : null}
      {includeFaqSchema ? (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      ) : null}
    </Helmet>
  )
}
