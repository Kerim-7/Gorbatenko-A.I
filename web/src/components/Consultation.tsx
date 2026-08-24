import { Link } from 'react-router-dom'
import { consultationItems, routes, SITE } from '../data/content'
import { Reveal } from './Reveal'

export function Consultation() {
  return (
    <section className="section consultation" id="consultation" aria-labelledby="consultation-heading">
      <div className="wrap split">
        <Reveal className="split-visual">
          <img
            src="/images/image6.jpeg"
            alt="Консультация: разбор плана лечения у доски"
            width={953}
            height={889}
            loading="lazy"
          />
        </Reveal>
        <Reveal className="split-text">
          <h2 id="consultation-heading">Консультация доктора включает</h2>
          <ul className="check-list">
            {consultationItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn btn-pill btn-accent" to={routes.contact}>
            Записаться — {SITE.consultationPrice}&nbsp;₽
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
