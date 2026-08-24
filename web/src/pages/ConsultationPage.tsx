import { Consultation } from '../components/Consultation'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo, SITE } from '../data/content'

export function ConsultationPage() {
  return (
    <>
      <Seo page={pageSeo.consultation} />
      <PageHero
        title="Консультация"
        lead={`Разбор случая и план лечения. Стоимость — ${SITE.consultationPrice} ₽.`}
        image="/images/image6.jpeg"
        imageAlt="Консультация доктора Горбатенко"
      />
      <Consultation />
    </>
  )
}
