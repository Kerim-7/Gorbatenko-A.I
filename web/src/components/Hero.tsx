import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker">{SITE.brand}</p>
          <h1 id="hero-heading">Оперативное лечение нижних конечностей</h1>
          <p className="hero-lead">
            Хирургия «под ключ»: один день в стационаре, полное сопровождение и быстрое
            восстановление.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={routes.contact}>
              Записаться — {SITE.consultationPrice}&nbsp;₽
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={routes.services}>
              Операции и цены
            </Link>
          </div>
          <form
            className="hero-search"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.assign(routes.contact)
            }}
            role="search"
          >
            <label className="sr-only" htmlFor="hero-q">
              Быстрый переход
            </label>
            <input
              id="hero-q"
              name="q"
              type="search"
              placeholder="Стопа, колено, Hallux valgus, ПКС…"
              list="hero-suggestions"
            />
            <datalist id="hero-suggestions">
              <option value="Хирургия стоп" />
              <option value="Hallux valgus" />
              <option value="Артроскопия колена" />
              <option value="Пластика ПКС" />
              <option value="Консультация" />
            </datalist>
            <Link className="btn btn-pill btn-accent hero-search-btn" to={routes.contact}>
              Запись
            </Link>
          </form>
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
          <strong>Консультация к.м.н.</strong>
          <span>Осмотр, снимки, план лечения</span>
          <em>Подробнее</em>
        </Link>
        <Link className="hero-feature" to={routes.turnkey}>
          <strong>Операция «под ключ»</strong>
          <span>От подготовки до восстановления</span>
          <em>Как проходит</em>
        </Link>
        <Link className="hero-feature" to={routes.services}>
          <strong>Прозрачные цены</strong>
          <span>Стопы от 30 000 ₽ · колено от 40 000 ₽</span>
          <em>Смотреть цены</em>
        </Link>
      </div>
    </section>
  )
}
