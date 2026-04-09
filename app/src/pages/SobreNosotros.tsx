import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SobreNosotros = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Sobre Nosotros</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Misión</h2>
          <p className="text-slate-300 leading-relaxed">
            Formar técnicos profesionales en reparación de dispositivos móviles con bases sólidas en electrónica, 
            diagnóstico y microsoldadura, transformando a los estudiantes en verdaderos expertos capaces de interpretar 
            y solucionar fallas, no solo cambiar piezas.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Visión</h2>
          <p className="text-slate-300 leading-relaxed">
            Ser la academia de reparación móvil más influyente del mundo hispano, referente en formación técnica profesional, 
            impulsando una nueva generación de técnicos que entiendan la electrónica desde sus fundamentos.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Filosofía</h2>
          <p className="text-slate-300 leading-relaxed italic">
            “La electrónica no se adivina. Se interpreta.” – Ing. Luis Gomez
          </p>
          <p className="text-slate-300 leading-relaxed mt-2">
            Creemos que un técnico real debe comprender qué hace cada componente, cómo medirlo y cómo diagnosticar 
            basándose en evidencias, no en suposiciones. Por eso nuestro método comienza desde los fundamentos hasta 
            niveles avanzados de reparación de placas y software.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-3">Nuestro Instructor</h2>
          <p className="text-slate-300 leading-relaxed">
            El <strong>Ing. Luis Gomez</strong>, nacido en Venezuela y actualmente en Colombia, ha dedicado su vida a la 
            electrónica y la reparación de dispositivos móviles. Con una filosofía basada en la interpretación de circuitos, 
            ha formado a cientos de técnicos que hoy destacan en la industria.
          </p>
        </section>

        <div className="text-center mt-12">
          <Link to="/">
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;