import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  Filter, 
  ChevronDown, 
  Eye, 
  Heart,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  description: string;
  inStock: boolean;
}

const categories = [
  'Todos',
  'Estaciones de Calor',
  'Microscopios',
  'Herramientas Básicas',
  'Software',
  'Repuestos',
  'Consumibles',
  'Equipos de Diagnóstico',
  'Cautines',
  'Fuentes de Poder',
  'Precalentadoras',
  'Laminadoras',
];

const products: Product[] = [
  {
    id: 1,
    name: 'Microscopio Trinocular 7.5X-75X + Oculares PL',
    price: 2100000,
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop',
    category: 'Microscopios',
    rating: 4.9,
    reviews: 45,
    badge: 'Recién Llegado',
    description: 'Microscopio profesional trinocular con oculares planos para trabajo de microsoldadura.',
    inStock: true,
  },
  {
    id: 2,
    name: 'Mochila TechPro Multifuncional',
    price: 120000,
    originalPrice: 135000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    category: 'Herramientas Básicas',
    rating: 4.7,
    reviews: 128,
    badge: 'Oferta',
    description: 'Mochila resistente con compartimentos organizados para herramientas.',
    inStock: true,
  },
  {
    id: 3,
    name: 'Hilo para Visores MasterGlass',
    price: 9500,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Consumibles',
    rating: 4.8,
    reviews: 89,
    badge: 'Recién Llegado',
    description: 'Hilo especializado para reparación de visores y pantallas.',
    inStock: true,
  },
  {
    id: 4,
    name: 'Precalentadora Universal 110V Base Pequeña',
    price: 190000,
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=400&h=400&fit=crop',
    category: 'Precalentadoras',
    rating: 4.6,
    reviews: 34,
    badge: 'Recién Llegado',
    description: 'Precalentadora digital con control de temperatura preciso.',
    inStock: true,
  },
  {
    id: 5,
    name: 'Precalentadora Universal 110V Base Ancha',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Precalentadoras',
    rating: 4.7,
    reviews: 28,
    badge: 'Recién Llegado',
    description: 'Precalentadora con base amplia para tablets y dispositivos grandes.',
    inStock: true,
  },
  {
    id: 6,
    name: 'Plancha 360 110V con Levantador de Pantallas',
    price: 400000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Laminadoras',
    rating: 4.8,
    reviews: 56,
    badge: 'Recién Llegado',
    description: 'Plancha profesional con sistema de succión para separación de pantallas.',
    inStock: true,
  },
  {
    id: 7,
    name: 'Plancha de Rodillos con 3 Memorias 110V',
    price: 205000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Laminadoras',
    rating: 4.5,
    reviews: 42,
    badge: 'Recién Llegado',
    description: 'Plancha laminadora con memoria de temperatura.',
    inStock: true,
  },
  {
    id: 8,
    name: 'Fuente de Poder 15V-5A Aojiw',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Fuentes de Poder',
    rating: 4.9,
    reviews: 67,
    badge: 'Recién Llegado',
    description: 'Fuente de poder regulable con display digital.',
    inStock: true,
  },
  {
    id: 9,
    name: 'Fuente de Poder Digital Ajustable Aojiw',
    price: 110000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Fuentes de Poder',
    rating: 4.6,
    reviews: 38,
    badge: 'Recién Llegado',
    description: 'Fuente compacta ideal para trabajo en campo.',
    inStock: true,
  },
  {
    id: 10,
    name: 'Estación de Calor 700W Aojiw',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Estaciones de Calor',
    rating: 4.7,
    reviews: 92,
    badge: 'Recién Llegado',
    description: 'Estación de aire calor con control de temperatura.',
    inStock: true,
  },
  {
    id: 11,
    name: 'Cargador Multipuerto 40W Aojiw',
    price: 92000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Equipos de Diagnóstico',
    rating: 4.4,
    reviews: 23,
    badge: 'Recién Llegado',
    description: 'Cargador con múltiples puertos USB para pruebas.',
    inStock: true,
  },
  {
    id: 12,
    name: 'Cautín Digital 60W con Display',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop',
    category: 'Cautines',
    rating: 4.8,
    reviews: 156,
    badge: 'Más Vendido',
    description: 'Cautín profesional con control digital de temperatura.',
    inStock: true,
  },
];

