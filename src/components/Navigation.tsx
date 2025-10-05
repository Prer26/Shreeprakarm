"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "dishes", label: "Dishes" },
    { id: "products", label: "Products" },
    { id: "FoodCategories", label: "Categories" },
    { id: "gallery", label: "Gallery" },
    { id: "enquiry", label: "Enquiry" },
    { id: "reviews", label: "Reviews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.offsetHeight + 100) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFF9E6]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(150,100,0,0.15)]"
          : "bg-[#FFF9E6]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="Shree Prakaram Logo"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 floating"
            />
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold animated-dark-gradient">
              Shree Prakaram Caterers
            </h1>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-[17px] font-semibold transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-amber-700 after:w-full"
                    : "text-[#4B3A2A] hover:text-amber-700 after:w-0"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-amber-600 after:transition-all after:duration-300`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#4B3A2A] hover:text-amber-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-[#FFF9E6]/95 rounded-xl shadow-md mt-2 border border-amber-500/30 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-amber-700 bg-amber-50"
                    : "text-[#4B3A2A] hover:text-amber-700 hover:bg-amber-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
