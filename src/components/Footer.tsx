import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/vernex-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Vernex" className="h-12 w-auto mb-4" />
            <p className="text-primary-foreground/80 mb-4">
              Empowering Growth Through Technology — For Everyone, Everywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-accent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/join-network" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Join Network
                </Link>
              </li>
              <li>
                <Link to="/social-connect" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Social Connect
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-accent mb-4">Popular Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/graphic-design" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-accent mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@vernex.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  contact@vernex.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2025 Vernex Digital Ecosystem. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
