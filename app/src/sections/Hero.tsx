import { Wrench, Smartphone, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import ScrollIndicator from "../components/ScrollIndicator";
import DiagnosticPanel from "../components/DiagnosticPanel";
import OscilloscopePanel from "../components/OscilloscopePanel";
import CircuitBackground from "../components/CircuitBackground";

const Hero = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden min-h-screen flex items-center">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Panel de diagnóstico - solo visible en desktop (pantallas grandes) */}
        <div className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2">
          <DiagnosticPanel />
        </div>

        {/* Contenido principal */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Aprende Reparación Profesional de
            <span className="text-cyan-400"> Celulares</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mt-4">
            Aprende diagnóstico real de fallas electrónicas y domina la
            reparación de placas con lógica técnica.
          </p>

          <p className="text-xs text-slate-400 mt-2">
            Creado por <span className="text-cyan-400 font-semibold">Luis Gomez</span>,
            técnico en reparación de celulares con más de 15 años de experiencia.
          </p>

          {/* Botones - apilados en móvil */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6">
            <Link to="/curso-gratis" className="w-full sm:w-auto">
              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm sm:text-base py-5 px-4">
                Empezar Curso Gratis
              </Button>
            </Link>
            <Link to="/tienda" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-sm sm:text-base py-5 px-4"
              >
                Ver Herramientas
              </Button>
            </Link>
          </div>

          {/* Grid de características - 1 columna en móvil, 3 en desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 text-slate-300">
            <div className="flex flex-col items-center">
              <Smartphone className="w-6 h-6 text-cyan-400 mb-1" />
              <span className="text-xs sm:text-sm">Diagnóstico Profesional</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-6 h-6 text-cyan-400 mb-1" />
              <span className="text-xs sm:text-sm">Formación Técnica</span>
            </div>
            <div className="flex flex-col items-center">
              <Wrench className="w-6 h-6 text-cyan-400 mb-1" />
              <span className="text-xs sm:text-sm">15 Años de Experiencia</span>
            </div>
          </div>

          {/* Osciloscopio - solo visible en tablet y desktop */}
          <div className="hidden md:block mt-8">
            <OscilloscopePanel />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;