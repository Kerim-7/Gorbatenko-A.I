import { Link } from 'react-router-dom'
import type { SeoArticleData } from '../data/seoArticles'
import { Reveal } from './Reveal'

type Props = {
  article: SeoArticleData
  /** Выключить появление с opacity:0 — контент сразу виден */
  animate?: boolean
  /** Одна колонка, как статья, а не сетка карточек */
  layout?: 'cards' | 'article'
}

export function SeoArticle({ article, animate = true, layout = 'cards' }: Props) {
  const Head = animate ? Reveal : 'div'
  const Block = animate ? Reveal : 'article'
  const sectionClass =
    layout === 'article' ? 'section seo-article seo-article-flow' : 'section seo-article'

  return (
    <section className={sectionClass} id={article.id} aria-labelledby={`${article.id}-heading`}>
      <div className="wrap seo-article-inner">
        <Head className="section-head seo-article-head">
          <h2 id={`${article.id}-heading`}>{article.title}</h2>
          <p className="seo-article-lead">{article.lead}</p>
        </Head>

        <div className="seo-blocks">
          {article.blocks.map((block) => (
            <Block className="seo-block" key={block.heading}>
              <h3>{block.heading}</h3>
              {block.image ? (
                <figure className="seo-block-figure">
                  <img src={block.image.src} alt={block.image.alt} loading="lazy" />
                </figure>
              ) : null}
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
            </Block>
          ))}
        </div>
      </div>
    </section>
  )
}
