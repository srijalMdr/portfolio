import { useEffect, useState } from "react";

function LoadingScreen({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<Hello & Namaste />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 z-50 bg-[#fffbf5] text-[#0a013b] flex flex-col items-center justify-center px-6">
      <div className="mb-6 font-[Oswald] font-bold uppercase tracking-tight text-4xl md:text-6xl text-center">
        {text}
        <span className="animate-blink ml-1 text-[#7350ff]">|</span>
      </div>
      <div className="w-[200px] h-[3px] bg-[#e6e0f7] rounded-full relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#7350ff] rounded-full animate-loading-bar"></div>
      </div>
      <p className="mt-6 font-[Space_Mono] text-[11px] uppercase tracking-[0.15em] text-[#726f66]">
        // Loading portfolio
      </p>
    </div>
  );
}

export { LoadingScreen };
