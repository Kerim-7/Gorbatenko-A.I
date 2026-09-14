import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { Patents } from '../components/Patents'
import { Seo } from '../components/Seo'
import { pageSeo, routes } from '../data/content'

export function PatentsPage() {
  return (
    <>
      <Seo page={pageSeo.patents} />
      <PageHero
        compact
        title="Патенты и сертификаты"
        lead="Патенты РФ и сертификаты курсов по ортопедии, хирургии стопы и артроскопии."
        primaryTo={routes.contact}
        primaryLabel="Записаться"
        showSecondary={false}
        showBreadcrumbs={false}
      />
      <Patents embedded />
      <CtaBand />
    </>
  )
}
