import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import dishCaviar from "@/assets/dish-caviar.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — AfriPot Restaurant" },
      { name: "description", content: "A six-course journey from Paramaribo to Provence, finished with Brabant warmth." },
    ],
  }),
});

const journey = [
  { course: "I", name: "Amuse", desc: "A trio of bites — sea, soil, and spice." },
  { course: "II", name: "Caviar & Cream", desc: "Imperial caviar, smoked crème fraîche, potato wafer." },
  { course: "III", name: "European Lobster", desc: "Bisque mousseline, lemongrass, kaffir oil." },
  { course: "IV", name: "Eel & Spinach", desc: "Lacquered eel, baby spinach, bone-marrow jus." },
  { course: "V", name: "Rendang", desc: "Slow-braised beef, coconut, lemon basil." },
  { course: "VI", name: "Chocolate & Cardamom", desc: "Dark Manjari, cardamom ganache, gold leaf." },
];

const aLaCarte = [
  { name: "Caviar 30 grams", desc: "Imperial selection, traditional service.", price: "95" },
  { name: "Rendang", desc: "Chef's signature, Surinamese-Hindustani roots.", price: "45" },
  { name: "Foie Gras", desc: "Brûléed, brioche, sour cherry.", price: "38" },
  { name: "Wagyu A5", desc: "Charcoal grilled, ponzu glaze.", price: "85" },
  { name: "Cheese Trolley", desc: "European selection, walnut bread, honey.", price: "28" },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-40 pb-24 px-6 md:px-12">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Journey · Six Courses</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95]">
            The <em className="text-gradient-gold">Menu</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            From Paramaribo to Provence and back to Brabant. Wine pairing crafted to the moment.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-32">
        <div className="mx-auto max-w-3xl">
          {journey.map((c) => (
            <div key={c.course} className="grid grid-cols-[60px_1fr_auto] gap-6 py-8 border-b border-border/40 items-baseline">
              <span className="font-serif text-3xl text-gold">{c.course}</span>
              <div>
                <h3 className="font-serif text-2xl">{c.name}</h3>
                <p className="mt-2 text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground tracking-wider">Six courses · €185 · Wine pairing €95</p>
          </div>
        </div>
      </section>

      <section className="bg-card/40 border-y border-border/40 py-32 px-6 md:px-12">
        <div className="mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-16 items-center">
          <img src={dishCaviar} alt="Caviar" loading="lazy" className="w-full aspect-square object-cover shadow-elegant" />
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">À la carte</p>
            <h2 className="font-serif text-5xl">Additions</h2>
            <div className="mt-10 space-y-6">
              {aLaCarte.map((d) => (
                <div key={d.name} className="flex justify-between gap-6 border-b border-border/40 pb-6">
                  <div>
                    <h3 className="font-serif text-xl">{d.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
                  </div>
                  <span className="font-serif text-2xl text-gold whitespace-nowrap">€{d.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
