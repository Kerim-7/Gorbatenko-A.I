import { Link } from 'react-router-dom'
import { routes } from '../data/content'
import { featuredWorks } from '../data/works'
import { Reveal } from './Reveal'

export function WorksTeaser() {
  const preview = featuredWorks.slice(0, 6)

  return (
    <section className="section works-teaser" aria-labelledby="works-teaser-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="works-teaser-heading">Работы до и после</h2>
          <p>Реальные клинические результаты хирургии стоп</p>
        </Reveal>

        <div className="works-grid works-grid-teaser">
          {preview.map((item) => (
            <Reveal as="figure" className="work-card" key={item.id}>
              <Link to={routes.works} aria-label={item.title}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </Link>
              <figcaption>
                <strong>{item.title}</strong>
                <span>{item.caption}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <p className="teaser-more">
          <Link to={routes.works}>Смотреть все работы</Link>
        </p>
      </div>
    </section>
  )
}
