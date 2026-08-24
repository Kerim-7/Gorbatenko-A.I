import { Conferences } from '../components/Conferences'
import {
  funnelAfterConferences,
  NextSteps,
} from '../components/NextSteps'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo, routes } from '../data/content'

export function ConferencesPage() {
  return (
    <>
      <Seo page={pageSeo.conferences} />
      <PageHero
        compact
        title="Конференции и конгрессы"
        lead="Профильные форумы по ортопедии, хирургии стопы и ортобиологии."
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.home}
        secondaryLabel="На главную"
      />
      <Conferences embedded />
      <NextSteps
        title="От науки к практике"
        steps={funnelAfterConferences}
      />
    </>
  )
}
