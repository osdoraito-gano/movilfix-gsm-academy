import { Button } from "@/components/ui/button";

const HeroSlider = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="mb-6">
          <span className="bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm">
            Curso Profesional de Reparación de Celulares
          </span>
        </div>

        {/* Titulo principal */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Aprende reparación de celulares desde cero
          <br />
          y conviértelo en un negocio rentable
        </h1>

        {/* Subtitulo */}
        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
          Domina diagnóstico electrónico, uso del multímetro y reparación
          de placas paso a paso. Aprende las habilidades que utilizan los
          técnicos profesionales para reparar smartphones.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 text-lg">
            Ver Curso de Hardware
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-10 py-5 text-lg"
          >
            Ver Contenido del Curso
          </Button>

        </div>

      </div>
    </section>
  );
};

export default HeroSlider;