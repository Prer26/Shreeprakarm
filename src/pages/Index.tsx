import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingElements from "@/components/FloatingElements";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DishShowcase from "@/components/DishShowcase";
import Products from "@/components/Products";
import FoodCategories from "@/components/FoodCategories";
import Enquiry from "@/components/Enquiry";
import Reviews from "@/components/Reviews";
import FestiveModeToggle from "@/components/FestiveModeToggle";
import Footer from "@/components/Footer";
import GalleryCarousel from "@/components/GalleryCarousel";


const Index = () => {
  const [festiveMode, setFestiveMode] = useState(false);

  return (
    <div className="relative min-h-screen">
      <FloatingElements festiveMode={festiveMode} />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <DishShowcase />
        <Products />
        <FoodCategories />
        <GalleryCarousel />
        <Enquiry />
        <Reviews />
      </main>
      <Footer />
      <FestiveModeToggle
        festiveMode={festiveMode}
        onToggle={() => setFestiveMode(!festiveMode)}
      />
    </div>
  );
};

export default Index;
