import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Confirmation from './pages/Confirmation'
import APropos from './pages/APropos'
import FAQ from './pages/FAQ'
import Methode from './pages/Methode'
import MethotdeTransmetteurs from './pages/MethotdeTransmetteurs'
import MentionsLegales from './pages/MentionsLegales'
import OffrePro from './pages/OffrePro'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/methode" element={<Methode />} />
      <Route path="/methode-transmetteurs" element={<MethotdeTransmetteurs />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/offre-pro" element={<OffrePro />} />
    </Routes>
  )
}
