import { Link } from 'react-router-dom'
import { pageSeo } from '../data/content'
import { Hero } from '../components/Hero'
import { Seo } from '../components/Seo'
import { Services } from '../components/Services'
import { TrustBar } from '../components/TrustBar'

export function HomePage() {
  return (
    <>
      <Seo page={pageSeo.home} includePhysicianSchema />
      <Hero />
      <TrustBar />
      <Services />
      <section className="section home-links">
        <div className="wrap home-links-grid">
          <Link to="/konsultaciya" className="home-link-card">
            <strong>Консультация</strong>
            <span>Осмотр, снимки и план лечения</span>
          </Link>
          <Link to="/pod-kluch" className="home-link-card">
            <strong>Операция «под ключ»</strong>
            <span>Полное сопровождение</span>
          </Link>
          <Link to="/hirurgiya-stop" className="home-link-card">
            <strong>Хирургия стоп</strong>
            <span>От 30 000 ₽</span>
          </Link>
          <Link to="/hirurgiya-kolena" className="home-link-card">
            <strong>Хирургия колена</strong>
            <span>Артроскопия и ПКС</span>
          </Link>
          <Link to="/konferencii" className="home-link-card">
            <strong>Конференции</strong>
            <span>Опыт и экспертиза</span>
          </Link>
          <Link to="/zapis" className="home-link-card">
            <strong>Запись</strong>
            <span>Телефон и WhatsApp</span>
          </Link>
        </div>
      </section>
    </>
  )
}
