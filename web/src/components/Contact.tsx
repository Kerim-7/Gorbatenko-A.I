import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { routes, SITE } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

export function Contact({ embedded = false }: Props) {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '').trim()
    const phone = String(data.get('phone') || '').trim()
    const message = String(data.get('message') || '').trim()

    const text = [
      'Здравствуйте! Хочу записаться на консультацию.',
      name && `Имя: ${name}`,
      phone && `Телефон: ${phone}`,
      message && `Проблема: ${message}`,
    ]
      .filter(Boolean)
      .join('\n')

    const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(wa, '_blank', 'noopener,noreferrer')
    setSent(true)
    form.reset()
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-inner">
        <Reveal>
          {embedded ? (
            <h2 id="contact-heading" className="sr-only">
              Контакты и форма записи
            </h2>
          ) : (
            <>
              <p className="kicker">Контакты</p>
              <h2 id="contact-heading">Запишитесь на консультацию</h2>
            </>
          )}
          {embedded ? (
            <>
              <p className="kicker">Контакты</p>
              <h3 className="inline-h3">Связь и заявка</h3>
            </>
          ) : null}
          <p className="contact-lead">
            Разберём ваш случай, снимки и план лечения. Стоимость консультации —{' '}
            {SITE.consultationPrice}&nbsp;₽.
          </p>
          <div className="phones">
            <a href={`tel:${SITE.phones.primaryTel}`}>{SITE.phones.primaryDisplay}</a>
            <a href={`tel:${SITE.phones.secondaryTel}`}>{SITE.phones.secondaryDisplay}</a>
          </div>
          <p className="geo">{SITE.cities.join(', ')}</p>
          <div className="trust-row">
            <span>к.м.н., доцент</span>
            <span>Хирургия «под ключ»</span>
            <span>Ответ в день обращения</span>
          </div>
          <p className="contact-links">
            <Link to={routes.consultation}>Консультация</Link>
            <Link to={routes.turnkey}>Под ключ</Link>
            <Link to={routes.faq}>Вопросы</Link>
          </p>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
            <p className="kicker">Заявка</p>
            <h3 className="inline-h3">Написать в WhatsApp</h3>
            <label>
              Имя
              <input
                type="text"
                name="name"
                required
                placeholder="Как к вам обращаться"
                autoComplete="name"
              />
            </label>
            <label>
              Телефон
              <input type="tel" name="phone" required placeholder="+7" autoComplete="tel" />
            </label>
            <label>
              Кратко о проблеме
              <textarea
                name="message"
                rows={4}
                placeholder="Стопа, колено, есть ли снимки…"
              />
            </label>
            <button className="btn btn-pill btn-accent" type="submit">
              Отправить в WhatsApp
            </button>
            <p className="form-note">
              {sent
                ? 'Заявка подготовлена в WhatsApp. Или позвоните — ответим и подберём время.'
                : 'Или позвоните — ответим и подберём удобное время.'}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
