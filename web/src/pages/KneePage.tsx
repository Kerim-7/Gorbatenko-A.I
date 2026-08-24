import { KneeSurgery } from '../components/KneeSurgery'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo } from '../data/content'

export function KneePage() {
  return (
    <>
      <Seo page={pageSeo.knee} />
      <PageHero
        title="Хирургия коленного сустава"
        lead="Артроскопия, мениск, пластика ПКС и лечение травм колена."
        image="/images/image18.jpeg"
        imageAlt="Хирургия коленного сустава"
      />
      <KneeSurgery />
    </>
  )
}
