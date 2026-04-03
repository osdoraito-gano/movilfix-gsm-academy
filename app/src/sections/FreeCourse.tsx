import { Button } from "@/components/ui/button";
import { BookOpen, Cpu, Zap, Wrench } from "lucide-react";

const FreeCourse = () => {
  return (
    <section className="bg-slate-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Titulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Curso Gratuito de Reparación de Celulares
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Comienza desde cero aprendiendo los fundamentos de la electrónica
            aplicada a la reparación móvil. Entiende cómo funcionan los
            circuitos antes de comenzar a reparar.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
            <BookOpen className="w-10 h-10 text-cyan-400 mx-auto mb-4"/>
            <h3 className="font-semibold mb-2">Mentalidad del Técnico</h3>
            <p className="text-slate-400 text-sm">
              Aprende la diferencia entre cambiar piezas y diagnosticar fallas.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
            <Zap className="w-10 h-10 text-cyan-400 mx-auto mb-4"/>
            <h3 className="font-semibold mb-2">Corriente y Voltaje</h3>
            <p className="text-slate-400 text-sm">
              Comprende cómo fluye la energía dentro de un circuito.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
            <Cpu className="w-10 h-10 text-cyan-400 mx-auto mb-4"/>
            <h3 className="font-semibold mb-2">Componentes Electrónicos</h3>
            <p className="text-slate-400 text-sm">
              Identifica resistencias, capacitores y su función real.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
            <Wrench className="w-10 h-10 text-cyan-400 mx-auto mb-4"/>
            <h3 className="font-semibold mb-2">Uso del Multímetro</h3>
            <p className="text-slate-400 text-sm">
              Aprende a medir correctamente dentro de un circuito.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-lg font-semibold">
            Acceder al Curso Gratis
          </Button>
        </div>

      </div>

    </section>
  );
};

export default FreeCourse;