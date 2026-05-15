import { Wrench, Smartphone, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import ScrollIndicator from "../components/ScrollIndicator";
import DiagnosticPanel from "../components/DiagnosticPanel";
import OscilloscopePanel from "../components/OscilloscopePanel";
import CircuitBackground from "../components/CircuitBackground";

const Hero = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto flex gap-10 items-start">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block">
          <DiagnosticPanel />
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Aprende Reparación Profesional de
            <span className="text-cyan-400"> Celulares</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Aprende diagnóstico real de fallas electrónicas y domina la
            reparación de placas con lógica técnica.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 mt-3 sm:mt-4">
            Creado por <span className="text-cyan-400 font-semibold">Luis Gomez</span>,
            técnico en reparación de celulares con más de 15 años de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
            <Link to="/curso-gratis" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-400 text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
                Empezar Curso Gratis
              </Button>
            </Link>
            <Link to="/tienda" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
              >
                Ver Herramientas
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 sm:mt-14 text-slate-300">
            <div className="flex flex-col items-center">
              <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2" />
              <span className="text-xs sm:text-sm text-center">Diagnóstico Profesional</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2" />
              <span className="text-xs sm:text-sm text-center">Formación Técnica</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2" />
              <span className="text-xs sm:text-sm text-center">15 Años de Experiencia</span>
            </div>
          </div>

          <div className="mt-8 sm:mt-10">
            <OscilloscopePanel />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;