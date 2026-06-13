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

  // 🔥 FETCH REVIEWS
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://shreeprakarambackend-10.onrender.com/api/reviews");          

        if (!res.ok) {
          toast.error("Failed to load reviews.");
          return;
        }

        const data = await res.json();

        console.log("API DATA:", data); // 👈 DEBUG

        // ✅ HANDLE BOTH CASES (array or object)
        if (Array.isArray(data)) {
          setAllReviews(data);
        } else if (Array.isArray(data.reviews)) {
          setAllReviews(data.reviews);
        } else {
          setAllReviews([]); // fallback
        }

      } catch (error) {
        console.error(error);
        toast.error("Error fetching reviews.");
      }
    };

    fetchReviews();
  }, []);

  // 🔄 HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 SUBMIT REVIEW
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

        // ✅ Always keep array safe
        setAllReviews((prev) => [newReview, ...(prev || [])]);

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

        {/* 🏷 Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Client Testimonials
          </h2>
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied clients have to say
          </p>
        </div>

        {/* ⭐ REVIEWS LIST */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Array.isArray(allReviews) && allReviews.length > 0 ? (
            allReviews.map((review, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition">
                <CardContent className="p-8">

                  {/* ⭐ Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: Number(review.rating || 5) }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* 💬 Review */}
                  <p className="mb-4 italic">"{review.text}"</p>

                  {/* 👤 Info */}
                  <div className="border-t pt-3">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.event}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>

                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-2 text-gray-500">
              No reviews yet. Be the first to write one!
            </p>
          )}
        </div>

        {/* 📝 FORM */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="p-6">
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
                rows={4}
                required
              />

              <div className="flex items-center gap-2">
                Rating:
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  className="border rounded p-1"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
              >
                Submit Review
              </button>
            </form>
          </Card>
        </div>

        {/* 📊 AVERAGE */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-6">
            <CardContent>
              <p className="text-lg">
                {allReviews.length} satisfied clients ⭐
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Reviews;