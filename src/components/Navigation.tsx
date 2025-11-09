import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vernex-logo.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Join Network", path: "/join-network" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Vernex" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-primary-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
