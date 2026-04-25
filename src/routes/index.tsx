import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Marquee } from "@/components/Marquee";
import { PageLoader } from "@/components/PageLoader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import interiorStairs from "@/assets/interior-stairs.jpg";
import dishPlate from "@/assets/dish-plate.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import dishCaviar from "@/assets/dish-caviar.jpg";
import dishRendang from "@/assets/dish-rendang.jpg";
import dishLobster from "@/assets/dish-lobster.jpg";
import suiteGarden from "@/assets/suite-garden.jpg";
import suiteTower from "@/assets/suite-tower.jpg";
import logo from "@/assets/AfriPot_logo2.png";
import vid1 from "@/assets/vid1.mp4";
import vid3 from "@/assets/vid3.mp4";
import vid4 from "@/assets/vid4.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

function Stars() {
  return (
    <div className="flex items-center gap-3 text-gold text-3xl">
      <span>✦</span><span>✦</span>
    </div>
  );
}

function Index() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [vid1, vid3, vid4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageLoader />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video carousel with parallax */}
        <div className="absolute inset-0">
          {videos.map((video, index) => (
            <video
              key={index}
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out ${
                index === currentVideo
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                transform: index === currentVideo ? "scale(1)" : "scale(1.1)",
              }}
            />
          ))}
        </div>

        {/* Dark overlay: transparent left → near-black right */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 40%, rgba(21,21,21,0.92) 65%, rgba(21,21,21,0.97) 100%)" }} />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 md:px-12 py-8 max-w-[1600px] mx-auto">

          {/* Bottom-right content block */}
          <div className="flex-1 flex items-center justify-end">
            <div className="w-full max-w-[480px] animate-fade-up">
              <h1 className="leading-[1.1]">
                <span className="block text-[clamp(2.5rem,6vw,5rem)] text-white font-serif font-normal tracking-tight">
                  Restaurant
                </span>
                <span className="block text-[clamp(1rem,3vw,2.5rem)] font-indie font-bold tracking-tight mt-2">
                  <span className="text-green-400">Afri</span><span className="text-white">Pot</span>
                  <span className="text-white ml-3">Cuisine</span>
                </span>
              </h1>

              <p className="mt-8 text-sm md:text-base text-white/80 leading-relaxed max-w-[340px]">
                Where tradition meets taste
              </p>

              {/* Michelin flower icons */}
              <div className="mt-7 flex items-center gap-4">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Michelin star" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="4" fill="white"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => (
                    <ellipse key={i} cx="18" cy="9" rx="3.5" ry="5.5" fill="white" transform={`rotate(${deg} 18 18)`} opacity="0.9"/>
                  ))}
                </svg>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Michelin star" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="4" fill="white"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => (
                    <ellipse key={i} cx="18" cy="9" rx="3.5" ry="5.5" fill="white" transform={`rotate(${deg} 18 18)`} opacity="0.9"/>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-end justify-end pb-2">
            <Link
              to="/contact"
              className="flex items-center gap-3 bg-gold text-gold-foreground pl-5 pr-4 py-3 text-xs tracking-[0.2em] uppercase rounded-full hover:bg-amber-600 transition-colors shadow-elegant"
            >
              <span>Reserveer een tafel</span>
              <span className="w-7 h-7 bg-gold-foreground/20 rounded-full flex items-center justify-center text-base">🎟</span>
            </Link>
          </div>
        </div>

        {/* Vertical "AfriPot" badge on far right */}
        <Link 
          to="/"
          className="fixed right-0 top-[45%] z-50 bg-black text-white flex flex-col items-center justify-center py-4 px-1.5 gap-2 hover:bg-gray-900 transition-colors" 
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="AfriPot logo" 
              className="w-12 h-12 object-contain brightness-125"
            />
          </div>
          <div style={{ writingMode: "vertical-rl", letterSpacing: "0.05em" }} className="text-center">
            <span className="text-xs font-playful font-semibold block">AfriPot</span>
            <span className="text-[10px] font-playful font-normal block mt-0.5">Cuisine</span>
          </div>
        </Link>
      </section>

      {/* MARQUEE */}
      <Marquee items={["AfriPot Restaurant", "Cultural Heritage", "Where Tradition Meets Taste"]} />

      {/* STORY */}
      <section className="py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <ScrollReveal>
              <img src={interiorStairs} alt="Antique staircase and wine cabinet" loading="lazy" className="w-full aspect-[3/4] object-cover shadow-elegant" />
            </ScrollReveal>

            {/* Center Content */}
            <ScrollReveal>
              <div className="text-center">
                <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Our Story</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                  Where cultural heritage meets <em className="text-gradient-gold">culinary excellence</em>
                </h2>
                <p className="mt-8 text-base text-muted-foreground leading-relaxed">
                  We layer Surinamese-Hindustani spices, French precision and Dutch seasonal produce into dishes that feel both familiar and daring. Every plate tells a story — and ends with a smile.
                </p>
                <Link
                  to="/about"
                  className="mt-10 inline-block border-b border-gold text-gold pb-1 text-xs tracking-[0.3em] uppercase hover:border-foreground hover:text-foreground transition-colors"
                >
                  Read our story →
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal>
              <img src={dishPlate} alt="Plated signature dish" loading="lazy" className="w-full aspect-[3/4] object-cover shadow-elegant" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="relative py-32 px-6 md:px-12 bg-card/40 border-y border-border/40">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">The Journey Menu</p>
          <h2 className="font-serif text-5xl md:text-7xl max-w-4xl mx-auto leading-tight">
            Around the world, <em className="text-gradient-gold">one plate at a time</em>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our six-course journey traces Soenil's path from Paramaribo to Provence, finished with Brabant warmth and paired wines poured at the perfect moment.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "European Lobster", subtitle: "Atlantic waters", img: dishLobster },
              { title: "Eel & Spinach", subtitle: "Smoked & glazed", img: dishPlate },
              { title: "Rendang", subtitle: "Chef's signature", img: dishRendang },
            ].map((d) => (
              <div key={d.title} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-6 text-xs tracking-[0.3em] uppercase text-gold">{d.subtitle}</p>
                <h3 className="mt-2 font-serif text-2xl">{d.title}</h3>
              </div>
            ))}
          </div>

          <Link
            to="/menu"
            className="mt-16 inline-block bg-gold text-gold-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
          >
            View our menu
          </Link>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">À la carte additions</p>
              <h2 className="font-serif text-5xl md:text-6xl">Signature Dishes</h2>
            </div>
            <Link to="/menu" className="text-xs tracking-[0.3em] uppercase text-gold border-b border-gold pb-1 hover:text-foreground hover:border-foreground transition-colors">
              See full card →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="group relative overflow-hidden bg-card">
              <img src={dishCaviar} alt="Caviar 30 grams" loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Luxurious start</p>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-3xl">Caviar 30 grams</h3>
                  <span className="font-serif text-3xl text-gold">95</span>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden bg-card">
              <img src={dishRendang} alt="Rendang" loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="p-8">
                <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">Chef's signature</p>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-3xl">Rendang</h3>
                  <span className="font-serif text-3xl text-gold">45</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SUITES */}
      <section className="relative">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-[60vh] lg:h-auto min-h-[500px]">
            <img src={suiteTower} alt="The Donjon Tower Suite" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-background/30" />
          </div>
          <div className="bg-card flex items-center px-6 md:px-16 py-24">
            <div className="max-w-lg">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Stay the night</p>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                Sleep inside the <em className="text-gradient-gold">castle</em>
              </h2>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Two intimate suites within Kasteel Gemert: the medieval Donjon Tower and the serene Garden Suite overlooking the castle grounds.
              </p>

              <div className="mt-12 space-y-6">
                <Link to="/rooms" className="flex items-center justify-between border-b border-border/60 pb-4 group">
                  <div>
                    <h3 className="font-serif text-2xl">The Donjon Tower Suite</h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Medieval stone walls</p>
                  </div>
                  <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link to="/rooms" className="flex items-center justify-between border-b border-border/60 pb-4 group">
                  <div>
                    <h3 className="font-serif text-2xl">The Garden Suite</h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">Castle garden view</p>
                  </div>
                  <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              <Link
                to="/contact"
                className="mt-12 inline-block border border-gold text-gold px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-gold-foreground transition-all"
              >
                Book our rooms
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 pointer-events-none" />
        <img src={suiteGarden} alt="Garden Suite" loading="lazy" className="hidden" />
      </section>

      {/* MARQUEE 2 */}
      <Marquee items={["AfriPot Restaurant", "Cultural Heritage", "Where Tradition Meets Taste"]} />

      {/* NEWSLETTER */}
      <section className="py-32 px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Newsletter</p>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight">Stay in our orbit</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fresh menu drops, events and behind-the-scenes spice tips, straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-border px-5 py-4 text-sm focus:border-gold outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-gold-foreground px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
