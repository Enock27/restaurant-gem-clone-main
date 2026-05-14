import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Marquee } from "@/components/Marquee";

// Food images for the hero gallery
import dish1 from "@/assets/dish-caviar.jpg";
import dish2 from "@/assets/dish-rendang.jpg";
import dish3 from "@/assets/dish-plate.jpg";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu — AfriPot Restaurant" },
      {
        name: "description",
        content:
          "Authentic African cuisine with international flavors. Explore our curated menu of traditional and contemporary dishes.",
      },
    ],
  }),
});

// ─── Data ────────────────────────────────────────────────────────────────────

const gemMenuItems = [
  { name: "Mixed Grills", ingredients: "Goat | Beef | Chicken | Chapati" },
  { name: "Grilled Tilapia", ingredients: "Lemon | Herbs | Spinach | Mash" },
  { name: "Chicken Luwombo", ingredients: "Banana Leaf | Groundnut | Vegetables" },
  { name: "AfriPot Beef", ingredients: "Capsicum | Onions | Roast Potatoes" },
  { name: "Mbuzi Choma", ingredients: "Ugali | Kachumbari | Greens" },
  { name: "Beef Luwombo", ingredients: "Banana Leaf | Vegetables | Spices" },
];

const plantBasedItems = [
  { name: "Kohlrabi", ingredients: "Shoegharte | Chickpea | Vadouvan" },
  { name: "Eggplant", ingredients: "Tomato | Lasagne | Pommes Soufflé" },
  { name: "Spinach", ingredients: "Saag Paneer | Samosa | Masala Potato" },
  { name: "Salsify", ingredients: "Tofu | Ratera | Truffle" },
  { name: "Açaí", ingredients: "Brioche | Grape | Chamomile" },
  { name: "Strawberry", ingredients: "Honey | Rhubarb | Yogurt" },
];

const winePairings = [
  {
    label: "Classic elegance",
    name: "WINE PAIRING",
    price: "35k",
    desc: "A refined selection of wines that elevate each dish with balance and depth.",
  },
  {
    label: "For the connoisseur",
    name: "PRESTIGE WINE PAIRING",
    price: "65k",
    desc: "Rare and iconic wines curated for the ultimate gastronomic experience.",
  },
  {
    label: "Pure & creative",
    name: "0% ALCOHOL PAIRING",
    price: "4k",
    desc: "Creative, alcohol-free pairings that match flavor with finesse and freshness.",
  },
];

const supplements = [
  {
    label: "Luxurious start",
    name: "CAVIAR 30 GRAMS",
    price: "9k",
    desc: "Pure indulgence with premium caviar to begin your experience.",
  },
  {
    label: "Decadent duo",
    name: "WAGYU & CAVIAR",
    price: "4k",
    desc: "An opulent bite combining rich wagyu with delicate caviar (instead of the main course).",
  },
  {
    label: "Chef's signature",
    name: "RENDANG",
    price: "4k",
    desc: "A bold, slow-cooked classic with deep, layered flavors.",
  },
  {
    label: "From the cheese room",
    name: "CHEESE SELECTION",
    price: "22-48",
    desc: "(Extra) Curated cheeses served at their peak.",
  },
  {
    label: "From the cheese room",
    name: "INSTEAD OF DESSERT",
    price: "22-48",
    desc: "Curated cheeses served at their peak, instead of dessert.",
  },
];

