import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-28">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-6">
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
            Formación Profesional en Reparación de Celulares
          </span>
        </div>

        {/* Titulo principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Aprende Reparación de Celulares
          <span className="block text-cyan-400">
            Desde la Electrónica Real
          </span>
        </h1>

        {/* Subtitulo */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Domina diagnóstico electrónico, uso del multímetro y reparación de
          placas paso a paso. Aprende a interpretar circuitos y conviértete
          en un técnico capaz de resolver fallas reales.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-5 text-lg font-semibold">
            Empezar Curso Gratis
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-5 text-lg"
          >
            Ver Ruta de Aprendizaje
          </Button>

        </div>

        {/* Frase del autor */}
        <p className="mt-10 text-slate-500 italic">
          “La electrónica no se adivina. Se interpreta.” — Ing. Luis Gomez
        </p>

      </div>

    </section>
  );
};

export default HeroSlider;