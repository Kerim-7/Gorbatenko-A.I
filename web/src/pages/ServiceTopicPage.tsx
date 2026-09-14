import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { CtaBand } from '../components/CtaBand'
import { funnelAfterDirection, NextSteps } from '../components/NextSteps'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { routes } from '../data/content'
import {
  getServiceTopic,
  serviceTopicPath,
  topicsForParent,
} from '../data/serviceTopics'

export function ServiceTopicPage() {
  const { topicSlug } = useParams<{ topicSlug: string }>()
  const { pathname } = useLocation()
  const topic = getServiceTopic(topicSlug)

  if (!topic) {
    const fallback = pathname.includes('kolena') ? routes.knee : routes.upperLimb
    return <Navigate to={fallback} replace />
  }

  const expectedPath = serviceTopicPath(topic)
  if (pathname !== expectedPath) {
    return <Navigate to={expectedPath} replace />
  }

  const parentTo = topic.parent === 'knee' ? routes.knee : routes.upperLimb
  const parentLabel = topic.parent === 'knee' ? 'Хирургия колена' : 'Хирургия плеча'
  const related = topicsForParent(topic.parent)
    .filter((item) => item.slug !== topic.slug)
    .slice(0, 6)

  return (
    <>
      <Seo
        page={{
          path: expectedPath,
          title: `${topic.title} — хирург Горбатенко А.И.`,
          description: topic.description,
        }}
      />

      <section className="page-hero page-hero-editorial" aria-labelledby="page-hero-heading">
        <div className="wrap page-hero-editorial-inner">
          <div className="page-hero-editorial-copy">
            <nav className="breadcrumbs" aria-label="Хлебные крошки">
              <Link to={routes.home}>Главная</Link>
              <span aria-hidden="true">/</span>
              <Link to={parentTo}>{parentLabel}</Link>
              <span aria-hidden="true">/</span>
              <span>{topic.title}</span>
            </nav>
            <p className="kicker">{parentLabel}</p>
            <h1 id="page-hero-heading">{topic.title}</h1>
            {topic.subtitle ? <p className="hero-lead">{topic.subtitle}</p> : null}
            <p className="hero-lead">{topic.lead}</p>
            <div className="hero-actions">
              <Link className="btn btn-pill btn-accent" to={routes.contact}>
                Записаться
              </Link>
              <Link className="btn btn-pill btn-outline" to={routes.consultation}>
                Консультация
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SeoArticle
        animate={false}
        layout="article"
        article={{
          id: `topic-${topic.slug}`,
          title: topic.subtitle ?? topic.title,
          lead: topic.lead,
          blocks: topic.blocks,
        }}
      />

      {related.length ? (
        <section className="section" aria-labelledby="related-topics-heading">
          <div className="wrap">
            <div className="section-head">
              <h2 id="related-topics-heading">Другие услуги направления</h2>
              <p>Смежные состояния и операции — выберите тему</p>
            </div>
            <ul className="dense-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={serviceTopicPath(item)}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <p className="sibling-link">
              <Link to={parentTo}>Все услуги: {parentLabel.toLowerCase()}</Link>
            </p>
          </div>
        </section>
      ) : null}

      <NextSteps steps={funnelAfterDirection} />
      <CtaBand />
    </>
  )
}
