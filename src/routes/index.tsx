import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import stillLife from "@/assets/lookbook-still-life.jpg";
import handsStoneware from "@/assets/hands-stoneware.jpg";
import pourOver from "@/assets/product-pour-over.jpg";
import linenThrow from "@/assets/product-linen-throw.jpg";
import clayVase from "@/assets/product-clay-vase.jpg";
import dinnerSet from "@/assets/product-dinner-set.jpg";
import promiseCorner from "@/assets/promise-corner.jpg";
import { missingCollection, navigation } from "@/lib/storefront-theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Playful Gallery | AMnova Theme Engine" },
      { name: "description", content: "A premium, catalog-ready ecommerce storefront reference for AMnova themes." },
      { property: "og:title", content: "Playful Gallery | AMnova Theme Engine" },
      { property: "og:description", content: "A premium, catalog-ready ecommerce storefront reference for AMnova themes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const previewProducts = [
  { handle: "dune-pour-over", title: "Dune Pour-Over", price: "€84", image: pourOver, alt: "Cream ceramic pour-over set" },
  { handle: "oat-linen-throw", title: "Oat Linen Throw", price: "€62", image: linenThrow, alt: "Oatmeal linen throw on a wooden chair" },
  { handle: "clay-vessel", title: "Clay Vessel No. 4", price: "€48", image: clayVase, alt: "Terracotta sculptural vase with dried stems" },
  { handle: "coast-dinner-set", title: "Coast Dinner Set", price: "€120", image: dinnerSet, alt: "Stack of hand-thrown cream dinnerware" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      <aside className="bg-primary px-4 py-2.5 text-center text-[11px] uppercase text-primary-foreground sm:text-xs">
        New season — the clay series has landed. Free returns, always.
      </aside>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-2xl uppercase">AMnova</a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Primary navigation">
            {navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-accent">{item}</a>)}
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button type="button" aria-label="Search" title="Search" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-muted"><Search size={18} /></button>
            <button type="button" aria-label={`Shopping bag with ${bagCount} items`} title="Shopping bag" className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-muted">
              <ShoppingBag size={18} /><span className="absolute -right-0.5 top-0 inline-grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">{bagCount}</span>
            </button>
            <button type="button" aria-expanded={menuOpen} aria-label="Toggle menu" className="grid size-10 place-items-center rounded-full transition-colors hover:bg-muted md:hidden" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-5 py-4 md:hidden" aria-label="Mobile navigation">{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block border-b border-border py-3 text-sm font-semibold last:border-0">{item}</a>)}</nav>}
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pt-16">
          <p className="mb-4 text-[11px] font-medium uppercase text-muted-foreground">Lookbook — Autumn Edit</p>
          <h1 className="animate-rise font-display text-[19vw] uppercase leading-[0.82] text-balance sm:text-[15vw] lg:text-[12rem]">The<br />Shape of<br /><span className="text-accent">Softness</span></h1>
          <div className="mt-8 flex animate-fade flex-col gap-6 sm:mt-10 sm:flex-row sm:items-end sm:justify-between [animation-delay:200ms]">
            <p className="max-w-[38ch] text-sm text-muted-foreground sm:text-base">A quiet collection of everyday objects, made slowly and built to be kept. Every piece resolves from the merchant catalog.</p>
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-secondary hover:text-accent-secondary-foreground">Shop the collection <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-14 sm:px-8" aria-label="Season campaign">
          <div className="grid gap-4 overflow-hidden rounded-[28px] md:grid-cols-3">
            <img src={stillLife} alt="Handmade ceramics arranged with linen and flowers" width={1440} height={1008} className="aspect-[16/10] h-full w-full object-cover md:col-span-2 md:aspect-[16/9]" />
            <img src={handsStoneware} alt="Hands holding a handmade stoneware cup" width={912} height={1200} className="aspect-[3/4] h-full w-full object-cover" />
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="mb-8 flex items-end justify-between"><div><p className="mb-2 text-[11px] font-medium uppercase text-muted-foreground">( 01 ) Featured</p><h2 className="font-display text-4xl uppercase sm:text-5xl">Objects to keep</h2></div><a href="#collections" className="hidden text-sm font-semibold transition-colors hover:text-accent sm:inline-flex">View all →</a></div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {previewProducts.map((product) => (
              <article key={product.handle} className="group">
                <div className="relative overflow-hidden rounded-3xl bg-surface"><img src={product.image} alt={product.alt} width={816} height={816} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /><button type="button" onClick={() => setBagCount((count) => count + 1)} className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-accent py-3 text-xs font-semibold text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100 sm:text-sm">Add to bag</button></div>
                <div className="mt-3"><h3 className="text-sm font-semibold">{product.title}</h3><p className="text-sm text-muted-foreground">{product.price}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-border bg-accent-secondary/15">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-2">
            <img src={promiseCorner} alt="Terracotta and cream ceramics in a sunlit room" width={1008} height={1008} loading="lazy" className="aspect-[4/3] w-full rounded-[32px] object-cover md:aspect-square" />
            <div><p className="mb-4 text-[11px] font-medium uppercase text-muted-foreground">( 02 ) Our promise</p><h2 className="mb-5 font-display text-4xl uppercase leading-none sm:text-5xl">Made to be<br />kept, not replaced</h2><p className="mb-8 max-w-[42ch] text-base text-muted-foreground">Every piece is produced in small batches from natural, traceable materials. Product stories and attributes can come directly from catalog content.</p><ul className="space-y-3 text-sm"><li className="flex gap-3"><span className="font-semibold text-accent">01</span> Small-batch, hand-finished</li><li className="flex gap-3"><span className="font-semibold text-accent">02</span> Durable, repairable materials</li><li className="flex gap-3"><span className="font-semibold text-accent">03</span> Plastic-free, recyclable packaging</li></ul></div>
          </div>
        </section>

        <section id="collections" className="mx-auto max-w-7xl px-5 py-14 sm:px-8" aria-labelledby="empty-title">
          {missingCollection.products.length === 0 && <div className="rounded-[32px] border border-border bg-surface px-6 py-12 text-center sm:px-10 sm:py-16"><p className="mb-3 text-[11px] font-medium uppercase text-muted-foreground">Collection unavailable</p><h2 id="empty-title" className="mb-3 font-display text-3xl uppercase sm:text-4xl">This shelf is empty</h2><p className="mx-auto mb-7 max-w-[40ch] text-sm text-muted-foreground">The collection “{missingCollection.title}” has no products to show yet. Explore what is currently available instead.</p><a href="#shop" className="inline-flex items-center justify-center rounded-full border-2 border-accent px-7 py-4 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground">Browse all objects</a></div>}
        </section>
      </main>

      <footer id="journal" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid items-end gap-10 border-b border-primary-foreground/15 pb-12 md:grid-cols-2">
            <div><p className="mb-3 text-[11px] font-medium uppercase text-primary-foreground/60">Newsletter</p><h2 className="mb-5 font-display text-4xl uppercase leading-none sm:text-5xl">Slower,<br />prettier letters</h2><form onSubmit={subscribe} className="flex max-w-md flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="email">Email address</label><input id="email" required type="email" placeholder="your@email.com" className="min-w-0 flex-1 rounded-full bg-primary-foreground/10 px-5 py-4 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/40 focus:bg-primary-foreground/15" /><button type="submit" className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-secondary hover:text-accent-secondary-foreground">{subscribed ? "Subscribed" : "Subscribe"}</button></form></div>
            <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3"><div><p className="mb-3 font-semibold">Shop</p><ul className="space-y-2 text-primary-foreground/70"><li><a href="#shop">All objects</a></li><li><a href="#collections">Ceramics</a></li><li><a href="#collections">Textiles</a></li></ul></div><div><p className="mb-3 font-semibold">Help</p><ul className="space-y-2 text-primary-foreground/70"><li>Shipping</li><li>Returns</li><li>Contact</li></ul></div><div><p className="mb-3 font-semibold">Company</p><ul className="space-y-2 text-primary-foreground/70"><li><a href="#about">About</a></li><li><a href="#journal">Journal</a></li><li>Careers</li></ul></div></div>
          </div>
          <div className="flex flex-col gap-3 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between"><span>© 2026 AMnova — storefront design reference.</span><span>ThemeSchema · regions · registered sections · catalog references</span></div>
        </div>
      </footer>
    </div>
  );
}
