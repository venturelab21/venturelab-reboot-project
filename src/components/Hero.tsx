
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const Hero = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
      {/* Background pattern - animated grid */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
      />
      
      {/* Large circle background elements */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-100 to-teal-300 opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Institute label - Updated with elegant icon */}
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-8">
            <span className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
              Thapar Innovate
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
            <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mt-3">THAPAR</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
            VentureLab Thapar incubates and accelerates startups through expert mentorship, state-of-the-art
            resources, and strategic funding access in our innovation ecosystem.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-950 rounded-full font-medium px-8 py-4">
              <Link to="/apply" className="flex items-center justify-center">
                Pitch to us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8 py-4"
              onClick={scrollToPrograms}
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
