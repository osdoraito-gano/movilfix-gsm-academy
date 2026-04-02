import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Clock, Users, BookOpen, Award, Download, ShoppingCart, Zap, Shield, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const courseModules = [
  {
    title: 'Módulo 1: Reparación Avanzada',
    lessons: [
      'Microsoldadura básica',
      'Reballing de chips',
      'Reparación de placas',
      'Diagnóstico con microscopio',
    ],
  },
  {
    title: 'Módulo 2: Desbloqueos',
    lessons: [
      'Bypass de iCloud',
      'Eliminación de FRP',
      'Desbloqueo de redes',
      'Herramientas profesionales',
    ],
  },
  {
    title: 'Módulo 3: Software Avanzado',
    lessons: [
      'Programación de IMEI',
      'Reparación de baseband',
      'Flasheo con boxes',
      'Recuperación de datos',
    ],
  },
  {
    title: 'Módulo 4: iPhone Especializado',
    lessons: [
      'Reparación de Face ID',
      'Cambio de cristal trasero',
      'True Tone y cámara',
      'Programación de pantallas',
    ],
  },
  {
    title: 'Módulo 5: Samsung Especializado',
    lessons: [
      'Reparación de módulos',
      'Cambio de cristal curvo',
      'Solución de errores',
      'Octopus y Z3X',
    ],
  },
  {
    title: 'Módulo 6: Negocio y Marketing',
    lessons: [
      'Cómo iniciar tu taller',
      'Precios y cotizaciones',
      'Atención al cliente',
      'Marketing digital',
    ],
  },
];

const courseFeatures = [
  { icon: Clock, label: '45 horas de contenido' },
  { icon: BookOpen, label: '120 lecciones' },
  { icon: Users, label: '8,750 estudiantes' },
  { icon: Award, label: 'Certificado premium' },
  { icon: Download, label: 'Material descargable' },
  { icon: Shield, label: 'Soporte prioritario' },
];

const PremiumCoursePage = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
  }, []);

  const handleAddToCart = () => {
    const course = {
      id: 2,
      title: 'Curso Premium Completo',
      price: 99,
    };
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.find((item: any) => item.id === 2)) {
      cart.push(course);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartCount(prev => prev + 1);
      toast.success('Curso Premium agregado al carrito');
    } else {
      toast.info('Este curso ya está en tu carrito');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header cartCount={cartCount} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-600 via-violet-700 to-fuchsia-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-yellow-400 text-purple-900 mb-4 font-bold">MÁS POPULAR</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Curso Premium Completo
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Domina todas las técnicas avanzadas de reparación y desbloqueo. 
                Conviértete en un profesional de élite.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-xl line-through text-white/60">$199</span>
                <Badge className="bg-red-500">50% OFF</Badge>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                {courseFeatures.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/80">
                    <feature.icon className="w-5 h-5" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={handleAddToCart}
                  className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold px-8"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Ahora
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                alt="Curso Premium"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {courseFeatures.map((feature, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700 text-center">
                <CardContent className="p-6">
                  <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-slate-300 text-sm">{feature.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Contenido del <span className="text-purple-400">Curso Premium</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lidx) => (
                      <li key={lidx} className="flex items-center gap-2 text-slate-400">
                        <Check className="w-4 h-4 text-purple-400" />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            ¿Por qué elegir el <span className="text-purple-400">Premium</span>?
          </h2>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-400" />
                    Incluye del Curso Gratis
                  </h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>• Fundamentos de reparación</li>
                    <li>• Diagnóstico básico</li>
                    <li>• Reparaciones simples</li>
                    <li>• Software básico</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Exclusivo Premium
                  </h3>
                  <ul className="space-y-2 text-slate-400">
                    <li>• Microsoldadura avanzada</li>
                    <li>• Desbloqueos profesionales</li>
                    <li>• iPhone especializado</li>
                    <li>• Samsung especializado</li>
                    <li>• Guía de negocio</li>
                    <li>• Soporte prioritario 24/7</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Oferta por tiempo limitado
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Aprovecha el 50% de descuento y accede a todo el contenido premium.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-4xl font-bold text-white">$99</span>
            <span className="text-2xl line-through text-white/60">$199</span>
          </div>
          <Button 
            size="lg" 
            onClick={handleAddToCart}
            className="bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold px-8"
          >
            <Zap className="w-5 h-5 mr-2" />
            Obtener Acceso Premium
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default PremiumCoursePage;
