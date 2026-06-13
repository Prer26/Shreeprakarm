import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Index from "./pages/Index"; // Home
import About from "./pages/About";
import Services from "./pages/Services";
import FoodCategories from "./pages/FoodCategories";
import GalleryCarousel from "./pages/GalleryCarousel";
import Products from "./pages/Products";
import Enquiry from "./pages/Enquiry";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* 🔥 GLOBAL NAVBAR */}
        <Navigation />

        <Routes>
          {/* 🏠 HOME */}
          <Route path="/" element={<Index />} />

          {/* 📄 MULTI PAGES */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/foodcategories" element={<FoodCategories />} />
          <Route path="/gallerycarousel" element={<GalleryCarousel />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/reviews" element={<Reviews />} />

          {/* ❌ 404 PAGE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* 🔻 GLOBAL FOOTER */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;