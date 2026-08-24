import { Conferences } from '../components/Conferences'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo } from '../data/content'

export function ConferencesPage() {
  return (
    <>
      <Seo page={pageSeo.conferences} />
      <PageHero
        title="Конференции и конгрессы"
        lead="Профильные форумы по ортопедии, хирургии стопы и ортобиологии."
        image="/images/conferences/orthobiology-2025.jpeg"
        imageAlt="Конгресс Ортобиология"
      />
      <Conferences />
    </>
  )
}
