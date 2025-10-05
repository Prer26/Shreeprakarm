import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import huliPudiImg from "@/assets/huli-pudi.jpg";
import puliyogareImg from "@/assets/puliyogare-gojju.jpg";
import sambarPowderImg from "@/assets/sambar-powder.jpg";
import rasamPowderImg from "@/assets/rasam-powder.jpg";

const products = [
  {
    name: "Huli Pudi",
    image: huliPudiImg,
    shortDesc: "Traditional spice powder blend",
    fullDesc: "Our authentic Huli Pudi is a carefully crafted blend of roasted spices including coriander, cumin, fenugreek, and red chilies. Perfect for making traditional huli (sambar-style curry). Made using age-old family recipes with the finest ingredients.",
    features: ["100% Natural", "No Preservatives", "Traditional Recipe", "Authentic Iyengar Flavor"],
  },
  {
    name: "Puliyogare Gojju",
    image: puliyogareImg,
    shortDesc: "Tamarind rice paste concentrate",
    fullDesc: "Premium Puliyogare Gojju (tamarind paste) made with pure tamarind extract, peanuts, sesame seeds, and aromatic spices. Just mix with hot rice for instant, authentic temple-style tamarind rice. A staple in every Iyengar household.",
    features: ["Ready to Mix", "Authentic Temple Flavor", "Long Shelf Life", "Premium Quality"],
  },
  {
    name: "Sambar Powder",
    image: sambarPowderImg,
    shortDesc: "Aromatic sambar spice mix",
    fullDesc: "Traditional Sambar Powder blended with coriander seeds, dried red chilies, fenugreek, cumin, and curry leaves. Creates the perfect aromatic base for authentic South Indian sambar. Freshly ground to preserve maximum flavor.",
    features: ["Freshly Ground", "Aromatic", "Traditional Blend", "Chemical-Free"],
  },
  {
    name: "Rasam Powder",
    image: rasamPowderImg,
    shortDesc: "Traditional rasam spice blend",
    fullDesc: "Our signature Rasam Powder combines black pepper, cumin, coriander, dried red chilies, and curry leaves in perfect proportions. Essential for making authentic South Indian rasam with its distinctive tangy, peppery flavor.",
    features: ["Perfectly Balanced", "Pepper-rich", "Authentic Recipe", "Premium Ingredients"],
  },
  {
    name: "Curry Powder",
    image: sambarPowderImg,
    shortDesc: "All-purpose curry blend",
    fullDesc: "Versatile curry powder blend suitable for various South Indian curries and gravies. Made with a balanced mix of turmeric, coriander, cumin, and aromatic spices.",
    features: ["Versatile Use", "Balanced Flavor", "Daily Essential", "Pure Ingredients"],
  },
  {
    name: "Gojju Variety Pack",
    image: puliyogareImg,
    shortDesc: "Assorted traditional gojju",
    fullDesc: "Special variety pack featuring different types of traditional gojju including mango, tomato, and mixed vegetable variants. Each made with authentic recipes and natural ingredients.",
    features: ["Multiple Varieties", "Gift Pack", "Traditional Recipes", "No Artificial Colors"],
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  return (
    <section id="products" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Authentic Iyengar Products
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional powders and gojju made with time-honored recipes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group cursor-pointer hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-border hover:border-primary"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {product.shortDesc}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-primary font-medium hover:underline">
                  Click for details →
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl">
            {selectedProduct && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-heading text-primary">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg">
                    {selectedProduct.shortDesc}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-80 object-cover rounded-2xl shadow-elegant"
                  />
                  
                  <p className="text-foreground leading-relaxed">
                    {selectedProduct.fullDesc}
                  </p>
                  
                  <div>
                    <h4 className="font-heading font-bold text-primary mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-foreground">
                          <span className="text-accent">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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
