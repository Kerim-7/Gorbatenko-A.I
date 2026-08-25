import { Conferences } from '../components/Conferences'
import { CtaBand } from '../components/CtaBand'
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
        showSecondary={false}
        showBreadcrumbs={false}
      />
      <Conferences embedded />
      <CtaBand />
    </>
  )
}
