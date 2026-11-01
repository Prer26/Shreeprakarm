"use client";

import { useState } from "react";
import { X, Sparkles, Maximize2 } from "lucide-react";

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
  "/gallary/gallary-21.jpeg",
  "/gallary/gallary-22.jpeg",
  "/gallary/gallary-23.jpeg",
  "/gallary/gallary-24.jpeg",
  "/gallary/gallary-25.jpeg",
  "/gallary/gallary-26.jpeg",
  "/gallary/gallary-27.jpeg",
  "/gallary/gallary-28.jpeg",
  "/gallary/gallary-29.jpeg",
  "/gallary/gallary-30.jpeg",
  "/gallary/gallary-31.jpeg",
  "/gallary/gallary-32.jpeg",
  "/gallary/gallary-33.jpeg",
  "/gallary/gallary-34.jpeg",
];

const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative isolate overflow-hidden bg-[#F7F1E7] py-24 sm:py-28 lg:py-32 selection:bg-[#660000]/20 selection:text-[#3D0E1A]">
      {/* 🎨 AMBIENT BEIGE BACKGROUND & NOISE TEXTURE */}
      <div 
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(214,179,106,0.18),transparent_36%),radial-gradient(ellipse_at_bottom_right,rgba(199,155,83,0.13),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#E8D9C2]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#E9DCC9]/70 blur-3xl" />

      {/* CONTENT */}
      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-8">

        {/* 👑 TITLE SECTION */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#DCC9A9] bg-[#FFFDF8]/75 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#660000] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#800000]" />
            Capturing Sacred Moments
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#4E342E] sm:text-5xl md:text-6xl">
            Our Premium <span className="italic text-[#660000]">Gallery</span>
          </h2>

          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C79B53]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#660000] bg-[#E9D7BF]" />
            <span className="h-px w-12 bg-[#C79B53]/70" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#796858] sm:text-base sm:leading-8">
            Explore glimpses of our grand traditional catering, elegant banquet arrangements, and pure culinary craftsmanship.
          </p>
        </div>

        {/* 🖼️ GALLERY MASONRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`group relative cursor-pointer overflow-hidden rounded-[1.5rem] 
              border border-[#E5D6C0] bg-[#FFFDF8]
              shadow-[0_14px_45px_-30px_rgba(78,52,46,0.25)] 
              transition-all duration-500 hover:-translate-y-2 hover:border-[#660000]/60 hover:shadow-[0_24px_50px_-25px_rgba(102,0,0,0.35)]
              ${index % 5 === 0 ? "row-span-2" : ""}`}
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {/* IMAGE */}
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
              />

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#261713]/60 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

              {/* HOVER ICON BADGE */}
              <div className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/50 bg-[#FFFDF8]/90 text-[#660000] opacity-0 shadow-md backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0E07]/80 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#660000] text-white hover:bg-[#800000] transition-all shadow-lg"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div 
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-[2rem] border border-[#E5D6C0] bg-[#FFFDF8] p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded preview"
              className="max-h-[85vh] max-w-[85vw] rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}

      {/* 🌊 FLOAT KEYFRAMES */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
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