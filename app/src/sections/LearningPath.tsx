import { Cpu, Wrench, Zap, Microscope } from "lucide-react";

const steps = [
  {
    icon: Cpu,
    title: "Fundamentos de Electrónica",
    description:
      "Comprende corriente, voltaje, resistencia y capacitancia aplicados a la reparación móvil.",
  },
  {
    icon: Zap,
    title: "Diagnóstico Electrónico",
    description:
      "Aprende a medir correctamente con el multímetro e interpretar señales dentro del circuito.",
  },
  {
    icon: Wrench,
    title: "Reparación de Placas",
    description:
      "Identifica cortos, componentes dañados y realiza reparaciones paso a paso.",
  },
  {
    icon: Microscope,
    title: "Microsoldadura Profesional",
    description:
      "Domina técnicas avanzadas para reemplazar componentes y recuperar placas complejas.",
  },
];

const LearningPath = () => {
  return (
    <section className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Titulo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            La Ruta del Técnico MovilFix
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Un sistema de aprendizaje diseñado para llevarte desde los
            fundamentos de la electrónica hasta la reparación profesional
            de placas de teléfonos móviles.
          </p>
        </div>

        {/* Pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 p-8 rounded-xl border border-slate-800 hover:border-cyan-500 transition"
              >
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-cyan-400" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400">
                  {step.description}
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