import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'
import { Reveal } from './Reveal'

export function Journey() {
  return (
    <section className="section journey" aria-labelledby="journey-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="journey-heading">Как проходит лечение</h2>
          <p>Понятный путь без сюрпризов — от первого разговора до восстановления</p>
        </Reveal>
        <div className="journey-grid">
          <Reveal as="article" className="journey-card">
            <h3>Консультация</h3>
            <p>Анамнез, осмотр, снимки МРТ/КТ, плантоскопия и совместное решение.</p>
            <Link to={routes.consultation}>Что входит · {SITE.consultationPrice}&nbsp;₽</Link>
          </Reveal>
          <Reveal as="article" className="journey-card">
            <h3>Операция «под ключ»</h3>
            <p>Хирург, бригада, анестезия, импланты, палата и сопровождение.</p>
            <Link to={routes.turnkey}>Состав пакета</Link>
          </Reveal>
          <Reveal as="article" className="journey-card">
            <h3>Восстановление</h3>
            <p>Перевязки, мониторинг, обувь Барука / тутор и контроль результата.</p>
            <Link to={routes.contact}>Записаться</Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
