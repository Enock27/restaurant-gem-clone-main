import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import suiteGarden from "@/assets/suite-garden.jpg";
import suiteTower from "@/assets/suite-tower.jpg";

export const Route = createFileRoute("/rooms")({
  component: RoomsPage,
  head: () => ({
    meta: [
      { title: "Rooms — AfriPot Restaurant" },
      { name: "description", content: "Stay the night at AfriPot Restaurant." },
    ],
  }),
});

const rooms = [
  {
    name: "The Donjon Tower Suite",
    desc: "A medieval round chamber atop the castle's defensive tower. Stone walls, vaulted ceiling, and a bed fit for nobility.",
    img: suiteTower,
    features: ["Round stone chamber", "Castle history", "King bed", "Roll-top bath"],
    price: "From €450 / night",
  },
  {
    name: "The Garden Suite",
    desc: "Light-filled, classic and serene. French windows open to the formal castle gardens — your private box seat to the seasons.",
    img: suiteGarden,
    features: ["Garden view", "60 m² suite", "King bed", "Marble bathroom"],
    price: "From €395 / night",
  },
];

function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 px-6 md:px-12 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Sleep inside the castle</p>
        <h1 className="font-serif text-6xl md:text-8xl">
          Our <em className="text-gradient-gold">Suites</em>
        </h1>
      </section>

      <section className="px-6 md:px-12 pb-32 space-y-32">
        {rooms.map((r, i) => (
          <div key={r.name} className={`mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={r.img} alt={r.name} loading="lazy" className="w-full aspect-[4/3] object-cover shadow-elegant" />
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Suite {String(i + 1).padStart(2, "0")}</p>
              <h2 className="font-serif text-5xl leading-tight">{r.name}</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{r.desc}</p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {r.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-gold">✦</span> {f}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-serif text-2xl text-gold">{r.price}</p>
              <Link
                to="/contact"
                className="mt-8 inline-block bg-gold text-gold-foreground px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-foreground transition-colors"
              >
                Reserve this suite
              </Link>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
