import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { toast } from "sonner";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    event: "",
    rating: 5,
    text: "",
  });

  // Fetch reviews from backend on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/reviews");
        if (res.ok) {
          const data = await res.json();
          setAllReviews(data);
        } else {
          toast.error("Failed to load reviews.");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error fetching reviews.");
      }
    };
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.event || !form.text) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const newReview = await res.json();
        setAllReviews([newReview, ...allReviews]);
        setForm({ name: "", event: "", rating: 5, text: "" });
        toast.success("Review submitted successfully!");
      } else {
        toast.error("Failed to submit review.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <section id="reviews" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Client Testimonials
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about their experiences
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {allReviews.map((review, index) => (
            <Card
              key={index}
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-elegant"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <h4 className="font-heading font-bold text-primary">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.event}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="border-2 border-primary p-6">
            <h3 className="text-2xl font-bold mb-4">Write a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="event"
                placeholder="Event Name"
                value={form.event}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="text"
                placeholder="Write your review"
                value={form.text}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
              <label className="flex items-center gap-2">
                Rating:
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="border rounded p-1"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
              >
                Submit Review
              </button>
            </form>
          </Card>
        </div>

        {/* Average Rating */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-2 border-primary bg-gradient-hero">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-4xl font-heading font-bold text-primary">5.0</span>
              </div>
              <p className="text-foreground text-lg">
                Average rating from {allReviews.length}+ satisfied clients
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
