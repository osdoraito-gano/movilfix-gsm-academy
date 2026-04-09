import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import FreeCoursePage from './pages/FreeCoursePage';
import PremiumCoursePage from './pages/PremiumCoursePage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';
import SobreNosotros from './pages/SobreNosotros';
import Blog from './pages/Blog';
import AccessPage from './pages/AccessPage';
import CentroAyuda from './pages/CentroAyuda';
import Contacto from './pages/Contacto';
import Terminos from './pages/Terminos';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso-gratis" element={<FreeCoursePage />} />
        <Route path="/curso-premium" element={<PremiumCoursePage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/tienda" element={<ShopPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/acceso" element={<AccessPage />} />
        <Route path="/centro-ayuda" element={<CentroAyuda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/terminos" element={<Terminos />} />
      </Routes>
    </Router>
  );
}
export default App;