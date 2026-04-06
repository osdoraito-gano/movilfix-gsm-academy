import { motion } from "framer-motion";

const OscilloscopePanel = () => {

  const path =
    "M0 70 L10 70 L10 30 L25 30 L25 70 L40 70 L40 30 L55 30 L55 70 L70 70 L70 30 L85 30 L85 70 L100 70";

  return (
    <div className="mt-16 max-w-2xl mx-auto bg-slate-900/80 border border-cyan-400/30 rounded-xl p-2 shadow-xl backdrop-blur">

      {/* encabezado */}
      <div className="flex justify-between text-xs text-slate-400 mb-3">
        <span>OSCILOSCOPIO</span>
        <span>Señal digital</span>
      </div>

      <div className="relative">

        {/* grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg,#22d3ee 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />

        <svg viewBox="0 0 100 100" className="w-full h-24">

          <motion.path
            d={path}
            fill="transparent"
            stroke="#057f9288"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

        </svg>

      </div>

      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>5ms</span>
        <span>2V/div</span>
      </div>

    </div>
  );
};

export default OscilloscopePanel;