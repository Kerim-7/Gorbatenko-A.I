import { Link } from 'react-router-dom'
import { faq, routes } from '../data/content'
import { FaqAccordion } from './FaqAccordion'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
  page?: boolean
}

export function Faq({ embedded = false, page = false }: Props) {
  if (page) {
    return (
      <section className="section faq faq-page" id="faq" aria-labelledby="faq-heading">
        <div className="wrap faq-page-inner">
          <header className="faq-page-head page-hero-editorial-copy">
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link to={routes.home}>Главная</Link>
              <span aria-hidden="true">/</span>
              <span>Частые вопросы</span>
            </nav>
            <p className="kicker">Пациентам</p>
            <h1 id="faq-heading">Частые вопросы</h1>
          </header>

          <FaqAccordion items={faq} name="faq-page" renderLinks />
        </div>
      </section>
    )
  }

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="faq-heading" className="sr-only">
            Частые вопросы
          </h2>
        ) : (
          <Reveal className="section-head">
            <p className="kicker">FAQ</p>
            <h2 id="faq-heading">Частые вопросы</h2>
            <p>Консультация, «под ключ», стопы и колено, цены, запись и восстановление</p>
          </Reveal>
        )}

        <FaqAccordion items={faq} name="faq-section" renderLinks />
        {!embedded ? (
          <p className="teaser-more">
            <Link to={routes.contact}>Перейти к записи</Link>
          </p>
        ) : null}
      </div>
    </section>
  )
}
