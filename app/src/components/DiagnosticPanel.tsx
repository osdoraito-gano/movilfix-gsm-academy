import { useState, useEffect } from "react";
import { Activity, Zap, Gauge } from "lucide-react";

const DiagnosticPanel = () => {
  const [voltage, setVoltage] = useState(4.12);
  const [current, setCurrent] = useState(0.85);
  const [resistance, setResistance] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setVoltage((4 + Math.random() * 0.3).toFixed(2));
      setCurrent((0.7 + Math.random() * 0.4).toFixed(2));
      setResistance((10 + Math.random() * 5).toFixed(1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 max-w-3xl mx-auto bg-slate-900/70 backdrop-blur border border-cyan-500/20 rounded-xl p-6 shadow-lg">

      <div className="grid grid-cols-3 gap-6 text-center">

        {/* Voltaje */}
        <div className="flex flex-col items-center">
          <Zap className="text-cyan-400 mb-2 animate-pulse" />
          <span className="text-xs text-slate-400">Voltaje</span>
          <span className="text-lg font-semibold text-white">
            {voltage} V
          </span>
        </div>

        {/* Corriente */}
        <div className="flex flex-col items-center">
          <Activity className="text-cyan-400 mb-2 animate-pulse" />
          <span className="text-xs text-slate-400">Corriente</span>
          <span className="text-lg font-semibold text-white">
            {current} A
          </span>
        </div>

        {/* Resistencia */}
        <div className="flex flex-col items-center">
          <Gauge className="text-cyan-400 mb-2 animate-pulse" />
          <span className="text-xs text-slate-400">Resistencia</span>
          <span className="text-lg font-semibold text-white">
            {resistance} Ω
          </span>
        </div>

      </div>

      <div className="mt-6 text-center text-xs text-cyan-400">
        Diagnóstico electrónico en tiempo real...
      </div>

    </div>
  );
};

export default DiagnosticPanel;