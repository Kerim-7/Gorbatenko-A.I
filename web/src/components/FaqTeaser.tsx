import { Link } from 'react-router-dom'
import { faq, routes } from '../data/content'
import { Reveal } from './Reveal'

export function FaqTeaser() {
  const preview = faq.slice(0, 3)

  return (
    <section className="section faq-teaser" aria-labelledby="faq-teaser-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="faq-teaser-heading">Частые вопросы</h2>
          <p>Консультация, «под ключ», цены и запись — кратко</p>
        </Reveal>
        <div className="faq-list">
          {preview.map((item) => (
            <Reveal as="details" className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
        <p className="teaser-more">
          <Link to={routes.faq}>Все вопросы</Link>
        </p>
      </div>
    </section>
  )
}
