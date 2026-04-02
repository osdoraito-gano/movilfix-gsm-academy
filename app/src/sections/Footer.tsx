import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Gracias por suscribirte!');
  };

  const footerLinks = {
    cursos: [
      { label: 'Curso Gratis', href: '/curso-gratis' },
      { label: 'Curso Premium', href: '/curso-premium' },
      { label: 'Curso VIP', href: '/curso-premium' },
      { label: 'Curso Presencial', href: '#presencial' },
    ],
    empresa: [
      { label: 'Sobre Nosotros', href: '#nosotros' },
      { label: 'Instructores', href: '#instructores' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Blog', href: '#blog' },
    ],
    soporte: [
      { label: 'Centro de Ayuda', href: '#ayuda' },
      { label: 'Preguntas Frecuentes', href: '#faq' },
      { label: 'Contacto', href: '#contacto' },
      { label: 'Términos y Condiciones', href: '#terminos' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">MovilFix GSM Academy</h3>
                <p className="text-cyan-400 text-sm">Cursos Online</p>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Formando técnicos profesionales en reparación de dispositivos móviles. 
              Aprende con los mejores instructores y conviértete en un experto.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@academypro.com" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                gsmmovilfix@gmail.com
              </a>
              <a href="tel:+521234567890" className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                +57 324 369 5987
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5" />
                Cajamarca-Tolima Colombia
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Cursos</h4>
            <ul className="space-y-3">
              {footerLinks.cursos.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">
                Suscríbete a nuestro newsletter
              </h4>
              <p className="text-slate-400">
                Recibe las últimas novedades y ofertas especiales
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
              <Input 
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 w-full md:w-72"
                required
              />
              <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Send className="w-4 h-4 mr-2" />
                Suscribir
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 MovilFix GSM Academy. Todos los derechos reservados.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-sky-500 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
