import { kneeIndications, kneeOperations } from '../data/content'
import { Reveal } from './Reveal'

export function KneeSurgery() {
  return (
    <section className="section knee" id="knee" aria-labelledby="knee-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="knee-heading">Хирургия коленного сустава</h2>
          <p>У взрослых и детей — от диагностики до пластики связок</p>
        </Reveal>

        <Reveal className="indications reverse">
          <div className="indications-visual">
            <img
              src="/images/image18.jpeg"
              alt="Работа с коленным суставом"
              width={960}
              height={1280}
              loading="lazy"
            />
            <p className="badge-price">операция от 40&nbsp;000&nbsp;₽</p>
          </div>
          <ul className="dense-list">
            {kneeIndications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="ops-block">
          <div className="ops-copy">
            <h3>Виды операций на колене</h3>
            <p className="ops-price">от 30&nbsp;000&nbsp;₽</p>
            <ul className="ops-grid">
              {kneeOperations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className="gallery">
            <img
              src="/images/image20.jpeg"
              alt="Клинический снимок коленного сустава"
              width={712}
              height={475}
              loading="lazy"
            />
            <img
              src="/images/image21.jpeg"
              alt="Результат лечения коленного сустава"
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
