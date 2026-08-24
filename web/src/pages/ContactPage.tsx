import { Contact } from '../components/Contact'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo, SITE } from '../data/content'

export function ContactPage() {
  return (
    <>
      <Seo page={pageSeo.contact} />
      <PageHero
        title="Запись на консультацию"
        lead={`Стоимость консультации — ${SITE.consultationPrice} ₽. Ответим и подберём время.`}
        image="/images/image1.jpeg"
        imageAlt="Доктор Горбатенко"
      />
      <Contact />
    </>
  )
}
