import { Link } from 'react-router-dom'
import { routes } from '../data/content'
import { Reveal } from './Reveal'

const articles = [
  {
    title: 'Hallux valgus: когда нужна операция',
    text: 'Косточка на стопе, боль при ходьбе и подбор остеотомии. Ориентир — от 45 000 ₽.',
    to: routes.feet,
    image: '/images/image13.jpeg',
  },
  {
    title: 'Артроскопия, мениск и пластика ПКС',
    text: 'Диагностика и операции на коленном суставе. От 40 000 ₽, ПКС — от 110 000 ₽.',
    to: routes.knee,
    image: '/images/image18.jpeg',
  },
  {
    title: 'Что входит в операцию «под ключ»',
    text: 'Хирург, бригада, палата, импланты и восстановление — полный цикл без скрытых доплат за состав пакета.',
    to: routes.turnkey,
    image: '/images/image9.jpeg',
  },
] as const

export function Articles() {
  return (
    <section className="section articles" aria-labelledby="articles-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="articles-heading">Полезные материалы</h2>
        </Reveal>
        <div className="articles-grid">
          {articles.map((item) => (
            <Reveal key={item.to}>
              <Link className="article-card" to={item.to}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
