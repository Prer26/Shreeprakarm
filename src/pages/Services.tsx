import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import weddingImg from "@/assets/wedding.jpg";
import upanayanaImg from "@/assets/upanayana.jpg";
import housewarmingImg from "@/assets/housewarming.jpg";
import namingImg from "@/assets/naming-ceremony.jpg";
import partyImg from "@/assets/privateparty.jpg";
import marriageImg from "@/assets/marriage.jpg";

const services = [
  {
    title: "Wedding Ceremonies",
    icon: "💍",
    image: weddingImg,
    description: "Complete catering for traditional Brahmin weddings with authentic rituals and divine cuisine",
  },
  {
    title: "Marriage Ceremonies",
    icon: "💒",
    image: marriageImg,
    description: "Sacred marriage celebrations with traditional banana leaf meals and ceremonial offerings",
  },
  {
    title: "Upanayana",
    icon: "🕉️",
    image: upanayanaImg,
    description: "Sacred thread ceremony catering with traditional dishes and ritual-specific preparations",
  },
  {
    title: "Private Parties",
    icon: "🎉",
    image: partyImg,
    description: "Elegant gatherings with authentic Iyengar cuisine served in traditional or modern style",
  },
  {
    title: "Housewarming",
    icon: "🏡",
    image: housewarmingImg,
    description: "Griha Pravesh celebrations with auspicious meals and traditional blessing ceremonies",
  },
  {
    title: "Naming Ceremonies",
    icon: "👶",
    image: namingImg,
    description: "Namakarana celebrations with pure, sattvic food for this sacred occasion",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Our Sacred Services
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Traditional catering for every auspicious occasion in your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-4 right-4 text-5xl">{service.icon}</div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-base text-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
