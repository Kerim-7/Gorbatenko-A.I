import { CtaBand } from '../components/CtaBand'
import { Faq } from '../components/Faq'
import {
  funnelAfterFaq,
  NextSteps,
} from '../components/NextSteps'
import { Seo } from '../components/Seo'
import { pageSeo } from '../data/content'

export function FaqPage() {
  return (
    <>
      <Seo page={pageSeo.faq} includeFaqSchema />
      <Faq page />
      <NextSteps steps={funnelAfterFaq} />
      <CtaBand />
    </>
  )
}
