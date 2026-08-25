import { Link } from 'react-router-dom'
import { SITE } from '../data/content'
import { seoArticles, type SeoArticleData } from '../data/seoArticles'
import { Reveal } from './Reveal'

const article: SeoArticleData = seoArticles.home

const leadRest = article.lead.startsWith(SITE.name)
  ? article.lead.slice(SITE.name.length)
  : ` — ${SITE.credentials}. Оперативное лечение нижних конечностей «под ключ»: хирургия стоп, артроскопия колена, пластика ПКС.`

export function CareGuide() {
  return (
    <section
      className="section care-guide"
      id={article.id}
      aria-labelledby="care-lead"
    >
      <div className="care-guide-shell">
        <div className="care-guide-inner">
          <Reveal className="section-head care-guide-head">
            <p id="care-lead" className="section-lead care-guide-lead">
              <strong>{SITE.name}</strong>
              {leadRest}
            </p>
          </Reveal>

          <Reveal className="care-guide-media">
            <img
              src="/images/image7.jpeg"
              alt="Предоперационная разметка стопы"
              width={900}
              height={1200}
              loading="lazy"
            />
          </Reveal>

          <div className="seo-blocks care-guide-seo">
            {article.blocks.map((block) => (
              <Reveal className="seo-block" key={block.heading}>
                <h3>{block.heading}</h3>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {block.bullets ? (
                  <ul>
                    {block.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {block.links ? (
                  <nav className="seo-links" aria-label={`Ссылки: ${block.heading}`}>
                    {block.links.map((link) => (
                      <Link key={link.to} to={link.to}>
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
