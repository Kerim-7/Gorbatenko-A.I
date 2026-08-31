import { Link } from 'react-router-dom'

import { routes, SITE, CONSULTATION_PRICES } from '../data/content'

import { Reveal } from './Reveal'

const locations = [
  {
    city: SITE.cities[0],
    address: `Консультация — ${CONSULTATION_PRICES.taganrog.toLocaleString('ru-RU')} ₽`,
    text: 'Основной приём и операции. Подберём удобное время.',
    image: '/images/image1.jpeg',
  },
  {
    city: SITE.cities[1],
    address: `Консультация — ${CONSULTATION_PRICES.rostov.toLocaleString('ru-RU')} ₽`,
    text: 'Консультации и хирургия стоп, колена и верхних конечностей.',
    image: '/images/image6.jpeg',
  },
  {
    city: `${SITE.cities[3]}, ${SITE.cities[4]}`,
    address: 'Приём и операции по направлению',
    text: 'Точное место уточняем при записи.',
    image: '/images/image9.jpeg',
    badge: 'По записи',
  },
] as const

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.346 16.154 14.277 15.1l2.35-2.35H4.5v-1.5h12.127L14.292 8.9l1.054-1.054L20.4 12.5l-5.054 3.654Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Locations() {
  return (
    <section className="section locations" aria-labelledby="locations-heading">
      <div className="wrap locations-shell">
        <Reveal className="locations-head">
          <h2 id="locations-heading">Где принимаем</h2>
        </Reveal>

        <div className="locations-grid">
          {locations.map((item) => (
            <Reveal className="locations-grid-item" key={item.city}>
              <Link className="location-card" to={routes.contact}>
                <div className="location-card-media">
                  <img src={item.image} alt="" loading="lazy" />
                  {'badge' in item && item.badge ? (
                    <span className="location-card-badge">{item.badge}</span>
                  ) : null}
                </div>

                <div className="location-card-body">
                  <div className="location-card-head">
                    <strong className="location-card-title">{item.city}</strong>
                    <span className="location-card-address">{item.address}</span>
                  </div>

                  <p className="location-card-text">{item.text}</p>

                  <span className="location-card-link">
                    Записаться
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
