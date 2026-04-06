import { motion } from "framer-motion";

const nodes = [
  { x: "10%", y: "20%" },
  { x: "30%", y: "40%" },
  { x: "60%", y: "25%" },
  { x: "80%", y: "60%" },
  { x: "50%", y: "75%" },
];

const CircuitBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Líneas del circuito */}
      <svg className="w-full h-full opacity-20">

        <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#22d3ee" strokeWidth="2"/>
        <line x1="30%" y1="40%" x2="60%" y2="25%" stroke="#22d3ee" strokeWidth="2"/>
        <line x1="60%" y1="25%" x2="80%" y2="60%" stroke="#22d3ee" strokeWidth="2"/>
        <line x1="80%" y1="60%" x2="50%" y2="75%" stroke="#22d3ee" strokeWidth="2"/>

      </svg>

      {/* Nodos electrónicos */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400 rounded-full"
          style={{ left: node.x, top: node.y }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Pulsos de energía */}
      {nodes.map((node, i) => (
        <motion.div
          key={"pulse-" + i}
          className="absolute w-6 h-6 border border-cyan-400 rounded-full"
          style={{ left: node.x, top: node.y }}
          animate={{
            scale: [1, 3],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}

    </div>
  );
};

export default CircuitBackground;