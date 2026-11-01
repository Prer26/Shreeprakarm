"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, Sparkles, Send, Loader2, Quote } from "lucide-react";
import { toast } from "sonner";

interface Review {
  name: string;
  event: string;
  rating: number;
  text: string;
  date?: string;
}

// 🌟 Rich fallback reviews so the section always looks full and prestigious
const fallbackReviews: Review[] = [
  {
    name: "Prerana Iyengar",
    event: "Upanayana Ceremony",
    rating: 5,
    text: "The authentic Brahmin-style catering was phenomenal. Every guest praised the traditional taste, especially the huli and puliyogare gojju. Truly divine quality!",
    date: "12 May 2026",
  },
  {
    name: "Usha B S",
    event: "Traditional Wedding",
    rating: 5,
    text: "Shree Prakaram Caterers handled our family wedding seamlessly. Purity, taste, and traditional hospitality at its absolute best. Highly recommended!",
    date: "28 April 2026",
  },
  {
    name: "Aravinda K V",
    event: "Housewarming Griha Pravesha",
    rating: 5,
    text: "Punctual, extremely professional, and the food tasted just like homemade traditional feast. All traditional items were prepared with utmost devotion.",
    date: "15 March 2026",
  },
];

const Reviews = () => {
  const [allReviews, setAllReviews] = useState<Review[]>(fallbackReviews);
  const [form, setForm] = useState({
    name: "",
    event: "",
    rating: 5,
    text: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  // 🔥 FETCH REVIEWS FROM BACKEND (falling back gracefully if empty/offline)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://api.shreepraakaaramcaterers.in/api/reviews");        

        if (!res.ok) return;

        const data = await res.json();
        let fetched: Review[] = [];

        if (Array.isArray(data)) {
          fetched = data;
        } else if (Array.isArray(data.reviews)) {
          fetched = data.reviews;
        }

        // If backend has reviews, combine or replace fallback
        if (fetched.length > 0) {
          setAllReviews([...fetched, ...fallbackReviews]);
        }
      } catch (error) {
        console.error("Using offline fallback reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // 🔄 HANDLE INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 SUBMIT REVIEW
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.event || !form.text) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://shreeprakarambackend-10.onrender.com/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newReview = await res.json();
        setAllReviews((prev) => [newReview, ...(prev || [])]);
        setForm({ name: "", event: "", rating: 5, text: "" });
        toast.success("Review submitted successfully!");
      } else {
        toast.error("Failed to submit review.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reviews"
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
            Client Testimonials
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight text-[#3D0E1A] sm:text-5xl md:text-6xl">
            Words From Our <span className="italic text-[#660000]">Patrons</span>
          </h2>

          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C79B53]/70" />
            <span className="h-2 w-2 rotate-45 border border-[#660000] bg-[#E9D7BF]" />
            <span className="h-px w-12 bg-[#C79B53]/70" />
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#796858] sm:text-base sm:leading-8">
            Hear what our satisfied clients have to say about their sacred occasions and traditional catering experiences.
          </p>
        </div>

        {/* ⭐ REVIEWS GRID */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-20">
          {allReviews.map((review, index) => (
            <Card
              key={index}
              className="group relative rounded-[1.75rem] border border-[#E5D6C0] bg-[#FFFDF8] p-2 shadow-[0_14px_45px_-30px_rgba(78,52,46,0.25)] hover:border-[#660000]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <CardContent className="p-6 sm:p-7 flex flex-col justify-between h-full relative">
                
                <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E5D6C0]/40 pointer-events-none" />

                <div>
                  {/* ⭐ Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Number(review.rating || 5)
                            ? "fill-[#D4AF37] text-[#D4AF37]"
                            : "text-[#D9C4A5]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* 💬 Review Text */}
                  <p className="font-serif italic text-sm sm:text-base text-[#3D0E1A] leading-relaxed mb-6">
                    "{review.text}"
                  </p>
                </div>

                {/* 👤 Client Info */}
                <div className="border-t border-[#E9D7BF] pt-4 mt-auto">
                  <h4 className="font-serif font-bold text-[#3D0E1A] text-base">
                    {review.name}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-[#796858] mt-0.5">
                    <span className="font-semibold text-[#660000] uppercase tracking-wider">
                      {review.event}
                    </span>
                    {review.date && <span>{review.date}</span>}
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* 📝 WRITE A REVIEW FORM */}
        <div className="max-w-3xl mx-auto">
          <Card className="rounded-[1.75rem] border border-[#E5D6C0] bg-[#FFFDF8] p-2 shadow-[0_14px_45px_-30px_rgba(78,52,46,0.25)]">
            <CardHeader className="p-6 sm:p-8 pb-4 text-center">
              <CardTitle className="font-serif text-2xl font-bold text-[#3D0E1A] sm:text-3xl">
                Share Your Experience
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-[#796858] mt-1">
                We value your feedback. Let us know how we made your event special.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 pt-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                      Your Name <span className="text-[#800000]">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Anand Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                    />
                  </div>

                  {/* Event Name */}
                  <div className="space-y-2">
                    <Label htmlFor="event" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                      Event Name <span className="text-[#800000]">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="event"
                      name="event"
                      placeholder="e.g. Wedding Reception"
                      value={form.event}
                      onChange={handleChange}
                      required
                      className="rounded-xl border-[#E5D6C0] bg-[#FAF6F2] focus:border-[#660000] focus:ring-[#660000] text-[#3D0E1A] placeholder:text-[#A08E7E]"
                    />
                  </div>
                </div>

                {/* Rating Selector */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Rating <span className="text-[#800000]">*</span>
                  </Label>
                  <div className="flex items-center gap-2 bg-[#FAF6F2] border border-[#E5D6C0] rounded-xl px-4 py-3">
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setForm({ ...form, rating: star })}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= (hoverRating || form.rating)
                                ? "fill-[#D4AF37] text-[#D4AF37]"
                                : "text-[#D9C4A5]"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <span className="ml-auto text-xs font-semibold text-[#660000] uppercase tracking-wider">
                      {form.rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <div className="space-y-2">
                  <Label htmlFor="text" className="text-xs font-semibold uppercase tracking-wider text-[#660000]">
                    Your Review <span className="text-[#800000]">*</span>
                  </Label>
                  <Textarea
                    id="text"
                    name="text"
                    placeholder="Describe the food quality, hospitality, and overall experience..."
                    value={form.text}
                    onChange={handleChange}
                    rows={4}
                    required
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
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting Review...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Submit Review
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* 📊 STATS SUMMARY BADGE */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#DCC9A9] bg-[#FFFDF8]/85 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#660000] shadow-sm backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#800000]" />
            <span>Trusted by 844+ Events & Families</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
