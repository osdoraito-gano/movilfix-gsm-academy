import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (

    <div className="absolute bottom-10 right-8 flex flex-col items-center">

      <button
        onClick={scrollDown}
        className="group flex flex-col items-center text-cyan-400 hover:text-cyan-300 transition"
      >

        <span className="text-xs tracking-widest mb-2 opacity-80 group-hover:opacity-100">
          SCROLL
        </span>

        <div className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center relative">

          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>

        </div>

        <ChevronDown
          size={20}
          className="mt-2 animate-bounce"
        />

      </button>

    </div>

  );

};

export default ScrollIndicator;