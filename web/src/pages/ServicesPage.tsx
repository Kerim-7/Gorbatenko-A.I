import { CtaBand } from '../components/CtaBand'
import {
  funnelAfterPrices,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { Services } from '../components/Services'
import { pageSeo, PRICE, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function ServicesPage() {
  return (
    <>
      <Seo page={pageSeo.services} />
      <PageHero
        compact
        title="Цены на операции"
        lead={`Стопы от ${PRICE.footFrom.toLocaleString('ru-RU')} ₽ · колено от ${PRICE.kneeFrom.toLocaleString('ru-RU')} ₽. Итог — после консультации.`}
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.consultation}
        secondaryLabel="О консультации"
        showBreadcrumbs={false}
      />
      <Services showHeading={false} />
      <SeoArticle article={seoArticles.services} />
      <NextSteps steps={funnelAfterPrices} />
      <CtaBand />
    </>
  )
}
