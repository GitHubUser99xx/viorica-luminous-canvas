```tsx
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Viorica Lungu — Makeup Artist" },
      {
        name: "description",
        content:
          "Discover the beauty portfolio of Viorica Lungu, a makeup artist creating luminous bridal, editorial and occasion looks.",
      },
      { property: "og:title", content: "Viorica Lungu — Makeup Artist" },
      {
        property: "og:description",
        content:
          "Artistry in every detail. Explore bridal, editorial and creative makeup by Viorica Lungu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    number: "01",
    title: "Bridal",
    text: "Timeless, luminous makeup designed to feel effortless from the first photograph to the final dance.",
  },
  {
    number: "02",
    title: "Editorial",
    text: "Expressive beauty looks shaped for the lens, fashion stories, campaigns and creative collaborations.",
  },
  {
    number: "03",
    title: "Occasion",
    text: "Polished, personal makeup for celebrations, portraits and every moment worth remembering.",
  },
  {
    number: "04",
    title: "Creative",
    text: "Concept-led artistry where colour, texture and light become an unforgettable visual statement.",
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line text-hero-foreground">
        <div className="mx-auto grid h-20 max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:h-24 sm:px-10 lg:px-16">
          <a
            href="#top"
            className="min-w-0 font-display text-xl uppercase tracking-normal sm:text-2xl"
          >
            Viorica Lungu
          </a>

          <nav
            className="hidden items-center gap-9 text-xs font-semibold uppercase tracking-normal md:flex"
            aria-label="Main navigation"
          >
            <a className="nav-link" href="#work">
              Portfolio
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="grid size-11 place-items-center text-hero-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-hero-line bg-overlay px-5 py-7 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-5 text-2xl font-display">
              <a href="#work" onClick={closeMenu}>
                Portfolio
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#services" onClick={closeMenu}>
                Services
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-[92svh] text-hero-foreground"
      >
        <img
          src="/img2.jpg"
          alt="Pearlescent editorial makeup with blue and violet reflections"
          className="absolute inset-0 size-full object-cover object-[67%_center]"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-hero-shade" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-[90rem] flex-col justify-end px-5 pb-10 pt-32 sm:px-10 sm:pb-14 lg:px-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-normal text-hero-muted sm:text-sm">
            Makeup artist · Beauty storyteller
          </p>

          <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.8]">
            Beauty,
            <br />
            <span className="font-display-italic">transformed.</span>
          </h1>

          <div className="mt-9 grid gap-7 border-t border-hero-line pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p className="max-w-md text-sm leading-7 text-hero-muted sm:text-base">
              Refined makeup artistry created to reveal character, hold emotion
              and live beautifully in every light.
            </p>

            <a
              className="group inline-flex w-fit items-center gap-3 border-b border-current pb-2 text-xs font-bold uppercase tracking-normal"
              href="#contact"
            >
              Book an appointment
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          <a
            href="#work"
            aria-label="Explore portfolio"
            className="absolute bottom-11 right-5 hidden size-12 place-items-center rounded-full border border-hero-line transition-colors hover:bg-hero-soft sm:grid lg:right-16"
          >
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="work" className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <p className="section-label">Selected artistry</p>

            <h2 className="font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
              The art of
              <br />
              <span className="font-display-italic text-accent">
                the close-up.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <figure className="group overflow-hidden bg-muted">
              <img
                src="/img1.jpeg"
                alt="Luminous lavender editorial makeup with pearl details"
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>

            <div className="pb-3 lg:pb-12">
              <p className="mb-8 max-w-md text-lg leading-8 text-muted-foreground">
                Each look begins with the person—not a trend. Skin remains
                alive, details feel intentional, and every finish is shaped
                for the moment.
              </p>

              <div className="grid grid-cols-2 gap-x-5 border-t border-border pt-5 text-xs uppercase tracking-normal text-muted-foreground">
                <span>Editorial beauty</span>
                <span className="text-right">Pearl study</span>
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div className="pb-3 lg:pb-12 lg:text-right">
              <p className="mb-8 max-w-md text-lg leading-8 text-muted-foreground lg:ml-auto">
                A bridal look that stays weightless through every embrace,
                toast and tear—soft light, real skin, quiet confidence.
              </p>

              <div className="grid grid-cols-2 gap-x-5 border-t border-border pt-5 text-xs uppercase tracking-normal text-muted-foreground">
                <span>Bridal beauty</span>
                <span className="text-right">Ivory & rose</span>
              </div>
            </div>

            <figure className="group overflow-hidden bg-muted lg:order-first">
              <img
                src="/img3.jpeg"
                alt="Soft romantic bridal makeup with ivory tones and baby's breath flowers"
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        id="creative"
        className="bg-ink py-24 text-ink-foreground sm:py-32"
      >
        <div className="mx-auto max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-8 border-b border-ink-line pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <p className="section-label text-ink-muted">Creative study</p>

           
```
