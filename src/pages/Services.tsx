import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive 360° Digital Solutions for Every Need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to execution, Vernex offers 15 premium services designed to empower businesses, students, and professionals. Each service is delivered by expert professionals committed to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Why Choose <span className="text-gradient-gold">Vernex</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">360°</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Comprehensive Solutions</h3>
              <p className="text-muted-foreground">
                Everything you need under one roof — from design to deployment
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">∞</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Accessible & Affordable</h3>
              <p className="text-muted-foreground">
                Premium quality services priced for everyone, everywhere
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">⚡</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Future-Ready</h3>
              <p className="text-muted-foreground">
                Cutting-edge technology and innovative approaches
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">★</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Expert Team</h3>
              <p className="text-muted-foreground">
                Multi-domain skilled professionals dedicated to your success
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">24/7</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock assistance and project management
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-accent">🌐</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Global Ecosystem</h3>
              <p className="text-muted-foreground">
                Connect with a worldwide network of talent and opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
