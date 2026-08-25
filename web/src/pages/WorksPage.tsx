import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { Works } from '../components/Works'
import { pageSeo, routes } from '../data/content'

export function WorksPage() {
  return (
    <>
      <Seo page={pageSeo.works} />
      <PageHero
        compact
        title="Работы до и после"
        lead="Клинические результаты хирургии стоп и колена: деформации, плоскостопие, Hallux valgus, артроскопия."
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        showSecondary={false}
        showBreadcrumbs={false}
      />
      <Works embedded />
      <CtaBand />
    </>
  )
}
