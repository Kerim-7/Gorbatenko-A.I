import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'

type Props = {
  title?: string
  text?: string
}

export function CtaBand({
  title = 'Готовы разобрать ваш случай?',
  text = `Консультация — ${SITE.consultationPrice} ₽. Ответим и подберём удобное время.`,
}: Props) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-heading">
      <div className="wrap cta-band-inner">
        <div>
          <h2 id="cta-band-heading">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band-actions">
          <Link className="btn btn-pill btn-accent" to={routes.contact}>
            Записаться
          </Link>
          <a className="btn btn-pill btn-outline-light" href={`tel:${SITE.phones.primaryTel}`}>
            {SITE.phones.primaryDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
