import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Titulo principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          MovilFix GSM Academy
        </h1>

        {/* Subtitulo */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Aprende reparación de celulares desde cero y conviértelo en una
          habilidad rentable. Domina diagnóstico electrónico, uso del
          multímetro y reparación de placas paso a paso.
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-4">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg">
            Comenzar Curso
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
          >
            Ver Programa
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;