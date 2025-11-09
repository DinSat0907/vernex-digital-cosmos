import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Vernex. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Let's discuss how Vernex can help transform your ideas into reality
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border-2 border-accent/20">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="+91 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow"
                  size="lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help! Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:contact@vernex.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      contact@vernex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground p-8 rounded-2xl mt-8">
                <h3 className="text-2xl font-heading font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="mt-4 text-sm text-primary-foreground/80">
                  * For urgent matters, we're available 24/7 via email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
