import { XCircle, CheckCircle } from "lucide-react";

const IndustryProblem = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Por qué muchos técnicos no logran diagnosticar fallas?
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-16">
          La mayoría de técnicos aprende a reparar celulares cambiando
          piezas al azar. Sin comprender realmente cómo funciona el
          circuito electrónico.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Problemas */}
          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8">

            <h3 className="text-red-400 font-semibold mb-6">
              Método tradicional
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li className="flex gap-3 items-start">
                <XCircle className="text-red-400" />
                Cambiar piezas sin diagnóstico real
              </li>

              <li className="flex gap-3 items-start">
                <XCircle className="text-red-400" />
                No comprender el circuito electrónico
              </li>

              <li className="flex gap-3 items-start">
                <XCircle className="text-red-400" />
                Reparaciones basadas en prueba y error
              </li>

            </ul>

          </div>

          {/* Solución */}
          <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-8">

            <h3 className="text-cyan-400 font-semibold mb-6">
              Método MovilFix
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li className="flex gap-3 items-start">
                <CheckCircle className="text-cyan-400" />
                Comprender corriente, voltaje y resistencia
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle className="text-cyan-400" />
                Interpretar circuitos electrónicos
              </li>

              <li className="flex gap-3 items-start">
                <CheckCircle className="text-cyan-400" />
                Diagnóstico profesional paso a paso
              </li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
};

export default IndustryProblem;