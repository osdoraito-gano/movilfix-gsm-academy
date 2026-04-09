import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CentroAyuda = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Centro de Ayuda</h1>
        <p className="text-slate-400 mb-8">Preguntas frecuentes y guías rápidas. Próximamente más contenido.</p>
        <div className="space-y-4">
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400">¿Cómo accedo a mis cursos?</h3>
            <p className="text-slate-300">Regístrate o inicia sesión con tu cuenta y desde tu perfil verás tus cursos activos.</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400">¿Los certificados son válidos?</h3>
            <p className="text-slate-300">Sí, emitimos certificados digitales con código de verificación.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/"><Button variant="outline">Volver al inicio</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default CentroAyuda;