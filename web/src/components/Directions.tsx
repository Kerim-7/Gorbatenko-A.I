import { Link } from 'react-router-dom'
import { PRICE, routes } from '../data/content'
import { Reveal } from './Reveal'

export function Directions() {
  return (
    <section className="section directions" aria-labelledby="directions-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="directions-heading">Направления лечения</h2>
          <p>Выберите проблему — разберём показания, виды операций и следующий шаг</p>
        </Reveal>
        <div className="directions-grid">
          <Reveal>
            <Link className="direction-card" to={routes.feet}>
              <img src="/images/image13.jpeg" alt="" loading="lazy" />
              <div>
                <strong>Хирургия стоп</strong>
                <span>
                  Hallux valgus, плоскостопие, неврома Мортона, последствия травм. От{' '}
                  {PRICE.footFrom.toLocaleString('ru-RU')}&nbsp;₽
                </span>
                <em>Подробнее о стопах</em>
              </div>
            </Link>
          </Reveal>
          <Reveal>
            <Link className="direction-card" to={routes.knee}>
              <img src="/images/image18.jpeg" alt="" loading="lazy" />
              <div>
                <strong>Хирургия колена</strong>
                <span>
                  Мениск, ПКС, артроскопия, киста Бейкера. От{' '}
                  {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽
                </span>
                <em>Подробнее о колене</em>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
