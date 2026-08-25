import { Link } from 'react-router-dom'

import { routes } from '../data/content'

import { Reveal } from './Reveal'



const centres = [
  { to: routes.feet, label: 'Hallux valgus' },
  { to: routes.feet, label: 'Плоскостопие' },
  { to: routes.feet, label: 'Неврома Мортона' },
  { to: routes.feet, label: 'Болезнь Хаглунда' },
  { to: routes.knee, label: 'Артроскопия колена' },
  { to: routes.knee, label: 'Шов мениска' },
  { to: routes.knee, label: 'Пластика ПКС' },
  { to: routes.knee, label: 'Киста Бейкера' },
] as const



function CentreIcon() {

  return (

    <span className="centre-card-icon" aria-hidden="true">

      <svg viewBox="0 0 56 56" width="56" height="56" focusable="false">

        <circle cx="28" cy="28" r="27" fill="none" stroke="currentColor" strokeWidth="1" />

        <path

          d="M28 20v16M20 28h16"

          fill="none"

          stroke="currentColor"

          strokeWidth="1.5"

          strokeLinecap="round"

        />

      </svg>

    </span>

  )

}



export function Centres() {

  return (

    <section className="section centres" aria-labelledby="centres-heading">

      <div className="wrap centres-shell">

        <Reveal className="section-head centres-head">

          <h2 id="centres-heading">Направления практики</h2>

          <p>Быстрый доступ к хирургии стоп, колена и сопровождению «под ключ»</p>

        </Reveal>

        <ul className="centres-grid">

          {centres.map((item) => (

            <li key={`${item.to}-${item.label}`}>

              <Link className="centre-card" to={item.to}>

                <CentreIcon />

                <span className="centre-card-label">{item.label}</span>

              </Link>

            </li>

          ))}

        </ul>

        <p className="centres-more">

          <Link className="btn btn-pill btn-primary" to={routes.services}>

            Все направления

          </Link>

        </p>

      </div>

    </section>

  )

}


