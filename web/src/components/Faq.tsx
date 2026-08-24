import { Link } from 'react-router-dom'
import { faq, routes } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

export function Faq({ embedded = false }: Props) {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="faq-heading" className="sr-only">
            Частые вопросы
          </h2>
        ) : (
          <Reveal className="section-head">
            <h2 id="faq-heading">Частые вопросы</h2>
            <p>Консультация, «под ключ», стопы и колено, цены, запись и восстановление</p>
          </Reveal>
        )}

        <div className="faq-list">
          {faq.map((item) => (
            <Reveal as="details" className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
              {'links' in item && item.links ? (
                <p className="faq-links">
                  {item.links.map((link) => (
                    <Link key={link.to} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </p>
              ) : null}
            </Reveal>
          ))}
        </div>
        {!embedded ? (
          <p className="teaser-more">
            <Link to={routes.contact}>Перейти к записи</Link>
          </p>
        ) : null}
      </div>
    </section>
  )
}
