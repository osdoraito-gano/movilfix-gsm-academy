import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Check, Clock, Users, Star, BookOpen, Award, Download, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import WhatsAppWidget from '../components/WhatsAppWidget';

const courseModules = [
  {
    title: 'Módulo 1: Introducción',
    lessons: [
      'Bienvenida al curso',
      'Herramientas básicas necesarias',
      'Seguridad en el trabajo',
      'Conociendo los componentes',
    ],
  },
  {
    title: 'Módulo 2: Diagnóstico',
    lessons: [
      'Identificación de fallas',
      'Uso del multímetro',
      'Pruebas de encendido',
      'Diagnóstico de pantalla',
    ],
  },
  {
    title: 'Módulo 3: Reparaciones Básicas',
    lessons: [
      'Cambio de pantalla',
      'Reemplazo de batería',
      'Limpieza de puertos',
      'Cambio de cámara',
    ],
  },
  {
    title: 'Módulo 4: Software',
    lessons: [
      'Flasheo básico',
      'Hard reset',
      'Eliminación de virus',
      'Backup y restauración',
    ],
  },
];

const courseFeatures = [
  { icon: Clock, label: '10 horas de contenido' },
  { icon: BookOpen, label: '25 lecciones' },
  { icon: Users, label: '15,420 estudiantes' },
  { icon: Award, label: 'Certificado gratis' },
  { icon: Download, label: 'Material descargable' },
  { icon: Star, label: '4.8 estrellas' },
];

const FreeCoursePage = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartCount(cart.length);
  }, []);

  const handleEnroll = () => {
    const course = {
      id: 1,
      title: 'Curso Gratis - Fundamentos',
      price: 0,
    };
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.find((item: any) => item.id === 1)) {
      cart.push(course);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartCount(prev => prev + 1);
      toast.success('¡Te has inscrito al curso gratuito!');
    } else {
      toast.info('Ya estás inscrito en este curso');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Header cartCount={cartCount} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800">
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
              <Badge className="bg-white/20 text-white mb-4">100% GRATIS</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Curso Gratis de Fundamentos
              </h1>
              <p className="text-xl text-white/90 mb-6">
                Aprende las bases de la reparación de dispositivos móviles desde cero. 
                Sin costo, sin compromiso.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {courseFeatures.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/80">
                    <feature.icon className="w-5 h-5" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                onClick={handleEnroll}
                className="bg-white text-green-700 hover:bg-green-50 font-bold px-8"
              >
                <Play className="w-5 h-5 mr-2" />
                Inscribirme Gratis
              </Button>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&h=400&fit=crop" 
                alt="Curso Gratis"
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
                  <feature.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
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
            Contenido del <span className="text-green-400">Curso</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {courseModules.map((module, idx) => (
              <Card key={idx} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    {module.title}
                  </h3>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lidx) => (
                      <li key={lidx} className="flex items-center gap-2 text-slate-400">
                        <Check className="w-4 h-4 text-green-400" />
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Inscríbete ahora y comienza tu camino hacia convertirte en un técnico profesional.
          </p>
          <Button 
            size="lg" 
            onClick={handleEnroll}
            className="bg-white text-green-700 hover:bg-green-50 font-bold px-8"
          >
            <Play className="w-5 h-5 mr-2" />
            Inscribirme Ahora
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default FreeCoursePage;
