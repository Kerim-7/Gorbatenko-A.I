import { useEffect, useMemo, useState } from 'react'
import { workCases, type WorkCase } from '../data/works'
import { Reveal } from './Reveal'

const sections = [
  { id: 'foot', label: 'Стопы' },
  { id: 'knee', label: 'Колени' },
  { id: 'flatfoot', label: 'Плоскостопие' },
  { id: 'implant', label: 'Импланты' },
  { id: 'xray', label: 'Рентген' },
] as const

const filters = [{ id: 'all', label: 'Все' }, ...sections] as const

type FilterId = (typeof filters)[number]['id']

type Props = {
  embedded?: boolean
  items?: WorkCase[]
  showFilters?: boolean
}

export function Works({
  embedded = false,
  items = workCases,
  showFilters = true,
}: Props) {
  const [filter, setFilter] = useState<FilterId>('all')
  const [active, setActive] = useState<WorkCase | null>(null)

  const grouped = useMemo(() => {
    return sections
      .map((section) => ({
        ...section,
        items: items.filter((item) => item.tag === section.id),
      }))
      .filter((section) => section.items.length > 0)
  }, [items])

  const visibleSections =
    filter === 'all' ? grouped : grouped.filter((section) => section.id === filter)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section className="section works" id="works" aria-labelledby="works-heading">
      <div className="wrap">
        {embedded ? (
          <h2 id="works-heading" className="sr-only">
            Клинические работы до и после
          </h2>
        ) : (
          <Reveal className="section-head">
            <p className="kicker">Результаты</p>
            <h2 id="works-heading">Работы: до и после</h2>
            <p>Клинические результаты хирургии стоп. Итог индивидуален и зависит от диагноза</p>
          </Reveal>
        )}

        {showFilters ? (
          <div className="works-filters" role="tablist" aria-label="Фильтр работ">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={filter === item.id}
                className={filter === item.id ? 'is-active' : undefined}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}

        <div className="works-sections">
          {visibleSections.map((section) => (
            <section
              key={section.id}
              className="works-section"
              aria-labelledby={`works-section-${section.id}`}
            >
              <div className="works-section-head">
                <h3 id={`works-section-${section.id}`}>{section.label}</h3>
              </div>
              <div className="works-grid">
                {section.items.map((item) => (
                  <Reveal as="figure" className="work-card" key={item.id}>
                    <button
                      type="button"
                      className="work-card-btn"
                      onClick={() => setActive(item)}
                      aria-label={`Открыть: ${item.title}`}
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    </button>
                    <figcaption>
                      <strong>{item.title}</strong>
                      <span>{item.caption}</span>
                      {item.year ? <em>{item.year}</em> : null}
                    </figcaption>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="works-note">
          Фотографии клинических результатов. Персональные данные пациентов не публикуются. Результат
          лечения индивидуален.
        </p>
      </div>

      {active ? (
        <div
          className="works-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="works-lightbox-close"
            aria-label="Закрыть"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <figure className="works-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.caption}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  )
}
