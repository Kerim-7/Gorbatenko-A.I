import { Contact } from '../components/Contact'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { pageSeo, routes, SITE } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function ContactPage() {
  return (
    <>
      <Seo page={pageSeo.contact} includePhysicianSchema />
      <PageHero
        compact
        title="Запись на консультацию"
        lead={`Стоимость — ${SITE.consultationPrice} ₽. Ответим и подберём время.`}
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
