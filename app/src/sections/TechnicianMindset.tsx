import { Brain, Search, Wrench } from "lucide-react";

const TechnicianMindset = () => {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Cómo piensa un técnico real
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-16 text-lg">
          La mayoría aprende a cambiar piezas.  
          Un técnico profesional aprende a interpretar la electrónica.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-slate-800 p-8 rounded-xl">
            <Brain className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Entender
            </h3>
            <p className="text-slate-400">
              Comprender los principios electrónicos que hacen funcionar cada circuito.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl">
            <Search className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Medir
            </h3>
            <p className="text-slate-400">
              Utilizar herramientas como el multímetro para interpretar señales reales.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl">
            <Wrench className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-3">
              Resolver
            </h3>
            <p className="text-slate-400">
              Tomar decisiones basadas en diagnóstico, no en ensayo y error.
            </p>
          </div>

        </div>

        <div className="mt-16">
          <p className="text-xl italic text-yellow-400">
            “La electrónica no se adivina. Se interpreta.”
          </p>
          <p className="text-slate-400 mt-2">
            — Ing. Luis Gomez
          </p>
        </div>

      </div>
    </section>
  );
};

export default TechnicianMindset;