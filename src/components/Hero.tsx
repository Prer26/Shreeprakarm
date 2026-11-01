// Premium Hero.tsx — Shree Praakaaram
// Luxury hospitality redesign: cream/maroon/gold palette, Playfair Display +
// Inter typography, glassmorphism cards throughout, kolam-thread signature
// motif. Single-file, matches your existing structure — drop straight in.
//
// Design tokens (Tailwind arbitrary values -- no tailwind.config changes required):
//   Background        : #F5EDDC   Secondary background : #EDE0C8
//   Primary Maroon     : #4A1021   Secondary Maroon      : #5B1830
//   Luxury Gold        : #D4AF37   Dark Gold             : #A87B15   Light Gold: #E8CC6E
//   Text               : #221F1F   Secondary Text        : #6F6B68
//   Card               : rgba(255,255,255,0.72)   Border : rgba(212,175,55,0.25)
//
// Fonts: add to index.html <head> —
//   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
//
// Requires: npm install framer-motion

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, animate, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Star,
  ClipboardList,
  UtensilsCrossed,
  ChefHat,
  Salad,
  Smile,
  Building2,
  Camera,
  Palette,
  Briefcase,
  Users,
  Plane,
  ClipboardCheck,
  Award,
  ChevronDown,
} from "lucide-react";
import heroImage from "@/assets/hero-banana-leaf.jpg";

const promises = [
  {
    title: "Authentic Tradition",
    desc: "Recipes rooted in Iyengar culinary heritage and prepared with devotion.",
  },
  {
    title: "Fresh Every Day",
    desc: "Premium ingredients sourced fresh for every celebration.",
  },
  {
    title: "Serving with Care",
    desc: "Professional hospitality that makes every guest feel special.",
  },
];

const steps = [
  "Consultation",
  "Menu Planning",
  "Fresh Preparation",
  "Banana Leaf Service",
  "Happy Guests",
];

// Icons mapped in parallel to `steps` -- purely presentational, does not alter the source array.
const stepIcons = [ClipboardList, UtensilsCrossed, ChefHat, Salad, Smile];

const partners = [
  "Wedding Planners",
  "Event Management Companies",
  "Convention Halls",
  "Corporate Event Agencies",
  "Decorators",
  "Photography Studios",
  "Destination Wedding Organizers",
];

// Icons mapped in parallel to `partners` -- purely presentational.
const partnerIcons = [Users, Briefcase, Building2, ClipboardCheck, Palette, Camera, Plane];

const trustedBy = [
  "500+ Families",
  "Wedding Planners",
  "Corporate Clients",
  "Temple Committees",
  "Luxury Event Organizers",
];

const stats = [
  { number: "500+", label: "Successful Events" },
  { number: "50,000+", label: "Guests Served" },
  { number: "15+", label: "Years of Excellence" },
  { number: "98%", label: "Client Satisfaction" },
];

const faqs = [
  {
    q: "How far in advance should we book for a wedding?",
    a: "For weddings and large celebrations, we recommend confirming your date 3–6 months ahead, especially during peak wedding season. For smaller functions like housewarmings or poojas, 2–3 weeks is usually sufficient.",
  },
  {
    q: "Do you customize menus for specific traditions or regional preferences?",
    a: "Yes. While our foundation is authentic Iyengar Brahmin cuisine, we tailor menus to specific family traditions, regional variations, and any dietary considerations — always remaining 100% pure vegetarian.",
  },
  {
    q: "What is the minimum guest count you cater for?",
    a: "We cater intimate gatherings of 30 guests up to grand weddings of 2,000+. Every event, regardless of size, receives the same standard of ingredients, preparation and service.",
  },
  {
    q: "Do you handle live counters and banana leaf service on-site?",
    a: "Yes — live counters, traditional banana leaf service, and full on-site staffing are part of our standard offering, coordinated end-to-end by our team at your venue.",
  },
  {
    q: "Can event planners and venues book on behalf of a client?",
    a: "Absolutely. We work directly with wedding planners, convention halls and corporate event agencies — see our Partner section above, or reach out to set up a standing collaboration.",
  },
];

