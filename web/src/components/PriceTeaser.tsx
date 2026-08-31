import { Link } from 'react-router-dom'
import { formatConsultationPrices, PRICE, routes } from '../data/content'
import { Reveal } from './Reveal'

export function PriceTeaser() {
  return (
    <section className="section price-teaser" aria-labelledby="price-teaser-heading">
      <div className="wrap price-teaser-inner">
        <Reveal>
          <h2 id="price-teaser-heading">Прозрачные цены</h2>
          <p>
            Стопы — от {PRICE.footFrom.toLocaleString('ru-RU')}&nbsp;₽ · колено — от{' '}
            {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽ · консультация —{' '}
            {formatConsultationPrices()}
          </p>
        </Reveal>
        <Reveal>
          <Link className="btn btn-pill btn-accent" to={routes.services}>
            Смотреть полный прайс
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
