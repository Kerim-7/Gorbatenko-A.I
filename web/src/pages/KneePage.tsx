import { KneeSurgery } from '../components/KneeSurgery'
import {
  funnelAfterDirection,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { pageSeo, PRICE, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function KneePage() {
  return (
    <>
      <Seo page={pageSeo.knee} includeFaqSchema />
      <PageHero
        compact
        title="Хирургия коленного сустава"
        lead={`Артроскопия, мениск, пластика ПКС. Операции от ${PRICE.kneeFrom.toLocaleString('ru-RU')} ₽.`}
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.services}
        secondaryLabel="Цены"
      />
      <KneeSurgery embedded />
      <SeoArticle article={seoArticles.knee} />
      <NextSteps steps={funnelAfterDirection} />
    </>
  )
}
