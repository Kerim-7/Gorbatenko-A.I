import { Link } from 'react-router-dom'
import type { SeoArticleData } from '../data/seoArticles'
import { Reveal } from './Reveal'

type Props = {
  article: SeoArticleData
}

export function SeoArticle({ article }: Props) {
  return (
    <section className="section seo-article" id={article.id} aria-labelledby={`${article.id}-heading`}>
      <div className="wrap seo-article-inner">
        <Reveal className="section-head seo-article-head">
          <h2 id={`${article.id}-heading`}>{article.title}</h2>
          <p className="seo-article-lead">{article.lead}</p>
        </Reveal>

        <div className="seo-blocks">
          {article.blocks.map((block) => (
            <Reveal className="seo-block" key={block.heading}>
              <h3>{block.heading}</h3>
              {block.paragraphs.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
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
    </section>
  )
}
