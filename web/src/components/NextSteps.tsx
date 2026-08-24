import { Link } from 'react-router-dom'
import { routes } from '../data/content'

export type NextStep = {
  to: string
  title: string
  text: string
}

type Props = {
  title?: string
  steps: NextStep[]
}

export function NextSteps({
  title = 'Что дальше',
  steps,
}: Props) {
  return (
    <section className="section next-steps" aria-labelledby="next-steps-heading">
      <div className="wrap">
        <header className="section-head">
          <h2 id="next-steps-heading">{title}</h2>
          <p>Логичный путь пациента: от разбора случая до операции и записи</p>
        </header>
        <div className="next-steps-grid">
          {steps.map((step, index) => (
            <Link key={step.to} className="next-step-card" to={step.to}>
              <span className="next-step-num">{index + 1}</span>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export const funnelAfterDirection: NextStep[] = [
  {
    to: routes.consultation,
    title: 'Консультация',
    text: 'Осмотр, снимки и план лечения',
  },
  {
    to: routes.turnkey,
    title: 'Операция «под ключ»',
    text: 'Что входит в сопровождение',
  },
  {
    to: routes.services,
    title: 'Цены',
    text: 'Прозрачный прайс по направлениям',
  },
  {
    to: routes.contact,
    title: 'Запись',
    text: 'Телефон или WhatsApp',
  },
]

export const funnelAfterConsult: NextStep[] = [
  {
    to: routes.feet,
    title: 'Хирургия стоп',
    text: 'Показания и виды операций',
  },
  {
    to: routes.knee,
    title: 'Хирургия колена',
    text: 'Артроскопия, мениск, ПКС',
  },
  {
    to: routes.turnkey,
    title: 'Пакет «под ключ»',
    text: 'Полное сопровождение',
  },
  {
    to: routes.contact,
    title: 'Записаться',
    text: 'Подберём удобное время',
  },
]

export const funnelAfterTurnkey: NextStep[] = [
  {
    to: routes.consultation,
    title: 'Сначала консультация',
    text: 'Разбор случая и решение об операции',
  },
  {
    to: routes.services,
    title: 'Ориентир по ценам',
    text: 'Стопы и колено — открытый прайс',
  },
  {
    to: routes.feet,
    title: 'Стопы',
    text: 'Деформации и травмы стопы',
  },
  {
    to: routes.knee,
    title: 'Колено',
    text: 'Связки, мениск, артроскопия',
  },
]

export const funnelAfterPrices: NextStep[] = [
  {
    to: routes.consultation,
    title: 'Консультация',
    text: 'Уточним показания и итоговую сумму',
  },
  {
    to: routes.feet,
    title: 'Хирургия стоп',
    text: 'Показания и виды операций',
  },
  {
    to: routes.knee,
    title: 'Хирургия колена',
    text: 'Артроскопия, мениск, ПКС',
  },
  {
    to: routes.contact,
    title: 'Запись',
    text: 'Телефон или WhatsApp',
  },
]

export const funnelAfterFaq: NextStep[] = [
  {
    to: routes.consultation,
    title: 'Консультация',
    text: 'Что входит в приём',
  },
  {
    to: routes.services,
    title: 'Цены',
    text: 'Прайс по направлениям',
  },
  {
    to: routes.contact,
    title: 'Записаться',
    text: 'Подберём удобное время',
  },
]

export const funnelAfterConferences: NextStep[] = [
  {
    to: routes.feet,
    title: 'Хирургия стоп',
    text: 'Клиническая практика',
  },
  {
    to: routes.knee,
    title: 'Хирургия колена',
    text: 'Артроскопия и связки',
  },
  {
    to: routes.contact,
    title: 'Запись на приём',
    text: 'Консультация и план лечения',
  },
]
