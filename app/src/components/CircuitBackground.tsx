import { motion } from "framer-motion";

const traces = [
  // Pistas con curvas (Bezier) tipo PCB
  "M5 40 C15 40, 20 25, 30 25 S45 40, 55 40",
  "M55 40 C65 40, 70 55, 80 55 S90 40, 95 40",
  "M20 70 C30 70, 35 55, 45 55 S60 70, 70 70",
  "M70 70 C80 70, 85 55, 95 55",
];

const pads = [
  { x: "30%", y: "25%" },
  { x: "55%", y: "40%" },
  { x: "80%", y: "55%" },
  { x: "45%", y: "55%" },
  { x: "70%", y: "70%" },
];

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* GRID técnico muy sutil */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg,#22d3ee 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* PISTAS PCB */}
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full opacity-40"
        preserveAspectRatio="none"
      >
        {traces.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="0.6"
          />
        ))}
      </svg>

      {/* PADS (nodos) */}
      {pads.map((pad, i) => (
        <motion.div
          key={i}
          className="absolute w-2.5 h-2.5 bg-cyan-400 rounded-full shadow shadow-cyan-400/50"
          style={{ left: pad.x, top: pad.y }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.35,
          }}
        />
      ))}

      {/* SEÑALES MOVIÉNDOSE POR LAS PISTAS */}
      {pads.map((pad, i) => (
        <motion.div
          key={"signal-" + i}
          className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full shadow shadow-cyan-300/50"
          style={{ left: pad.x, top: pad.y }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

    </div>
  );
};

export default CircuitBackground;