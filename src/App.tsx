
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
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
        <Navigation />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/foodcategories" element={<FoodCategories />} />
          <Route path="/gallerycarousel" element={<GalleryCarousel />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
