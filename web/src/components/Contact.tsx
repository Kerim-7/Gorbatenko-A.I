import { useState, type FormEvent } from 'react'
import { SITE } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
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
          <p className="brand-sm">{SITE.brand} А.И.</p>
          <h2 id="contact-heading">Запишитесь на консультацию</h2>
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
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
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
                rows={3}
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
