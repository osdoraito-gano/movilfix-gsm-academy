import { GraduationCap } from "lucide-react";

const InstructorSection = () => {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen del instructor */}
        <div className="flex justify-center">
          <div className="w-80 h-80 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
            <GraduationCap className="w-24 h-24 text-cyan-400" />
          </div>
        </div>

        {/* Texto */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            No nací técnico… me hice uno
          </h2>

          <p className="text-slate-300 mb-4">
            Mientras muchos niños rompían juguetes sin razón, yo los abría para
            descubrir cómo funcionaban. Esa curiosidad fue mi primera escuela.
          </p>

          <p className="text-slate-300 mb-4">
            Con el tiempo abrí un pequeño negocio en Venezuela llamado
            <strong> TecnoPlus Barinas</strong>. Vendíamos teléfonos y accesorios,
            pero un día tuve que reparar un celular sin saber nada sobre ellos.
          </p>

          <p className="text-slate-300 mb-4">
            Lo abrí… y comprendí algo que cambió mi vida:
            la electrónica dentro de un teléfono es la misma que existe en
            cualquier circuito, solo que en menor escala.
          </p>

          <p className="text-slate-300 mb-6">
            Desde entonces comprendí una verdad fundamental:
          </p>

          <p className="text-xl text-cyan-400 font-semibold">
            “Si entiendes la electrónica, puedes reparar cualquier dispositivo.”
          </p>

          <p className="mt-6 text-slate-400">
            — Ing. Luis Gomez  
            Técnico en Microsoldadura & Formador Profesional
          </p>

        </div>

      </div>
    </section>
  );
};

export default InstructorSection;