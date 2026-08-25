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

const stepImages: Partial<Record<string, string>> = {
  [routes.consultation]: '/images/image6.jpeg',
  [routes.services]: '/images/image1.jpeg',
  [routes.contact]: '/images/image9.jpeg',
  [routes.feet]: '/images/image13.jpeg',
  [routes.knee]: '/images/image18.jpeg',
  [routes.turnkey]: '/images/image7.jpeg',
  [routes.works]: '/images/image6.jpeg',
  [routes.conferences]: '/images/image1.jpeg',
}

const stepCta: Partial<Record<string, string>> = {
  [routes.contact]: 'Записаться',
  [routes.services]: 'Смотреть прайс',
  [routes.consultation]: 'Что входит',
  [routes.turnkey]: 'Состав пакета',
  [routes.feet]: 'Подробнее о стопах',
  [routes.knee]: 'Подробнее о колене',
  [routes.works]: 'Смотреть работы',
  [routes.conferences]: 'Конференции',
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.346 16.154 14.277 15.1l2.35-2.35H4.5v-1.5h12.127L14.292 8.9l1.054-1.054L20.4 12.5l-5.054 3.654Z"
        fill="currentColor"
      />
    </svg>
  )
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
          {steps.map((step) => (
            <Link key={`${step.to}-${step.title}`} className="location-card next-step-card" to={step.to}>
              <div className="location-card-media">
                <img
                  src={stepImages[step.to] ?? '/images/image6.jpeg'}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="location-card-body">
                <div className="location-card-head">
                  <strong className="location-card-title">{step.title}</strong>
                </div>

                <p className="location-card-text">{step.text}</p>

                <span className="location-card-link">
                  {stepCta[step.to] ?? 'Подробнее'}
                  <ArrowIcon />
                </span>
              </div>
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
