import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const res = await fetch("https://shreeprakarambackend-10.onrender.com/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Enquiry submitted successfully! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          eventDate: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="enquiry" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Book Your Event
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let us make your special occasion truly memorable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enquiry Form */}
          <Card className="border-2 border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">
                Send us an Enquiry
              </CardTitle>
              <CardDescription>
                Fill in the details below and we'll get back to you shortly
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, eventType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding Ceremony</SelectItem>
                      <SelectItem value="marriage">Marriage Ceremony</SelectItem>
                      <SelectItem value="upanayana">Upanayana</SelectItem>
                      <SelectItem value="housewarming">Housewarming</SelectItem>
                      <SelectItem value="naming">Naming Ceremony</SelectItem>
                      <SelectItem value="party">Private Party</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) =>
                      setFormData({ ...formData, eventDate: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us about your event requirements..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
                  size="lg"
                >
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info + Map */}
          <div className="space-y-6">
            <Card className="border-2 border-border shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-muted-foreground">+91 9980012959</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-muted-foreground">
                      Shreeprakaram@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      Address
                    </h4>
                    <p className="text-muted-foreground">
                      NO.194/A , DEVAIAH HUNDI MAIN ROAD,
                      BLOCK-21 MADHUVANA LAYOUT,
                      SRI RAMPURA 2ND STAGE,
                      MYSORE-570023 , KARNATAKA
                    </p>
                  </div>
                </div>

                {/* Embedded Bing Map */}
                <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    title="Our Location"
                    src="https://www.bing.com/maps/embed?h=400&w=500&cp=12.268295~76.621673&lvl=16.4&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-2 border-border shadow-elegant bg-gradient-accent">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-2">
                  Business Hours
                </h3>
                <p className="text-primary-foreground/90">
                  Monday - Sunday: 8:00 AM - 9:00 PM
                </p>
                <p className="text-primary-foreground/80 text-sm mt-2">
                  Available for ceremonies and events 24/7 with advance booking
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
