import { Articles } from '../components/Articles'
import { CareGuide } from '../components/CareGuide'
import { CtaBand } from '../components/CtaBand'
import { Directions } from '../components/Directions'
import { FaqTeaser } from '../components/FaqTeaser'
import { Hero } from '../components/Hero'
import { Journey } from '../components/Journey'
import { Locations } from '../components/Locations'
import { PracticeWay } from '../components/PracticeWay'
import { PriceTeaser } from '../components/PriceTeaser'
import { Seo } from '../components/Seo'
import { ServiceTabs } from '../components/ServiceTabs'
import { TrustBar } from '../components/TrustBar'
import { pageSeo } from '../data/content'

export function HomePage() {
  return (
    <>
      <Seo page={pageSeo.home} includePhysicianSchema includeFaqSchema />
      <Hero />
      <TrustBar />
      <PracticeWay />
      <Directions />
      <ServiceTabs />
      <Journey />
      <PriceTeaser />
      <Locations />
      <CareGuide />
      <Articles />
      <FaqTeaser />
      <CtaBand />
    </>
  )
}
