import { formatConsultationPrices } from '../data/content'

export function TrustBar() {
  return (
    <section className="section glance" aria-labelledby="glance-heading">
      <div className="wrap">
        <h2 id="glance-heading" className="glance-title">
          Практика кратко
        </h2>
        <div className="glance-grid">
          <article>
            <h3>Кандидат мед. наук</h3>
            <p>доцент, травматолог-ортопед, хирург, подолог</p>
          </article>
          <article>
            <h3>«Под ключ»</h3>
            <p>полное сопровождение операции и восстановления</p>
          </article>
          <article>
            <h3>от 30 000 ₽</h3>
            <p>операции на стопе у взрослых и детей</p>
          </article>
          <article>
            <h3>4 000–5 000 ₽</h3>
            <p>консультация: {formatConsultationPrices()}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
