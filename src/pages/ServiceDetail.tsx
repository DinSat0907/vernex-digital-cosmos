import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center text-primary-foreground/80 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Icon size={40} className="text-accent" />
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-primary-foreground/90">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{service.overview}</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Our Approach</h2>
            <div className="space-y-4">
              {service.approach.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let's discuss how we can help bring your project to life
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow"
              asChild
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
