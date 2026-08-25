import { Link } from 'react-router-dom'
import { kneeIndications, kneeOperations, PRICE, routes } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

export function KneeSurgery({ embedded = false }: Props) {
  return (
    <section className="section knee" id="knee" aria-labelledby="knee-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="knee-heading" className="sr-only">
            Показания и виды операций на колене
          </h2>
        ) : (
          <Reveal className="section-head">
            <p className="kicker">Коленный сустав</p>
            <h2 id="knee-heading">Хирургия коленного сустава</h2>
            <p>У взрослых и детей — от диагностики до пластики связок</p>
          </Reveal>
        )}

        <Reveal className="indications reverse">
          <div className="indications-visual">
            <img
              src="/images/image18.jpeg"
              alt="Артроскопия коленного сустава и хирургия колена — доктор Горбатенко"
              width={960}
              height={1280}
              loading="lazy"
            />
            <p className="badge-price">
              от {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽
            </p>
          </div>
          <div>
            <h3 className="inline-h3">Когда нужна операция</h3>
            <ul className="dense-list">
              {kneeIndications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sibling-link">
              Также принимаю по <Link to={routes.feet}>хирургии стоп</Link>
            </p>
          </div>
        </Reveal>

        <Reveal className="ops-block">
          <div className="ops-copy">
            <h3>Виды операций на колене</h3>
            <p className="ops-price">
              диагностическая артроскопия от{' '}
              {PRICE.kneeArthroscopyFrom.toLocaleString('ru-RU')}&nbsp;₽ · операции от{' '}
              {PRICE.kneeFrom.toLocaleString('ru-RU')}&nbsp;₽
            </p>
            <ul className="ops-grid">
              {kneeOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="gallery">
            <img
              src="/images/image20.jpeg"
              alt="Клинический снимок после артроскопии колена"
              width={712}
              height={475}
              loading="lazy"
            />
            <img
              src="/images/image21.jpeg"
              alt="Результат операции на коленном суставе пластика связок"
              width={960}
              height={693}
              loading="lazy"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
