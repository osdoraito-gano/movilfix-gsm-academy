import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, ArrowLeft, CreditCard, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

interface CartItem {
  id: number;
  title: string;
  price: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
    setCartCount(cart.length);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setCartCount(updatedCart.length);
    toast.success('Producto eliminado del carrito');
  };

  const clearCart = () => {
    localStorage.setItem('cart', '[]');
    setCartItems([]);
    setCartCount(0);
    toast.success('Carrito vaciado');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Tu carrito está vacío');
      return;
    }
    toast.success('Redirigiendo a pasarela de pago...');
    // Aquí iría la integración con la pasarela de pago
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header cartCount={cartCount} />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </Link>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <ShoppingCart className="w-8 h-8" />
              Tu Carrito
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-white mb-2">
                  Tu carrito está vacío
                </h2>
                <p className="text-slate-400 mb-6">
                  Explora nuestros cursos y encuentra el perfecto para ti.
                </p>
                <Link to="/">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                    Ver Cursos
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="bg-slate-800 border-slate-700">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className={`text-lg font-bold ${item.price === 0 ? 'text-green-400' : 'text-cyan-400'}`}>
                          {item.price === 0 ? 'GRATIS' : `$${item.price}`}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </CardContent>
                  </Card>
                ))}

                <button
                  onClick={clearCart}
                  className="text-slate-400 hover:text-red-400 text-sm flex items-center gap-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Vaciar carrito
                </button>
              </div>

              {/* Summary */}
              <div className="lg:col-span-1">
                <Card className="bg-slate-800 border-slate-700 sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-white font-semibold text-lg mb-4">
                      Resumen de compra
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-slate-400">
                        <span>Subtotal</span>
                        <span>${total}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Impuestos</span>
                        <span>${Math.round(total * 0.16)}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-700 pt-4 mb-6">
                      <div className="flex justify-between text-white text-xl font-bold">
                        <span>Total</span>
                        <span>${Math.round(total * 1.16)}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-6"
                      onClick={handleCheckout}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Proceder al pago
                    </Button>

                    <div className="flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
                      <Lock className="w-4 h-4" />
                      Pago seguro con SSL
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default CartPage;
