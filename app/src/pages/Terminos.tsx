import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Terminos = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Términos y Condiciones</h1>
        <div className="prose prose-invert">
          <p>Última actualización: Abril 2026</p>
          <h2>1. Aceptación de los términos</h2>
          <p>Al acceder a MovilFix GSM Academy, aceptas estos términos.</p>
          <h2>2. Propiedad intelectual</h2>
          <p>Todo el contenido de los cursos es propiedad de MovilFix GSM Academy.</p>
          <h2>3. Pagos y reembolsos</h2>
          <p>Los cursos digitales no tienen reembolso una vez accedido al contenido.</p>
          <h2>4. Modificaciones</h2>
          <p>Nos reservamos el derecho de actualizar estos términos.</p>
        </div>
        <div className="mt-8 text-center">
          <Link to="/"><Button variant="outline">Volver al inicio</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default Terminos;