import { FeetSurgery } from '../components/FeetSurgery'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo } from '../data/content'

export function FeetPage() {
  return (
    <>
      <Seo page={pageSeo.feet} />
      <PageHero
        title="Хирургия стоп"
        lead="Операции у взрослых и детей: деформации, Hallux valgus, последствия травм."
        image="/images/image13.jpeg"
        imageAlt="Хирургия стоп"
      />
      <FeetSurgery />
    </>
  )
}
