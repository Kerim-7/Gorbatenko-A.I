import { Faq } from '../components/Faq'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { pageSeo } from '../data/content'

export function FaqPage() {
  return (
    <>
      <Seo page={pageSeo.faq} includeFaqSchema />
      <PageHero
        title="Частые вопросы"
        lead="О консультации, операции «под ключ» и записи на приём."
        image="/images/image6.jpeg"
        imageAlt="Консультация пациента"
      />
      <Faq />
    </>
  )
}
