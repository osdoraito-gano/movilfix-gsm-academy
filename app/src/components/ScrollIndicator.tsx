import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button
        onClick={scrollDown}
        className="flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition"
      >
        <span className="text-xs mb-1">Descubre más</span>
        <ChevronDown size={30} />
      </button>
    </div>
  );
};

export default ScrollIndicator;