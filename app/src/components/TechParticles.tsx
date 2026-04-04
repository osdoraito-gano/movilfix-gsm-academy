import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const TechParticles = () => {

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 40
          },
          color: {
            value: "#06b6d4"
          },
          links: {
            enable: true,
            color: "#06b6d4",
            distance: 150,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          size: {
            value: 2
          },
          opacity: {
            value: 0.5
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default TechParticles;