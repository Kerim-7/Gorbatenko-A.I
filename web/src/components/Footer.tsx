import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'
import { Logo } from './Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to={routes.home} aria-label={SITE.shortName}>
            <Logo light />
          </Link>
          <p>
            Оперативное лечение нижних конечностей. Хирургия стоп и коленных суставов «под ключ»
            у к.м.н. Горбатенко А.И.
          </p>
        </div>

        <div className="footer-nav">
          <h3>Пациентам</h3>
          <ul>
            <li>
              <Link to={routes.consultation}>Консультация</Link>
            </li>
            <li>
              <Link to={routes.turnkey}>Операция «под ключ»</Link>
            </li>
            <li>
              <Link to={routes.services}>Цены</Link>
            </li>
            <li>
              <Link to={routes.faq}>Вопросы</Link>
            </li>
            <li>
              <Link to={routes.contact}>Запись</Link>
            </li>
          </ul>
        </div>

        <div className="footer-nav">
          <h3>Направления</h3>
          <ul>
            <li>
              <Link to={routes.feet}>Хирургия стоп</Link>
            </li>
            <li>
              <Link to={routes.knee}>Хирургия колена</Link>
            </li>
            <li>
              <Link to={routes.works}>Работы до и после</Link>
            </li>
            <li>
              <Link to={routes.conferences}>Конференции</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contacts">
          <h3>Контакты</h3>
          <ul>
            <li>
              <a href={`tel:${SITE.phones.primaryTel}`}>{SITE.phones.primaryDisplay}</a>
            </li>
            <li>
              <a href={`tel:${SITE.phones.secondaryTel}`}>{SITE.phones.secondaryDisplay}</a>
            </li>
            <li>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <span>{SITE.cities.join(', ')}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p>
          © {year} Доктор {SITE.shortName}
        </p>
        <div className="footer-bottom-actions">
          <div className="footer-primary-align">
            <span className="btn btn-pill btn-accent footer-align-ghost" aria-hidden="true">
              Записаться
            </span>
            <Link className="btn btn-pill btn-accent" to={routes.contact}>
              Записаться на приём
            </Link>
          </div>
          <span className="btn btn-pill btn-outline-light footer-actions-spacer" aria-hidden="true">
            {SITE.phones.primaryDisplay}
          </span>
        </div>
      </div>
    </footer>
  )
}
