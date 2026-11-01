import {
  Leaf,
  Sparkles,
  HeartHandshake,
  Users,
  Quote,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Leaf,
    title: "Purity",
    description: "Fresh ingredients. Traditional preparation.",
  },
  {
    icon: Sparkles,
    title: "Authenticity",
    description: "Recipes preserved through generations.",
  },
  {
    icon: HeartHandshake,
    title: "Devotion",
    description: "Every meal prepared with respect and care.",
  },
  {
    icon: Users,
    title: "Hospitality",
    description: "Treating every guest like family.",
  },
];

const stats = [
  { value: "35+", label: "Years Experience" },
  { value: "2,000+", label: "Events Served" },
  { value: "50,000+", label: "Happy Guests" },
  { value: "100%", label: "Traditional Recipes" },
];

const journey = [
  {
    year: "The Beginning",
    title: "Started with family catering",
    description:
      "A humble start, cooking for family gatherings and close-knit community functions with recipes passed down through generations.",
  },
  {
    year: "Growth",
    title: "Expanded across Karnataka",
    description:
      "Word of authentic Iyengar cuisine spread, and Shree Praakaaram began serving families across the state.",
  },
  {
    year: "Milestones",
    title: "Served hundreds of weddings",
    description:
      "From intimate ceremonies to grand celebrations, hundreds of weddings trusted us with their most sacred occasions.",
  },
  {
    year: "Today",
    title: "A trusted name in traditional catering",
    description:
      "Shree Praakaaram now stands as one of Karnataka's most respected names in authentic Brahmin-style hospitality.",
  },
];

