"use client";

import { useState } from "react";
import logo from "@/assets/logo.png";
import { Code2, Heart, Sparkles, X } from "lucide-react";

type Developer = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const developer: Developer = {
  name: "Prerana",
  role: "Full-Stack & AI Engineer",
  bio: "Specializing in AI/NLP architectures, machine learning frameworks, full-stack React & Next.js systems, and seamless platform integrations.",
  image: "/image/prerana-developer.png",
};

const Footer = () => {
  const [showDevelopersModal, setShowDevelopersModal] = useState(false);

  return (
    <footer className="relative bg-[#660000] text-[#FFF5F7] py-16 border-t border-[#800000] overflow-hidden">
      
      {/* Ambient glow effects */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E6B15C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start gap-4 md:col-span-1">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <img
                src={logo}
                alt="Shree Prakaram Logo"
                className="h-11 w-11 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-xl font-serif font-bold tracking-wide">
                Shree Prakaram Caterers
              </h3>
            </div>
            <p className="text-sm text-[#E6CCD2] leading-relaxed">
              Authentic Brahmin-style catering service bringing traditional Iyengar flavours to your sacred occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[#F5D8A0] tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-[#E6CCD2] hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#E6CCD2] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#E6CCD2] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#E6CCD2] hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#enquiry" className="text-[#E6CCD2] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[#F5D8A0] tracking-wide">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-[#E6CCD2]">
              <li>Wedding Ceremonies</li>
              <li>Upanayana</li>
              <li>Housewarming</li>
              <li>Naming Ceremonies</li>
              <li>Private Parties</li>
              <li>Traditional Products</li>
            </ul>
          </div>

          {/* About Developer Trigger Section */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4 text-[#F5D8A0] tracking-wide">Platform Creator</h4>
            <p className="text-sm text-[#E6CCD2] mb-4 leading-relaxed">
              Crafted with passion and precision for an authentic digital experience.
            </p>
            <button
              onClick={() => setShowDevelopersModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#660000] bg-gradient-to-r from-[#F5D8A0] via-[#E5C17C] to-[#D4AF37] hover:brightness-105 shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Code2 className="w-4 h-4" />
              About Developer
            </button>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#800000] pt-8 text-center text-sm text-[#E6CCD2]">
          <p>
            © {new Date().getFullYear()} Shree Prakaram Caterers. All rights reserved.
          </p>
          <p className="mt-2 text-xs flex items-center justify-center gap-1.5 text-[#F5D8A0]/80">
            Serving tradition with devotion <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" /> creating memories with every meal.
          </p>
        </div>
      </div>

      {/* 💻 DEVELOPER MODAL WITH RISING PORTRAIT CARD */}
      {showDevelopersModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setShowDevelopersModal(false)}
        >
          <div
            className="relative max-w-md w-full rounded-[2rem] bg-[#FAF5EC] border border-[#D9C4A5] p-6 sm:p-8 text-[#3D0E1A] shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowDevelopersModal(false)}
              className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-[#660000] text-[#FFF5F7] hover:bg-[#800000] transition-all shadow-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* DEVELOPER PROFILE CONTENT */}
            <div className="text-center">
              
              {/* RISING EDITORIAL PORTRAIT CARD */}
              <div className="relative mb-5 mx-auto w-36 h-48 rounded-2xl overflow-hidden shadow-md border-2 border-[#D9C4A5] bg-[#E8D9C2]">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0E1A]/40 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#FAF5EC]/90 backdrop-blur-md text-[10px] font-semibold text-[#660000] border border-[#D9C4A5] uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#800000]" /> Creator
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3D0E1A]">
                {developer.name}
              </h3>
              <p className="text-xs font-semibold text-[#660000] uppercase tracking-wider mt-1 mb-3">
                {developer.role}
              </p>

              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#660000] to-transparent mx-auto mb-4" />

              <p className="text-xs sm:text-sm text-[#7A555E] leading-relaxed mb-6">
                {developer.bio}
              </p>

              <button
                onClick={() => setShowDevelopersModal(false)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-[#660000] hover:bg-[#800000] shadow-md transition-all"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};

export default Footer;