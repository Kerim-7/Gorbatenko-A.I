import { Link } from 'react-router-dom'
import { footIndications, footOperations, PRICE, routes } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

export function FeetSurgery({ embedded = false }: Props) {
  return (
    <section className="section feet" id="feet" aria-labelledby="feet-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="feet-heading" className="sr-only">
            Показания и виды операций на стопе
          </h2>
        ) : (
          <Reveal className="section-head">
            <p className="kicker">Стопа</p>
            <h2 id="feet-heading">Хирургия стоп у взрослых и детей</h2>
            <p>Показания к операции — от статических деформаций до последствий травм</p>
          </Reveal>
        )}

        <Reveal className="indications">
          <div className="indications-visual">
            <img
              src="/images/image13.jpeg"
              alt="Операция на стопе Hallux valgus и хирургия стоп — доктор Горбатенко"
              width={603}
              height={624}
              loading="lazy"
            />
            <p className="badge-price">
              от {PRICE.footFrom.toLocaleString('ru-RU')}&nbsp;₽
            </p>
          </div>
          <div>
            <h3 className="inline-h3">Когда нужна операция</h3>
            <ul className="dense-list">
              {footIndications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sibling-link">
              Также принимаю по{' '}
              <Link to={routes.knee}>хирургии коленного сустава</Link>
            </p>
          </div>
        </Reveal>

        <Reveal className="ops-block">
          <div className="ops-copy">
            <h3>Виды операций на стопе</h3>
            <p className="ops-price">
              типичный ориентир от {PRICE.footTypicalFrom.toLocaleString('ru-RU')}&nbsp;₽
            </p>
            <ul className="ops-grid">
              {footOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="before-after">
            <div className="ba-pair">
              <img src="/images/image15.jpeg" alt="Стопа до операции Hallux valgus" loading="lazy" />
              <img src="/images/image16.jpeg" alt="Стопа после операции косточки на стопе" loading="lazy" />
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
