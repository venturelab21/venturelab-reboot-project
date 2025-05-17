
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50">
      {/* Large circle background elements */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] rounded-full bg-blue-50 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-50 translate-x-1/2 translate-y-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Institute label */}
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              Thapar Institute of Engineering & Technology
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Where <span className="text-blue-600">Innovation</span> Meets <span className="text-thapar">Opportunity</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            VentureLab Thapar incubates and accelerates startups through expert mentorship, state-of-the-art
            resources, and strategic funding access in our innovation ecosystem.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link to="/apply" className="flex items-center">
                Submit Your Proposal <ArrowRight className="ml-1" size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>

          {/* Partners section */}
          <div className="mt-20">
            <h3 className="text-xl font-semibold mb-6">Partners & Collaborators</h3>
            <div className="flex flex-wrap gap-12">
              <div className="text-xl font-bold text-gray-700">TBI</div>
              <div className="text-xl font-bold text-gray-700">NIDHI</div>
              <div className="text-xl font-bold text-gray-700">TIET</div>
              <div className="text-xl font-bold text-gray-700">DST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
