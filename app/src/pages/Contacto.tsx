import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <Mail className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-xl font-semibold">Email</h3>
            <a href="mailto:gsmmovilfix@gmail.com" className="text-slate-300 hover:text-cyan-400">gsmmovilfix@gmail.com</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <Phone className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-xl font-semibold">Teléfono</h3>
            <a href="tel:+573243695987" className="text-slate-300 hover:text-cyan-400">+57 324 369 5987</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg md:col-span-2">
            <MapPin className="w-8 h-8 text-cyan-400 mb-2" />
            <h3 className="text-xl font-semibold">Dirección</h3>
            <p className="text-slate-300">Cajamarca-Tolima, Colombia</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/"><Button variant="outline">Volver al inicio</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default Contacto;