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
        lead="От подготовки до восстановления — полное сопровождение."
        primaryTo={routes.contact}
        primaryLabel="Узнать стоимость"
        secondaryTo={routes.consultation}
        secondaryLabel="Сначала консультация"
      />
      <Turnkey embedded />
      <SeoArticle article={seoArticles.turnkey} />
      <NextSteps steps={funnelAfterTurnkey} />
    </>
  )
}
