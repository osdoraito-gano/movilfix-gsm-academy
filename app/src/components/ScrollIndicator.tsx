import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

      <button
        onClick={scrollDown}
        className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition"
      >

        <span className="text-xs tracking-widest mb-2 opacity-80">
          EXPLORAR
        </span>

        <ChevronDown
          size={28}
          className="animate-bounce"
        />

      </button>

    </div>
  );
};

export default ScrollIndicator;