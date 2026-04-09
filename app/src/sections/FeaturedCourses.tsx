import { Link } from 'react-router-dom';
import { Star, Clock, Users, Play, Check, ShoppingCart, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  duration: string;
  students: number;
  rating: number;
  lessons: number;
  features: string[];
  badge?: string;
  badgeColor?: string;
  icon: React.ElementType;
  link: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Curso Gratis - Fundamentos',
    description: 'Aprende las bases de la reparación de dispositivos móviles desde cero',
    price: 0,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=250&fit=crop',
    duration: '10 horas',
    students: 15420,
    rating: 4.8,
    lessons: 25,
    features: ['Acceso de por vida', 'Certificado gratis', 'Soporte básico'],
    badge: 'GRATIS',
    badgeColor: 'bg-green-500',
    icon: Play,
    link: '/curso-gratis',
  },
  {
    id: 2,
    title: 'Curso Premium Completo',
    description: 'Domina todas las técnicas avanzadas de reparación y desbloqueo',
    price: 99,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop',
    duration: '45 horas',
    students: 8750,
    rating: 4.9,
    lessons: 120,
    features: ['Acceso de por vida', 'Certificado premium', 'Soporte prioritario', 'Actualizaciones'],
    badge: 'POPULAR',
    badgeColor: 'bg-purple-500',
    icon: Sparkles,
    link: '/curso-premium',
  },
  {
    id: 3,
    title: 'Curso VIP Pro',
    description: 'Especialización completa: Software, Hardware, iPhone y Glass',
    price: 249,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop',
    duration: '80 horas',
    students: 3240,
    rating: 5.0,
    lessons: 200,
    features: ['Todo del Premium', 'Mentoría personal', 'Grupo exclusivo', 'Herramientas pro'],
    badge: 'VIP',
    badgeColor: 'bg-amber-500',
    icon: Crown,
    link: '/curso-premium',
  },
  // Curso Presencial eliminado (ID 4) - Academia 100% digital
];

interface FeaturedCoursesProps {
  onAddToCart: () => void;
}

const FeaturedCourses = ({ onAddToCart }: FeaturedCoursesProps) => {
  const handleAddToCart = (course: Course) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const exists = cart.find((item: any) => item.id === course.id);
    if (exists) {
      toast.info('Este curso ya está en tu carrito');
      return;
    }
    cart.push({ id: course.id, title: course.title, price: course.price });
    localStorage.setItem('cart', JSON.stringify(cart));
    onAddToCart();
    toast.success(`${course.title} agregado al carrito`);
  };

  return (
    <section id="cursos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-cyan-400">Cursos</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Elige el curso que mejor se adapte a tus necesidades y comienza tu camino hacia el éxito profesional
          </p>
        </div>

        {/* Courses Grid - Ajustado a 3 columnas para pantallas grandes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const Icon = course.icon;
            const isExternal = course.link.startsWith('#');
            return (
              <Card 
                key={course.id}
                className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  {course.badge && (
                    <Badge className={`absolute top-3 left-3 ${course.badgeColor} text-white font-bold`}>
                      <Icon className="w-3 h-3 mr-1" />
                      {course.badge}
                    </Badge>
                  )}
                  {course.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{Math.round((1 - course.price / course.originalPrice) * 100)}%
                    </div>
                  )}
                </div>

                <CardContent className="p-5">
                  {/* Title */}
                  <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      {course.rating}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 mb-4">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div>
                      {course.originalPrice && (
                        <span className="text-slate-500 line-through text-sm mr-2">
                          ${course.originalPrice}
                        </span>
                      )}
                      <span className={`text-2xl font-bold ${course.price === 0 ? 'text-green-400' : 'text-cyan-400'}`}>
                        {course.price === 0 ? 'GRATIS' : `$${course.price}`}
                      </span>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => handleAddToCart(course)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Agregar
                    </Button>
                  </div>

                  {/* View Course Link */}
                  <div className="mt-3 pt-3 border-t border-slate-700">
                    {isExternal ? (
                      <a 
                        href={course.link}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center justify-center gap-1"
                      >
                        Ver detalles del curso
                      </a>
                    ) : (
                      <Link 
                        to={course.link}
                        className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center justify-center gap-1"
                      >
                        Ver detalles del curso
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/curso-premium">
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              Ver Todos los Cursos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;