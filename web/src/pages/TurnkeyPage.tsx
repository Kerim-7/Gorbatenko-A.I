import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { Turnkey } from '../components/Turnkey'
import { pageSeo } from '../data/content'

export function TurnkeyPage() {
  return (
    <>
      <Seo page={pageSeo.turnkey} />
      <PageHero
        title="Операция «под ключ»"
        lead="От подготовки до восстановления — полное сопровождение."
        image="/images/image9.jpeg"
        imageAlt="Операция под ключ"
      />
      <Turnkey />
    </>
  )
}
