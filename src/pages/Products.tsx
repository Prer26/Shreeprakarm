"use client";
import { useState } from "react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle
} from "@/components/ui/dialog";

import huliPudiImg from "@/assets/huli-pudi.jpg";
import puliyogareImg from "@/assets/puliyogare-gojju.jpg";
import sambarPowderImg from "@/assets/sambar-powder.jpg";
import rasamPowderImg from "@/assets/rasam-powder.jpg";

const products = [
  {
    name: "Huli Pudi",
    image: huliPudiImg,
    shortDesc: "Traditional spice powder blend",
    fullDesc: "Authentic blend of roasted spices for traditional huli.",
    features: ["100% Natural", "No Preservatives", "Traditional Recipe", "Iyengar Flavor"],
  },
  {
    name: "Puliyogare Gojju",
    image: puliyogareImg,
    shortDesc: "Tamarind rice paste concentrate",
    fullDesc: "Temple-style tamarind paste ready to mix with rice.",
    features: ["Ready to Mix", "Temple Flavor", "Long Shelf Life", "Premium Quality"],
  },
  {
    name: "Sambar Powder",
    image: sambarPowderImg,
    shortDesc: "Aromatic sambar spice mix",
    fullDesc: "Perfect blend for authentic South Indian sambar.",
    features: ["Freshly Ground", "Aromatic", "Traditional Blend", "Chemical-Free"],
  },
  {
    name: "Rasam Powder",
    image: rasamPowderImg,
    shortDesc: "Traditional rasam spice blend",
    fullDesc: "Pepper-rich authentic rasam powder.",
    features: ["Balanced Flavor", "Pepper Rich", "Authentic Recipe", "Premium"],
  },
  { name: "Curry Powder", 
    image: sambarPowderImg, 
    shortDesc: "All-purpose curry blend", 
    fullDesc: "Versatile curry powder blend suitable for various South Indian curries and gravies. Made with a balanced mix of turmeric, coriander, cumin, and aromatic spices.", 
    features: ["Versatile Use", "Balanced Flavor", "Daily Essential", "Pure Ingredients"], 
  }, 
  { name: "Gojju Variety Pack", 
    image: puliyogareImg, 
    shortDesc: "Assorted traditional gojju", 
    fullDesc: "Special variety pack featuring different types of traditional gojju including mango, tomato, and mixed vegetable variants. Each made with authentic recipes and natural ingredients.", 
    features: ["Multiple Varieties", "Gift Pack", "Traditional Recipes", "No Artificial Colors"], 
  }, 
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌈 LUXURY BACKGROUND (YOUR IMAGE STYLE) */}
      <div className="absolute inset-0 bg-[#eef0f6]" />

      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] 
        bg-[#f4b6a3] opacity-60 blur-[140px] rounded-full" />

      <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] 
        bg-[#f5e6c8] opacity-60 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] 
        bg-[#dfe3ec] opacity-70 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c1a0b]">
            Authentic Iyengar Products
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full" />

          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Crafted with tradition, purity, and divine taste
          </p>
        </div>

        {/* 💎 PRODUCT CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card
              key={index}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-white/60 backdrop-blur-xl 
              border border-white/40 rounded-2xl overflow-hidden
              shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              hover:shadow-[0_20px_60px_rgba(255,140,0,0.25)]
              transition-all duration-500 hover:-translate-y-3"
            >
              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY GLOW */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <CardHeader>
                <CardTitle className="text-2xl text-[#3e2a14]">
                  {product.name}
                </CardTitle>

                <CardDescription className="text-gray-600">
                  {product.shortDesc}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-orange-600 font-medium">
                  View Details →
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🔥 MODAL */}
        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl">

            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl text-[#2c1a0b]">
                    {selectedProduct.name}
                  </DialogTitle>

                  <DialogDescription className="text-gray-600">
                    {selectedProduct.shortDesc}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">

                  {/* IMAGE */}
                  <img
                    src={selectedProduct.image}
                    className="w-full h-72 object-cover rounded-xl shadow-lg"
                  />

                  {/* DESC */}
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProduct.fullDesc}
                  </p>

                  {/* FEATURES */}
                  <div>
                    <h4 className="font-bold text-[#5a2e0c] mb-3">
                      Key Features
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      {selectedProduct.features.map((f: string, i: number) => (
                        <div
                          key={i}
                          className="bg-[#fff7ed] rounded-lg px-3 py-2 text-sm text-center"
                        >
                          ✨ {f}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </>
            )}

          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default Products;