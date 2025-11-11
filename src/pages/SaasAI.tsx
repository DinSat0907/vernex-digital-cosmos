import { Link } from "react-router-dom";
import { Brain, Camera, Bot, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";

const SaasAI = () => {
  const upcomingProjects = [
    {
      icon: Bot,
      title: "Vernex AI Assistant",
      description: "Intelligent chatbot for automated customer support and engagement",
      status: "In Development",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics Suite",
      description: "Advanced analytics platform for business intelligence and forecasting",
      status: "Coming Soon",
    },
    {
      icon: Sparkles,
      title: "Automation Workflows",
      description: "No-code automation tools for streamlining business processes",
      status: "Planned",
    },
  ];

  const features = [
    "Real-time facial recognition with 99.9% accuracy",
    "Automated attendance logging and reporting",
    "Cloud-based data storage and management",
    "Multi-location support with centralized dashboard",
    "Mobile app integration for remote access",
    "Advanced analytics and insights",
    "Seamless integration with existing HR systems",
    "Contactless and hygienic attendance marking",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-vernex-navy via-primary to-secondary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,77,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal direction="fade">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3 bg-accent/20 backdrop-blur-sm px-6 py-3 rounded-full border border-accent/30">
                <Brain size={24} className="text-accent" />
                <span className="text-accent font-semibold">Future-Ready Technology</span>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Vernex <span className="text-gradient-gold">SaaS & AI</span> Vision
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={400}>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Building intelligent solutions that transform businesses through the power of AI, automation, and cloud technology
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={600}>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow text-lg px-8"
              asChild
            >
              <Link to="/contact">
                Get Early Access <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-gradient-gold">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Vernex, we're committed to developing cutting-edge SaaS and AI solutions that solve real-world problems. 
                Our focus is on creating intelligent systems that enhance productivity, automate workflows, and provide 
                actionable insights for businesses of all sizes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={100}>
              <Card className="p-8 text-center bg-card border-2 border-accent/20 hover-lift h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Brain size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Leveraging advanced machine learning and neural networks for intelligent automation
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <Card className="p-8 text-center bg-card border-2 border-accent/20 hover-lift h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Sparkles size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Cloud-native architecture that grows with your business needs
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <Card className="p-8 text-center bg-card border-2 border-accent/20 hover-lift h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <TrendingUp size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Business Impact</h3>
                <p className="text-muted-foreground">
                  Measurable results that drive growth and operational efficiency
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 FIRST PRODUCT
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Face Recognition <span className="text-gradient-gold">Attendance System</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Revolutionary AI-powered attendance solution that combines accuracy, speed, and ease of use
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading font-bold text-foreground">
                    Next-Gen Attendance Management
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our Face Recognition Attendance System uses advanced AI algorithms to provide contactless, 
                    accurate, and instantaneous attendance tracking. Perfect for offices, educational institutions, 
                    and enterprises of all sizes.
                  </p>
                  <div className="space-y-3">
                    {features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <Card className="p-8 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground border-0">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-32 h-32 rounded-3xl bg-accent/20 flex items-center justify-center">
                      <Camera size={64} className="text-accent" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-center mb-4">Key Features</h4>
                  <div className="space-y-3">
                    {features.slice(4).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-1" />
                        <p className="text-primary-foreground/90 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="up">
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow text-lg px-8"
                  asChild
                >
                  <Link to="/contact">Request Demo</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Upcoming <span className="text-gradient-gold">Innovations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're constantly innovating and building the next generation of AI-powered tools
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {upcomingProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <Card className="p-8 bg-card border-2 border-accent/20 hover-lift h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <Icon size={32} className="text-accent" />
                      </div>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-vernex-navy via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">
                Discover <span className="text-gradient-gold">Future Products</span>
              </h2>
              <p className="text-xl text-primary-foreground/90">
                Be among the first to experience our innovative AI and SaaS solutions. 
                Join our early access program today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 hover-glow"
                  asChild
                >
                  <Link to="/contact">Get Early Access</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-primary-foreground hover:bg-accent/10 font-semibold text-lg px-8"
                  asChild
                >
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SaasAI;
