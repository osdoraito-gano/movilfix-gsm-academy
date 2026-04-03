import { Button } from "@/components/ui/button";

const FreeCourse = () => {
  return (
    <section className="bg-slate-800 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Curso Gratuito de Diagnóstico Electrónico
        </h2>

        <p className="text-slate-300 max-w-3xl mx-auto mb-10 text-lg">
          Antes de aprender a cambiar piezas, aprende a comprender
          la electrónica que hay detrás de cada circuito.
          Descarga gratis mi guía fundamental y comienza a pensar
          como un técnico real.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Ebook Profesional</h3>
            <p className="text-slate-400">
              Fundamentos de electrónica aplicados a reparación móvil.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Diagnóstico Real</h3>
            <p className="text-slate-400">
              Aprende a interpretar voltajes, resistencias y fallas.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Sesión 1 a 1</h3>
            <p className="text-slate-400">
              Posibilidad de una charla de orientación técnica de 20 minutos.
            </p>
          </div>

        </div>

        <Button className="bg-red-500 hover:bg-red-600 text-white px-10 py-6 text-lg">
          Descargar Curso Gratuito
        </Button>

      </div>
    </section>
  );
};

export default FreeCourse;