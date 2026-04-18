import { useEffect, useRef, useState } from "react";

export function Marquee({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scroll offset relative to when element enters viewport
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        setScrollOffset(scrollProgress * 50); // Reduced from 100 to 50 for slower speed
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create enough items for seamless loop
  const loop = [...items, ...items, ...items, ...items];
  
  // Split items into two lines
  const line1Items = loop.filter((_, i) => i % 2 === 0);
  const line2Items = loop.filter((_, i) => i % 2 === 1);

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden py-16 mt-32"
    >
      {/* Line 1 - moves right on scroll down */}
      <div 
        className="flex whitespace-nowrap mb-12"
        style={{
          transform: `translateX(${scrollOffset * 0.8}px)`, // Reduced multiplier for slower movement
          transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" // Smoother easing
        }}
      >
        {line1Items.map((item, i) => (
          <span 
            key={`line1-${i}`} 
            className="font-sekuya text-5xl md:text-7xl lg:text-8xl px-12 flex items-center gap-8 text-outline-light"
          >
            {item}
            <span className="inline-flex items-center justify-center w-3 h-3 rounded-full border-2 border-gold/25"></span>
          </span>
        ))}
      </div>

      {/* Line 2 - moves left on scroll down */}
      <div 
        className="flex whitespace-nowrap"
        style={{
          transform: `translateX(-${scrollOffset * 0.8}px)`, // Reduced multiplier for slower movement
          transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" // Smoother easing
        }}
      >
        {line2Items.map((item, i) => (
          <span 
            key={`line2-${i}`} 
            className="font-sekuya text-5xl md:text-7xl lg:text-8xl px-12 flex items-center gap-8 text-outline-light"
          >
            {item}
            <span className="inline-flex items-center justify-center w-3 h-3 rounded-full border-2 border-gold/25"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

