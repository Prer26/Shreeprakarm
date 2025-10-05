"use client";
import { useState, useEffect } from "react";
import { foodCategories } from "@/data/foodData";

const FoodCategories = () => {
  const [selectedMenu, setSelectedMenu] = useState<any>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const BACKGROUND_URL =
    "https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  const stats = [
    { value: "61K+", label: "Happy Customer", color: "text-gray-800" },
    { value: "844+", label: "Events completed", color: "text-purple-700" },
    { value: "4.9", label: "Customer Ratings", color: "text-gray-800" },
    { value: "30+", label: "Years of Experience", color: "text-purple-700" },
  ];

  return (
    <div
      className="p-6 min-h-screen"
      style={{
        backgroundImage: `url(${BACKGROUND_URL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-white/90 p-6 rounded-xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-black">
          Taste the Tradition Across Every Region
        </h1>

        {/* Food Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {foodCategories.map((category, index) => (
            <div
              key={category.name}
              className={`border border-gray-200 rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 ease-out bg-white ${
                hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } hover:scale-[1.01]`}
              style={{ transitionDelay: hasAnimated ? "0ms" : `${index * 100}ms` }}
            >
              <div className="relative h-60 w-full">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h3>
                <button
                  onClick={() => setSelectedMenu(category)}
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-purple-100/90 rounded-xl p-6 text-center shadow-lg transition duration-300 hover:shadow-xl hover:bg-purple-200"
              >
                <p className={`text-4xl font-extrabold mb-1 ${stat.color}`}>{stat.value}</p>
                <p className="text-sm font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMenu && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={() => setSelectedMenu(null)}
          ></div>

          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-full max-w-lg"
              style={{
                backgroundImage: `url(${BACKGROUND_URL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-red-800 p-5">
                <h3 className="text-2xl font-bold text-white" id="modal-title">
                  {selectedMenu.name} Menu
                </h3>
              </div>

              <div className="p-6 bg-gradient-to-b from-white/95 to-red-50/95">
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {selectedMenu.dishes.map((dish: string, index: number) => (
                    <li key={index} className="text-lg font-medium">
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={() => setSelectedMenu(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCategories;
