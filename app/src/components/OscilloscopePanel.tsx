import { motion } from "framer-motion";

const OscilloscopePanel = () => {

  const path =
    "M0 70 L10 70 L10 30 L30 30 L30 70 L50 70 L50 30 L70 30 L70 70 L90 70 L90 30 L100 30";

  return (
    <div className="mt-12 max-w-xl mx-auto bg-slate-900/70 border border-cyan-500/20 rounded-lg p-4 backdrop-blur shadow-lg">

      <div className="text-xs text-cyan-400 mb-2 text-center">
        Señal digital monitoreada
      </div>

      <svg viewBox="0 0 100 100" className="w-full h-24">

        <motion.path
          d={path}
          fill="transparent"
          stroke="#22d3ee"
          strokeWidth="2"
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
  );
};

export default OscilloscopePanel;