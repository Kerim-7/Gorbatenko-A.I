import { CtaBand } from '../components/CtaBand'
import { Directions } from '../components/Directions'
import { FaqTeaser } from '../components/FaqTeaser'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { PriceTeaser } from '../components/PriceTeaser'
import { Seo } from '../components/Seo'
import { SeoArticle } from '../components/SeoArticle'
import { TrustBar } from '../components/TrustBar'
import { WorksTeaser } from '../components/WorksTeaser'
import { pageSeo } from '../data/content'
import { seoArticles } from '../data/seoArticles'

export function HomePage() {
  return (
    <>
      <Seo page={pageSeo.home} includePhysicianSchema includeFaqSchema />
      <Hero />
      <TrustBar />
      <Directions />
      <WorksTeaser />
      <Journey />
      <PriceTeaser />
      <FaqTeaser />
      <SeoArticle article={seoArticles.home} />
      <CtaBand />
    </>
  )
}
