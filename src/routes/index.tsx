
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const editorialImage = "/img1.jpg";
const heroImage = "/img2.jpg";
const portfolioBridal = "/img3.jpg";
const portfolioCreative = "/img4.jpg";
const portfolioDetail = "/img1.jpg";
const portfolioOccasion = "/img2.jpg";
const vioricaPortrait = "/img3.jpg";

const handwrittenStyle = {
  fontFamily: "'Kaushan Script', cursive",
  fontWeight: 600,
};

const navigation = [
  { label: "Portfolio", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

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
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
      },
    ],
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
  const [activeMenu, setActiveMenu] = useState("#work");

  const closeMenu = (href: string) => {
    setActiveMenu(href);
    setMenuOpen(false);
  };

  const navigationClass = (href: string) =>
    `inline-block text-xl font-bold transition-all duration-300 lg:text-2xl ${
      activeMenu === href
        ? "text-amber-300 drop-shadow-[0_2px_8px_rgba(251,191,36,0.3)]"
        : "text-rose-200 hover:text-fuchsia-300"
    }`;

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-hero-line text-hero-foreground">
        <div className="mx-auto flex min-h-24 max-w-[90rem] items-center justify-between gap-4 px-5 py-4 sm:px-10 lg:px-16">
          <div className="flex min-w-0 flex-col items-start gap-3">
            <a
              href="#top"
              onClick={() => setActiveMenu("#top")}
              aria-label="Viorica Lungu home"
              className="group flex items-center gap-2 sm:gap-3"
            >
              <span
                aria-hidden="true"
                className="text-3xl leading-none transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-4xl"
              >
                🦋
              </span>

              <span
                style={handwrittenStyle}
                className="bg-gradient-to-r from-rose-400 via-fuchsia-300 to-amber-300 bg-clip-text text-3xl leading-tight text-transparent drop-shadow-[0_2px_8px_rgba(244,114,182,0.2)] transition-all duration-300 group-hover:from-amber-300 group-hover:via-rose-400 group-hover:to-fuchsia-400 sm:text-4xl lg:text-5xl"
              >
                Viorica Lungu
              </span>
            </a>

            <nav
              className="hidden flex-wrap items-center gap-x-7 gap-y-3 md:flex lg:gap-x-9"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    activeMenu === item.href ? "location" : undefined
                  }
                  onClick={() => setActiveMenu(item.href)}
                  className={navigationClass(item.href)}
                  style={handwrittenStyle}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <button
            type="button"
            className="grid size-11 shrink-0 place-items-center text-hero-foreground md:hidden"
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
            className="border-t border-hero-line bg-overlay px-5 py-7 sm:px-10 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-start gap-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    activeMenu === item.href ? "location" : undefined
                  }
                  onClick={() => closeMenu(item.href)}
                  className={navigationClass(item.href)}
                  style={handwrittenStyle}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-[92svh] text-hero-foreground"
      >
        <img
          src={heroImage}
          alt="Pearlescent editorial makeup with blue and violet reflections"
          className="absolute inset-0 size-full object-cover object-[67%_center]"
          fetchPriority="high"
        />

        <div className="absolute inset-0 bg-hero-shade" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-[90rem] flex-col justify-end px-5 pb-10 pt-40 sm:px-10 sm:pb-14 sm:pt-44 lg:px-16">
          <p
            style={handwrittenStyle}
            className="mb-5 text-xl text-hero-muted sm:text-2xl"
          >
            Makeup artist · Beauty storyteller
          </p>

          <h1 className="max-w-5xl font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.8]">
            Beauty,
            <br />
            <span className="font-display-italic">transformed.</span>
          </h1>

          <div className="mt-9 grid gap-7 border-t border-hero-line pt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p
              style={handwrittenStyle}
              className="max-w-xl text-lg leading-9 text-hero-muted sm:text-xl sm:leading-10"
            >
              Refined makeup artistry created to reveal character, hold emotion
              and live beautifully in every light.
            </p>

            <a
              className="group inline-flex w-fit items-center gap-3 border-b border-current pb-2 text-lg font-bold transition-colors hover:text-amber-300"
              style={handwrittenStyle}
              href="#contact"
            >
              Book an appointment
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
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
                src={editorialImage}
                alt="Luminous lavender editorial makeup with pearl details"
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>

            <div className="pb-3 lg:pb-12">
              <p
                style={handwrittenStyle}
                className="mb-8 max-w-xl text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-10"
              >
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
              <p
                style={handwrittenStyle}
                className="mb-8 max-w-xl text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-10 lg:ml-auto"
              >
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
                src={portfolioBridal}
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

            <h2 className="font-display text-5xl leading-none sm:text-7xl">
              Colour as
              <br />
              <span className="font-display-italic text-accent-soft">
                a language.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <figure className="group overflow-hidden bg-muted">
              <img
                src={portfolioCreative}
                alt="Bold creative makeup with emerald and gold pigments and gold leaf details"
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>

            <div className="pb-3 lg:pb-12">
              <p
                style={handwrittenStyle}
                className="mb-8 max-w-xl text-lg leading-9 text-ink-muted sm:text-xl sm:leading-10"
              >
                Concept work where pigment, texture and gold leaf are composed
                like jewellery—made to hold the frame and stop the scroll.
              </p>

              <div className="grid grid-cols-2 gap-x-5 border-t border-ink-line pt-5 text-xs uppercase tracking-normal text-ink-muted">
                <span>Editorial artistry</span>
                <span className="text-right">Emerald & gold</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="occasion" className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_2fr] lg:items-end">
            <p className="section-label">Occasion & detail</p>

            <h2 className="font-display text-5xl leading-none sm:text-7xl">
              Glow that
              <br />
              <span className="font-display-italic text-accent">
                stays golden.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <figure className="group overflow-hidden bg-muted">
              <img
                src={portfolioOccasion}
                alt="Polished occasion makeup in warm bronze and champagne tones at golden hour"
                className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
            </figure>

            <div className="grid gap-8">
              <figure className="group overflow-hidden bg-muted">
                <img
                  src={portfolioDetail}
                  alt="Close-up detail of copper and bronze eye makeup with gold shimmer"
                  className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
              </figure>

              <div className="pb-3">
                <p
                  style={handwrittenStyle}
                  className="mb-8 max-w-xl text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-10"
                >
                  From gala evenings to intimate portraits—warm, radiant
                  finishes built on flawless blending and a highlight that
                  catches every candle.
                </p>

                <div className="grid grid-cols-2 gap-x-5 border-t border-border pt-5 text-xs uppercase tracking-normal text-muted-foreground">
                  <span>Occasion beauty</span>
                  <span className="text-right">Amber hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-16">
          <div className="relative">
            <img
              src={vioricaPortrait}
              alt="Portrait of makeup artist Viorica Lungu beside pink flowers"
              className="aspect-[4/5] w-full object-cover"
            />

            <p
              style={handwrittenStyle}
              className="absolute bottom-0 right-0 bg-background px-5 py-4 text-xl"
            >
              Viorica Lungu
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="section-label">About the artist</p>

            <h2 className="mt-8 font-display text-5xl leading-[.98] sm:text-7xl">
              A practiced eye.
              <br />
              <span className="font-display-italic text-accent">
                A personal touch.
              </span>
            </h2>

            <div
              style={handwrittenStyle}
              className="mt-10 max-w-2xl space-y-6 text-lg leading-9 text-muted-foreground sm:text-xl sm:leading-10"
            >
              <p>
                Viorica Lungu is a makeup artist with many years of experience
                in artistic makeup design. Her work is guided by an instinct
                for colour, balance and the subtle details that make each face
                distinct.
              </p>

              <p>
                From natural radiance to expressive editorial looks, Viorica
                approaches every client with care and calm precision. The
                result is makeup that feels considered, photographs beautifully
                and still feels completely like you.
              </p>
            </div>

            <a
              className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-foreground pb-2 text-lg font-bold transition-colors hover:text-accent"
              style={handwrittenStyle}
              href="#contact"
            >
              Work with Viorica
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-ink py-24 text-ink-foreground sm:py-32"
      >
        <div className="mx-auto max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <p className="section-label text-ink-muted">Services</p>

          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-none sm:text-7xl">
            Made for your
            <br />
            <span className="font-display-italic text-accent-soft">
              moment.
            </span>
          </h2>

          <div className="mt-16 divide-y divide-ink-line border-y border-ink-line">
            {services.map((service) => (
              <article
                key={service.number}
                className="group grid gap-4 py-7 sm:grid-cols-[4rem_1fr_1fr] sm:items-center sm:gap-8 sm:py-9"
              >
                <span className="text-xs text-ink-muted">
                  {service.number}
                </span>

                <h3
                  className="text-3xl sm:text-4xl"
                  style={handwrittenStyle}
                >
                  {service.title}
                </h3>

                <p
                  style={handwrittenStyle}
                  className="max-w-xl text-lg leading-9 text-ink-muted transition-colors group-hover:text-ink-foreground sm:text-xl sm:leading-10"
                >
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-accent py-24 text-accent-foreground sm:py-32"
      >
        <div className="mx-auto max-w-[90rem] px-5 sm:px-10 lg:px-16">
          <p className="section-label text-accent-foreground/70">
            Bookings & enquiries
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl font-display text-6xl leading-[.88] sm:text-8xl lg:text-9xl">
              Let’s create
              <br />
              <span className="font-display-italic">your look.</span>
            </h2>

            <a
              href="mailto:burnaby991@yahoo.ca?subject=Makeup%20booking%20enquiry"
              className="group inline-flex size-36 items-center justify-center gap-2 rounded-full border border-accent-foreground text-center text-lg font-bold transition-colors hover:bg-accent-foreground hover:text-accent sm:size-44"
              style={handwrittenStyle}
            >
              Enquire now
              <ArrowUpRight
                className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-8 text-ink-muted sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[90rem] gap-4 text-xs tracking-normal sm:grid-cols-[1fr_auto]">
          <p>© 2026 Viorica Lungu</p>
          <p>Makeup artist · Beauty & editorial</p>
        </div>

        <div className="mx-auto mt-4 max-w-[90rem] text-xs tracking-normal text-ink-muted/70">
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.facebook.com/florentinavi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 transition-colors hover:text-ink-muted hover:underline"
            >
              Rodi
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
