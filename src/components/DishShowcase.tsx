import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const dishes = [
  {
    name: "Rice",
    description: "Steamed white rice, the foundation of every meal",
    image: "https://www.mashed.com/img/gallery/the-trick-to-rescue-your-mushy-rice/l-intro-1690125444.jpg",
  },
  {
    name: "Sambar",
    description: "Lentil-based vegetable stew with aromatic spices",
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/10/Sambar-2-3.jpg",
  },
  {
    name: "Rasam",
    description: "Tangy tamarind soup with pepper and cumin",
    image: "https://www.blueberriesfoods.com/wp-content/uploads/2018/10/rasam-1.png",
  },
  {
    name: "Kootu",
    description: "Mixed vegetables with lentils and coconut",
    image: "https://www.subbuskitchen.com/wp-content/uploads/2013/03/Poricha-Kootu_WEB_3.jpg",
  },
  {
    name: "Poriyal",
    description: "Dry vegetable stir-fry with coconut and mustard",
    image: "https://gayathriscookspot.com/wp-content/uploads/2012/02/DSC_0001.jpg",
  },
  {
    name: "Curd",
    description: "Fresh homemade yogurt for cooling balance",
    image: "https://www.chezshuchi.com/images/homemade-dahi51.JPG",
  },
  {
    name: "Payasam",
    description: "Sweet rice pudding with jaggery and cardamom",
    image: "https://www.cookwithkushi.com/wp-content/uploads/2019/10/best_rice_kheer_recipe_doodh_pak.jpg"
  }
];

const DishShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDish = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  const prevDish = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  return (
    <section id="dishes" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Traditional Banana Leaf Meal
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the complete view of our authentic Brahmin thali
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-elegant overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="relative mb-8 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={dishes[currentIndex].image}
                  alt={dishes[currentIndex].name}
                  className="rounded-2xl w-full max-h-[400px] object-cover"
                />

                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 p-4 rounded-lg text-white">
                  <h3 className="text-2xl font-bold">{dishes[currentIndex].name}</h3>
                  <p className="text-sm">{dishes[currentIndex].description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevDish}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Dish {currentIndex + 1} of {dishes.length}
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextDish}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DishShowcase;
