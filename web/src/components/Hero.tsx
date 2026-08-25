import { useEffect, useId, useMemo, useRef, useState, type FormEvent, type KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes, SITE } from '../data/content'
import { searchSite, type SearchHit } from '../data/searchIndex'

export function Hero() {
  const navigate = useNavigate()
  const listId = useId()
  const rootRef = useRef<HTMLFormElement>(null)
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const results = useMemo(() => searchSite(query, 8), [query])

  useEffect(() => {
    setActiveIndex(0)
    setOpen(query.trim().length > 0)
  }, [query, results.length])

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  function goTo(hit: SearchHit) {
    setOpen(false)
    setQuery('')
    navigate(hit.href)
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!query.trim()) {
      navigate(routes.contact)
      return
    }
    if (results[activeIndex]) {
      goTo(results[activeIndex])
      return
    }
    if (results[0]) {
      goTo(results[0])
      return
    }
    navigate(`${routes.faq}?q=${encodeURIComponent(query.trim())}`)
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((index) => (index + 1) % results.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((index) => (index - 1 + results.length) % results.length)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <div className="hero-copy">
          <h1 id="hero-heading">Оперативное лечение нижних конечностей</h1>
          <p className="hero-lead">
            Хирургия стоп и колена «под ключ» — разберём случай на консультации и предложим понятный
            план лечения.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-pill btn-accent" to={routes.contact}>
              Записаться
            </Link>
            <Link className="btn btn-pill btn-outline-light" to={routes.services}>
              Смотреть цены
            </Link>
          </div>
          <form
            ref={rootRef}
            className="hero-search"
            onSubmit={onSearch}
            role="search"
            autoComplete="off"
          >
            <label className="sr-only" htmlFor="hero-search">
              Найти направление
            </label>
            <input
              id="hero-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => {
                if (query.trim()) setOpen(true)
              }}
              onKeyDown={onKeyDown}
              placeholder="Консультация, стопы, колено, цены…"
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded={open && results.length > 0}
              aria-activedescendant={
                open && results[activeIndex] ? `${listId}-option-${activeIndex}` : undefined
              }
            />
            <button className="btn btn-pill btn-accent hero-search-btn" type="submit">
              Найти
            </button>

            {open && query.trim() && (
              <div className="hero-search-panel" role="listbox" id={listId}>
                {results.length > 0 ? (
                  <ul className="hero-search-results">
                    {results.map((hit, index) => (
                      <li key={hit.id} role="presentation">
                        <button
                          type="button"
                          id={`${listId}-option-${index}`}
                          role="option"
                          aria-selected={index === activeIndex}
                          className={
                            index === activeIndex
                              ? 'hero-search-result is-active'
                              : 'hero-search-result'
                          }
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => goTo(hit)}
                        >
                          <span className="hero-search-result-meta">{hit.category}</span>
                          <strong>{hit.title}</strong>
                          <span className="hero-search-result-desc">{hit.description}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="hero-search-empty">
                    Ничего не найдено. Попробуйте «Hallux», «мениск», «цены» или{' '}
                    <Link to={routes.contact} onClick={() => setOpen(false)}>
                      запишитесь на консультацию
                    </Link>
                    .
                  </p>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="hero-media">
          <img
            src="/images/image1.jpeg"
            alt={`${SITE.name} — травматолог-ортопед`}
            width={900}
            height={1200}
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="wrap">
        <div className="hero-features">
          <Link className="hero-feature" to={routes.consultation}>
            <strong>Консультация</strong>
            <span>Осмотр, снимки и план лечения у к.м.н. Горбатенко А.И.</span>
            <em>Как проходит</em>
          </Link>
          <Link className="hero-feature" to={routes.turnkey}>
            <strong>Операция «под ключ»</strong>
            <span>Хирург, бригада, палата и полное сопровождение восстановления.</span>
            <em>Что входит</em>
          </Link>
          <Link className="hero-feature" to={routes.services}>
            <strong>Прозрачные цены</strong>
            <span>Открытый прайс по стопам и колену. Итог — после консультации.</span>
            <em>Смотреть прайс</em>
          </Link>
        </div>
      </div>
    </section>
  )
}
