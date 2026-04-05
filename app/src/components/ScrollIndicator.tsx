import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
      <button
        onClick={scrollDown}
        className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition duration-300"
      >
        <span className="text-xs tracking-wide uppercase mb-1 opacity-80">
          Descubre más
        </span>

        <ChevronDown size={28} />
      </button>
    </div>
  );
};

export default ScrollIndicator;