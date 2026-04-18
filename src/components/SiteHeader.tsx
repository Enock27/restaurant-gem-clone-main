import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/AfriPot_logo2.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 bg-transparent">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        <Link to="/" className="leading-none relative">
          <div className="absolute -inset-4 bg-white/40 rounded-2xl blur-2xl -z-10" />
          <img src={logo} alt="Restaurant logo" className="h-28 md:h-40 w-auto object-contain relative z-10" />
        </Link>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 text-foreground hover:text-gold transition-colors"
        >
          <span className="text-xs tracking-[0.3em] uppercase">Menu</span>
          {open ? <X size={22} /> : (
            <span className="flex flex-col gap-[5px]">
              <span className="block w-6 h-px bg-current" />
              <span className="block w-6 h-px bg-current" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border">
          <nav className="mx-auto max-w-[1600px] flex flex-col px-6 md:px-12 py-8 gap-5 text-sm tracking-[0.25em] uppercase">
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Home</Link>
            <Link to="/menu" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Menu</Link>
            <Link to="/rooms" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Rooms</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Contact</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-gold mt-2">Reserve a table →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