// ---------------------------------------------------------------------------
// Signature element: a thin, hand-drawn-feeling gold "kolam" thread —
// inspired by the dot-and-line kolams drawn at the threshold of Iyengar
// households each morning. Used sparingly as the one recurring flourish.
// ---------------------------------------------------------------------------
function KolamMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 30 C 4 14, 20 4, 40 4 C 60 4, 68 20, 60 30 C 52 40, 60 56, 80 56 C 100 56, 108 40, 100 30 C 92 20, 100 4, 120 4 C 140 4, 148 20, 140 30 C 132 40, 140 56, 160 56 C 180 56, 188 40, 180 30 C 172 20, 180 4, 200 4 C 220 4, 236 14, 236 30"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      {[4, 40, 80, 120, 160, 200, 236].map((cx) => (
        <circle key={cx} cx={cx} cy="30" r="1.75" fill="currentColor" />
      ))}
    </svg>
  );
}

function KolamDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 8 C 2 3, 10 3, 14 8 C 18 13, 26 13, 30 8 C 34 3, 42 3, 46 8 C 50 13, 58 13, 60 8 C 62 3, 70 3, 74 8 C 78 13, 86 13, 90 8 C 94 3, 102 3, 106 8 C 108 11, 114 11, 118 8"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Faint lotus watermark, used once, low-opacity, corner-anchored.
function LotusWatermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor" aria-hidden="true">
      <path d="M100 20c8 22 8 44 0 60-8-16-8-38 0-60zM100 20c22 8 38 22 44 42-22 2-40-8-44-42zM100 20c-22 8-38 22-44 42 22 2 40-8 44-42zM100 80c26 0 48 14 60 36-26 6-50-6-60-36zM100 80c-26 0-48 14-60 36 26 6 50-6 60-36zM100 80c0 30-10 56-30 76 30-6 46-32 30-76zM100 80c0 30 10 56 30 76-30-6-46-32-30-76z" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Animated stat counter -- parses the leading number out of strings like
