"use client";
import { useState, useEffect } from "react";
import { foodCategories } from "@/data/foodData";
import { Sparkles, Utensils, X, Star, ChevronRight, Award, Bookmark } from "lucide-react";

interface Category {
  name: string;
  img: string;
  dishes: string[];
  special?: string[];
  description?: string;
}

const FoodCategories = () => {
  const [selectedMenu, setSelectedMenu] = useState<Category | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [activeTab, setActiveTab] = useState<"all" | "specials">("all");

  useEffect(() => {
    const timerOut = setTimeout(() => setHasAnimated(true), 50);

    const targets = [61000, 844, 4, 30];
    const duration = 1800;

    const intervalId = setInterval(() => {
      setCounts((prev) => {
        const updated = [...prev];
        let completed = 0;

        targets.forEach((target, i) => {
          if (updated[i] < target) {
            const increment = target / (duration / 16);
            const nextVal = updated[i] + increment;
            updated[i] = nextVal >= target ? target : parseFloat(nextVal.toFixed(1));
          } else {
            completed++;
          }
        });

        if (completed === targets.length) {
          clearInterval(intervalId);
        }
        return updated;
      });
    }, 16);

    return () => {
      clearTimeout(timerOut);
      clearInterval(intervalId);
    };
  }, []);

  const stats = [
    { label: "Happy Customers", suffix: "+" },
    { label: "Events Completed", suffix: "+" },
    { label: "Customer Ratings", suffix: "★" },
    { label: "Years of Experience", suffix: "+" },
  ];

  return (
    <section
      id="food-categories"
      className="relative isolate overflow-hidden bg-[#F7F1E7] py-24 sm:py-28 lg:py-32 selection:bg-[#660000]/20 selection:text-[#3D0E1A]"
    >
      {/* Soft beige background details matching previous section */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(214,179,106,0.18),transparent_36%),radial-gradient(ellipse_at_bottom_right,rgba(199,155,83,0.13),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#E8D9C2]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#E9DCC9]/70 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* 👑 HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div
            className={`inline-flex items-center gap-2.5 rounded-full border border-[#DCC9A9] bg-[#FFFDF8]/85 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#660000] shadow-sm backdrop-blur-md mb-5 transition-all duration-700 ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#800000]" />
            Authentic Regional Culinary
          </div>

          <h1
            className={`font-serif text-4xl font-medium leading-tight tracking-tight text-[#3D0E1A] sm:text-5xl md:text-6xl mb-6 transition-all duration-700 delay-100 ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Taste the Tradition Across <span className="italic text-[#660000]">Every Region</span>
          </h1>

          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C79B53]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#660000] bg-[#E9D7BF]" />
            <span className="h-px w-12 bg-[#C79B53]/70" />
          </div>

          <p
            className={`mx-auto max-w-2xl text-sm leading-7 text-[#796858] sm:text-base sm:leading-8 transition-all duration-700 delay-200 ${
              hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Immerse yourself in authentic Brahmin heritage recipes, hand-crafted with pure spices and age-old culinary tradition.
          </p>
        </div>

        {/* 🍽 CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8">
          {foodCategories.map((category: Category, index: number) => (
            <div
              key={category.name}
              className={`group relative rounded-[1.5rem] border border-[#E5D6C0] bg-[#FFFDF8] overflow-hidden shadow-[0_14px_45px_-30px_rgba(78,52,46,0.35)] hover:-translate-y-2 hover:border-[#660000]/70 hover:shadow-[0_28px_60px_-32px_rgba(102,0,0,0.42)] transition-all duration-500 flex flex-col ${
                hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Image Frame */}
              <div className="relative h-56 overflow-hidden bg-[#EDE2D1]">
                <img
                  src={category.img}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#660000]/55 via-transparent to-[#660000]/5 opacity-80" />

                {/* Badge */}
                <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-[#FFFDF8]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#660000] shadow-sm backdrop-blur-md">
                  <Utensils className="h-3 w-3 text-[#800000]" />
                  Traditional
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between text-center">
                <div>
                  <h3 className="font-serif text-xl font-medium text-[#3D0E1A] group-hover:text-[#660000] transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#806F60] line-clamp-2 mb-6">
                    {category.dishes?.slice(0, 4).join(", ")} & more...
                  </p>
                </div>

                <div>
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-[#D7BD91] via-[#E9DCC9] to-transparent" />
                  <button
                    onClick={() => {
                      setSelectedMenu(category);
                      setActiveTab("all");
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full font-semibold text-xs uppercase tracking-[0.16em] text-white bg-[#660000] hover:bg-[#800000] shadow-md transition-all"
                  >
                    Explore Menu
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📊 STATS COUNTER */}
        <div className="mt-24 sm:mt-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-[1.5rem] border border-[#E5D6C0] bg-[#FFFDF8] p-6 text-center shadow-[0_14px_45px_-30px_rgba(78,52,46,0.3)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-[#3D0E1A] mb-1">
                  {i === 0 ? Math.floor(counts[i] / 1000) + "K" : counts[i]}
                  <span className="text-[#660000] ml-1">{stat.suffix}</span>
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#796858] uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 CTA BANNER */}
        <div className="mt-20 sm:mt-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#660000] p-8 sm:p-14 text-center shadow-2xl border border-[#800000] text-[#FFF5F7]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E6B15C]/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-black/20 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#500000] border border-[#800000] text-[#E6B15C] text-xs font-semibold uppercase tracking-widest mb-4 backdrop-blur-md">
                <Award className="w-3.5 h-3.5" /> Divine Taste Guaranteed
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#FFF5F7]">
                Ready to Make Your Event Special?
              </h2>

              <p className="text-sm sm:text-base text-[#E6CCD2] mb-8 leading-relaxed">
                Experience authentic Brahmin catering crafted with devotion, purity, and unmatched traditional heritage.
              </p>

              <button
                onClick={() => (window.location.href = "/enquiry")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-[#660000] bg-gradient-to-r from-[#F5D8A0] via-[#E5C17C] to-[#D4AF37] hover:brightness-105 shadow-[0_8px_25px_rgba(212,175,55,0.35)] active:scale-[0.98] transition-all duration-300"
              >
                Book Your Feast Now
                <ChevronRight className="w-5 h-5 text-[#660000]" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* 📖 3D COOKBOOK MODAL */}
      {selectedMenu && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedMenu(null)}
        >
          {/* 3D Container with Perspective */}
          <div
            className="relative max-w-4xl w-full perspective-[2000px] animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* BOOKBINDING BOARD */}
            <div className="relative rounded-[2rem] bg-[#660000] p-3 sm:p-5 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9)] border border-[#800000] overflow-hidden">
              
              {/* Ribbon Bookmark Accent */}
              <div className="absolute top-0 right-12 z-40 text-[#E6B15C] drop-shadow-md hidden sm:block">
                <Bookmark className="w-8 h-12 fill-[#E6B15C]" />
              </div>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#500000] text-[#E6CCD2] hover:bg-[#E6B15C] hover:text-[#660000] transition-all shadow-lg backdrop-blur-md"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              {/* DUAL PAGE LAYOUT */}
              <div className="grid grid-cols-1 md:grid-cols-2 rounded-[1.5rem] bg-[#FFFDF8] border border-[#E5D6C0] overflow-hidden shadow-inner min-h-[520px]">
                
                {/* 📄 LEFT PAGE (Cover & Category Story) */}
                <div className="relative p-6 sm:p-8 border-b md:border-b-0 md:border-r border-[#E9D7BF] flex flex-col justify-between bg-gradient-to-br from-[#FFFDF9] via-[#FFFDF8] to-[#F8F2E9]">
                  
                  {/* Subtle Page Fold Effect */}
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/5 to-transparent hidden md:block" />

                  <div>
                    <div className="flex items-center gap-2 text-[#660000] text-xs font-semibold tracking-widest uppercase mb-3">
                      <Sparkles className="w-3.5 h-3.5 text-[#800000]" />
                      Royal Menu Card
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#3D0E1A] mb-3">
                      {selectedMenu.name}
                    </h2>

                    <div className="h-0.5 w-16 bg-gradient-to-r from-[#660000] to-transparent mb-5" />

                    {/* Image Spotlight */}
                    <div className="relative h-44 rounded-xl overflow-hidden mb-5 border border-[#E5D6C0] shadow-md">
                      <img
                        src={selectedMenu.img}
                        alt={selectedMenu.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#660000]/60 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {selectedMenu.dishes?.length || 0} Special Delicacies
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#796858] leading-relaxed italic">
                      "Curated using inherited secret spice blends, cooked in pure ghee, and prepared following strict traditional Brahmin recipes."
                    </p>
                  </div>

                  {/* Filter Tabs */}
                  <div className="mt-6 pt-4 border-t border-[#E9D7BF] flex items-center gap-2">
                    <button
                      onClick={() => setActiveTab("all")}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeTab === "all"
                          ? "bg-[#660000] text-[#FFFDF8] shadow-sm"
                          : "bg-[#E9D7BF]/50 text-[#796858] hover:bg-[#E9D7BF]"
                      }`}
                    >
                      All Items ({selectedMenu.dishes?.length || 0})
                    </button>
                    {selectedMenu.special && selectedMenu.special.length > 0 && (
                      <button
                        onClick={() => setActiveTab("specials")}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 ${
                          activeTab === "specials"
                            ? "bg-[#800000] text-white shadow-sm"
                            : "bg-[#E9D7BF]/50 text-[#796858] hover:bg-[#E9D7BF]"
                        }`}
                      >
                        <Star className="w-3 h-3 fill-current" />
                        Chef's Specials ({selectedMenu.special.length})
                      </button>
                    )}
                  </div>
                </div>

                {/* 📄 RIGHT PAGE (Interactive Dish List) */}
                <div className="relative p-6 sm:p-8 bg-[#FFFDF8] flex flex-col justify-between overflow-y-auto max-h-[540px]">
                  
                  {/* Subtle Left Page Spine Shadow */}
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent hidden md:block" />

                  <div>
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E9D7BF]">
                      <span className="font-serif text-sm font-bold tracking-wider text-[#660000] uppercase">
                        {activeTab === "all" ? "Full Menu Course" : "Chef's Signature Selections"}
                      </span>
                      <Utensils className="w-4 h-4 text-[#800000]" />
                    </div>

                    {/* DISH GRID */}
                    <div className="space-y-2.5">
                      {selectedMenu.dishes
                        ?.filter((dish) => activeTab === "all" || selectedMenu.special?.includes(dish))
                        .map((dish: string, index: number) => {
                          const isSpecial = selectedMenu.special?.includes(dish);

                          return (
                            <div
                              key={index}
                              className="group relative bg-[#F8F2E9] border border-[#E5D6C0] hover:border-[#660000] rounded-xl px-4 py-3 transition-all duration-300 shadow-[0_2px_8px_rgba(78,52,46,0.04)] hover:shadow-[0_6px_16px_rgba(102,0,0,0.15)] flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#E9D7BF] text-[#660000] text-xs font-semibold font-serif">
                                  {index + 1}
                                </span>
                                <span className="text-sm font-semibold text-[#3D0E1A] group-hover:text-[#660000] transition-colors">
                                  {dish}
                                </span>
                              </div>

                              {isSpecial && (
                                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                                  <Star className="w-2.5 h-2.5 fill-current" />
                                  Special
                                </span>
                              )}
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* BOTTOM BOOK FOOTER */}
                  <div className="mt-8 pt-4 border-t border-[#E9D7BF] flex items-center justify-between text-xs text-[#660000]">
                    <span>Traditional Pure Veg & Jain Options</span>
                    <button
                      onClick={() => (window.location.href = "/enquiry")}
                      className="font-semibold text-[#660000] hover:underline flex items-center gap-1"
                    >
                      Book Catering <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FoodCategories;