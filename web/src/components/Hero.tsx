import { Link } from 'react-router-dom'
import { PRICE, routes, SITE } from '../data/content'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">{SITE.brand}</p>
          <h1 id="hero-heading">Оперативное лечение нижних конечностей</h1>
          <p className="hero-lead">
            Боль, деформация стопы или травма колена — разберём случай на консультации и предложим
            понятный план: от операции «под ключ» до восстановления.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={routes.contact}>
              Записаться — {SITE.consultationPrice}&nbsp;₽
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={routes.feet}>
              Хирургия стоп
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={routes.knee}>
              Хирургия колена
            </Link>
          </div>
          <p className="hero-geo">
            к.м.н., доцент · травматолог-ортопед · стопы от {PRICE.footFrom.toLocaleString('ru-RU')}
            &nbsp;₽ · колено от {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽
          </p>
        </div>

        <div className="hero-media">
          <img
            src="/images/image1.jpeg"
            alt={`${SITE.name} — травматолог-ортопед`}
            width={900}
            height={1200}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="wrap hero-features">
        <Link className="hero-feature" to={routes.consultation}>
          <strong>1. Консультация</strong>
          <span>Осмотр, снимки, план лечения</span>
          <em>Как проходит</em>
        </Link>
        <Link className="hero-feature" to={routes.turnkey}>
          <strong>2. Операция «под ключ»</strong>
          <span>Полное сопровождение</span>
          <em>Что входит</em>
        </Link>
        <Link className="hero-feature" to={routes.services}>
          <strong>3. Прозрачные цены</strong>
          <span>
            Стопы от {PRICE.footFrom.toLocaleString('ru-RU')}&nbsp;₽ · колено от{' '}
            {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽
          </span>
          <em>Смотреть прайс</em>
        </Link>
      </div>
    </section>
  )
}
