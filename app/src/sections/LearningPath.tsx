import { GraduationCap } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen del instructor */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 shadow-lg">
            <GraduationCap className="w-24 h-24 text-cyan-400" />
          </div>
        </div>

        {/* Texto */}
        <div className="max-w-xl">

          <h2 className="text-4xl font-bold mb-8 leading-tight">
            No nací técnico… <br />
            <span className="text-cyan-400">me convertí en uno</span>
          </h2>

          <div className="space-y-5 text-slate-300 text-justify leading-relaxed">

            <p>
              Mientras muchos niños rompían juguetes sin razón, yo los abría
              para descubrir cómo funcionaban. Esa curiosidad fue mi primera
              escuela y el inicio de algo que años después se convertiría en
              mi profesión.
            </p>

            <p>
              Con el tiempo abrí un pequeño negocio en Venezuela llamado
              <strong className="text-white"> TecnoPlus Barinas</strong>.
              Vendíamos teléfonos y accesorios, pero un día tuve que reparar
              un celular sin tener conocimientos reales sobre ellos.
            </p>

            <p>
              Decidí abrirlo y estudiar lo que había dentro. Fue en ese momento
              cuando comprendí algo que cambiaría completamente mi manera de
              ver la reparación electrónica.
            </p>

            <p>
              La electrónica dentro de un teléfono es exactamente la misma que
              existe en cualquier circuito, solo que en una escala mucho más
              pequeña.
            </p>

          </div>

          <p className="text-xl text-cyan-400 font-semibold mt-8">
            “Si entiendes la electrónica, puedes reparar cualquier dispositivo.”
          </p>

          <p className="mt-6 text-slate-400">
            — Ing. Luis Gomez <br />
            Técnico en Microsoldadura & Formador Profesional
          </p>

        </div>

      </div>
    </section>
  );
};

export default InstructorSection;