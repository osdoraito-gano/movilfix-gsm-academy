import { Activity, Zap, Gauge } from "lucide-react";

const DiagnosticPanel = () => {
  return (
    <div className="mt-16 max-w-3xl mx-auto bg-slate-900/70 backdrop-blur border border-cyan-500/20 rounded-xl p-6 shadow-lg">

      <div className="grid grid-cols-3 gap-6 text-center">

        {/* Voltaje */}
        <div className="flex flex-col items-center">
          <Zap className="text-cyan-400 mb-2" />
          <span className="text-xs text-slate-400">Voltaje</span>
          <span className="text-lg font-semibold text-white">4.12 V</span>
        </div>

        {/* Corriente */}
        <div className="flex flex-col items-center">
          <Activity className="text-cyan-400 mb-2" />
          <span className="text-xs text-slate-400">Corriente</span>
          <span className="text-lg font-semibold text-white">0.85 A</span>
        </div>

        {/* Resistencia */}
        <div className="flex flex-col items-center">
          <Gauge className="text-cyan-400 mb-2" />
          <span className="text-xs text-slate-400">Resistencia</span>
          <span className="text-lg font-semibold text-white">12.4 Ω</span>
        </div>

      </div>

      <div className="mt-6 text-center text-xs text-cyan-400">
        Diagnóstico electrónico en progreso...
      </div>

    </div>
  );
};

export default DiagnosticPanel;