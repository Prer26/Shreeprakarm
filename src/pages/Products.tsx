import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChefHat,
  ChevronRight,
  Leaf,
  Package,
  Sparkles,
  X,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import huliPudiImg from "@/assets/huli-pudi.jpg";
import puliyogareImg from "@/assets/puliyogare-gojju.jpg";
import sambarPowderImg from "@/assets/sambar-powder.jpg";
import rasamPowderImg from "@/assets/rasam-powder.jpg";

type Product = {
  name: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  category: string;
};

const products: Product[] = [
  {
    name: "Huli Pudi",
    image: huliPudiImg,
    shortDesc: "A traditional spice blend for comforting huli.",
    fullDesc:
      "A traditional blend of roasted spices that brings depth and warmth to homemade huli. A convenient way to add familiar South Indian flavour to your everyday cooking.",
    features: ["Traditional recipe", "Aromatic spice blend", "Easy to prepare", "Iyengar-inspired flavour"],
    category: "Traditional spice blends",
  },
  {
    name: "Puliyogare Gojju",
    image: puliyogareImg,
    shortDesc: "A tangy tamarind concentrate for puliyogare.",
    fullDesc:
      "A flavourful tamarind-based gojju created to make puliyogare preparation simple. Mix with cooked rice and adjust to your taste for a comforting traditional dish.",
    features: ["Ready to mix", "Tangy and flavourful", "Convenient preparation", "Traditional taste"],
    category: "Traditional gojju",
  },
  {
    name: "Sambar Powder",
    image: sambarPowderImg,
    shortDesc: "A fragrant blend for classic South Indian sambar.",
    fullDesc:
      "A balanced spice blend designed to bring warmth, aroma and character to your sambar. A pantry essential for preparing a familiar traditional favourite.",
    features: ["Freshly ground", "Rich aroma", "Balanced spice blend", "Everyday essential"],
    category: "Traditional spice blends",
  },
  {
    name: "Rasam Powder",
    image: rasamPowderImg,
    shortDesc: "A pepper-forward blend for comforting rasam.",
    fullDesc:
      "A traditional rasam spice blend with a warming pepper note. Add it to your preparation to create a comforting, aromatic rasam to enjoy with every meal.",
    features: ["Pepper-forward flavour", "Aromatic blend", "Traditional preparation", "Easy to use"],
    category: "Traditional spice blends",
  },
  {
    name: "Curry Powder",
    image: sambarPowderImg,
    shortDesc: "A versatile blend for everyday South Indian cooking.",
    fullDesc:
      "A versatile curry blend suited to a variety of South Indian curries and gravies. Its balanced spice profile makes it a handy addition to your kitchen.",
    features: ["Versatile use", "Balanced flavour", "Kitchen essential", "Easy to prepare"],
    category: "Everyday essentials",
  },
  {
    name: "Gojju Variety Pack",
    image: puliyogareImg,
    shortDesc: "A selection of traditional gojju flavours.",
    fullDesc:
      "A variety pack concept featuring traditional gojju favourites. A thoughtful way to explore different flavours and bring variety to everyday meals.",
    features: ["Multiple varieties", "Great for sharing", "Traditional flavours", "Convenient choice"],
    category: "Traditional gojju",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      id="products"
      className="relative isolate overflow-hidden bg-[#F5EFEB] py-24 sm:py-32 lg:py-36 selection:bg-[#D4A359]/30 selection:text-[#3E2723]"
    >
      {/* Subtle Noise Texture */}
      <div 
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(240,226,206,0.75)_0%,rgba(245,239,235,0)_60%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#EAD8C0]/50 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-[#EDE1CF]/60 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* REFINED CLEAN SECTION HEADING */}
        <motion.div {...reveal} className="mx-auto mb-16 max-w-3xl text-center sm:mb-24">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#D9C4A5]/60 bg-[#FAF6EE]/90 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8C6226] shadow-[0_2px_12px_-4px_rgba(140,98,38,0.12)] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#B58543]" />
            From our kitchen to yours
          </div>

          <h2 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-[#3E2723] sm:text-5xl md:text-6xl">
            A taste of <span className="italic text-[#A27334]">tradition</span>
          </h2>

          <div className="mx-auto my-8 flex max-w-[160px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C59958]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#B58A48] bg-[#E9D7BF]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C59958]/70" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#6E5A4A] sm:text-base sm:leading-8">
            Discover traditional Iyengar-inspired flavours, thoughtfully
            prepared to bring warmth, rich heritage, and authentic delight to your everyday meals.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              {...reveal}
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 0.6,
                      delay: (index % 3) * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              className="h-full"
            >
              <Card
                role="button"
                tabIndex={0}
                aria-label={`View details for ${product.name}`}
                onClick={() => setSelectedProduct(product)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProduct(product);
                  }
                }}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-[#E7D6C1] bg-[#FAF6F0]/90 p-0 transition-all duration-500 hover:-translate-y-2 hover:border-[#CFA569]/80 hover:bg-[#FFFDF9] hover:shadow-[0_24px_50px_-20px_rgba(62,39,35,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A48] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F5EFEB]"
              >
                {/* Product Image Frame */}
                <div className="relative h-60 overflow-hidden bg-[#EAE0D2] sm:h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#261713]/60 via-[#261713]/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Badge */}
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-[#FAF6EE]/90 px-3.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7A5526] shadow-sm backdrop-blur-md">
                    <Leaf className="h-3 w-3 text-[#A27334]" />
                    {product.category}
                  </span>

                  {/* Hover Action Icon */}
                  <span className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full border border-white/60 bg-[#FAF6EE]/90 text-[#7A5526] opacity-0 shadow-md backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Card Body */}
                <CardHeader className="space-y-3 px-6 pb-2 pt-6 sm:px-7">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-serif text-2xl font-medium text-[#3E2723] transition-colors duration-300 group-hover:text-[#A27334]">
                      {product.name}
                    </CardTitle>
                    <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5D5C0] bg-[#F4ECDF]/60 text-[#A27334] transition-colors group-hover:border-[#D4A359] group-hover:bg-[#FAF6EE]">
                      <ChefHat className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                  <CardDescription className="min-h-[48px] text-sm leading-6 text-[#736052]">
                    {product.shortDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto px-6 pb-6 pt-4 sm:px-7 sm:pb-7">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-[#DDC6A5] via-[#EAE0D2] to-transparent" />
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#8C6226] transition-all duration-300 group-hover:gap-3 group-hover:text-[#A27334]">
                    Explore product
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div {...reveal} className="mt-16 text-center sm:mt-20">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-3 text-[#B58A48]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D9C4A5]" />
            <Package className="h-4 w-4 opacity-80" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D9C4A5]" />
          </div>
          <p className="mt-5 font-serif text-xl italic text-[#5C483A] sm:text-2xl">
            Rooted in tradition. Made to be shared.
          </p>
        </motion.div>
      </div>

      {/* Product Details Dialog */}
      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={(open) => {
          if (!open) setSelectedProduct(null);
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-[2rem] border border-[#E7D6C1] bg-[#FAF6EE] p-0 text-[#3E2723] shadow-[0_30px_90px_-20px_rgba(38,23,19,0.3)]">
          {selectedProduct && (
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-[#EAE0D2] md:min-h-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#261713]/60 via-transparent to-transparent md:bg-gradient-to-r" />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-[#FAF6EE]/90 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7A5526] backdrop-blur-md">
                  <Leaf className="h-3 w-3 text-[#A27334]" />
                  Shree Praakaaram
                </span>
              </div>

              <div className="p-6 sm:p-9">
                <DialogHeader className="text-left">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A27334]">
                    {selectedProduct.category}
                  </p>
                  <DialogTitle className="font-serif text-3xl font-medium text-[#3E2723] sm:text-4xl">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="pt-2 text-sm leading-6 text-[#736052]">
                    {selectedProduct.shortDesc}
                  </DialogDescription>
                </DialogHeader>

                <div className="my-6 h-px bg-gradient-to-r from-[#C59958] via-[#EAE0D2] to-transparent" />

                <p className="text-sm leading-7 text-[#5C483A]">
                  {selectedProduct.fullDesc}
                </p>

                <div className="mt-7">
                  <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-[#3E2723]">
                    <Sparkles className="h-4 w-4 text-[#A27334]" />
                    Product highlights
                  </h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedProduct.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 rounded-xl border border-[#E7D6C1] bg-[#F4ECDF]/50 px-3.5 py-2.5 text-xs text-[#5C483A]"
                      >
                        <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-[#EAD8C0] text-[#7A5526]">
                          <Check className="h-3 w-3" />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#CFA569] bg-transparent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7A5526] transition-all hover:bg-[#F2E5D3]"
                >
                  Close details
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;