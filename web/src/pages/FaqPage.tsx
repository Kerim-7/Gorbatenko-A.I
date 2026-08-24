import { Faq } from '../components/Faq'
import {
  funnelAfterFaq,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo, routes } from '../data/content'

export function FaqPage() {
  return (
    <>
      <Seo page={pageSeo.faq} includeFaqSchema />
      <PageHero
        compact
        title="Частые вопросы"
        lead="Консультация, «под ключ», стопы и колено, цены, география и восстановление."
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.services}
        secondaryLabel="Цены"
      />
      <Faq embedded />
      <NextSteps steps={funnelAfterFaq} />
    </>
  )
}
