import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

const ServiceCard = ({ title, description, icon: Icon, slug }: ServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`}>
      <Card className="p-6 h-full bg-card hover:bg-accent/5 transition-all duration-300 hover-lift hover:shadow-[var(--shadow-gold)] border-2 border-transparent hover:border-accent/30 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Icon size={32} className="text-accent" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
