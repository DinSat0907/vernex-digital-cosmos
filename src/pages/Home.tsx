import { Link } from "react-router-dom";
import { ArrowRight, Users, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 30, 89, 0.92), rgba(10, 30, 89, 0.88)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,77,0.1),transparent_50%)]" />
        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight">
              Empowering Growth Through{" "}
              <span className="text-gradient-gold">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              For Everyone, Everywhere
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              A premium digital ecosystem connecting businesses, students, and professionals with 15+ comprehensive services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 hover-glow"
                asChild
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-primary-foreground hover:bg-accent/10 font-semibold text-lg px-8"
                asChild
              >
                <Link to="/join-network">Join Our Network</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Welcome to <span className="text-gradient-gold">Vernex</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vernex is a billion-dollar digital ecosystem that empowers businesses, students, and professionals with innovative technology solutions. We bridge the gap between ambition and achievement through our comprehensive suite of 15 premium services, delivered by a team of passionate experts committed to your success.
            </p>
            <Button
              variant="outline"
              className="border-2 border-accent text-foreground hover:bg-accent/10 font-semibold"
              asChild
            >
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow"
              asChild
            >
              <Link to="/services">
                View All 15 Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <Users size={40} className="text-accent" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-accent">1000+</h3>
              <p className="text-lg text-primary-foreground/80">Network Members</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <Rocket size={40} className="text-accent" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-accent">500+</h3>
              <p className="text-lg text-primary-foreground/80">Projects Completed</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/20 flex items-center justify-center">
                <Award size={40} className="text-accent" />
              </div>
              <h3 className="text-4xl font-heading font-bold text-accent">15</h3>
              <p className="text-lg text-primary-foreground/80">Premium Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Ready to Build with <span className="text-gradient-gold">Vernex</span>?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join our ecosystem and transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 hover-glow"
                asChild
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-primary-foreground hover:bg-accent/10 font-semibold text-lg px-8"
                asChild
              >
                <Link to="/join-network">Join Network</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
