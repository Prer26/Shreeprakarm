import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and About */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={logo}
                alt="Shree Prakaram Logo"
                className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-110"
              />
              <h3 className="text-2xl font-heading font-bold">
                Shree Prakaram Caterers
              </h3>
            </div>
            <p className="text-primary-foreground/80">
              Authentic Brahmin-style catering service bringing traditional Iyengar flavours to your sacred occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#enquiry" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Wedding Ceremonies</li>
              <li>Upanayana</li>
              <li>Housewarming</li>
              <li>Naming Ceremonies</li>
              <li>Private Parties</li>
              <li>Traditional Products</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>
            © {new Date().getFullYear()} Shree Prakaram Caterers. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Serving tradition with devotion, creating memories with every meal.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
