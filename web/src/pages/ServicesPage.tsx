import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'
import { pageSeo } from '../data/content'

export function ServicesPage() {
  return (
    <>
      <Seo page={pageSeo.services} />
      <PageHero
        title="Цены на операции"
        lead="Прозрачная стоимость хирургии стоп и коленных суставов."
        image="/images/image9.jpeg"
        imageAlt="Оперативное лечение нижних конечностей"
      />
      <Services />
    </>
  )
}