// "500+", "50,000+", "98%", "15+" and counts up to it once it enters view.
// ---------------------------------------------------------------------------
function StatCounter({ number, label }: { number: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(() => number.replace(/[\d.,]+/, "0"));

  useEffect(() => {
    if (!isInView) return;
    const match = number.match(/[\d,.]+/);
    if (!match) {
      setDisplay(number);
      return;
    }
    const target = parseFloat(match[0].replace(/,/g, ""));
    const prefix = number.slice(0, match.index ?? 0);
    const suffix = number.slice((match.index ?? 0) + match[0].length);
    const useComma = match[0].includes(",");
    const controls = animate(0, target, {
      duration: 1.7,
      ease: "easeOut",
      onUpdate: (v) => {
        const rounded = Math.round(v);
        setDisplay(`${prefix}${useComma ? rounded.toLocaleString("en-IN") : rounded}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, number]);

  return (
    <div ref={ref} className="relative text-center">
      <div className="font-display heading-tight text-4xl lg:text-5xl font-semibold text-[#4A1021]">
        {display}
      </div>
      <div className="mt-3 text-xs lg:text-sm tracking-[0.12em] uppercase text-[#6F6B68] font-body">
        {label}
      </div>
    </div>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollToEnquiry = () => {
    document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        /* Loaded here directly so the type treatment is guaranteed even if
           the <link> tag in index.html was never added. If you did add the
           <link> in index.html, this is a harmless duplicate — browsers
           dedupe identical font requests. */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,500;1,600&family=Cormorant+Garamond:ital,wght@0,500;1,500&family=Inter:wght@400;500;600;700&display=swap');

        .font-display {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-feature-settings: 'liga' 1, 'kern' 1;
        }
        .font-accent {
          font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
        }
        .font-body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .heading-tight { letter-spacing: -0.01em; }
        .eyebrow { letter-spacing: 0.22em; }

        @keyframes gentleFloatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes gentleFloatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(10px); }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }
        .float-a { animation: gentleFloatA 5.5s ease-in-out infinite; }
        .float-b { animation: gentleFloatB 6.5s ease-in-out infinite; }
        .glow-blob { animation: softPulse 6s ease-in-out infinite; }
      `}</style>

      {/* ============================== HERO ============================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-32 pb-28 overflow-hidden bg-[#F5EDDC]"
      >
        {/* Layered background — tonal, no bright colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5EDDC] via-[#F5EDDC] to-[#EDE0C8]" />
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#4A1021]/[0.05] blur-3xl glow-blob" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#D4AF37]/[0.08] blur-3xl glow-blob" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-[#4A1021]/[0.04] blur-3xl" />

        {/* Signature ornament + lotus watermark, both very low opacity */}
        <LotusWatermark className="absolute bottom-0 right-0 h-72 w-72 text-[#4A1021]/[0.03] hidden lg:block" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" viewport={{ once: true }}>
              <motion.span
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-white/50 backdrop-blur-sm px-5 py-2 text-xs tracking-[0.15em] uppercase text-[#A87B15] font-body font-medium"
              >
                Premium Iyengar Brahmin Catering
              </motion.span>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="mt-8 font-display heading-tight text-[2.9rem] leading-[1.08] lg:text-[4.25rem] lg:leading-[1.05] font-semibold text-[#221F1F]"
              >
                Experience Authentic
                <span className="block mt-1 text-[#4A1021]">Iyengar Hospitality</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="mt-6 font-accent italic text-2xl lg:text-3xl text-[#A87B15]"
              >
                Crafted for Weddings, Celebrations &amp; Luxury Events
              </motion.p>

              <motion.p
                custom={3}
                variants={fadeUp}
                className="mt-6 font-body text-base lg:text-lg text-[#6F6B68] max-w-xl leading-relaxed"
              >
                Traditional Iyengar Brahmin cuisine prepared with devotion,
                premium ingredients and impeccable hospitality — to create
                unforgettable celebrations.
              </motion.p>

              <motion.div custom={4} variants={fadeUp} className="flex gap-4 mt-11 flex-wrap">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    size="lg"
                    onClick={scrollToEnquiry}
                    className="bg-[#4A1021] hover:bg-[#5B1830] text-[#F5EDDC] font-body rounded-full px-8 py-6 text-base shadow-[0_15px_35px_-15px_rgba(74,16,33,0.6)] transition-shadow"
                  >
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToGallery}
                    className="rounded-full px-8 py-6 text-base font-body border-[#4A1021]/25 text-[#4A1021] hover:bg-[#4A1021]/5 bg-transparent"
                  >
                    Explore Menu
                  </Button>
                </motion.div>
              </motion.div>

              {/* Signature kolam thread */}
              <motion.div custom={5} variants={fadeUp} className="mt-14 text-[#D4AF37]/60 w-40">
                <KolamMotif className="w-full h-auto" />
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              {/* Gold-bordered, layered-shadow hero image */}
              <div className="absolute -inset-3 rounded-[2.75rem] bg-gradient-to-br from-[#D4AF37]/25 to-[#4A1021]/15 blur-2xl opacity-70" />

              <motion.div
                className="relative rounded-[2.5rem] p-[3px] bg-gradient-to-br from-[#E8CC6E] via-[#D4AF37] to-[#A87B15] shadow-[0_25px_60px_-15px_rgba(74,16,33,0.45)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03, rotate: 0.6 }}
              >
                <img
                  src={heroImage}
                  alt="Banana Leaf Meal"
                  className="w-full rounded-[2.4rem] shadow-inner transition-transform duration-500"
                />
              </motion.div>

              {/* Floating card: rating (glassy) */}
              <motion.div
                className="float-a absolute -top-6 -left-6 lg:-left-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_20px_40px_-20px_rgba(74,16,33,0.4)] px-5 py-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="mt-1.5 text-sm font-semibold text-[#4A1021] font-display heading-tight leading-tight">
                  500+ Successful Events
                </p>
              </motion.div>

              {/* Floating card: pure vegetarian (glassy cream, not a solid block) */}
              <motion.div
                className="float-b absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl bg-[#F5EDDC]/85 backdrop-blur-xl border border-[#D4AF37]/25 text-[#4A1021] shadow-[0_20px_40px_-20px_rgba(74,16,33,0.4)] px-5 py-4 flex items-center gap-3"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#A87B15]">
                  <Leaf className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight font-display heading-tight">100% Pure Vegetarian</p>
                  <p className="text-xs text-[#6F6B68] font-body">Luxury wedding catering</p>
                </div>
              </motion.div>

              {/* Floating card: authentic recipes -- desktop only to avoid crowding on mobile */}
              <motion.div
                className="float-b hidden md:flex absolute top-1/4 -right-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_20px_40px_-20px_rgba(74,16,33,0.4)] px-5 py-4 items-center gap-3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#A87B15]">
                  <HeartHandshake className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-[#4A1021] leading-tight font-display heading-tight">
                  Trusted by Families
                </p>
              </motion.div>

              {/* Floating card: years of experience -- desktop only to avoid crowding on mobile */}
              <motion.div
                className="float-a hidden md:flex absolute bottom-1/4 -left-10 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_20px_40px_-20px_rgba(74,16,33,0.4)] px-5 py-4 items-center gap-3"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#A87B15]">
                  <Award className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-[#4A1021] leading-tight font-display heading-tight">
                  15 Years Experience
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================== TRUST BAR ============================== */}
      <section className="bg-[#EDE0C8] border-y border-[#D4AF37]/15 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-6 md:gap-14">
            <span className="text-xs eyebrow uppercase text-[#A87B15] font-body font-medium shrink-0">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {trustedBy.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="font-display heading-tight text-[#4A1021]/80 text-base lg:text-lg"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== WHY CHOOSE US ============================== */}
      <section className="py-28 bg-[#F5EDDC]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Leaf, title: "100% Pure Vegetarian", desc: "No compromises, ever" },
              { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Spotless, certified prep" },
              { icon: Clock3, title: "On-Time Service", desc: "Punctual, every event" },
              { icon: HeartHandshake, title: "Authentic Iyengar Cuisine", desc: "True to tradition" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white/70 backdrop-blur-md border border-[#D4AF37]/[0.18] p-6 text-center transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_45px_-20px_rgba(212,175,55,0.45)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 text-[#A87B15] transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-display heading-tight font-semibold text-[#4A1021] text-sm">{item.title}</p>
                <p className="mt-1 text-xs text-[#6F6B68] font-body">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== OUR PROMISE ============================== */}
      <section className="py-28 bg-[#EDE0C8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs eyebrow uppercase text-[#A87B15] font-body font-semibold">
              What sets us apart
            </span>
            <h2 className="mt-4 font-display heading-tight text-4xl lg:text-5xl font-semibold text-[#221F1F]">
              Our Promise
            </h2>
            <KolamDivider className="mx-auto mt-6 h-4 w-28 text-[#D4AF37]/50" />
            <p className="mt-6 text-[#6F6B68] font-body max-w-xl mx-auto">
              Every meal is prepared with authenticity, purity and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-[#D4AF37]/[0.2] bg-white/60 backdrop-blur-md p-10 text-center overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_50px_-15px_rgba(74,16,33,0.2)]"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-70" />
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#4A1021] to-[#5B1830] text-[#D4AF37] shadow-lg"
                >
                  <span className="text-2xl font-display heading-tight font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <h3 className="relative font-display heading-tight text-2xl font-semibold text-[#4A1021]">
                  {p.title}
                </h3>
                <p className="relative mt-4 text-[#6F6B68] font-body leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== HOW WE WORK ============================== */}
      <section className="py-28 bg-[#F5EDDC]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-xs eyebrow uppercase text-[#A87B15] font-body font-semibold">
              Our process
            </span>
            <h2 className="mt-4 font-display heading-tight text-4xl lg:text-5xl font-semibold text-[#221F1F]">
              How We Work
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line -- desktop, draws in on scroll */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block absolute top-9 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
            />

            <div className="grid md:grid-cols-5 gap-10 md:gap-4">
              {steps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex flex-col items-center text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      className="relative z-10 mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#F5EDDC] border border-[#D4AF37]/40 shadow-[0_15px_30px_-15px_rgba(212,175,55,0.5)]"
                    >
                      <Icon className="h-6 w-6 text-[#4A1021]" />
                      <span className="absolute -top-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#4A1021] text-[10px] font-semibold text-[#D4AF37] font-body">
                        {i + 1}
                      </span>
                    </motion.div>
                    <p className="font-display heading-tight font-medium text-[#221F1F]">{s}</p>

                    {/* Connecting line -- mobile */}
                    {i < steps.length - 1 && (
                      <div className="md:hidden mt-6 h-9 w-px bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== PARTNER WITH US ============================== */}
      <section className="py-28 bg-[#EDE0C8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <span className="text-xs eyebrow uppercase text-[#A87B15] font-body font-semibold">
              Trade &amp; Collaboration
            </span>
            <h2 className="mt-4 font-display heading-tight text-4xl lg:text-5xl font-semibold text-[#221F1F]">
              Partner With Shree Praakaaram
            </h2>
            <p className="mt-5 font-accent italic text-xl lg:text-2xl text-[#A87B15]">
              We proudly collaborate with event management companies to deliver exceptional dining experiences.
            </p>
            <p className="mt-5 text-[#6F6B68] font-body leading-relaxed">
              We work alongside event planners, decorators, convention halls, photographers and corporate event
              organizers to ensure every celebration is executed flawlessly.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {partners.map((p, i) => {
              const Icon = partnerIcons[i];
              return (
                <motion.div
                  key={p}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  whileHover={{ y: -6 }}
                  className="group flex items-center gap-4 rounded-2xl border border-[#D4AF37]/[0.18] bg-white/70 backdrop-blur-md px-6 py-5 transition-all duration-400 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_40px_-20px_rgba(212,175,55,0.4)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4A1021]/[0.07] text-[#4A1021] transition-colors duration-300 group-hover:bg-[#4A1021] group-hover:text-[#D4AF37]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-body text-sm font-medium text-[#221F1F] leading-snug">{p}</h3>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 max-w-3xl mx-auto rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#D4AF37]/25 shadow-[0_25px_50px_-25px_rgba(74,16,33,0.3)] px-10 py-14 text-center overflow-hidden"
          >
            <KolamDivider className="mx-auto mb-6 h-4 w-28 text-[#D4AF37]/50" />
            <h3 className="font-display heading-tight text-2xl lg:text-3xl font-semibold text-[#4A1021]">
              Looking for a Reliable Catering Partner?
            </h3>
            <p className="mt-4 text-[#6F6B68] font-body max-w-md mx-auto">
              We believe exceptional events begin with exceptional partnerships.
            </p>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
              <Button
                size="lg"
                onClick={scrollToEnquiry}
                className="rounded-full bg-[#4A1021] hover:bg-[#5B1830] text-[#F5EDDC] font-body px-8 py-6 text-base shadow-[0_15px_35px_-15px_rgba(74,16,33,0.6)]"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================== STATISTICS (cream glass, not a solid block) ============================== */}
      <section className="relative py-24 bg-[#F5EDDC] overflow-hidden">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#4A1021]/[0.06] blur-3xl" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-[#D4AF37]/25 p-10 lg:p-14 shadow-[0_20px_50px_-20px_rgba(74,16,33,0.2)]"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="relative">
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-14 w-px bg-[#4A1021]/10" />
                )}
                <StatCounter number={s.number} label={s.label} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================== FAQ ============================== */}
      <section className="py-28 bg-[#F5EDDC]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs eyebrow uppercase text-[#A87B15] font-body font-semibold">
              Questions, Answered
            </span>
            <h2 className="mt-4 font-display heading-tight text-4xl lg:text-5xl font-semibold text-[#221F1F]">
              Frequently Asked Questions
            </h2>
            <KolamDivider className="mx-auto mt-6 h-4 w-28 text-[#D4AF37]/50" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={[
                    "rounded-2xl border bg-white/70 backdrop-blur-md transition-colors duration-300 overflow-hidden",
                    isOpen ? "border-[#D4AF37]/50" : "border-[#D4AF37]/[0.18]",
                  ].join(" ")}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 lg:px-7 py-5 text-left"
                  >
                    <span className="font-display heading-tight text-base lg:text-lg font-medium text-[#4A1021]">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/12 text-[#A87B15]"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 lg:px-7 pb-6 text-[#6F6B68] font-body leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-10 text-sm text-[#6F6B68] font-body"
          >
            Still have questions?{" "}
            <button
              onClick={scrollToEnquiry}
              className="text-[#4A1021] font-medium underline decoration-[#D4AF37]/50 underline-offset-4 hover:text-[#5B1830]"
            >
              Get in touch
            </button>
          </motion.p>
        </div>
      </section>

      {/* ============================== FINAL CTA ============================== */}
      <section className="py-24 bg-[#EDE0C8]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#4A1021] via-[#4A1021] to-[#5B1830] p-14 lg:p-20 text-center shadow-[0_35px_70px_-20px_rgba(74,16,33,0.5)]"
          >
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

            <KolamMotif className="relative mx-auto mb-8 h-8 w-48 text-[#D4AF37]/50" />

            <h2 className="relative font-display heading-tight text-3xl lg:text-5xl font-semibold text-[#F5EDDC] leading-tight max-w-3xl mx-auto">
              Every Celebration Deserves an Extraordinary Dining Experience
            </h2>

            <p className="relative mt-6 text-[#F5EDDC]/75 font-body max-w-xl mx-auto leading-relaxed">
              From intimate family gatherings to grand weddings, we bring authentic Iyengar cuisine with elegance,
              purity and unmatched hospitality.
            </p>

            <motion.div
              className="relative inline-block mt-10"
              animate={{ scale: [1, 1.035, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#E8CC6E] text-[#4A1021] font-body font-semibold rounded-full px-10 py-6 text-base shadow-[0_10px_35px_rgba(212,175,55,0.4)]"
                onClick={scrollToEnquiry}
              >
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}