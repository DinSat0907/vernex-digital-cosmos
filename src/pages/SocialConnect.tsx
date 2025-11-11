import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SocialConnect = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com/vernex",
      color: "from-purple-600 to-pink-500",
      description: "Follow us for updates and behind-the-scenes content",
    },
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com/vernex",
      color: "from-blue-600 to-blue-500",
      description: "Join our community and stay connected",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      link: "https://wa.me/91XXXXXXXXXX",
      color: "from-green-600 to-green-500",
      description: "Chat with us directly for quick queries",
    },
    {
      name: "Phone Call",
      icon: Phone,
      link: "tel:+91XXXXXXXXXX",
      color: "from-blue-500 to-cyan-500",
      description: "Call us for immediate assistance",
    },
    {
      name: "Email",
      icon: Mail,
      link: "mailto:contact@vernex.com",
      color: "from-orange-500 to-red-500",
      description: "Send us a detailed message",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Connect with <span className="text-gradient-gold">Vernex</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Choose your preferred way to reach out to us
          </p>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Let's Stay <span className="text-gradient-gold">Connected</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We're available across multiple platforms. Choose the one that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-8 h-full bg-card hover:bg-accent/5 transition-all duration-300 hover-lift border-2 border-transparent hover:border-accent/30 cursor-pointer">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={40} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                          {social.name}
                        </h3>
                        <p className="text-muted-foreground">{social.description}</p>
                        <Button
                          variant="outline"
                          className="border-2 border-accent/50 text-foreground hover:bg-accent/10 font-semibold mt-2"
                        >
                          Connect Now
                        </Button>
                      </div>
                    </Card>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground border-0">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-heading font-bold">Direct Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Phone size={24} className="text-accent" />
                    </div>
                    <p className="text-sm text-primary-foreground/70">Phone</p>
                    <p className="font-semibold">+91 XXX XXX XXXX</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <Mail size={24} className="text-accent" />
                    </div>
                    <p className="text-sm text-primary-foreground/70">Email</p>
                    <p className="font-semibold">contact@vernex.com</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                      <MessageCircle size={24} className="text-accent" />
                    </div>
                    <p className="text-sm text-primary-foreground/70">WhatsApp</p>
                    <p className="font-semibold">+91 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialConnect;
