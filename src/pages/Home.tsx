import { Link } from "react-router-dom";
import { ArrowRight, Users, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 30, 89, 0.94), rgba(10, 30, 89, 0.90)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,77,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,169,77,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,169,77,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="max-w-5xl mx-auto space-y-10 animate-fade-in-up">
            <div className="inline-block px-6 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-4">
              <p className="text-sm font-medium text-accent">Digital Ecosystem • 15+ Services • Global Network</p>
            </div>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary-foreground leading-[1.1] tracking-tight">
              Empowering Growth<br />Through{" "}
              <span className="text-gradient-gold relative inline-block">
                Technology
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M0 8C50 4 100 2 150 4C200 6 250 8 300 6" stroke="currentColor" strokeWidth="3" className="text-accent/50"/>
                </svg>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium max-w-3xl mx-auto">
              For Everyone, Everywhere
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-3xl mx-auto leading-relaxed">
              A premium digital ecosystem connecting businesses, students, and professionals with comprehensive, world-class solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-10 py-6 hover-glow shadow-[var(--shadow-gold)]"
                asChild
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={22} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent/50 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-accent/10 hover:border-accent font-bold text-lg px-10 py-6"
                asChild
              >
                <Link to="/join-network">Join Our Network</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-accent/40 rounded-full flex justify-center pt-2.5 backdrop-blur-sm bg-primary-foreground/5">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-2">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">Who We Are</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground leading-tight">
                Welcome to <span className="text-gradient-gold">Vernex</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Vernex is a billion-dollar digital ecosystem that empowers businesses, students, and professionals with innovative technology solutions.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto">
                We bridge the gap between ambition and achievement through our comprehensive suite of 15 premium services, delivered by a team of passionate experts committed to your success.
              </p>
              <Button
                variant="outline"
                className="border-2 border-accent text-foreground hover:bg-accent/10 font-bold mt-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-medium)] transition-all"
                size="lg"
                asChild
              >
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,169,77,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">What We Offer</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Services</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive 360° digital solutions tailored to your unique needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.slice(0, 6).map((service, index) => (
              <ScrollReveal key={service.id} direction="up" delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  slug={service.slug}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="text-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold hover-glow shadow-[var(--shadow-gold)] px-10 py-6 text-lg"
                asChild
              >
                <Link to="/services">
                  View All 15 Services <ArrowRight className="ml-2" size={22} />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-4">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider">Client Stories</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
                What Our <span className="text-gradient-gold">Clients Say</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent mb-6" />
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with Vernex.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <TestimonialCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-32 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(201,169,77,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our <span className="text-gradient-gold">Impact</span>
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <div className="text-center space-y-6 group">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center backdrop-blur-sm border border-accent/20 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-medium)]">
                  <Users size={48} className="text-accent" />
                </div>
                <h3 className="text-6xl font-heading font-bold text-accent">1000+</h3>
                <p className="text-xl text-primary-foreground/90 font-medium">Network Members</p>
                <p className="text-sm text-primary-foreground/70">Growing community worldwide</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center space-y-6 group">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center backdrop-blur-sm border border-accent/20 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-medium)]">
                  <Rocket size={48} className="text-accent" />
                </div>
                <h3 className="text-6xl font-heading font-bold text-accent">500+</h3>
                <p className="text-xl text-primary-foreground/90 font-medium">Projects Completed</p>
                <p className="text-sm text-primary-foreground/70">Delivered with excellence</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center space-y-6 group">
                <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center backdrop-blur-sm border border-accent/20 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-medium)]">
                  <Award size={48} className="text-accent" />
                </div>
                <h3 className="text-6xl font-heading font-bold text-accent">15</h3>
                <p className="text-xl text-primary-foreground/90 font-medium">Premium Services</p>
                <p className="text-sm text-primary-foreground/70">Comprehensive solutions</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-vernex-navy via-primary to-vernex-navy-light text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,77,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(201,169,77,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(201,169,77,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="container mx-auto px-4 text-center relative">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-2">
                <p className="text-sm font-semibold text-accent">Get Started Today</p>
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
                Ready to Build with <span className="text-gradient-gold">Vernex</span>?
              </h2>
              <div className="w-32 h-1 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="text-2xl text-primary-foreground/90 font-medium max-w-2xl mx-auto leading-relaxed">
                Join our ecosystem and transform your ideas into reality
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-12 py-7 hover-glow shadow-[var(--shadow-gold)]"
                  asChild
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent/50 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground hover:bg-accent/10 hover:border-accent font-bold text-lg px-12 py-7"
                  asChild
                >
                  <Link to="/join-network">Join Network</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
