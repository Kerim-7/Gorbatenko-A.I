import { Link } from 'react-router-dom'
import {
  footOperations,
  kneeOperations,
  routes,
  upperLimbIndications,
} from '../data/content'
import { Reveal } from './Reveal'

const columns = [
  {
    title: 'Верхние конечности',
    items: upperLimbIndications,
    moreTo: routes.upperLimb,
    image: '/images/image18.jpeg',
  },
  {
    title: 'Операции на стопе',
    items: footOperations.slice(0, 4),
    moreTo: routes.feet,
    image: '/images/image6.jpeg',
  },
  {
    title: 'Операции на колене',
    items: kneeOperations.slice(0, 4),
    moreTo: routes.knee,
    image: '/images/image18.jpeg',
  },
] as const

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.346 16.154 14.277 15.1l2.35-2.35H4.5v-1.5h12.127L14.292 8.9l1.054-1.054L20.4 12.5l-5.054 3.654Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ServiceTabs() {
  return (
    <section className="section service-tabs" aria-labelledby="services-tabs-heading">
      <div className="wrap">
        <Reveal className="section-head service-tabs-head">
          <h2 id="services-tabs-heading">Услуги</h2>
          <p>От диагностики и показаний до операций на стопе, колене и верхних конечностях</p>
        </Reveal>

        <div className="service-columns">
          {columns.map((column) => (
            <Reveal key={column.title}>
              <article className="service-column">
                <div className="service-column-visual">
                  <img src={column.image} alt="" loading="lazy" />
                  <div className="service-column-wave" aria-hidden="true">
                    <svg viewBox="0 0 343 133" preserveAspectRatio="none">
                      <path d="M343 132.062H0V104.822C34.9306 122.132 74.2839 131.863 115.91 131.863C213.142 131.863 297.973 78.7725 343 0V132.062Z" />
                    </svg>
                  </div>
                </div>
                <div className="service-column-body">
                  <h3>{column.title}</h3>
                  <hr />
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>
                        <Link to={column.moreTo}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="service-column-more" to={column.moreTo}>
                    Смотреть все
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
