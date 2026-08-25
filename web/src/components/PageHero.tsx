import { Link } from 'react-router-dom'
import { routes } from '../data/content'

type Props = {
  title: string
  lead?: string
  kicker?: string
  chips?: string[]
  image?: string
  imageAlt?: string
  primaryTo?: string
  primaryLabel?: string
  secondaryTo?: string
  secondaryLabel?: string
  compact?: boolean
  showActions?: boolean
  showSecondary?: boolean
  showBreadcrumbs?: boolean
}

export function PageHero({
  title,
  lead,
  kicker,
  chips,
  image,
  imageAlt = 'Доктор Горбатенко Андрей Иванович',
  primaryTo = routes.contact,
  primaryLabel = 'Записаться',
  secondaryTo = routes.services,
  secondaryLabel = 'Цены',
  compact = false,
  showActions = true,
  showSecondary = true,
  showBreadcrumbs = true,
}: Props) {
  const showMedia = Boolean(image) && !compact

  return (
    <section
      className={`page-hero${compact || !showMedia ? ' page-hero-editorial' : ''}`}
      aria-labelledby="page-hero-heading"
    >
      <div className={showMedia ? 'page-hero-shell' : 'wrap page-hero-editorial-inner'}>
        <div className={showMedia ? 'page-hero-copy' : 'page-hero-editorial-copy'}>
          {showBreadcrumbs ? (
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link to={routes.home}>Главная</Link>
              <span aria-hidden="true">/</span>
              <span>{title}</span>
            </nav>
          ) : null}
          {kicker ? <p className={showMedia ? 'kicker kicker-light' : 'kicker'}>{kicker}</p> : null}
          <h1 id="page-hero-heading">{title}</h1>
          {lead ? <p className="hero-lead">{lead}</p> : null}
          {chips?.length ? (
            <ul className="hero-chips">
              {chips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          ) : null}
          {showActions ? (
            <div className="hero-actions">
              <Link className="btn btn-pill btn-accent" to={primaryTo}>
                {primaryLabel}
              </Link>
              {showSecondary ? (
                <Link
                  className={`btn btn-pill ${showMedia ? 'btn-outline-light' : 'btn-outline'}`}
                  to={secondaryTo}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
        {showMedia ? (
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} width={900} height={1200} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