const ShopPage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  const filteredProducts = products
    .filter(p => selectedCategory === 'Todos' || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find((item: any) => item.id === product.id);
    if (exists) {
      toast.info('Este producto ya está en tu carrito');
      return;
    }
    cart.push({ id: product.id, title: product.name, price: product.price });
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartCount(prev => prev + 1);
    toast.success(`${product.name} agregado al carrito`);
  };

  const toggleFavorite = (productId: number) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    toast.success(favorites.includes(productId) ? 'Eliminado de favoritos' : 'Agregado a favoritos');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header cartCount={cartCount} />
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <span>Envíos a toda Colombia</span>
          <div className="flex items-center gap-4">
            <Link to="/acerca-de" className="hover:text-cyan-400">Acerca de</Link>
            <Link to="/contacto" className="hover:text-cyan-400">Contacto</Link>
            <a href="tel:+573025975967" className="hover:text-cyan-400">Llama +57 302 597 5967</a>
          </div>
        </div>
      </div>

      {/* Search & Actions Bar */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-slate-800">Academy<span className="text-cyan-500">Shop</span></span>
            </Link>

            {/* Search */}
            <div className="flex-1 max-w-xl relative">
              <Input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border-slate-300"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-cyan-500 text-white p-2 rounded">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link to="/favoritos" className="flex items-center gap-2 text-slate-600 hover:text-cyan-500">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline">Favoritos</span>
                {favorites.length > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </Link>
              <Link to="/carrito" className="flex items-center gap-2 text-slate-600 hover:text-cyan-500">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline">Carrito</span>
                {cartCount > 0 && (
                  <span className="bg-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8 py-3 overflow-x-auto">
            <Link to="/" className="text-slate-600 hover:text-cyan-500 font-medium whitespace-nowrap">Inicio</Link>
            <Link to="/tienda" className="text-cyan-500 font-medium whitespace-nowrap">Tienda Online</Link>
            <Link to="/cursos" className="text-slate-600 hover:text-cyan-500 font-medium whitespace-nowrap">Cursos</Link>
            <Link to="/contacto" className="text-slate-600 hover:text-cyan-500 font-medium whitespace-nowrap">Contacto</Link>
            <Link to="/envios" className="text-slate-600 hover:text-cyan-500 font-medium whitespace-nowrap">Envío y devoluciones</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-slate-600" />
                <h2 className="text-lg font-semibold text-slate-800">Filtrar por</h2>
              </div>

              <div>
                <h3 className="font-medium text-slate-700 mb-3">Categoría</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left py-2 px-3 rounded-lg transition-colors text-sm ${
                          selectedCategory === category
                            ? 'bg-cyan-50 text-cyan-600 font-medium'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h3 className="font-medium text-slate-700 mb-3">Precio</h3>
                <div className="space-y-2">
                  <button className="w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 text-sm">
                    Menos de $100.000
                  </button>
                  <button className="w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 text-sm">
                    $100.000 - $500.000
                  </button>
                  <button className="w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 text-sm">
                    $500.000 - $1.000.000
                  </button>
                  <button className="w-full text-left py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 text-sm">
                    Más de $1.000.000
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-600">
                Mostrando <span className="font-semibold">{sortedProducts.length}</span> productos
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-10 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="relevance">Ordenar por: Relevancia</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificados</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="bg-white border-slate-200 overflow-hidden group hover:shadow-lg transition-shadow">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    {product.badge && (
                      <Badge className="absolute top-3 left-3 bg-slate-800 text-white">
                        {product.badge}
                      </Badge>
                    )}
                    {/* Quick View Button */}
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="bg-white text-slate-800 px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Vista rápida
                      </span>
                    </button>
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
                    </button>
                  </div>

                  <CardContent className="p-4">
                    {/* Name */}
                    <Link to={`/producto/${product.id}`}>
                      <h3 className="text-slate-800 font-medium text-sm mb-2 line-clamp-2 hover:text-cyan-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-slate-600">{product.rating}</span>
                      <span className="text-sm text-slate-400">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      {product.originalPrice && (
                        <span className="text-slate-400 line-through text-sm block">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-slate-800">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    {/* Add to Cart */}
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar al carrito
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-600 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-slate-400">
                  Intenta con otra búsqueda o categoría
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Quick View Modal */}
      <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
        <DialogContent className="max-w-3xl">
          {quickViewProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{quickViewProduct.name}</DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{quickViewProduct.rating}</span>
                    <span className="text-slate-400">({quickViewProduct.reviews} reseñas)</span>
                  </div>
                  <p className="text-slate-600 mb-4">{quickViewProduct.description}</p>
                  <div className="mb-6">
                    {quickViewProduct.originalPrice && (
                      <span className="text-slate-400 line-through text-lg block">
                        {formatPrice(quickViewProduct.originalPrice)}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-slate-800">
                      {formatPrice(quickViewProduct.price)}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        addToCart(quickViewProduct);
                        setQuickViewProduct(null);
                      }}
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Agregar al carrito
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => toggleFavorite(quickViewProduct.id)}
                      className="border-slate-300"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(quickViewProduct.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default ShopPage;