const marqueeItems = [
  "AfriPot Restaurant",
  "Where Tradition Meets Taste",
  "Cultural Heritage",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MenuDivider() {
  return <div className="border-t border-white/10 w-full" />;
}

function MenuItemRow({
  name,
  ingredients,
}: {
  name: string;
  ingredients: string;
}) {
  return (
    <div className="py-5">
      <p className="text-white font-serif text-base mb-1">{name}</p>
      <p className="text-white/40 text-xs tracking-wide">{ingredients}</p>
      <MenuDivider />
    </div>
  );
}

function ThreeColGrid({ items }: { items: { name: string; ingredients: string }[] }) {
  // Pad to multiple of 3
  const padded = [...items];
  while (padded.length % 3 !== 0) padded.push({ name: "", ingredients: "" });

  const rows: { name: string; ingredients: string }[][] = [];
  for (let i = 0; i < padded.length; i += 3) {
    rows.push(padded.slice(i, i + 3));
  }

  return (
    <div>
      {rows.map((row, ri) => (
        <div key={ri} className="grid grid-cols-1 md:grid-cols-3">
          {row.map((item, ci) => (
            <div key={ci} className={`${ci < 2 ? "md:pr-12" : ""} ${ci > 0 ? "md:pl-4" : ""}`}>
              {item.name ? (
                <MenuItemRow name={item.name} ingredients={item.ingredients} />
              ) : (
                <div className="py-5" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-12">
      <p className="text-gold text-xs tracking-[0.35em] uppercase font-sans">{children}</p>
    </div>
  );
}

function PriceHeading({ price }: { price: string }) {
  return (
    <div className="text-center pb-6">
      <p className="text-white font-serif text-3xl tracking-wide">{price}</p>
    </div>
  );
}

function WinePairingCard({
  label,
  name,
  price,
  desc,
}: {
  label: string;
  name: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="border border-white/10 p-6 flex flex-col gap-2">
      <p className="text-white/40 text-xs italic">{label}</p>
      <p className="text-white font-serif text-lg tracking-wide">{name}</p>
      <p className="text-white/50 text-xs">{price}</p>
      <p className="text-white/40 text-xs leading-relaxed mt-1">{desc}</p>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

function MenuPage() {
  return (
    <div className="min-h-screen bg-[#151515] text-white">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="pt-20 pb-0 text-center px-4">
        <p className="text-[0.65rem] tracking-[0.4em] uppercase text-white/50 mb-4">
          THE MENU
        </p>

        {/* "Our Menu" with outlined overlay */}
        <div className="relative inline-block mb-6">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none">
            Our
            <span
              className="ml-3 font-serif"
              style={{
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(181,140,103,0.55)",
              }}
            >
              Menu
            </span>
          </h1>
        </div>

        <p className="text-white/50 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-8">
          Our award-winning chef invites you to travel the world of flavors.
          Choose between a six-course journey menu and a six-course plant-based
          journey, each woven from Surinamese spice, French technique and the
          best Dutch seasons.
        </p>

        <Link
          to="/contact"
          className="inline-block border border-white/30 text-white text-[0.65rem] tracking-[0.3em] uppercase px-8 py-3 hover:border-gold hover:text-gold transition-colors duration-300"
        >
          MAKE A RESERVATION
        </Link>
      </section>

      {/* ── Three-image gallery ── */}
      <section className="mt-16 grid grid-cols-3 gap-0">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={dish1}
            alt="Dish"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={dish2}
            alt="Dish"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={dish3}
            alt="Dish"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee items={marqueeItems} />

      {/* ── GEM Menu ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12">
        <SectionTitle>GEM. MENU</SectionTitle>
        <PriceHeading price="RWF 35,000" />
        <MenuDivider />
        <ThreeColGrid items={gemMenuItems} />
      </section>

      {/* ── Plant Based Menu ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 mt-8">
        <SectionTitle>GEM. PLANT BASED MENU</SectionTitle>
        <PriceHeading price="RWF 25,000" />
        <MenuDivider />
        <ThreeColGrid items={plantBasedItems} />
      </section>

      {/* ── Wine Pairing ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 mt-8">
        <SectionTitle>WINE PAIRING</SectionTitle>
        <MenuDivider />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8">
          {winePairings.map((w, i) => (
            <WinePairingCard key={i} {...w} />
          ))}
        </div>
      </section>

      {/* ── Supplements ── */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-12 mt-16 mb-24">
        <SectionTitle>SUPPLEMENTS</SectionTitle>
        <MenuDivider />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-8">
          {supplements.slice(0, 3).map((s, i) => (
            <WinePairingCard key={i} {...s} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-0">
          {supplements.slice(3).map((s, i) => (
            <WinePairingCard key={i} {...s} />
          ))}
          {/* empty cell to keep grid aligned */}
          <div className="border border-white/10 p-6 hidden md:block" />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
