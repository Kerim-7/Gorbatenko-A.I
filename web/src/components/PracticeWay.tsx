import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'
import { Reveal } from './Reveal'

export function PracticeWay() {
  return (
    <section className="section way" aria-labelledby="way-heading">
      <div className="way-shell">
        <div className="way-inner">
          <div className="way-grid">
            <Reveal className="way-media">
              <img
                src="/images/image6.jpeg"
                alt="Разбор плана лечения на консультации"
                width={953}
                height={889}
                loading="lazy"
              />
            </Reveal>
            <Reveal className="way-copy">
              <div className="way-copy-body">
                <h2 id="way-heading">Практика Горбатенко</h2>
                <p>
                  {SITE.name} — {SITE.credentials}. Операции на стопах и коленных суставах «под ключ»:
                  от разбора снимков до восстановления, без скрытых сюрпризов по составу
                  сопровождения.
                </p>
              </div>
              <div className="way-actions">
                <Link className="way-btn way-btn-solid" to={routes.consultation}>
                  О практике
                </Link>
                <Link className="way-btn way-btn-outline" to={routes.contact}>
                  Записаться
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