const About = () => {
  return (
    <main className="bg-[#FFFDF8] font-[family-name:var(--font-body,'Manrope','Segoe_UI',sans-serif)] overflow-hidden">
      {/* ============================================================= */}
      {/* SECTION 1 — LUXURY HERO                                       */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        {/* base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF8] via-[#F8F2EA] to-[#F5EBDD]" />

        {/* glowing circles */}
        <div className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-[#D6B36A]/25 blur-[110px]" />
        <div className="pointer-events-none absolute top-40 -right-32 h-[460px] w-[460px] rounded-full bg-[#C79B53]/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5EBDD] blur-[100px]" />

        {/* floating decorative pattern */}
        <svg
          className="pointer-events-none absolute right-10 top-24 h-40 w-40 opacity-30 md:h-56 md:w-56"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="#C79B53" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx="100" cy="100" r="70" stroke="#D6B36A" strokeWidth="1" strokeDasharray="1 6" />
        </svg>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center md:py-40"
        >
          <span className="mb-6 text-[11px] font-semibold uppercase tracking-[0.45em] text-[#C79B53]">
            Our Story
          </span>

          <h1 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-5xl font-semibold leading-[1.08] tracking-tight text-[#4E342E] md:text-7xl">
            About Shree Praakaaram
          </h1>

          <div className="my-8 h-px w-24 bg-gradient-to-r from-transparent via-[#C79B53] to-transparent" />

          <p className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl italic leading-relaxed text-[#6D5B4C] md:text-3xl">
            Serving Tradition.
            <br />
            Celebrating Every Occasion.
          </p>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#6D5B4C] md:text-lg">
            For over 35 years, Shree Praakaaram Caterers has been preserving
            authentic Iyengar culinary traditions with devotion, purity and
            exceptional hospitality.
          </p>
        </motion.div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 2 — MEET OUR FOUNDER (LUXURY EXECUTIVE EDITION)       */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-[#FFFDF8] py-28 md:py-36">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#D6B36A]/10 blur-[130px]" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
            
            {/* LEFT — PORTRAIT & FLOATING CARD */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-5"
            >
              <div className="group relative mx-auto max-w-sm lg:max-w-none">
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-[#C79B53]/30 via-[#F5EBDD] to-[#D6B36A]/20 opacity-80 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:blur-3xl" />

                <div className="relative rounded-[36px] bg-gradient-to-br from-[#D6B36A] via-[#E9D7BF] to-[#C79B53] p-[3px] shadow-[0_25px_60px_-15px_rgba(78,52,46,0.3)]">
                  <div className="overflow-hidden rounded-[33px] bg-[#F8F2EA]">
                    <img
                      src="/image/kanna.jpeg"
                      alt="Prashanth Thathachar (Kanna), Founder of Shree Praakaaram Caterers"
                      className="h-[480px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-6 -right-2 max-w-[280px] rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_20px_40px_-15px_rgba(78,52,46,0.2)] backdrop-blur-md sm:-right-6"
                >
                  <p className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-base italic leading-snug text-[#4E342E]">
                    "Food is not just nourishment; it is a sacred blessing of tradition."
                  </p>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-[#C79B53]">
                    — Prashanth Thathachar
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT — FOUNDER STORY */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E9D7BF] bg-[#F8F2EA] px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#C79B53]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C79B53]">
                  The Craftsman Behind The Feasts
                </span>
              </div>

              <h2 className="mt-5 font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold leading-tight text-[#4E342E] md:text-5xl">
                Prashanth Thathachar
                <span className="ml-3 inline-block font-sans text-xl font-medium text-[#C79B53] md:text-2xl">
                  (Kanna)
                </span>
              </h2>

              <p className="mt-2 font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl italic text-[#6D5B4C]">
                Founder &amp; Master Culinary Custodian
              </p>

              <div className="my-6 h-px w-20 bg-gradient-to-r from-[#C79B53] to-transparent" />

              <div className="space-y-4 text-base leading-relaxed text-[#6D5B4C]">
                <p>
                  For over three decades, Prashanth Thathachar has devoted his life to preserving the rich heritage of authentic Iyengar cuisine.
                </p>
                <p>
                  What started as cooking with genuine passion for family gatherings evolved into an enduring commitment: bringing sacred culinary traditions to weddings, religious ceremonies, and major celebrations across Karnataka.
                </p>
                <p>
                  Under his hands-on leadership, every dish is prepared according to strict traditional principles—ensuring that every guest experiences the warmth, purity, and devotion of a classic Brahmin feast.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E9D7BF]/60 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#C79B53]">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4E342E] text-sm">100% Pure Sourcing</h4>
                    <p className="text-xs text-[#6D5B4C] mt-0.5">Farm-fresh daily ingredients</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F5EBDD] text-[#C79B53]">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#4E342E] text-sm">Sacred Heritage</h4>
                    <p className="text-xs text-[#6D5B4C] mt-0.5">Preserved family recipes</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 3 — WHY WE STARTED                                    */}
      {/* ============================================================= */}
      <section className="relative bg-[#F8F2EA] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-[#E9D7BF] bg-[rgba(255,255,255,0.72)] p-10 shadow-[0_25px_70px_-25px_rgba(78,52,46,0.25)] backdrop-blur-md transition duration-500 hover:shadow-[0_35px_90px_-25px_rgba(199,155,83,0.35)] md:p-16"
          >
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C79B53]">
              Our Purpose
            </span>
            <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-3xl font-semibold text-[#4E342E] md:text-4xl">
              Why Shree Praakaaram Was Started
            </h2>

            <div className="my-8 h-px w-16 bg-gradient-to-r from-[#C79B53] to-transparent" />

            <div className="space-y-5 text-[15px] leading-relaxed text-[#6D5B4C] md:text-base">
              <p>
                Traditional recipes passed down through generations were
                slowly disappearing as modern catering evolved.
              </p>
              <p>
                Our founder believed authentic Brahmin cuisine deserved to be
                preserved exactly as it was meant to be—prepared with
                devotion, served with love and remembered for generations.
              </p>
              <p>
                Shree Praakaaram Caterers was established to protect this
                rich culinary heritage while delivering unforgettable dining
                experiences for every special occasion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 4 — MISSION & VISION                                  */}
      {/* ============================================================= */}
      <section className="relative bg-[#FFFDF8] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C79B53]">
              What Guides Us
            </span>
            <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold text-[#4E342E] md:text-5xl">
              Mission &amp; Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Mission",
                text: "To preserve authentic Iyengar culinary traditions while delivering exceptional hospitality with purity, quality and devotion.",
              },
              {
                title: "Vision",
                text: "To become Karnataka's most trusted traditional catering service by keeping heritage recipes alive for future generations.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group rounded-[32px] border border-[#E9D7BF] bg-[rgba(255,255,255,0.55)] p-10 shadow-[0_20px_60px_-25px_rgba(78,52,46,0.2)] backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:border-[#D6B36A] hover:shadow-[0_30px_70px_-20px_rgba(199,155,83,0.4)] md:p-12"
              >
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E9D7BF] bg-white/70 font-serif font-semibold text-[#C79B53]">
                  0{i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl font-semibold text-[#4E342E] md:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#6D5B4C] md:text-base">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 5 — CORE VALUES                                       */}
      {/* ============================================================= */}
      <section className="relative bg-[#F5EBDD] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C79B53]">
              What We Stand For
            </span>
            <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold text-[#4E342E] md:text-5xl">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-3xl border border-[#E9D7BF] bg-[rgba(255,255,255,0.72)] p-8 text-center shadow-[0_15px_40px_-20px_rgba(78,52,46,0.25)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_-18px_rgba(199,155,83,0.45)]"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F5EBDD] to-white transition duration-500 group-hover:scale-110 group-hover:from-[#D6B36A]/20 group-hover:to-[#C79B53]/10">
                  <Icon className="h-7 w-7 text-[#C79B53]" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-xl font-semibold text-[#4E342E]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6D5B4C]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 6 — LEGACY NUMBERS                                    */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-[#FFFDF8] py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B36A]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.4em] text-[#C79B53]">
              Our Legacy
            </span>
            <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold text-[#4E342E] md:text-5xl">
              Legacy in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl border border-[#E9D7BF] bg-[rgba(255,255,255,0.72)] px-6 py-10 text-center shadow-[0_15px_40px_-22px_rgba(78,52,46,0.25)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_25px_55px_-18px_rgba(199,155,83,0.45)]"
              >
                <p className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-bold text-[#C79B53] transition duration-500 group-hover:scale-110 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#6D5B4C] md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 7 — OUR JOURNEY (STAGGERED STEP CARDS)                */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F8F2EA] to-[#F5EBDD] py-24 md:py-36">
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#D6B36A]/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#C79B53]/15 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-[0.45em] text-[#C79B53]">
              Milestones &amp; Heritage
            </span>
            <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold text-[#4E342E] md:text-6xl">
              Our Journey Through Time
            </h2>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[#C79B53] to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between rounded-[32px] border border-[#E9D7BF]/80 bg-white/80 p-8 shadow-[0_15px_45px_-20px_rgba(78,52,46,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-[#D6B36A] hover:bg-white hover:shadow-[0_25px_65px_-20px_rgba(199,155,83,0.35)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#F5EBDD] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#C79B53] transition-colors duration-300 group-hover:bg-[#C79B53] group-hover:text-white">
                      {item.year}
                    </span>
                    <span className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl font-bold italic text-[#C79B53]/40 transition-colors duration-300 group-hover:text-[#C79B53]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl font-semibold leading-snug text-[#4E342E] transition-colors duration-300 group-hover:text-[#2E1A16]">
                    {item.title}
                  </h3>

                  <div className="my-4 h-px w-10 bg-[#E9D7BF] transition-all duration-500 group-hover:w-full group-hover:bg-[#D6B36A]/60" />

                  <p className="text-sm leading-relaxed text-[#6D5B4C]/90">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C79B53] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Explore Era</span>
                  <span className="h-px w-6 bg-[#C79B53]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION 8 — CLOSING SECTION & CTA                             */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EBDD] to-[#FFFDF8] py-28 md:py-36 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D6B36A]/15 blur-[130px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          <Quote
            className="mx-auto mb-6 h-9 w-9 text-[#C79B53]"
            strokeWidth={1.25}
          />

          <p className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-3xl italic leading-snug text-[#4E342E] md:text-4xl">
            "Serving tradition with devotion,
            <br className="hidden md:block" /> creating unforgettable
            memories through every meal."
          </p>

          <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#C79B53] to-transparent" />

          <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-[#6D5B4C] md:text-base">
            Whether it is a wedding, Upanayanam, Seemantha, Gruhapravesha,
            Temple Event or Corporate Gathering, our commitment remains the
            same—to serve authentic flavors with heartfelt hospitality.
          </p>

          <div className="mt-10">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-3 rounded-full bg-[#C79B53] px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(199,155,83,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b08544] hover:shadow-[0_16px_36px_rgba(199,155,83,0.45)]"
            >
              Reserve Your Date <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;