import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Flame,
  Home,
  Baby,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";

import weddingImg from "@/assets/wedding.jpg";
import upanayanaImg from "@/assets/upanayana.jpg";
import housewarmingImg from "@/assets/housewarming.jpg";
import namingImg from "@/assets/naming-ceremony.jpg";
import partyImg from "@/assets/privateparty.jpg";
import marriageImg from "@/assets/marriage.jpg";

const services = [
  {
    title: "Wedding Ceremonies",
    icon: Heart,
    image: weddingImg,
    tag: "Grand Festivities",
    description:
      "Complete catering for traditional Brahmin weddings with authentic multi-course banana leaf Sadya, ritual offerings, and unhurried hospitality.",
  },
  {
    title: "Marriage Ceremonies",
    icon: Sparkles,
    image: marriageImg,
    tag: "Sacred Unions",
    description:
      "Auspicious marriage feasts crafted with time-honored Iyengar recipes, sacred Prasadam offerings, and flawless service timing.",
  },
  {
    title: "Upanayana",
    icon: Flame,
    image: upanayanaImg,
    tag: "Sacred Rites",
    description:
      "Sacred thread ceremony catering adhering to strict sattvic guidelines, ritual-specific recipes, and pure, traditional preparations.",
  },
  {
    title: "Private Parties",
    icon: UtensilsCrossed,
    image: partyImg,
    tag: "Intimate Gatherings",
    description:
      "Elegant celebratory gatherings with customizable menus, combining authentic traditional flavours with contemporary presentation.",
  },
  {
    title: "Housewarming",
    icon: Home,
    image: housewarmingImg,
    tag: "Gruha Pravesha",
    description:
      "Warm Griha Pravesh feast celebrations crafted to welcome luck, happiness, and guests with sacred, aromatic delicacies.",
  },
  {
    title: "Naming Ceremonies",
    icon: Baby,
    image: namingImg,
    tag: "Namakarana",
    description:
      "Auspicious Namakarana celebrations served with pure, light, and delicious sattvic dishes for your family's newest blessing.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-[#F8F2EA] py-28 md:py-36 font-[family-name:var(--font-body,'Manrope','Segoe_UI',sans-serif)]">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D6B36A]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#C79B53]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.45em] text-[#C79B53]">
            Auspicious Feasts
          </span>
          <h2 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-4xl font-semibold leading-tight text-[#4E342E] md:text-6xl">
            Our Sacred Catering Services
          </h2>
          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#C79B53] to-transparent" />
          <p className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-xl italic text-[#6D5B4C] md:text-2xl">
            Traditional catering crafted with purity, devotion, and 35 years of culinary heritage.
          </p>
        </motion.div>

        {/* SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-[#E9D7BF] bg-[#FFFDF8]/90 p-3 shadow-[0_15px_40px_-20px_rgba(78,52,46,0.12)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#C79B53] hover:bg-[#FFFDF8] hover:shadow-[0_25px_60px_-18px_rgba(199,155,83,0.3)]"
              >
                <div>
                  {/* Image Banner Container */}
                  <div className="relative h-56 w-full overflow-hidden rounded-[24px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21080b]/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4 rounded-full border border-white/40 bg-black/40 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffe8b3] backdrop-blur-md">
                      {service.tag}
                    </div>

                    {/* Luxury Icon Badge */}
                    <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#ffe3a3]/80 bg-[#4E342E]/90 text-[#f0c66a] shadow-lg backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#C79B53] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl font-semibold text-[#4E342E] transition-colors duration-300 group-hover:text-[#C79B53]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#6D5B4C]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="px-6 pb-6 pt-2">
                  <Link
                    to="/enquiry"
                    className="inline-flex w-full items-center justify-between rounded-full border border-[#E9D7BF] bg-[#F5EBDD]/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#4E342E] transition-all duration-300 group-hover:border-[#C79B53] group-hover:bg-[#C79B53] group-hover:text-white"
                  >
                    <span>Enquire For Date</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-[32px] border border-[#E9D7BF] bg-[#FFFDF8] p-8 shadow-[0_20px_50px_-20px_rgba(78,52,46,0.12)] sm:flex-row sm:p-10"
        >
          <div>
            <h3 className="font-[family-name:var(--font-display,'Cormorant_Garamond',Georgia,serif)] text-2xl font-semibold text-[#4E342E] md:text-3xl">
              Planning a Custom Occasion?
            </h3>
            <p className="mt-1 text-sm text-[#6D5B4C]">
              We offer bespoke menu curation for intimate gatherings &amp; grand festivities.
            </p>
          </div>
          <Link
            to="/enquiry"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#C79B53] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[#b08544] hover:shadow-lg"
          >
            <span>Request Custom Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;