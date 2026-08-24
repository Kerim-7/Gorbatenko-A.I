import { Link } from 'react-router-dom'
import { routes, turnkeyItems } from '../data/content'
import { Reveal } from './Reveal'

export function Turnkey() {
  return (
    <section className="section turnkey" id="turnkey" aria-labelledby="turnkey-heading">
      <div className="wrap split reverse">
        <Reveal className="split-visual">
          <img
            src="/images/image9.jpeg"
            alt="Операция на стопе в операционной"
            width={1000}
            height={1504}
            loading="lazy"
          />
        </Reveal>
        <Reveal className="split-text">
          <h2 id="turnkey-heading">Операция «под ключ»</h2>
          <p className="section-lead">Полный цикл — от подготовки до восстановления.</p>
          <ul className="check-list">
            {turnkeyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link className="btn btn-pill btn-accent" to={routes.contact}>
            Узнать стоимость операции
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
