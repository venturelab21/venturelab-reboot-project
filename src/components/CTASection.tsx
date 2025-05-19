
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">MeitY TIDE 2.0 Program</h2>
          <p className="text-lg text-blue-100 mb-8">
            Supporting technology startups in emerging fields through financial grants, mentorship, and technical resources.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-medium rounded-full">
            <Link to="/programs/meity-tide" className="flex items-center">
              Learn More <ArrowRight className="ml-1" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
