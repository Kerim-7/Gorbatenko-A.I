import { Contact } from '../components/Contact'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { formatConsultationPrices, pageSeo, routes, SITE } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function ContactPage() {
  return (
    <>
      <Seo page={pageSeo.contact} includePhysicianSchema />
      <PageHero
        compact
        kicker="Запись"
        title="Запись на консультацию"
        lead={`${formatConsultationPrices()}. Ответим и подберём время.`}
        chips={[SITE.cities[0], SITE.cities[1], 'WhatsApp']}
        primaryTo={routes.consultation}
        primaryLabel="Что входит в приём"
        secondaryTo={routes.services}
        secondaryLabel="Цены"
      />
      <Contact embedded />
      <SeoArticle article={seoArticles.contact} />
    </>
  )
}
