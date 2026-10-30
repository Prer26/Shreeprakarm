
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Sparkles,
  Leaf,
  UtensilsCrossed,
  ArrowRight,
  ChefHat,
  Clock,
  Phone,
} from "lucide-react";

import heroImg from "@/assets/hero-sadya.jpg";
import gal2 from "@/assets/gallery-2.jpg";
import evWedding from "@/assets/event-wedding.jpg";
import evTemple from "@/assets/event-temple.jpg";
import evCorp from "@/assets/event-corporate.jpg";

import { SiteLayout } from "@/components/site/SiteLayout";
import FloatingElements from "@/components/FloatingElements";
import FestiveModeToggle from "@/components/FestiveModeToggle";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [festiveMode, setFestiveMode] = useState(false);

  return (
    <SiteLayout transparentTop>
      <div className="relative min-h-screen">

        {/* Festive Floating Elements */}
        <FloatingElements festiveMode={festiveMode} />

        <main className="relative z-10">
          {/* Background Texture */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <Hero />
          <TrustedByFamilies />
          <WhyChooseUs />
          <FinalCTA />
        </main>

        {/* Festive Mode Toggle */}
        <FestiveModeToggle
          festiveMode={festiveMode}
          onToggle={() => setFestiveMode((prev) => !prev)}
        />

      </div>
    </SiteLayout>
  );
}

/* --------------------------------- HERO -------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const stats = [
    { value: "2,000+", label: "Events" },
    { value: "50,000+", label: "Guests" },
    { value: "25+", label: "Years" },
    { value: "4.9★", label: "Rating" },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Traditional Kerala Sadya served on a banana leaf"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-maroon-deep/75 via-maroon-deep/45 to-maroon-deep/90" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(77,12,23,0.7)_100%)]" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 top-32 h-40 w-40 opacity-40"
        animate={{ y: [0, -18, 0], rotate: [-45, -40, -45] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Leaf className="h-full w-full text-gold-soft/50" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-6 bottom-40 h-32 w-32 opacity-30"
        animate={{ y: [0, 20, 0], rotate: [0, 12, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-full w-full text-gold/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pt-[130px] text-center text-white"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow flex items-center gap-4 !text-gold-soft"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px w-10 origin-left bg-gold-soft/60"
            aria-hidden
          />

          Since 1999 · Kerala · Bengaluru · Chennai

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px w-10 origin-right bg-gold-soft/60"
            aria-hidden
          />
        </motion.p>

        <h1 className="mt-8 text-balance font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {[
            { text: "Authentic Flavours.", delay: 0.5 },
            { text: "Timeless Traditions.", delay: 0.68, italic: true },
            { text: "Memories Served with Love.", delay: 0.86 },
          ].map((line, i) => (
            <motion.span
              key={line.text}
              initial={{
                opacity: 0,
                y: 28,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.1,
                delay: line.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`block ${
                line.italic ? "italic text-shimmer-gold" : ""
              } ${i > 0 ? "mt-1" : ""}`}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-8 max-w-2xl font-serif text-lg font-light leading-relaxed text-white/85 md:text-xl"
        >
          Every celebration deserves food that brings people together — rooted
          in tradition, crafted with passion, and served with heartfelt
          hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/enquiry"
            className="btn-luxury !bg-gold !text-maroon-deep transition-all duration-500 hover:!bg-gold-soft hover:shadow-[0_0_36px_-4px_rgba(199,161,90,0.65)]"
          >
            Reserve Your Date
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            to="/food-categories"
            className="btn-outline-gold !border-white/60 !text-white transition-all duration-500 hover:!bg-white/10 hover:!text-white"
          >
            Explore Menus
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-5 font-serif text-sm italic text-white/60"
        >
          A limited number of dates are taken each season, by design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.55 }}
          className="mt-16 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 border-t border-white/15 pt-10 sm:gap-x-12"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex items-center gap-x-8 sm:gap-x-12"
            >
              <div className="group text-center">
                <p className="font-display text-2xl italic text-gold transition-colors duration-500 group-hover:text-gold-soft sm:text-3xl">
                  {s.value}
                </p>

                <p className="mt-1 font-button text-[0.6rem] uppercase tracking-[0.3em] text-white/60 sm:text-[0.65rem]">
                  {s.label}
                </p>
              </div>

              {i < stats.length - 1 && (
                <span
                  className="hidden h-10 w-px bg-white/15 sm:block"
                  aria-hidden
                />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-button text-[0.6rem] uppercase tracking-[0.4em]">
            Scroll
          </span>

          <span className="relative block h-10 w-px overflow-hidden bg-white/30">
            <motion.span
              className="absolute inset-x-0 top-0 h-3 bg-gold"
              animate={{ y: [-12, 40] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* --------------------------- TRUSTED BY FAMILIES ------------------------ */

