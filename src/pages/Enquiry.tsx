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
import { Phone, Mail, MapPin, Sparkles, Clock, Send, Loader2 } from "lucide-react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.shreepraakaaramcaterers.in/api/enquiries", {
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="enquiry"
      className="relative isolate overflow-hidden bg-[#F7F1E7] py-24 sm:py-28 lg:py-32 selection:bg-[#660000]/20 selection:text-[#3D0E1A]"
    >
      {/* 🎨 Ambient Beige Background Details */}
      <div 
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(214,179,106,0.18),transparent_36%),radial-gradient(ellipse_at_bottom_right,rgba(199,155,83,0.13),transparent_34%)]" />
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#E8D9C2]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#E9DCC9]/70 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 max-w-7xl">
        
        {/* 👑 Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#DCC9A9] bg-[#FFFDF8]/75 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#660000] shadow-sm backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#800000]" />
            Get In Touch
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#3D0E1A] sm:text-5xl md:text-6xl">
            Book Your <span className="italic text-[#660000]">Event</span>
          </h2>

          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C79B53]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#660000] bg-[#E9D7BF]" />
            <span className="h-px w-12 bg-[#C79B53]/70" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#796858] sm:text-base sm:leading-8">
            Let us bring authentic Iyengar flavors and traditional Brahmin hospitality to make your sacred occasion truly memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
          
          {/* 📝 Enquiry Form Card */}
          <Card className="rounded-[1.75rem] border border-[#E5D6C0] bg-[#FFFDF8] p-2 shadow-[0_14px_45px_-30px_rgba(78,52,46,0.25)]">
            <CardHeader className="p-6 sm:p-8 pb-4">
              <CardTitle className="font-serif text-2xl font-bold text-[#3D0E1A] sm:text-3xl">
                Send us an Enquiry
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-[#796858] mt-1">
                Fill in your details below and our team will get back to you shortly.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Name <span className="text-[#800000]">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Email <span className="text-[#800000]">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Phone Number <span className="text-[#800000]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                  />
                </div>

                {/* Event Type Select */}
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Event Type <span className="text-[#800000]">*</span>
                  </Label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                  >
                    <SelectTrigger className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:ring-[#660000] text-[#3D0E1A]">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[#E5D6C0] bg-[#FFFDF8] text-[#3D0E1A]">
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

                {/* Event Date Input */}
                <div className="space-y-2">
                  <Label htmlFor="eventDate" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Event Date
                  </Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A]"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your event requirements..."
                    rows={4}
                    className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-[#660000] via-[#800000] to-[#500000] text-white hover:brightness-110 shadow-md py-6 text-xs font-semibold uppercase tracking-[0.16em] transition-all"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Submit Enquiry
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* 📍 Contact Info + Embedded Map */}
          <div className="space-y-6">
            
            {/* Contact Details Card */}
            <Card className="rounded-[1.75rem] border border-[#E5D6C0] bg-[#FFFDF8] p-2 shadow-[0_14px_45px_-30px_rgba(78,52,46,0.25)]">
              <CardHeader className="p-6 pb-2">
                <CardTitle className="font-serif text-2xl font-bold text-[#3D0E1A]">
                  Contact Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6 pt-2 space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#660000] text-[#FFF5F7] shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#3D0E1A] text-base mb-0.5">
                      Phone Number
                    </h4>
                    <p className="text-sm font-medium text-[#660000] hover:underline cursor-pointer">
                      +91 9980012959
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#660000] text-[#FFF5F7] shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#3D0E1A] text-base mb-0.5">
                      Email Address
                    </h4>
                    <p className="text-sm font-medium text-[#660000] hover:underline cursor-pointer">
                      Shreeprakaram@gmail.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#660000] text-[#FFF5F7] shadow-sm">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-[#3D0E1A] text-base mb-0.5">
                      Our Location
                    </h4>
                    <p className="text-xs sm:text-sm text-[#796858] leading-relaxed">
                      NO.194/A, DEVAIAH HUNDI MAIN ROAD,<br />
                      BLOCK-21 MADHUVANA LAYOUT,<br />
                      SRI RAMPURA 2ND STAGE,<br />
                      MYSORE-570023, KARNATAKA
                    </p>
                  </div>
                </div>

                {/* Embedded Bing Map Frame */}
                <div className="mt-4 rounded-2xl overflow-hidden border border-[#E5D6C0] shadow-md">
                  <iframe
                    title="Our Location"
                    src="https://www.bing.com/maps/embed?h=400&w=500&cp=12.268295~76.621673&lvl=16.4&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                  ></iframe>
                </div>

              </CardContent>
            </Card>

            {/* ⏰ Business Hours Banner */}
            <div className="rounded-[1.75rem] border border-[#800000] bg-[#660000] p-6 sm:p-8 text-center text-[#FFF5F7] shadow-xl relative overflow-hidden">
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E6B15C]/15 blur-2xl" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#500000] text-[#E6B15C] mb-3 border border-[#800000]">
                  <Clock className="h-5 w-5" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2">
                  Business Hours
                </h3>
                <p className="text-sm text-[#E6CCD2] font-medium">
                  Monday - Sunday: 8:00 AM - 9:00 PM
                </p>
                <p className="text-xs text-[#E6B15C] mt-2 italic">
                  Available 24/7 for ceremonies & special events with advance booking.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Enquiry;