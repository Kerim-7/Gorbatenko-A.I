import { CtaBand } from '../components/CtaBand'
import {
  funnelAfterDirection,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { UpperLimbSurgery } from '../components/UpperLimbSurgery'
import { formatConsultationPrices, pageSeo, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function UpperLimbPage() {
  return (
    <>
      <Seo page={pageSeo.upperLimb} includeFaqSchema />
      <PageHero
        compact
        title="Хирургия плеча и верхних конечностей"
        lead={`Вывих плеча, вращательная манжета, АКС, импинджмент; также кисть и запястье. Консультация: ${formatConsultationPrices()}.`}
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.consultation}
        secondaryLabel="Консультация"
        showBreadcrumbs={false}
      />
      <UpperLimbSurgery embedded />
      <SeoArticle article={seoArticles.upperLimb} />
      <NextSteps steps={funnelAfterDirection} />
      <CtaBand />
    </>
  )
}
