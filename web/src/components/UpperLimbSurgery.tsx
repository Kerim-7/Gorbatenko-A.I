import { Link } from 'react-router-dom'
import { routes, upperLimbIndications, upperLimbOperations } from '../data/content'
import { topicHrefByIndication } from '../data/serviceTopics'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

export function UpperLimbSurgery({ embedded = false }: Props) {
  return (
    <section className="section feet" id="upper-limb" aria-labelledby="upper-limb-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="upper-limb-heading" className="sr-only">
            Показания и виды операций на плече и верхних конечностях
          </h2>
        ) : (
          <Reveal className="section-head">
            <p className="kicker">Плечо и верхние конечности</p>
            <h2 id="upper-limb-heading">Хирургия плечевого сустава и рук</h2>
            <p>
              Вывих плеча, вращательная манжета, АКС, импинджмент, бицепс — а также
              кисть и запястье
            </p>
          </Reveal>
        )}

        <Reveal className="indications">
          <div className="indications-visual">
            <img
              src="/images/rotator-cuff-repair.png"
              alt="Хирургия верхних конечностей — доктор Горбатенко"
              width={603}
              height={624}
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="inline-h3">Когда нужна операция</h3>
            <ul className="dense-list">
              {upperLimbIndications.map((item) => {
                const href = topicHrefByIndication(item)
                return (
                  <li key={item}>
                    {href ? <Link to={href}>{item}</Link> : item}
                  </li>
                )
              })}
            </ul>
            <p className="sibling-link">
              Также принимаю по{' '}
              <Link to={routes.feet}>хирургии стоп</Link> и{' '}
              <Link to={routes.knee}>коленного сустава</Link>
            </p>
          </div>
        </Reveal>

        <Reveal className="ops-block">
          <div className="ops-copy">
            <h3>Виды операций</h3>
            <p className="ops-price">Стоимость уточняется на консультации</p>
            <ul className="ops-grid">
              {upperLimbOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
