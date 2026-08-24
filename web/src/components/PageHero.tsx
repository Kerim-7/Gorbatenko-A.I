import { Link } from 'react-router-dom'
import { routes } from '../data/content'

type Props = {
  eyebrow?: string
  title: string
  lead?: string
  image?: string
  imageAlt?: string
}

export function PageHero({
  eyebrow = 'Доктор Горбатенко',
  title,
  lead,
  image = '/images/image1.jpeg',
  imageAlt = 'Доктор Горбатенко Андрей Иванович',
}: Props) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-heading">
      <div className="page-hero-shell">
        <div className="page-hero-copy">
          <nav className="breadcrumbs" aria-label="Хлебные крошки">
            <Link to={routes.home}>Главная</Link>
            <span aria-hidden="true">/</span>
            <span>{title}</span>
          </nav>
          <p className="hero-kicker">{eyebrow}</p>
          <h1 id="page-hero-heading">{title}</h1>
          {lead ? <p className="hero-lead">{lead}</p> : null}
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={routes.contact}>
              Записаться
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={routes.services}>
              Цены
            </Link>
          </div>
        </div>
        <div className="page-hero-media">
          <img src={image} alt={imageAlt} width={900} height={1200} />
        </div>
      </div>
    </section>
  )
}
