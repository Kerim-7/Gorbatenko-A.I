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
        <div className="wrap">
          <h1>Страница не найдена</h1>
          <p>Возможно, ссылка устарела. Выберите нужный раздел:</p>
          <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
            <Link className="btn btn-pill btn-accent" to={routes.home}>
              На главную
            </Link>
            <Link className="btn btn-pill btn-outline" to={routes.contact}>
              Запись
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
