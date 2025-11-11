import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechStart India",
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=C9A94D&color=0A1E59&size=200",
    rating: 5,
    text: "Vernex transformed our digital presence completely. Their web development team delivered beyond our expectations. The attention to detail and professional approach is unmatched.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Director",
    company: "GrowthHub",
    image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=C9A94D&color=0A1E59&size=200",
    rating: 5,
    text: "The digital marketing services from Vernex helped us achieve 300% ROI in just 6 months. Their strategic approach and execution are exceptional. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Founder",
    company: "EduTech Solutions",
    image: "https://ui-avatars.com/api/?name=Amit+Patel&background=C9A94D&color=0A1E59&size=200",
    rating: 5,
    text: "Working with Vernex has been a game-changer. Their app development team created a flawless mobile experience. Professional, responsive, and innovative.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Operations Manager",
    company: "RetailPro",
    image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=C9A94D&color=0A1E59&size=200",
    rating: 5,
    text: "Vernex's comprehensive approach to our project was impressive. From design to deployment, everything was handled with utmost professionalism. Excellent work!",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="p-8 md:p-12 bg-card border-2 border-accent/20 relative overflow-hidden">
        <div className="absolute top-6 right-6 text-accent/10">
          <Quote size={80} />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-24 h-24 rounded-full border-4 border-accent/30"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-muted-foreground mb-2">
                {currentTestimonial.role} at {currentTestimonial.company}
              </p>
              <div className="flex gap-1 justify-center md:justify-start">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed italic mb-8">
            "{currentTestimonial.text}"
          </p>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-accent" : "w-2 bg-accent/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="border-accent/30 hover:bg-accent/10"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="border-accent/30 hover:bg-accent/10"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="text-center">
          <div className="text-3xl font-heading font-bold text-accent mb-2">500+</div>
          <div className="text-sm text-muted-foreground">Projects Delivered</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-heading font-bold text-accent mb-2">98%</div>
          <div className="text-sm text-muted-foreground">Client Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-heading font-bold text-accent mb-2">1000+</div>
          <div className="text-sm text-muted-foreground">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-heading font-bold text-accent mb-2">24/7</div>
          <div className="text-sm text-muted-foreground">Support Available</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
