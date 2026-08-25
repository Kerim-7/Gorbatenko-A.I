import { Link } from 'react-router-dom'
import { faq, routes } from '../data/content'
import { FaqAccordion } from './FaqAccordion'
import { Reveal } from './Reveal'

export function FaqTeaser() {
  const preview = faq.slice(0, 8)

  return (
    <section className="section faq-teaser" aria-labelledby="faq-teaser-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="faq-teaser-heading">Частые вопросы</h2>
        </Reveal>
        <FaqAccordion items={preview} name="faq-teaser" />
        <p className="teaser-more">
          <Link to={routes.faq}>Все вопросы</Link>
        </p>
      </div>
    </section>
  )
}
