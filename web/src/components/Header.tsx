import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { nav, routes, SITE } from '../data/content'
import { Logo } from './Logo'

const DESKTOP_NAV_MIN = 1100

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    const syncOffset = () => {
      const height = Math.ceil(header.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--header-offset', `${height}px`)
    }

    syncOffset()
    const observer = new ResizeObserver(syncOffset)
    observer.observe(header)
    window.addEventListener('resize', syncOffset)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncOffset)
    }
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_NAV_MIN) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)

    if (!open) {
      return () => {
        window.removeEventListener('keydown', onKeyDown)
      }
    }

    const html = document.documentElement
    const { body } = document
    const headerHeight = headerRef.current
      ? Math.ceil(headerRef.current.getBoundingClientRect().height)
      : 0

    if (headerHeight > 0) {
      html.style.setProperty('--header-offset', `${headerHeight}px`)
    }

    html.classList.add('nav-open')
    body.classList.add('nav-open')

    // ещё раз после фиксации хедера — актуальная высота
    requestAnimationFrame(() => {
      const h = headerRef.current
        ? Math.ceil(headerRef.current.getBoundingClientRect().height)
        : 0
      if (h > 0) html.style.setProperty('--header-offset', `${h}px`)
    })

    const allowScrollTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false
      return Boolean(target.closest('.mobile-panel'))
    }

    const onTouchMove = (event: TouchEvent) => {
      if (!allowScrollTarget(event.target)) event.preventDefault()
    }

    const onWheel = (event: WheelEvent) => {
      if (!allowScrollTarget(event.target)) event.preventDefault()
    }

    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      html.classList.remove('nav-open')
      body.classList.remove('nav-open')
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const links = nav.filter((item) => !('cta' in item && item.cta))
  const closeMenu = () => setOpen(false)

  return (
    <>
      <button
        type="button"
        className={`mobile-backdrop${open ? ' is-open' : ''}`}
        aria-label="Закрыть меню"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />
      <header
        ref={headerRef}
        className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
      >
        <div className="utility-bar">
          <div className="wrap utility-inner">
            <p className="utility-note">Хирургия стоп и колена «под ключ»</p>
            <nav className="utility-nav" aria-label="Контакты">
              <Link to={routes.faq}>Вопросы</Link>
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
            <Link
              className="header-brand"
              to={routes.home}
              onClick={closeMenu}
              aria-label={SITE.shortName}
            >
              <Logo />
            </Link>

            <nav className="nav" aria-label="Основная навигация">
              {links.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="header-actions">
              <Link className="btn btn-pill btn-primary header-cta" to={routes.contact} onClick={closeMenu}>
                Записаться
              </Link>

              <button
                className={`menu-btn${open ? ' is-open' : ''}`}
                type="button"
                aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={open}
                aria-controls="mobile-nav"
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mobile-panel${open ? ' is-open' : ''}`}
          id="mobile-nav"
          hidden={!open}
          aria-hidden={!open}
        >
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {links.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-panel-util">
            <Link to={routes.faq} onClick={closeMenu}>
              Вопросы
            </Link>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              WhatsApp
            </a>
          </div>
          <div className="mobile-panel-foot">
            <Link className="btn btn-pill btn-primary" to={routes.contact} onClick={closeMenu}>
              Записаться на консультацию
            </Link>
            <a href={`tel:${SITE.phones.primaryTel}`}>{SITE.phones.primaryDisplay}</a>
          </div>
        </div>
      </header>
    </>
  )
}
