
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const Hero = () => {
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
      
      {/* Building image */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-48 md:h-64 lg:h-80 z-0">
        <img 
          src="/lovable-uploads/3f24908e-65bd-4bcd-9e8b-945805df6335.png" 
          alt="Thapar Institute Building" 
          className="w-full h-full object-contain object-right-bottom"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl pl-4 md:pl-8">
          {/* Institute label - Updated text */}
          <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-6">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-900 rounded-full mr-2"></div>
              Thapar Innovate
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mt-2">THAPAR</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            VentureLab Thapar incubates and accelerates startups through expert mentorship, state-of-the-art
            resources, and strategic funding access in our innovation ecosystem.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-950 rounded-full font-medium">
              <Link to="/apply" className="flex items-center">
                Submit Your Proposal <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
