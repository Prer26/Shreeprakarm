
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
    { path: "/foodcategories", label: "Food Categories" },
    { path: "/gallerycarousel", label: "Gallery" },
    { path: "/enquiry", label: "Enquiry" },
    { path: "/reviews", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF9E6] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between min-h-24 py-2">

          {/* Logo and Brand Name */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img
              src={logo}
              alt="Shree Praakaaram Caterers Logo"
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4B3A2A] leading-tight">
              Shree Praakaaram
              <span className="block text-sm md:text-base font-medium tracking-[0.2em] text-amber-700">
                CATERERS
              </span>
            </h1>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative whitespace-nowrap text-sm xl:text-base font-semibold transition-colors duration-300
                  ${
                    isActive
                      ? "text-amber-700 after:w-full"
                      : "text-[#4B3A2A] hover:text-amber-700 after:w-0"
                  }
                  after:absolute after:-bottom-2 after:left-0 after:h-[2px]
                  after:bg-amber-600 after:transition-all after:duration-300`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#4B3A2A] hover:bg-amber-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </Button>
        </div>

        {/* Mobile and Tablet Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-3 mb-3 bg-[#FFF9E6] rounded-xl shadow-lg border border-amber-100">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-3 font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "text-amber-700 bg-amber-100"
                      : "text-[#4B3A2A] hover:text-amber-700 hover:bg-amber-50"
                  }`
                }
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
