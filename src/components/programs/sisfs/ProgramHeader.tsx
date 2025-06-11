
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
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="group relative bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-800 rounded-full px-14 py-5 text-xl font-black shadow-2xl hover:shadow-white/40 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 border-2 border-white/30 hover:border-white/50 min-h-[70px] backdrop-blur-sm"
              onClick={() => window.open('https://seedfund.startupindia.gov.in/', '_blank')}
            >
              <span className="relative z-10 flex items-center font-black tracking-wide">
                Apply Now
                <span className="ml-4 transition-transform duration-300 group-hover:translate-x-2 text-2xl">→</span>
              </span>
              {/* Enhanced button glow effects */}
              <div className="absolute inset-0 rounded-full bg-white/30 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-xl scale-110"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-blue-100/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* Subtle pulse animation */}
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse opacity-30"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHeader;
