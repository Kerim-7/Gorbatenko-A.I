import { useEffect, useState } from 'react'
import {
  credentialCertificates,
  patents,
  type CredentialCertificate,
  type Patent,
} from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  embedded?: boolean
}

type LightboxItem =
  | { kind: 'patent'; item: Patent }
  | { kind: 'certificate'; item: CredentialCertificate }

export function Patents({ embedded = false }: Props) {
  const [active, setActive] = useState<LightboxItem | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      <section className="section patents" id="patents" aria-labelledby="patents-heading">
        <div className="wrap">
          {embedded ? (
            <h2 id="patents-heading" className="sr-only">
              Патенты
            </h2>
          ) : (
            <Reveal className="section-head">
              <p className="kicker">Наука</p>
              <h2 id="patents-heading">Патенты и изобретения</h2>
              <p>Официальные патенты РФ в области ортопедии и травматологии</p>
            </Reveal>
          )}

          <Reveal as="ul" className="patents-grid">
            {patents.map((item) => (
              <li key={item.number}>
                <button
                  type="button"
                  className="patent-card"
                  onClick={() => setActive({ kind: 'patent', item })}
                  aria-label={`Открыть патент № ${item.number}: ${item.title}`}
                >
                  <span className="patent-card-media">
                    <img
                      src={item.image}
                      alt={`Патент № ${item.number} — ${item.title}`}
                      loading="lazy"
                    />
                  </span>
                  <span className="patent-card-body">
                    <span className="patent-card-meta">
                      № {item.number} · {item.kind} · {item.year}
                    </span>
                    <strong>{item.title}</strong>
                    {item.detail ? <span className="patent-card-detail">{item.detail}</span> : null}
                  </span>
                </button>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section
        className="section certificates"
        id="certificates"
        aria-labelledby="certificates-heading"
      >
        <div className="wrap">
          <Reveal className="section-head">
            <p className="kicker">Квалификация</p>
            <h2 id="certificates-heading">Сертификаты и курсы</h2>
            <p>Участие в конгрессах и курсах по хирургии стопы, голеностопа и артроскопии</p>
          </Reveal>

          <Reveal as="ul" className="patents-grid">
            {credentialCertificates.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="patent-card"
                  onClick={() => setActive({ kind: 'certificate', item })}
                  aria-label={`Открыть сертификат: ${item.title}`}
                >
                  <span className="patent-card-media">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </span>
                  <span className="patent-card-body">
                    <span className="patent-card-meta">{item.year}</span>
                    <strong>{item.title}</strong>
                    <span className="patent-card-detail">{item.detail}</span>
                  </span>
                </button>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {active ? (
        <div
          className="works-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={
            active.kind === 'patent'
              ? `Патент № ${active.item.number}`
              : active.item.title
          }
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="works-lightbox-close"
            aria-label="Закрыть"
            onClick={() => setActive(null)}
          >
            ×
          </button>
          <figure className="works-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.item.image}
              alt={
                active.kind === 'patent'
                  ? `Патент № ${active.item.number} — ${active.item.title}`
                  : active.item.title
              }
            />
            <figcaption>
              <strong>
                {active.kind === 'patent'
                  ? `Патент № ${active.item.number}`
                  : active.item.title}
              </strong>
              <span>
                {active.kind === 'patent'
                  ? `${active.item.title}${active.item.detail ? `. ${active.item.detail}` : ''}`
                  : active.item.detail}
              </span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
