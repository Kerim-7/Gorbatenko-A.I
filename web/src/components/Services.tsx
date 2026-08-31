import { Link } from 'react-router-dom'
import { CONSULTATION_PRICES, footPrices, kneePrices, PRICE, routes, upperLimbIndications } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  showHeading?: boolean
}

export function Services({ showHeading = true }: Props) {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="wrap">
        {showHeading ? (
          <header className="section-head">
            <p className="kicker">Прайс</p>
            <h2 id="services-heading">Цены на операции</h2>
            <p>Ориентиры по направлениям. Итоговая стоимость — после консультации</p>
          </header>
        ) : (
          <h2 id="services-heading" className="sr-only">
            Цены на операции
          </h2>
        )}

        <Reveal className="price-consult">
          <div>
            <h3>Консультация ортопеда</h3>
            <p>Осмотр, разбор снимков и план лечения</p>
          </div>
          <div className="price-consult-rates">
            <strong>
              Таганрог — {CONSULTATION_PRICES.taganrog.toLocaleString('ru-RU')}&nbsp;₽
            </strong>
            <strong>
              Ростов-на-Дону — {CONSULTATION_PRICES.rostov.toLocaleString('ru-RU')}&nbsp;₽
            </strong>
          </div>
          <Link className="btn btn-pill btn-outline" to={routes.contact}>
            Записаться
          </Link>
        </Reveal>

        <div className="price-columns">
          <Reveal as="article" className="price-block">
            <div className="price-block-head">
              <h3>Хирургия стоп</h3>
              <Link to={routes.feet}>Подробнее</Link>
            </div>
            <ul>
              {footPrices.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
            <p className="price-from">от {PRICE.footFrom.toLocaleString('ru-RU')}&nbsp;₽</p>
          </Reveal>

          <Reveal as="article" className="price-block">
            <div className="price-block-head">
              <h3>Хирургия коленных суставов</h3>
              <Link to={routes.knee}>Подробнее</Link>
            </div>
            <ul>
              {kneePrices.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
            <p className="price-from">от {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽</p>
          </Reveal>

          <Reveal as="article" className="price-block">
            <div className="price-block-head">
              <h3>Верхние конечности</h3>
              <Link to={routes.upperLimb}>Подробнее</Link>
            </div>
            <ul>
              {upperLimbIndications.map((item) => (
                <li key={item}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="price-from">Стоимость — после консультации</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
