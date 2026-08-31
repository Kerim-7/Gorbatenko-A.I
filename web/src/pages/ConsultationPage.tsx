import { Consultation } from '../components/Consultation'
import { CtaBand } from '../components/CtaBand'
import {
  funnelAfterConsult,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { formatConsultationPrices, pageSeo, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function ConsultationPage() {
  return (
    <>
      <Seo page={pageSeo.consultation} />
      <PageHero
        compact
        title="Консультация"
        lead={`Осмотр, разбор снимков и план лечения. ${formatConsultationPrices()}.`}
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.turnkey}
        secondaryLabel="Операция «под ключ»"
        showBreadcrumbs={false}
      />
      <Consultation embedded />
      <SeoArticle article={seoArticles.consultation} />
      <NextSteps steps={funnelAfterConsult} />
      <CtaBand />
    </>
  )
}
