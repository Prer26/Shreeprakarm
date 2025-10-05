// components/GalleryCarousel.tsx
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const GalleryCarousel: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wallpapercave.com/wp/wp2721272.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 bg-black bg-opacity-60 rounded-lg p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Gallery
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30} // Increased space for better visual separation
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              {/* This container defines the consistent rectangular box (h-72) */}
              <div
                className="relative h-72 cursor-pointer overflow-hidden rounded-xl shadow-xl transition duration-300 hover:shadow-amber-500/50"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  // 🛑 CHANGE MADE HERE: object-top
                  // This tells object-cover to anchor the image to the top
                  // before performing any cropping.
                  className="absolute inset-0 w-full h-full object-cover object-top transform hover:scale-110 transition duration-500 ease-in-out"
                />
                {/* Optional Overlay for better click indication */}
                <div className="absolute inset-0 bg-black/10 transition duration-300 hover:bg-transparent"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl border-4 border-white"
            onClick={(e) => e.stopPropagation()} // Prevent modal closing when clicking the image
          />
        </div>
      )}
    </section>
  );
};

export default GalleryCarousel;