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
    alternateName: [
      'Горбатенко хирургия стоп',
      'Ортопед Горбатенко Таганрог Ростов',
      'Хирургия стоп и колена под ключ',
    ],
    url: SITE.url,
    inLanguage: 'ru-RU',
    keywords: keywords.slice(0, 25).join(', '),
    potentialAction: {
      '@type': 'ReserveAction',
      target: `${SITE.url}/zapis`,
      name: 'Записаться на консультацию к ортопеду',
    },
  }

  const physicianSchema = {
    '@context': 'https://schema.org',
    '@type': ['Physician', 'Person'],
    name: SITE.name,
    alternateName: [SITE.shortName, SITE.brand, 'Горбатенко Андрей Иванович'],
    description: SEO.description,
    url: SITE.url,
    image: ogImage,
    telephone: [SITE.phones.primaryTel, SITE.phones.secondaryTel],
    jobTitle: 'Травматолог-ортопед, хирург, подолог',
    honorificPrefix: 'к.м.н., доцент',
    medicalSpecialty: [
      'Orthopedic',
      'TraumaSurgery',
      'Surgical',
      'Podiatry',
      'Pediatric',
    ],
    knowsAbout: [...SEO.knowsAbout],
    priceRange: '₽₽',
    areaServed: SITE.cities.map((city) => ({ '@type': 'AdministrativeArea', name: city })),
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Хирургия стоп',
        url: `${SITE.url}/hirurgiya-stop`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Хирургия коленного сустава',
        url: `${SITE.url}/hirurgiya-kolena`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Хирургия верхних конечностей',
        url: `${SITE.url}/hirurgiya-verhney-konechnosti`,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Операция под ключ',
        url: `${SITE.url}/pod-kluch`,
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Консультация ортопеда',
        url: `${SITE.url}/konsultaciya`,
      },
    ],
  }

  const medicalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE.brand,
    description: SEO.description,
    url: SITE.url,
    image: ogImage,
    telephone: SITE.phones.primaryTel,
    priceRange: '₽₽',
    areaServed: SITE.cities,
    medicalSpecialty: ['Orthopedic', 'TraumaSurgery', 'Podiatry'],
    keywords: keywords.slice(0, 50).join(', '),
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: page.title,
    description: page.description,
    url: canonical,
    inLanguage: 'ru-RU',
    isPartOf: { '@type': 'WebSite', name: SEO.titleShort, url: SITE.url },
    about: page.procedure
      ? { '@type': 'MedicalProcedure', name: page.procedure.name }
      : { '@type': 'MedicalSpecialty', name: 'Orthopedic' },
    keywords: keywords.slice(0, 30).join(', '),
    primaryImageOfPage: ogImage,
  }

  const procedureSchema = page.procedure
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: page.procedure.name,
        alternateName: page.procedure.alternateName,
        description: page.procedure.description,
        url: canonical,
        bodyLocation: page.procedure.bodyLocation,
        procedureType: 'https://schema.org/SurgicalProcedure',
        ...(page.offers?.length
          ? {
              offers: page.offers.map((offer) => ({
                '@type': 'Offer',
                name: offer.name,
                price: offer.price,
                priceCurrency: offer.priceCurrency || 'RUB',
                availability: 'https://schema.org/InStock',
                url: canonical,
              })),
            }
          : {}),
      }
    : null

  const offersSchema =
    !page.procedure && page.offers?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'OfferCatalog',
          name: page.title,
          url: canonical,
          itemListElement: page.offers.map((offer, index) => ({
            '@type': 'Offer',
            position: index + 1,
            name: offer.name,
            price: offer.price,
            priceCurrency: offer.priceCurrency || 'RUB',
            url: canonical,
          })),
        }
      : null

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
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="ru" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE.name} — хирургия стоп и колена`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="RU-ROS" />
      <meta name="geo.placename" content="Таганрог, Ростов-на-Дону" />
      <meta name="geo.position" content="47.2362;38.8969" />
      <meta name="ICBM" content="47.2362, 38.8969" />
      <meta name="theme-color" content="#0b1f3a" />
      <meta name="format-detection" content="telephone=yes" />

      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      {procedureSchema ? (
        <script type="application/ld+json">{JSON.stringify(procedureSchema)}</script>
      ) : null}
      {offersSchema ? (
        <script type="application/ld+json">{JSON.stringify(offersSchema)}</script>
      ) : null}
      {includePhysicianSchema ? (
        <>
          <script type="application/ld+json">{JSON.stringify(physicianSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(medicalBusinessSchema)}</script>
        </>
      ) : null}
      {includeFaqSchema ? (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      ) : null}
    </Helmet>
  )
}
