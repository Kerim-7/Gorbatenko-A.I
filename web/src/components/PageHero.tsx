import { Link } from 'react-router-dom'
import { routes } from '../data/content'

type Props = {
  title: string
  lead?: string
  image?: string
  imageAlt?: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
  /** Compact hero without large photo — less duplication with section media */
  compact?: boolean
}

export function PageHero({
  title,
  lead,
  image = '/images/image1.jpeg',
  imageAlt = 'Доктор Горбатенко Андрей Иванович',
  primaryTo = routes.contact,
  primaryLabel = 'Записаться',
  secondaryTo = routes.services,
  secondaryLabel = 'Цены',
  compact = false,
}: Props) {
  return (
    <section
      className={`page-hero${compact ? ' page-hero-compact' : ''}`}
      aria-labelledby="page-hero-heading"
    >
      <div className="page-hero-shell">
        <div className="page-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link to={routes.home}>Главная</Link>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </nav>
          <h1 id="page-hero-heading">{title}</h1>
          {lead ? <p className="hero-lead">{lead}</p> : null}
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={primaryTo}>
              {primaryLabel}
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={secondaryTo}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
        {!compact ? (
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} width={900} height={1200} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
