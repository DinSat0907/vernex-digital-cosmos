import { Target, Eye, Sparkles } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import mdImg from "@/assets/md.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            About <span className="text-gradient-gold">Vernex</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A Digital Ecosystem Built for Tomorrow
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6 text-center">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vernex is more than a freelancing agency — we are a billion-dollar digital ecosystem connecting businesses, students, and professionals across the globe. With 15 comprehensive services ranging from web and app development to digital marketing, content creation, and advanced analytics, we empower every idea with innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to democratize access to premium technology services, making world-class digital solutions accessible to everyone, everywhere. We believe in the power of collaboration, continuous learning, and leveraging cutting-edge technology to drive growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every idea with innovative digital solutions, breaking down barriers to technology access and enabling businesses, students, and professionals to achieve their full potential through our comprehensive ecosystem.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border-2 border-accent/20 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a connected world where technology fuels growth, creativity, and opportunity. We envision Vernex as the go-to digital ecosystem that transforms aspirations into achievements through innovation and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-16 text-center">
            Our <span className="text-gradient-gold">Leadership</span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-20">
            {/* Founder */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Bose Anandaa</h3>
                  <p className="text-xl text-accent font-semibold">Founder & Chief Visionary</p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    "At Vernex, we believe that technology should be a bridge, not a barrier. Our ecosystem is designed to empower every individual and business, regardless of their starting point, to achieve extraordinary results."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With a vision to democratize digital excellence, Bose founded Vernex to create opportunities for businesses to scale, students to learn and earn, and professionals to showcase their expertise on a global platform.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={founderImg}
                  alt="Bose Anandaa"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-[var(--shadow-elevated)] hover-lift"
                />
              </div>
            </div>

            {/* MD */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={mdImg}
                  alt="Sare Sivaram"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-[var(--shadow-elevated)] hover-lift"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Sare Sivaram</h3>
                  <p className="text-xl text-accent font-semibold">Managing Director</p>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    "Excellence is not an accident; it's a habit. At Vernex, we cultivate this habit by combining cutting-edge technology with human creativity and dedication to deliver unparalleled value to our clients."
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Sare brings strategic leadership and operational excellence to Vernex, ensuring that every project meets the highest standards of quality while maintaining the agility needed in today's fast-paced digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Our <span className="text-gradient-gold">Ecosystem</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/30 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">For Students</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Learn cutting-edge skills, work on real projects, and earn while building your portfolio. Vernex provides mentorship and hands-on experience.
              </p>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/30 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">For Freelancers</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Access premium projects, collaborate with experts, and scale your freelance business within our thriving ecosystem of opportunities.
              </p>
            </div>

            <div className="bg-primary-foreground/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent/30 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Sparkles size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">For Businesses</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Get access to world-class talent and technology solutions that drive growth, innovation, and competitive advantage in your market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
