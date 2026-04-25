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
        <div className="relative">
          {/* White gradient glow behind logo */}
          <div className="absolute inset-0 bg-gradient-radial from-white via-white/60 to-transparent blur-3xl scale-[2]" />
          <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl scale-150" />
          
          {/* Logo only */}
          <img 
            src={logo} 
            alt="AfriPot" 
            className="w-40 h-40 object-contain relative z-10 animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  );
}
