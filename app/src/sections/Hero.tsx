import { Wrench, Smartphone, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import ScrollIndicator from "../components/ScrollIndicator";

const Hero = () => {
  return (
    <section className="relative py-28 px-6 text-center">

      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Aprende Reparación Profesional de
          <span className="text-cyan-400"> Celulares</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Aprende los fundamentos reales de la electrónica aplicada a la
          reparación de celulares. Comprende las fallas, domina el diagnóstico
          y deja de adivinar en el proceso de reparación.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link to="/curso-gratis">
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-white text-lg px-8 py-6">
              Empezar Curso Gratis
            </Button>
          </Link>

          <Link to="/tienda">
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-lg px-8 py-6"
            >
              Ver Herramientas
            </Button>
          </Link>

        </div>

        {/* Indicadores */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-slate-300">

          <div className="flex flex-col items-center">
            <Smartphone className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-sm">Diagnóstico Profesional</span>
          </div>

          <div className="flex flex-col items-center">
            <GraduationCap className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-sm">Formación Técnica</span>
          </div>

          <div className="flex flex-col items-center">
            <Wrench className="w-8 h-8 text-cyan-400 mb-2" />
            <span className="text-sm">15 Años de Experiencia</span>
          </div>

        </div>

      </div>

      {/* Indicador de scroll */}
      <ScrollIndicator />

    </section>
  );
};

export default Hero;