
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Rocket, Zap, Briefcase } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Meteors } from "@/components/ui/meteors";

interface ProgramProps {
  title: string;
  label?: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  colorTheme: 'blue' | 'green' | 'purple';
}

const Program = ({ title, label, description, icon, link, colorTheme }: ProgramProps) => {
  const themeClasses = {
    blue: {
      gradient: 'from-blue-600/20 to-cyan-500/20',
      border: 'border-blue-500/30',
      topBar: 'bg-gradient-to-r from-blue-500 to-cyan-400',
      iconColor: 'text-blue-400',
      buttonBorder: 'border-blue-500',
      buttonText: 'text-blue-300',
      buttonHover: 'hover:bg-blue-900/30',
      cardShadow: 'shadow-blue-500/10'
    },
    green: {
      gradient: 'from-emerald-600/20 to-teal-500/20',
      border: 'border-emerald-500/30',
      topBar: 'bg-gradient-to-r from-emerald-500 to-teal-400',
      iconColor: 'text-emerald-400',
      buttonBorder: 'border-emerald-500',
      buttonText: 'text-emerald-300',
      buttonHover: 'hover:bg-emerald-900/30',
      cardShadow: 'shadow-emerald-500/10'
    },
    purple: {
      gradient: 'from-purple-600/20 to-pink-500/20',
      border: 'border-purple-500/30',
      topBar: 'bg-gradient-to-r from-purple-500 to-pink-400',
      iconColor: 'text-purple-400',
      buttonBorder: 'border-purple-500',
      buttonText: 'text-purple-300',
      buttonHover: 'hover:bg-purple-900/30',
      cardShadow: 'shadow-purple-500/10'
    }
  };

  const theme = themeClasses[colorTheme];

  return (
    <Card className={`relative bg-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden border ${theme.border} shadow-xl ${theme.cardShadow} hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full`}>
      <div className={`absolute inset-0 h-full w-full bg-gradient-to-br ${theme.gradient} transform scale-[0.80] rounded-full blur-3xl`} />
      <div className={`h-2 ${theme.topBar} relative z-10`}></div>
      
      <CardHeader className="pt-6 pb-4 relative z-10 px-4 sm:px-6 flex-grow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center mb-3">
              <div className={`${theme.iconColor} mr-3 p-2 rounded-lg bg-white/5`}>
                {icon}
              </div>
              {label && (
                <span className="inline-block bg-amber-500/20 text-amber-300 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium border border-amber-500/30">
                  {label}
                </span>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-tight mb-3">
              {title}
            </h3>
          </div>
        </div>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardFooter className="relative z-10 px-4 sm:px-6 pb-6 mt-auto">
        <Button 
          asChild 
          variant="outline" 
          size="lg"
          className={`w-full group ${theme.buttonBorder} ${theme.buttonText} ${theme.buttonHover} rounded-xl py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-200 min-h-[48px] touch-manipulation`}
        >
          <Link to={link} className="flex items-center justify-center gap-2">
            Program Details 
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </CardFooter>
      
      {/* Meteor effect */}
      <Meteors number={8} className="opacity-20" />
    </Card>
  );
};

const ProgramsSection = () => {
  return (
    <section id="programs-section" className="py-12 sm:py-16 bg-gray-950 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 opacity-80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-block bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full mb-6 text-sm sm:text-base border border-blue-500/20">
            Our Programs
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 sm:mb-6 text-white leading-tight">
            Comprehensive Startup Support
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We offer structured programs tailored to entrepreneurs at every stage of their journey, from idea validation to market expansion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <Program 
            title="VentureLab Program" 
            label="Application Open"
            description="Launch your thriving business in 10 weeks with VentureLab's mentorship, network, skills, and funding support."
            icon={<Briefcase size={24} strokeWidth={2} />}
            link="/programs/venture-lab"
            colorTheme="blue"
          />
          
          <Program 
            title="MeitY TIDE 2.0" 
            label="Applications Open"
            description="A program by Ministry of Electronics & IT, supporting entrepreneurs building impactful ICT-enabled ventures."
            icon={<Zap size={24} strokeWidth={2} />}
            link="/programs/meity-tide"
            colorTheme="green"
          />
          
          <Program 
            title="SISFS" 
            label="Application Open"
            description="Seed funding to startups for proof of concept, prototype development, product trials, market entry, and commercialization."
            icon={<Rocket size={24} strokeWidth={2} />}
            link="/programs/sisfs"
            colorTheme="purple"
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
