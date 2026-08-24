import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, routes, SITE } from '../data/content'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="utility-bar">
        <div className="wrap utility-inner">
          <p className="utility-note">
            Хирургия стоп и колена «под ключ» · {SITE.cities.slice(0, 2).join(', ')}
          </p>
          <nav className="utility-nav" aria-label="Контакты">
            <Link to={routes.conferences}>Конференции</Link>
            <a href={`tel:${SITE.phones.primaryTel}`}>{SITE.phones.primaryDisplay}</a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </div>

      <div className="main-bar">
        <div className="wrap main-bar-inner">
          <Link className="logo" to={routes.home} onClick={() => setOpen(false)}>
            Горбатенко
          </Link>

          <nav className={`nav${open ? ' open' : ''}`} aria-label="Основная навигация">
            {nav
              .filter((item) => !('cta' in item && item.cta))
              .map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            <Link className="nav-mobile-cta" to={routes.contact} onClick={() => setOpen(false)}>
              Записаться
            </Link>
          </nav>

          <Link className="btn btn-pill btn-primary header-cta" to={routes.contact}>
            Записаться
          </Link>

          <button
            className="menu-btn"
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
