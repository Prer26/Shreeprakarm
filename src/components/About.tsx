const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
            Our Sacred Tradition
          </h2>
          
          <div className="h-1 w-32 bg-gradient-accent mx-auto rounded-full" />
          
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Shree Prakaram Caterers is a renowned name in authentic Brahmin-style catering, 
              dedicated to preserving and celebrating the rich culinary heritage of Iyengar traditions. 
              With decades of experience, we bring the divine essence of traditional South Indian cuisine 
              to your most sacred and memorable occasions.
            </p>
            
            <p>
              Our specialty lies in catering for weddings, upanayana (sacred thread ceremonies), 
              naming ceremonies (namakarana), housewarming celebrations (griha pravesh), and private gatherings. 
              Each dish is prepared following time-honored recipes passed down through generations, 
              ensuring authenticity in every bite.
            </p>
            
            <p>
              We take immense pride in our meticulous attention to detail, from sourcing the finest 
              ingredients to maintaining traditional cooking methods. Our team of experienced cooks 
              ensures that every meal served on the auspicious banana leaf is a divine experience, 
              blessed with the authentic flavors of Iyengar cuisine.
            </p>
            
            <p className="text-xl font-heading text-primary italic">
              "Serving tradition with devotion, creating memories with every meal"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
