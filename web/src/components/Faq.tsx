import { faq } from '../data/content'
import { Reveal } from './Reveal'

export function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 id="faq-heading">Частые вопросы</h2>
          <p>Коротко о консультации, операции «под ключ» и географии приёма</p>
        </Reveal>

        <div className="faq-list">
          {faq.map((item) => (
            <Reveal as="details" className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
