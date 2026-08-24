import { footIndications, footOperations } from '../data/content'
import { Reveal } from './Reveal'

export function FeetSurgery() {
  return (
    <section className="section feet" id="feet" aria-labelledby="feet-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="feet-heading">Хирургия стоп у взрослых и детей</h2>
          <p>Показания к операции — от статических деформаций до последствий травм</p>
        </Reveal>

        <Reveal className="indications">
          <div className="indications-visual">
            <img
              src="/images/image13.jpeg"
              alt="Клинический пример хирургии стопы"
              width={603}
              height={624}
              loading="lazy"
            />
            <p className="badge-price">от 45&nbsp;000&nbsp;₽</p>
          </div>
          <ul className="dense-list">
            {footIndications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="ops-block">
          <div className="ops-copy">
            <h3>Виды операций на стопе</h3>
            <ul className="ops-grid">
              {footOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="before-after">
            <div className="ba-pair">
              <img src="/images/image15.jpeg" alt="Стопа до операции" width={348} height={292} loading="lazy" />
              <img src="/images/image16.jpeg" alt="Стопа после операции" width={1280} height={958} loading="lazy" />
            </div>
            <figcaption>До и после операции</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
