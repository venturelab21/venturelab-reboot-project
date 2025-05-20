
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";

interface ProgramProps {
  title: string;
  label?: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const Program = ({ title, label, description, icon, link }: ProgramProps) => {
  return (
    <Card className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-sm">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="h-1 bg-gradient-to-r from-blue-600 to-teal-400 relative z-10"></div>
      <CardHeader className="pt-6 relative z-10">
        <div className="flex items-center mb-2">
          <div className="text-teal-500 mr-3">{icon}</div>
          <div>
            <div className="text-xl font-display font-semibold text-white">{title}</div>
            {label && (
              <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-sm">
                {label}
              </span>
            )}
          </div>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardHeader>
      
      <CardFooter className="relative z-10">
        <Button asChild variant="outline" className="w-full group border-blue-600 text-blue-400 hover:bg-blue-800/20">
          <Link to={link} className="flex items-center justify-center">
            Program Details <ExternalLink size={16} className="ml-2" />
          </Link>
        </Button>
      </CardFooter>
      
      {/* Meteor effect */}
      <Meteors number={10} className="opacity-30" />
    </Card>
  );
};

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full mb-4 text-sm">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Comprehensive Startup Support</h2>
          <p className="text-gray-400">
            We offer structured programs tailored to entrepreneurs at every stage of their journey, from idea validation to market expansion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Program 
            title="VentureLab Program" 
            label="Open"
            description="Launch your thriving business in 10 weeks with VentureLab's mentorship, network, skills, and funding support."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H9a2 2 0 0 0-2 2v2m15 14V6a2 2 0 0 0-2-2h-2"></path><path d="M15 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2"></path><path d="M18 14H4a2 2 0 0 0-2 2v6h14"></path><path d="m22 18-3 3-3-3"></path></svg>}
            link="/programs/venture-lab"
          />
          
          <Program 
            title="MeitY TIDE 2.0" 
            label="Applications Open"
            description="A program by Ministry of Electronics & IT, supporting entrepreneurs building impactful ICT-enabled ventures."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>}
            link="/programs/meity-tide"
          />
          
          <Program 
            title="SISFS" 
            label="Closed"
            description="Seed funding to startups for proof of concept, prototype development, product trials, market entry, and commercialization."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a5 5 0 0 0 5 5"></path></svg>}
            link="/programs/sisfs"
          />
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 rounded-full">
            <Link to="/apply">Apply to Our Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
