import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ConferencesPage } from './pages/ConferencesPage'
import { ConsultationPage } from './pages/ConsultationPage'
import { ContactPage } from './pages/ContactPage'
import { FaqPage } from './pages/FaqPage'
import { FeetPage } from './pages/FeetPage'
import { HomePage } from './pages/HomePage'
import { KneePage } from './pages/KneePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ServicesPage } from './pages/ServicesPage'
import { TurnkeyPage } from './pages/TurnkeyPage'
import { WorksPage } from './pages/WorksPage'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="uslugi" element={<ServicesPage />} />
            <Route path="konsultaciya" element={<ConsultationPage />} />
            <Route path="pod-kluch" element={<TurnkeyPage />} />
            <Route path="hirurgiya-stop" element={<FeetPage />} />
            <Route path="hirurgiya-kolena" element={<KneePage />} />
            <Route path="raboty" element={<WorksPage />} />
            <Route path="konferencii" element={<ConferencesPage />} />
            <Route path="voprosy" element={<FaqPage />} />
            <Route path="zapis" element={<ContactPage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
