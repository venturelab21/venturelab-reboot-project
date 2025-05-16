
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BadgeDollarSign, Handshake, ArrowRight } from "lucide-react";

interface ProgramProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  link: string;
  delay: number;
}

const Program = ({ title, description, icon, benefits, link, delay }: ProgramProps) => {
  return (
    <div 
      className={`bg-white rounded-xl p-6 border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in-delay-${delay}`}
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-50 p-3 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="text-blue-500 mr-2">•</span> {benefit}
          </li>
        ))}
      </ul>
      
      <Button asChild variant="outline" className="w-full group">
        <Link to={link}>
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Programs</h2>
          <p className="text-gray-600">
            From ideation to scale, we provide tailored support at every stage of your entrepreneurial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Program 
            title="Pre-Incubation" 
            description="For early-stage founders with innovative ideas ready to be validated."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>}
            benefits={[
              "Idea validation workshops",
              "Market research support",
              "MVP development guidance",
              "Networking opportunities"
            ]}
            link="/programs#pre-incubation"
            delay={1}
          />
          
          <Program 
            title="Incubation" 
            description="For startups with validated products seeking growth support and investment."
            icon={<Handshake className="text-blue-600" size={24} />}
            benefits={[
              "Workspace access",
              "Mentorship from industry experts",
              "Legal & compliance support",
              "Investor introductions"
            ]}
            link="/programs#incubation"
            delay={2}
          />
          
          <Program 
            title="Acceleration" 
            description="For established startups ready to scale operations and expand market reach."
            icon={<BadgeDollarSign className="text-blue-600" size={24} />}
            benefits={[
              "Growth strategy development",
              "Series A funding preparation",
              "Market expansion support",
              "Strategic partnerships"
            ]}
            link="/programs#acceleration"
            delay={3}
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/apply">Apply to Our Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
