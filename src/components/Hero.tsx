
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-thapar-light rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              We Back <span className="text-gradient">Bold Entrepreneurs</span> Building Disruptive Solutions
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              VentureLab Thapar is where innovators become industry leaders through expert mentorship, strategic funding, and collaborative workspace support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in-delay-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-thapar-light rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full"></div>
            
            <div className="relative bg-white p-2 rounded-lg shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="VentureLab Thapar Entrepreneurs" 
                className="rounded-lg w-full h-auto object-cover"
                style={{ minHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
