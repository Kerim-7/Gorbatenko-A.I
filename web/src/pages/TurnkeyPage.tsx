import { CtaBand } from '../components/CtaBand'
import {
  funnelAfterTurnkey,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { Turnkey } from '../components/Turnkey'
import { pageSeo, routes } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function TurnkeyPage() {
  return (
    <>
      <Seo page={pageSeo.turnkey} />
      <PageHero
        compact
        title="Операция «под ключ»"
        lead="От подготовки до восстановления — полное сопровождение без скрытых доплат за бригаду, палату и материалы."
        primaryTo={routes.contact}
        primaryLabel="Узнать стоимость"
        secondaryTo={routes.consultation}
        secondaryLabel="Сначала консультация"
        showBreadcrumbs={false}
      />
      <Turnkey embedded />
      <SeoArticle article={seoArticles.turnkey} />
      <NextSteps steps={funnelAfterTurnkey} />
      <CtaBand />
    </>
  )
}
