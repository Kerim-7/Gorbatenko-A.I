import { useEffect, useState } from 'react'
import { SITE } from '../data/content'

export function WhatsAppFloat() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('.site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      className={hidden ? 'wa-float is-hidden' : 'wa-float'}
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Здравствуйте! Хочу записаться на консультацию.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2c-5.46 0-9.91 4.44-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.44 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24m-4.3 4.3c-.2 0-.52.08-.79.38-.26.3-1.02.99-1.02 2.42s1.04 2.81 1.19 3 .2.45 3.27 3.25c2.55 2.32 3.33 2.07 3.93 1.95.6-.13 1.95-.8 2.23-1.57.27-.77.27-1.43.19-1.57-.08-.13-.26-.2-.54-.35s-1.68-.83-1.94-.92c-.26-.1-.45-.15-.64.15-.19.3-.74.92-.9 1.11-.17.2-.33.22-.61.07-.27-.14-1.16-.43-2.2-1.36-.81-.72-1.36-1.62-1.52-1.89-.16-.27-.02-.42.12-.56.13-.13.3-.34.44-.51.15-.17.2-.29.3-.48.1-.2.05-.36-.02-.51-.08-.14-.63-1.53-.87-2.09-.22-.53-.45-.46-.64-.47-.16 0-.35-.02-.54-.02"
        />
      </svg>
    </a>
  )
}
