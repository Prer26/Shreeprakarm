"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/foodcategories", label: "FoodCategories" },
    { path: "/gallerycarousel", label: "GalleryCarousel" },
    { path: "/enquiry", label: "Enquiry" },
    { path: "/reviews", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9E6] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
            />
            <h1 className="text-2xl md:text-3xl font-bold">
              Shree Praakaaram Caterers
            </h1>
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-[17px] font-semibold transition ${
                    isActive
                      ? "text-amber-700 after:w-full"
                      : "text-[#4B3A2A] hover:text-amber-700 after:w-0"
                  } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-amber-600 after:transition-all`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-[#FFF9E6] rounded-xl shadow-md mt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-[#4B3A2A] hover:text-amber-700"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;