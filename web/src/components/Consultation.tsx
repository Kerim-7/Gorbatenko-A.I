import { Link } from 'react-router-dom'
import { consultationItems, routes, SITE } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
  showImage?: boolean
}

export function Consultation({ embedded = false, showImage = true }: Props) {
  return (
    <section className="section consultation" id="consultation" aria-labelledby="consultation-heading">
      <div className={`wrap${showImage ? ' split' : ''}`}>
        {showImage ? (
          <Reveal className="split-visual">
            <img
              src="/images/image6.jpeg"
              alt="Консультация: разбор плана лечения у доски"
              width={953}
              height={889}
              loading="lazy"
            />
          </Reveal>
        ) : null}
        <Reveal className="split-text">
          {embedded ? (
            <h2 id="consultation-heading" className="sr-only">
              Что входит в консультацию
            </h2>
          ) : (
            <h2 id="consultation-heading">Консультация доктора включает</h2>
          )}
          {embedded ? (
            <h3 className="inline-h3">Что входит в консультацию</h3>
          ) : null}
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
