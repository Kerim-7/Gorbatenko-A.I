import {
  funnelAfterDirection,
  NextSteps,
} from '../components/NextSteps'
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
        lead="Клинические результаты хирургии стоп: деформации, плоскостопие, Hallux valgus."
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        secondaryTo={routes.feet}
        secondaryLabel="Хирургия стоп"
      />
      <Works embedded />
      <NextSteps
        title="Хотите похожий результат?"
        steps={funnelAfterDirection}
      />
    </>
  )
}
