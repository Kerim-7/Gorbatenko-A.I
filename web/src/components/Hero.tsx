import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <h1 id="hero-heading">
            Оперативное лечение опорно-
            <wbr />
            двигательного аппарата у взрослых
            <br className="hero-break" /> и детей
            <br className="hero-break" /> в г. Таганроге
          </h1>
          <p className="hero-lead">
            Хирургическое лечение травм и заболеваний опорно-двигательного аппарата
            «под ключ» у взрослых и детей любой сложности
          </p>
          <div className="hero-actions">
            <Link className="btn btn-pill btn-outline-light" to={routes.services}>
              Смотреть цены
            </Link>
            <Link className="btn btn-pill btn-accent hero-cta-btn" to={routes.contact}>
              Записаться на консультацию
            </Link>
          </div>
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

      <div className="wrap">
        <div className="hero-features">
          <Link className="hero-feature" to={routes.consultation}>
            <strong>Консультация</strong>
            <span>Осмотр, снимки и план лечения у к.м.н. Горбатенко А.И.</span>
            <em>Как проходит</em>
          </Link>
          <Link className="hero-feature" to={routes.turnkey}>
            <strong>Операция «под ключ»</strong>
            <span>Хирург, бригада, палата и полное сопровождение восстановления.</span>
            <em>Что входит</em>
          </Link>
          <Link className="hero-feature" to={routes.services}>
            <strong>Прозрачные цены</strong>
            <span>Открытый прайс по стопам, колену и верхним конечностям. Итог — после консультации.</span>
            <em>Смотреть прайс</em>
          </Link>
        </div>
      </div>
    </section>
  )
}