const OCCASIONS = [
  "Weddings",
  "Housewarming",
  "Corporate Events",
  "Engagements",
  "Temple Functions",
  "Birthday Celebrations",
  "Upanayana",
  "Party Events",
];

function TrustedByFamilies() {
  const loop = [...OCCASIONS, ...OCCASIONS];

  return (
    <section className="relative overflow-hidden bg-cream py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full opacity-50 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(199,161,90,0.14) 0%, transparent 70%)",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none font-display text-[13rem] italic leading-none text-gold/[0.09] sm:text-[18rem] md:top-2 md:text-[24rem]"
      >
        35
      </span>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow text-maroon">A Legacy of Trust</p>

        <h2 className="mt-6 text-balance font-display text-4xl leading-[1.08] text-maroon md:text-6xl">
          Thirty-five years of being welcomed into
          <span className="italic text-gold">
            {" "}the most meaningful days{" "}
          </span>
          of families across South India.
        </h2>
      </div>

      <div className="relative mt-20 border-y border-gold/25 py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent md:w-40" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent md:w-40" />

        <motion.div
          className="flex w-max items-center gap-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 46,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {loop.map((o, i) => (
            <span
              key={`${o}-${i}`}
              className="whitespace-nowrap font-display text-2xl italic text-maroon/40 transition-colors duration-500 hover:text-gold md:text-3xl"
            >
              {o}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ WHY CHOOSE US ----------------------------- */

const STORY_BLOCKS = [
  {
    image: gal2,
    eyebrow: "Recipe & Ingredient",
    title: "Rooted in memory, sourced the same day",
    desc: "Heirloom recipes passed through three generations of chefs, cooked with farm-fresh produce bought fresh each morning.",
    icon: UtensilsCrossed,
  },
  {
    image: evCorp,
    eyebrow: "Craft & Presentation",
    title: "Craftsmanship you can taste and see",
    desc: "Master chefs who protect every tradition's specificity, and banana-leaf service presented with real, unhurried care.",
    icon: ChefHat,
  },
  {
    image: evTemple,
    eyebrow: "Timing & Hospitality",
    title: "Hospitality from first call to last course",
    desc: "Precision-timed setup so your muhurtham never waits on the kitchen, and warmth that doesn't end when food is served.",
    icon: Clock,
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-beige py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 35%, rgba(199,161,90,0.08) 50%, transparent 65%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(199,161,90,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow text-maroon">Not Just Another Caterer</p>

        <h2 className="mt-5 font-display text-4xl leading-tight text-maroon md:text-6xl">
          Why Hosts Choose{" "}
          <span className="italic text-gold">Shree Praakaaram</span>
        </h2>

        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-8 block h-px w-16 origin-center bg-gold/60"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3 sm:gap-6 lg:gap-10">
        {STORY_BLOCKS.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.12 }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/30 shadow-luxe">
              <motion.img
                src={b.image}
                alt={b.title}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <CornerMarks />
            </div>

            <div className="mt-6 flex items-center gap-3 text-maroon">
              <b.icon className="h-5 w-5" strokeWidth={1.25} />
              <p className="eyebrow !mb-0 text-maroon">{b.eyebrow}</p>
            </div>

            <h3 className="mt-3 text-balance font-display text-2xl leading-tight text-maroon md:text-[1.7rem]">
              {b.title}
            </h3>

            <p className="mt-3 font-serif text-base leading-relaxed text-charcoal/65">
              {b.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CornerMarks() {
  return (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l border-t border-gold/80"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-gold/80"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-gold/80"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b border-r border-gold/80"
      />
    </>
  );
}

/* ---------------------------------- FINAL CTA ------------------------------ */

function FinalCTA() {
  return (
    <section className="bg-cream py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[36px] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">

          {/* Background */}
          <div className="absolute inset-0">
            <motion.img
              src={evWedding}
              alt="Luxury wedding catering"
              className="h-full w-full object-cover"
              loading="lazy"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.08 }}
              viewport={{ once: true }}
              transition={{ duration: 18, ease: "linear" }}
            />

            <div className="absolute inset-0 bg-maroon-deep/85" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 20%, rgba(199,161,90,0.22), transparent 65%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-2xl px-8 py-14 text-center text-white md:px-12 md:py-16">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow !text-gold-soft"
            >
              <span className="gold-divider">LET'S BEGIN</span>
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-balance font-display text-4xl leading-[1.05] md:text-6xl"
            >
              Let's Make
              <br />
              Your Celebration
              <br />
              <span className="italic text-shimmer-gold">
                Unforgettable
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-5 max-w-md font-serif text-base leading-relaxed text-white/80 md:text-lg"
            >
              Authentic Kerala flavours, heartfelt hospitality, and
              unforgettable memories for your special day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                to="/enquiry"
                className="btn-luxury !bg-gold !text-maroon-deep hover:!bg-gold-soft"
              >
                Reserve Your Date
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
