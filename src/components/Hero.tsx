import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-banana-leaf.jpg";

const Hero = () => {
  const scrollToEnquiry = () => {
    const element = document.getElementById("enquiry");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary leading-tight">
              Authentic Brahmin Catering for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Traditional Iyengar flavours served with divine perfection
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                onClick={scrollToEnquiry}
                className="bg-gradient-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant text-lg px-8"
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur-2xl opacity-20" />
            <img
              src={heroImage}
              alt="Authentic Brahmin Banana Leaf Meal"
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
