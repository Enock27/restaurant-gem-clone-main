import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="font-playful text-4xl text-gold mb-4">AfriPot</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Where tradition meets taste. A culinary experience celebrating African heritage.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Visit</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ridderplein 49<br />
              5421 CV Gemert<br />
              The Netherlands
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Hours</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wed – Sat<br />
              Lunch 12:00 – 14:00<br />
              Dinner 18:30 – 21:00
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/menu" className="text-muted-foreground hover:text-gold transition-colors">Menu</Link></li>
              <li><Link to="/rooms" className="text-muted-foreground hover:text-gold transition-colors">Rooms</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} <span className="font-playful">AfriPot</span> Restaurant. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="text-gold">✦✦</span> Two Michelin Stars
          </p>
        </div>
      </div>
    </footer>
  );
}
