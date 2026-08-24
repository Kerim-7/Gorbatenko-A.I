import { FeetSurgery } from '../components/FeetSurgery'
import {
  funnelAfterDirection,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { pageSeo, PRICE, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function FeetPage() {
  return (
    <>
      <Seo page={pageSeo.feet} includeFaqSchema />
      <PageHero
        compact
        title="Хирургия стоп"
        lead={`Деформации, Hallux valgus, последствия травм у взрослых и детей. От ${PRICE.footFrom.toLocaleString('ru-RU')} ₽.`}
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.services}
        secondaryLabel="Цены"
      />
      <FeetSurgery embedded />
      <SeoArticle article={seoArticles.feet} />
      <NextSteps steps={funnelAfterDirection} />
    </>
  )
}
