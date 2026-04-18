import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import diningRoom from "@/assets/dining-room.jpg";
import interior from "@/assets/interior-stairs.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — AfriPot Restaurant" },
      { name: "description", content: "Learn about AfriPot Restaurant and our culinary journey." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Our Story</p>
        <h1 className="font-serif text-6xl md:text-8xl">
          About <em className="font-playful text-gradient-gold">AfriPot</em>
        </h1>
      </section>

      <section className="px-6 md:px-12 pb-24">
        <div className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>
            <span className="font-playful text-gold">AfriPot Restaurant</span> celebrates authentic African cuisine with a modern twist. Our culinary journey brings together traditional recipes passed down through generations with contemporary cooking techniques.
          </p>
          <p>
            Every dish tells a story of heritage, culture, and the rich flavors of Africa. We source the finest ingredients to create an unforgettable dining experience that honors tradition while embracing innovation.
          </p>
          <p>
            Every dish at <span className="font-playful text-gold">AfriPot</span> is a meeting place. Traditional African flavors meet modern culinary artistry. Fresh, quality ingredients meet the warmth of genuine hospitality. The result is intimate, generous, and — above all — joyful.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 gap-6">
          <img src={interior} alt="Wine staircase" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-elegant" />
          <img src={diningRoom} alt="Dining room" loading="lazy" className="w-full aspect-[4/5] object-cover shadow-elegant md:mt-20" />
        </div>
      </section>

      <section className="bg-card/40 border-y border-border/40 py-32 px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Recognition</p>
        <div className="flex items-center justify-center gap-6 text-gold text-6xl">✦ ✦</div>
        <h2 className="mt-6 font-serif text-4xl md:text-5xl">Two Michelin Stars</h2>
        <p className="mt-4 text-muted-foreground">Awarded continuously since 2009</p>
      </section>

      <SiteFooter />
    </div>
  );
}
