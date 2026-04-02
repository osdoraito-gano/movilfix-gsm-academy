import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FreeCoursePage from './pages/FreeCoursePage';
import PremiumCoursePage from './pages/PremiumCoursePage';
import CartPage from './pages/CartPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/curso-gratis" element={<FreeCoursePage />} />
        <Route path="/curso-premium" element={<PremiumCoursePage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/tienda" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
