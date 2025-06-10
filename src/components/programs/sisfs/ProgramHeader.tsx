
import { Button } from "@/components/ui/button";

const ProgramHeader = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block bg-blue-200/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-blue-300/30">
            Department for Promotion of Industry and Internal Trade
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
            Startup India Seed Fund Scheme
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Empowering early-stage startups with financial support for idea validation, market entry, and commercialization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('https://seedfund.startupindia.gov.in/', '_blank')}
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-200 text-blue-100 hover:bg-blue-800/50 rounded-full px-8 py-3 text-lg backdrop-blur-sm"
              onClick={() => document.getElementById('program-overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHeader;
