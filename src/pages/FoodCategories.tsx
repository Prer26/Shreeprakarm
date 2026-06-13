"use client";
import { useState, useEffect } from "react";
import { foodCategories } from "@/data/foodData";

const FoodCategories = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setTimeout(() => setHasAnimated(true), 50);

    const targets = [61000, 844, 4.9, 30];
    const duration = 2000;

    targets.forEach((target, i) => {
      let start = 0;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;

        if (start >= target) {
          start = target;
          clearInterval(timer);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = parseFloat(start.toFixed(1));
          return updated;
        });
      }, 16);
    });
  }, []);

  const stats = [
    { label: "Happy Customers", suffix: "+" },
    { label: "Events Completed", suffix: "+" },
    { label: "Customer Ratings", suffix: "⭐" },
    { label: "Years of Experience", suffix: "+" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden pt-28 px-6">

      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-[#eef0f6]" />
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-[#f4b6a3] opacity-60 blur-[140px] rounded-full" />
      <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-[#f5e6c8] opacity-60 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-[#dfe3ec] opacity-70 blur-[140px] rounded-full" />

      <div className="relative z-10">

        {/* TITLE */}
        <h1
          className={`text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#2c1a0b]
          transition-all duration-700 ${
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Taste the Tradition Across Every Region
        </h1>

        {/* 🍽 CATEGORY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {foodCategories.map((category, index) => (
            <div
              key={category.name}
              className={`bg-white/70 backdrop-blur-md rounded-xl shadow-lg 
              overflow-hidden hover:scale-[1.05] transition duration-500
              ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img src={category.img} className="h-52 w-full object-cover" />

              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-[#3e2a14] mb-3">
                  {category.name}
                </h3>

                <button
                  onClick={() => setSelectedMenu(category)}
                  className="px-5 py-2 rounded-full text-white 
                  bg-gradient-to-r from-red-600 to-orange-500 
                  hover:from-red-700 hover:to-orange-600 
                  transition shadow-md"
                >
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 📊 STATS */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-md rounded-xl p-6 text-center 
                shadow-lg hover:shadow-xl transition hover:scale-105"
              >
                <p className="text-3xl font-extrabold text-[#2c1a0b]">
                  {i === 0
                    ? Math.floor(counts[i] / 1000) + "K"
                    : counts[i]}
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 CTA */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-[#fff7ed] to-[#fdebd0] 
          rounded-2xl p-10 text-center shadow-xl">

            <h2 className="text-3xl font-bold text-[#5a2e0c] mb-4">
              Ready to Make Your Event Special?
            </h2>

            <p className="text-gray-700 mb-6">
              Experience authentic Brahmin catering with divine taste.
            </p>

            <button
              onClick={() => window.location.href = "/enquiry"}
              className="px-8 py-3 rounded-full text-white text-lg 
              bg-gradient-to-r from-red-600 to-orange-500 
              hover:from-red-700 hover:to-orange-600 
              shadow-lg transition"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>

      {/* 🔥 MODAL */}
      {selectedMenu && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
          bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedMenu(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 
            overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center mb-4 text-[#5a2e0c]">
              {selectedMenu.name} Menu
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full mb-6"></div>

            {/* 💎 GRID WITH CHEF BADGE */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedMenu.dishes.map((dish: string, index: number) => {
                const isLast = index === selectedMenu.dishes.length - 1;
                const isSpecial = selectedMenu.special?.includes(dish);

                return (
                  <div
                    key={index}
                    className="group relative bg-white/70 backdrop-blur-md 
                    rounded-xl px-4 py-3 text-sm font-medium text-[#3e2a14]
                    shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_8px_30px_rgba(255,140,0,0.25)]
                    transition-all duration-300 cursor-pointer
                    flex items-center justify-center gap-2"
                  >
                    <span>🍽️</span>

                    <span>
                      {dish}
                      {isLast && (
                        <span className="text-orange-600 italic"> etc...</span>
                      )}
                    </span>

                    {isSpecial && (
                      <span className="absolute -top-2 -right-2 
                      bg-gradient-to-r from-yellow-400 to-orange-500 
                      text-white text-[10px] px-2 py-1 rounded-full shadow-md">
                        ⭐ Chef's Special
                      </span>
                    )}

                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                    bg-gradient-to-r from-orange-200/20 to-yellow-200/20 transition" />
                  </div>
                );
              })}
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedMenu(null)}
                className="px-6 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FoodCategories;