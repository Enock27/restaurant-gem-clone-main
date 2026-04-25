import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Marquee } from "@/components/Marquee";
import { PageLoader } from "@/components/PageLoader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useEffect } from "react";
import interiorStairs from "@/assets/interior-stairs.jpg";
import dishPlate from "@/assets/dish-plate.jpg";
import suiteGarden from "@/assets/suite-garden.jpg";
import logo from "@/assets/AfriPot_logo2.png";
import backgroundHero from "@/assets/BackgroundHero1.jpg";
import staffordLogo from "@/assets/STAFFORD COFFEE BREWERS LOGO.png";
import anithLogo from "@/assets/Anitha.png";
import afriPotLogo from "@/assets/AfriPot_logo2.png";
import vid1 from "@/assets/vid1.mp4";
import vid3 from "@/assets/vid3.mp4";
import vid4 from "@/assets/vid4.mp4";

export const Route = createFileRoute("/")({
  component: Index,
});

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
        <div className="relative z-10 flex h-full flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12 lg:py-16 max-w-[1600px] mx-auto w-full">

          {/* Bottom-right content block */}
          <div className="flex-1 flex items-center justify-end">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[480px] animate-fade-up">
              <h1 className="leading-[1.1]">
                <span className="block text-[clamp(1.25rem,4vw,2.5rem)] text-white font-serif font-normal tracking-tight">
                  Restaurant
                </span>
                <span className="block text-[clamp(0.875rem,2.5vw,2rem)] font-indie font-bold tracking-tight mt-2 sm:mt-3">
                  <span className="text-green-400">Afri</span><span className="text-white">Pot</span>
                  <span className="text-white ml-1 sm:ml-2 md:ml-3">Cuisine</span>
                </span>
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-[0.75rem] sm:text-sm md:text-base text-white/80 leading-relaxed max-w-xs sm:max-w-sm">
                Where tradition meets taste
              </p>

              {/* Michelin flower icons */}
              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 flex items-center gap-2 sm:gap-3 md:gap-4">
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" aria-label="Michelin star" className="sm:w-8 sm:h-8 md:w-9 md:h-9" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="4" fill="white"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => (
                    <ellipse key={i} cx="18" cy="9" rx="3.5" ry="5.5" fill="white" transform={`rotate(${deg} 18 18)`} opacity="0.9"/>
                  ))}
                </svg>
                <svg width="24" height="24" viewBox="0 0 36 36" fill="none" aria-label="Michelin star" className="sm:w-8 sm:h-8 md:w-9 md:h-9" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="4" fill="white"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => (
                    <ellipse key={i} cx="18" cy="9" rx="3.5" ry="5.5" fill="white" transform={`rotate(${deg} 18 18)`} opacity="0.9"/>
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-end justify-end pb-2 sm:pb-3 md:pb-4 lg:pb-6">
            <Link
              to="/contact"
              className="flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-gold text-gold-foreground pl-2.5 sm:pl-3 md:pl-4 lg:pl-5 pr-2 sm:pr-2.5 md:pr-3 lg:pr-4 py-1.5 sm:py-2 md:py-2.5 lg:py-3 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.2em] uppercase rounded-full hover:bg-amber-600 transition-colors shadow-elegant"
            >
              <span>Reserveer een tafel</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-gold-foreground/20 rounded-full flex items-center justify-center text-xs sm:text-sm">🎟</span>
            </Link>
          </div>
        </div>

        {/* Vertical "AfriPot" badge on far right */}
        <Link 
          to="/"
          className="fixed right-0 top-[45%] z-50 bg-black text-white flex flex-col items-center justify-center py-2 sm:py-3 md:py-4 px-0.5 sm:px-1 gap-0.5 sm:gap-1 md:gap-2 hover:bg-gray-900 transition-colors" 
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="AfriPot logo" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain brightness-125"
            />
          </div>
          <div style={{ writingMode: "vertical-rl", letterSpacing: "0.05em" }} className="text-center">
            <span className="text-[8px] sm:text-[9px] md:text-xs lg:text-sm font-playful font-semibold block">AfriPot</span>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-xs font-playful font-normal block mt-0.5">Cuisine</span>
          </div>
        </Link>
      </section>

      {/* MARQUEE */}
      <Marquee items={["AfriPot Restaurant", "Cultural Heritage", "Where Tradition Meets Taste"]} />

      {/* STORY */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
            {/* Left Image */}
            <ScrollReveal>
              <img src={interiorStairs} alt="Antique staircase and wine cabinet" loading="lazy" className="w-full aspect-[3/4] object-cover shadow-elegant" />
            </ScrollReveal>

            {/* Center Content */}
            <ScrollReveal>
              <div className="text-center px-2 sm:px-4">
                <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6">Our Story</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  Where cultural heritage meets <em className="text-gradient-gold">culinary excellence</em>
                </h2>
                <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  We layer Surinamese-Hindustani spices, French precision and Dutch seasonal produce into dishes that feel both familiar and daring. Every plate tells a story — and ends with a smile.
                </p>
                <Link
                  to="/about"
                  className="mt-6 sm:mt-8 md:mt-10 inline-block border-b border-gold text-gold pb-1 text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase hover:border-foreground hover:text-foreground transition-colors"
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
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        {/* Fixed Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundHero})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content - Scrolls Over Background */}
        <div className="relative z-10 mx-auto max-w-[1400px] text-center px-2 sm:px-4">
          <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6">The Journey Menu</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-tight">
            Around the world, <em className="text-gradient-gold">one plate at a time</em>
          </h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our six-course journey traces Soenil's path from Paramaribo to Provence, finished with Brabant warmth and paired wines poured at the perfect moment.
          </p>

          <Link
            to="/menu"
            className="mt-6 sm:mt-8 md:mt-10 inline-block bg-gold text-gold-foreground px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
          >
            View our menu
          </Link>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Left - Menu Items */}
            <div>
              <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-8 sm:mb-10 md:mb-12">À la carte additions</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-12 lg:mb-16">Signature Dishes</h2>

              <div className="space-y-6 sm:space-y-7 md:space-y-8">
                <div className="border-b border-border/40 pb-4 sm:pb-5 md:pb-6 group cursor-pointer transition-all duration-300 hover:border-gold">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2">European Lobster</h3>
                </div>

                <div className="border-b border-border/40 pb-4 sm:pb-5 md:pb-6 group cursor-pointer transition-all duration-300 hover:border-gold">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2">Eel</h3>
                </div>

                <div className="border-b border-border/40 pb-4 sm:pb-5 md:pb-6 group cursor-pointer transition-all duration-300 hover:border-gold">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2">Spinach</h3>
                </div>

                <div className="border-b border-border/40 pb-4 sm:pb-5 md:pb-6 group cursor-pointer transition-all duration-300 hover:border-gold">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2">Caviar 30 grams</h3>
                </div>

                <div className="border-b border-border/40 pb-4 sm:pb-5 md:pb-6 group cursor-pointer transition-all duration-300 hover:border-gold">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-white group-hover:text-gold transition-colors duration-300 group-hover:translate-x-2">Rendang</h3>
                </div>
              </div>

              <Link
                to="/menu"
                className="mt-8 sm:mt-10 md:mt-12 inline-block text-[0.65rem] sm:text-xs md:text-sm tracking-[0.3em] uppercase text-gold border-b border-gold pb-1 hover:text-foreground hover:border-foreground transition-colors"
              >
                See full card →
              </Link>
            </div>

            {/* Right - Image */}
            <div className="hidden lg:block">
              <img 
                src={suiteGarden} 
                alt="Signature Dishes" 
                loading="lazy" 
                className="w-full aspect-[4/5] object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE 2 */}
      <Marquee items={["AfriPot Restaurant", "Cultural Heritage", "Where Tradition Meets Taste"]} />

      {/* PARTNERS */}
      <section className="py-20 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6">Our Partners</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground mb-4 sm:mb-6">Trusted by the best</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry leaders to bring you the finest culinary experience
            </p>
          </div>
          
          <div className="partners-grid-3">
            {/* Stafford Coffee Brewers */}
            <ScrollReveal>
              <div className="flex items-center justify-center h-32 sm:h-40 md:h-48">
                <img 
                  src={staffordLogo} 
                  alt="Stafford Coffee Brewers" 
                  className="partner-logo max-h-full max-w-full object-contain"
                />
              </div>
            </ScrollReveal>

            {/* Anitha */}
            <ScrollReveal>
              <div className="flex items-center justify-center h-32 sm:h-40 md:h-48">
                <img 
                  src={anithLogo} 
                  alt="Anitha" 
                  className="partner-logo max-h-full max-w-full object-contain"
                />
              </div>
            </ScrollReveal>

            {/* AfriPot */}
            <ScrollReveal>
              <div className="flex items-center justify-center h-32 sm:h-40 md:h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 rounded-lg" />
                <img 
                  src={afriPotLogo} 
                  alt="AfriPot" 
                  className="partner-logo max-h-full max-w-full object-contain relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6">Newsletter</p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">Stay in our orbit</h2>
          <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Fresh menu drops, events and behind-the-scenes spice tips, straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto px-2 sm:px-0"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-border px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm focus:border-gold outline-none transition-colors"
            />
            <button
              type="submit"
              className="bg-gold text-gold-foreground px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 text-[0.65rem] sm:text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-foreground transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-background">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left - Contact Info */}
            <ScrollReveal>
              <div>
                <p className="text-[0.65rem] sm:text-xs tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6">Visit Us</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8">Find us on the map</h2>
                
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3">Address</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Nyarugenge 19 KN 51 St<br />
                      Kigali, Rwanda
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3">Phone</h3>
                    <a href="tel:0795304581" className="text-sm sm:text-base text-foreground hover:text-gold transition-colors font-semibold">
                      +250 795 304 581
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm tracking-[0.3em] uppercase text-gold mb-2 sm:mb-3">Hours</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Wed – Sat<br />
                      Lunch 12:00 – 14:00<br />
                      Dinner 18:30 – 21:00
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block mt-4 sm:mt-6 bg-gold text-gold-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Map */}
            <ScrollReveal>
              <div className="w-full h-80 sm:h-96 md:h-[450px] rounded-lg overflow-hidden shadow-elegant">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.8767475107347!2d30.0700598!3d-1.950352199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1777156713364!5m2!1sen!2srw" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
