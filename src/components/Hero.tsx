
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
      
      <div className="w-full px-0 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
          {/* Left side - Content */}
          <div className="px-6 md:px-8 lg:px-0">
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

          {/* Right side - Hero Image */}
          <div className="relative flex justify-center lg:justify-end px-6 md:px-8 lg:px-0">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <img 
                src="/lovable-uploads/228f9097-334d-4599-9d41-6a5cab0ba4a5.png"
                alt="VentureLab startup ecosystem illustration showing mentorship, learning center, co-working space, and innovation"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
              />
              {/* Subtle background circle for additional depth */}
              <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-blue-100/30 to-teal-100/30 rounded-full blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
