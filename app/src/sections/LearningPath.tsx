import { Cpu, Wrench, Activity, Zap } from "lucide-react";

const LearningPath = () => {
  const levels = [
    {
      title: "Nivel 1 — Fundamentos",
      description:
        "Conceptos básicos de electrónica, componentes y cómo funciona una placa de celular.",
      icon: Cpu,
    },
    {
      title: "Nivel 2 — Instrumentos",
      description:
        "Uso correcto del multímetro, fuente de poder y herramientas esenciales.",
      icon: Activity,
    },
    {
      title: "Nivel 3 — Diagnóstico",
      description:
        "Cómo detectar fallas en placas, consumo en corto y análisis de circuitos.",
      icon: Zap,
    },
    {
      title: "Nivel 4 — Reparación",
      description:
        "Microsoldadura, cambio de componentes y soluciones reales en placas.",
      icon: Wrench,
    },
  ];

  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-white font-bold text-center mb-14">
          Ruta de aprendizaje MovilFix
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {levels.map((level, index) => {
            const Icon = level.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-red-500 transition"
              >
                <Icon className="w-10 h-10 text-red-500 mb-4" />

                <h3 className="text-white font-semibold text-lg mb-2">
                  {level.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {level.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default LearningPath;