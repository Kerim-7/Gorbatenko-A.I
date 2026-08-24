import { footPrices, kneePrices } from '../data/content'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="services-heading">Оперативное лечение нижних конечностей</h2>
          <p>Прозрачные цены на хирургию стоп и коленных суставов</p>
        </header>

        <div className="price-columns">
          <Reveal as="article" className="price-block">
            <h3>Хирургия стоп</h3>
            <ul>
              {footPrices.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
            <p className="price-from">от 30&nbsp;000&nbsp;₽</p>
          </Reveal>

          <Reveal as="article" className="price-block">
            <h3>Хирургия коленных суставов</h3>
            <ul>
              {kneePrices.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <strong>{item.price}</strong>
                </li>
              ))}
            </ul>
            <p className="price-from">от 40&nbsp;000&nbsp;₽</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
