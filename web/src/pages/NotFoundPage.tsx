import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { pageSeo, routes } from '../data/content'

export function NotFoundPage() {
  return (
    <>
      <Seo
        page={{
          ...pageSeo.home,
          title: 'Страница не найдена — доктор Горбатенко А.И.',
          description: 'Запрашиваемая страница не найдена. Перейдите на главную или запишитесь на консультацию.',
          path: '/404',
        }}
      />
      <section className="section not-found">
        <div className="wrap not-found-inner">
          <p className="kicker">Ошибка 404</p>
          <p className="not-found-code">404</p>
          <h1>Страница не найдена</h1>
          <p>Ссылка устарела или адрес указан неверно. Выберите нужный раздел:</p>
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={routes.home}>
              На главную
            </Link>
            <Link className="btn btn-pill btn-outline" to={routes.contact}>
              Запись
            </Link>
          </div>
          <div className="not-found-links">
            <Link to={routes.feet}>Хирургия стоп</Link>
            <Link to={routes.knee}>Хирургия колена</Link>
            <Link to={routes.services}>Цены</Link>
            <Link to={routes.faq}>Вопросы</Link>
          </div>
        </div>
      </section>
    </>
  )
}
