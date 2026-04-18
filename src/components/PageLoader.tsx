import { useEffect, useState } from "react";
import logo from "@/assets/AfriPot_logo2.png";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-fade-out">
      <div className="text-center">
        <div className="relative mb-8">
          {/* White gradient glow behind logo */}
          <div className="absolute inset-0 bg-gradient-radial from-white via-white/60 to-transparent blur-3xl scale-[2]" />
          <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl scale-150" />
          
          {/* Logo */}
          <img 
            src={logo} 
            alt="AfriPot" 
            className="w-40 h-40 object-contain relative z-10 animate-pulse-slow"
          />
        </div>
        
        <h2 className="block text-[clamp(1rem,2.5vw,2rem)] font-indie font-normal tracking-tight animate-fade-up">
          <span className="text-green-400">Afri</span><span className="text-white">Pot</span>
        </h2>
        <p className="font-playful text-sm text-white/70 animate-fade-up" style={{ animationDelay: "200ms" }}>
          Cuisine
        </p>
        
        {/* Loading dots */}
        <div className="mt-6 flex gap-1.5 justify-center">
          <span className="w-2.5 h-2.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2.5 h-2.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2.5 h-2.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}
