import { Mail, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinNetwork = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Join the <span className="text-gradient-gold">Vernex Network</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Learn | Earn | Grow with the Vernex Digital Ecosystem
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">
            Why Join <span className="text-gradient-gold">Vernex</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Users size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Collaborative Network</h3>
              <p className="text-muted-foreground">
                Connect with professionals, students, and businesses worldwide
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <TrendingUp size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Skill Development</h3>
              <p className="text-muted-foreground">
                Learn cutting-edge technologies and industry best practices
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Award size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Real Projects</h3>
              <p className="text-muted-foreground">
                Work on actual client projects and build your portfolio
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                <Mail size={40} className="text-accent" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Earning Opportunities</h3>
              <p className="text-muted-foreground">
                Get compensated for your contributions and expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Business Partners */}
            <div className="bg-card p-12 rounded-2xl border-2 border-accent/20 hover-lift">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Business Partnerships & <span className="text-gradient-gold">Joint Ventures</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Partner with Vernex to expand your business capabilities, access our network of experts, and collaborate on projects that drive mutual growth. We offer flexible partnership models tailored to your business objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Strategic partnerships for co-development and market expansion</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">White-label solutions for agencies and consultants</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Joint ventures for specialized projects and markets</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="mailto:partners@vernex.com">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow">
                    <Mail className="mr-2" size={20} />
                    Contact: partners@vernex.com
                  </Button>
                </a>
              </div>
            </div>

            {/* Freelancers, Students & Professionals */}
            <div className="bg-card p-12 rounded-2xl border-2 border-accent/20 hover-lift">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                For Freelancers, Students & <span className="text-gradient-gold">Professionals</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join our thriving ecosystem of talented individuals. Whether you're a student looking to gain experience, a freelancer seeking quality projects, or a professional wanting to expand your network — Vernex provides the platform and opportunities you need.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Access to premium projects across 15 service domains</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Mentorship and skill development programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Flexible work arrangements and fair compensation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">Recognition and portfolio building opportunities</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold hover-glow">
                    Apply via Google Form
                  </Button>
                </a>
                <a href="mailto:network@vernex.com">
                  <Button variant="outline" className="border-2 border-accent text-foreground hover:bg-accent/10 font-semibold">
                    <Mail className="mr-2" size={20} />
                    Email: network@vernex.com
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-12 text-center">
            What We <span className="text-gradient-gold">Look For</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Passion</h3>
              <p className="text-muted-foreground">
                Drive to learn, grow, and excel in your field
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Collaboration</h3>
              <p className="text-muted-foreground">
                Ability to work effectively in teams and communicate clearly
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                Creative problem-solving and willingness to embrace new ideas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinNetwork;
