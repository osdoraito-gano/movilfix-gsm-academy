import { useState, useEffect } from "react";

const DiagnosticPanel = () => {

  const [voltage, setVoltage] = useState(4.12);
  const [current, setCurrent] = useState(0.85);
  const [resistance, setResistance] = useState(12.4);

  useEffect(() => {

    const interval = setInterval(() => {

      setVoltage(Number((4 + Math.random() * 0.3).toFixed(2)));
      setCurrent(Number((0.7 + Math.random() * 0.4).toFixed(2)));
      setResistance(Number((10 + Math.random() * 5).toFixed(1)));

    }, 1500);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-slate-900/90 border border-cyan-400/30 rounded-xl p-4 backdrop-blur shadow-lg w-28">

      <div className="text-xs text-cyan-400 text-center mb-3 tracking-widest">
        MULTÍMETRO
      </div>

      <div className="space-y-5 text-center">

        <div>
          <div className="text-[10px] text-slate-400">Voltaje</div>
          <div className="text-xl text-cyan-400 font-mono">{voltage}V</div>
        </div>

        <div>
          <div className="text-[10px] text-slate-400">Corriente</div>
          <div className="text-xl text-cyan-400 font-mono">{current}A</div>
        </div>

        <div>
          <div className="text-[10px] text-slate-400">Resistencia</div>
          <div className="text-xl text-cyan-400 font-mono">{resistance}Ω</div>
        </div>

      </div>

    </div>

  );
};

export default DiagnosticPanel;