import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import ScrollIndicator from "../components/ScrollIndicator";
import DiagnosticPanel from "../components/DiagnosticPanel";
import CircuitBackground from "../components/CircuitBackground";

const Hero = () => {
  return (
    <section className="relative py-12 px-4 overflow-hidden min-h-screen flex items-center">
      <CircuitBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Aprende Reparación Profesional de
            <span className="text-cyan-400"> Celulares</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mt-4">
            Aprende diagnóstico real de fallas electrónicas y domina la
            reparación de placas con lógica técnica.
          </p>

          <p className="text-sm text-slate-400 mt-3">
            Creado por <span className="text-cyan-400 font-semibold">Luis Gomez</span>,
            técnico en reparación de celulares con más de 15 años de experiencia.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link to="/curso-gratis" className="w-full sm:w-auto">
              <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white text-base sm:text-lg py-6 px-6">
                Empezar Curso Gratis
              </Button>
            </Link>
            <Link to="/tienda" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 text-base sm:text-lg py-6 px-6"
              >
                Ver Herramientas
              </Button>
            </Link>
          </div>

          {/* Panel horizontal centrado debajo */}
          <div className="mt-10 flex justify-center">
            <DiagnosticPanel />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;