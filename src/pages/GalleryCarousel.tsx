"use client";

import { useState } from "react";
import { X } from "lucide-react";

const images: string[] = [
  "/gallary/gallary-13.jpg",
  "/gallary/gallary-17.jpg",
  "/gallary/gallary-18.jpg",
  "/gallary/gallary-19.jpg",
  "/gallary/gallary-20.jpg",
  "/gallary/gallary-16.jpg",
  "/gallary/gallary-5.jpg",
  "/gallary/gallary-6.jpg",
  "/gallary/gallary-7.jpg",
  "/gallary/gallary-8.jpg",
  "/gallary/gallary-9.jpg",
  "/gallary/gallary-10.jpg",
  "/gallary/gallary-11.jpg",
  "/gallary/gallary-12.jpg",
  "/gallary/gallary-14.jpg",
  "/gallary/gallary-15.jpg",
  "/gallary/gallary-2.png",
  "/gallary/gallary-3.png",
  "/gallary/gallary-4.png",
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🎨 SOFT PASTEL BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[#f4c4b5] via-[#f5e0c8] to-[#dfe3ec]" />

      {/* ✨ SOFT BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] 
        bg-[#f4b6a3]/40 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] 
        bg-[#e2d7c5]/40 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <h2 className="text-5xl font-extrabold text-center mb-20 
          text-[#5a3e1b] tracking-wide">
          Our Premium Gallery
        </h2>

        {/* GRID */}
        <div className="max-w-7xl mx-auto px-4 grid gap-6 
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
          auto-rows-[220px]">

          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl 
              border border-black/10 
              shadow-[0_8px_25px_rgba(0,0,0,0.1)] 
              transition-all duration-500 hover:-translate-y-2
              ${index % 5 === 0 ? "row-span-2" : ""}`}
              
              // 🌊 FLOATING ANIMATION (DIFFERENT DELAYS)
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
            >

              {/* IMAGE */}
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover 
                transition duration-700 
                group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t 
                from-black/30 via-transparent to-transparent 
                opacity-60 group-hover:opacity-80 transition" />

            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white">
            <X size={30} />
          </button>

          <img
            src={selectedImage}
            alt="full"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 🌊 FLOAT KEYFRAMES */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryGrid;