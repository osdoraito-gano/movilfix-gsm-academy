import { BookOpen, Cpu, Lightbulb } from "lucide-react";

const MyStory = () => {
  return (
    <section className="py-24 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Por qué decidí enseñar reparación de celulares
        </h2>

        <p className="text-slate-400 mb-16 leading-relaxed">
          Hace casi 15 años reparé mi primer celular. Como muchos técnicos,
          empecé cambiando piezas sin entender realmente el origen de las
          fallas. Algunas veces funcionaba… muchas otras no.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-8">

            <BookOpen className="text-cyan-400 mx-auto mb-4" size={40} />

            <h3 className="text-white font-semibold mb-3">
              La duda
            </h3>

            <p className="text-slate-400 text-sm">
              Siempre sentí que debía existir una lógica detrás
              de cada falla electrónica. Que reparar no podía
              depender solo de cambiar piezas al azar.
            </p>

          </div>

          <div className="bg-slate-900/60 border border-cyan-500/20 rounded-xl p-8">

            <Cpu className="text-cyan-400 mx-auto mb-4" size={40} />

            <h3 className="text-white font-semibold mb-3">
              La búsqueda
            </h3>

            <p className="text-slate-400 text-sm">
              Empecé a estudiar electrónica: corriente,
              voltaje, resistencia, capacitores e inductores.
              Allí entendí que cada circuito tiene una lógica.
            </p>

          </div>

          <div className="bg-slate-900/60 border border-green-500/20 rounded-xl p-8">

            <Lightbulb className="text-green-400 mx-auto mb-4" size={40} />

            <h3 className="text-white font-semibold mb-3">
              El método
            </h3>

            <p className="text-slate-400 text-sm">
              Con el tiempo desarrollé un método de diagnóstico
              basado en comprender la electrónica real.
              Ese método es la base de MovilFix GSM Academy.
            </p>

          </div>

        </div>

        <p className="mt-16 text-cyan-400 font-semibold text-lg">
          La electrónica no se adivina. Se interpreta.
        </p>

      </div>

    </section>
  );
};

export default MyStory;