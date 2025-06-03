
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Zap, TrendingUp, DollarSign } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";

const Hero = () => {
  const scrollToPrograms = () => {
    const programsSection = document.getElementById('programs-section');
    if (programsSection) {
      programsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return <>
      {/* Modern Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Subtle animated background pattern */}
        <AnimatedGridPattern 
          numSquares={30} 
          maxOpacity={0.05} 
          duration={4} 
          repeatDelay={2} 
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]" 
        />
        
        {/* Minimalist background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Soft geometric shapes */}
          <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-200/15 rounded-full blur-2xl"></div>
          
          {/* Subtle grid lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 800">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
          {/* Subtle institute tagline */}
          <div className="inline-block text-slate-600 mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
            <span className="text-sm md:text-base font-medium tracking-wide">
              Innovation Hub at Thapar Institute
            </span>
          </div>
          
          {/* Brand name with refined typography */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
            <span className="text-slate-800 font-normal">Venture</span>
            <span className="text-blue-600 font-medium">Lab</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-700 mt-3">THAPAR</span>
          </h1>
          
          {/* Main headline with conversational tone */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-slate-700 mb-6 leading-relaxed max-w-4xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
            Your next big business idea gets shape here
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            Learn, build & grow with VentureLab Thapar
          </p>
          
          {/* Refined CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <Link to="/apply" className="flex items-center justify-center">
                Pitch to us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 font-medium px-10 py-6 text-lg rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02]" 
              onClick={scrollToPrograms}
            >
              Explore programs
            </Button>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_0.8s_ease-out_1.5s_forwards]">
          <div className="w-5 h-8 border border-slate-400 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* VentureLab Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-800">
              Everything you need to <span className="text-blue-600 font-medium">succeed</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We support fearless entrepreneurs building disruptive solutions. We stand with startups at their crucial early stages, when they need the most support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Incubation */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 rounded-2xl border border-orange-100 mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <Building2 className="w-10 h-10 text-orange-500 mx-auto mb-6" />
                <h3 className="text-lg font-medium text-orange-700 mb-3">Incubation</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  State-of-the-art infrastructure, training programs, and access to a network of collaborators and partners.
                </p>
              </div>
            </div>

            {/* Acceleration */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-100 mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <Zap className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                <h3 className="text-lg font-medium text-blue-700 mb-3">Acceleration</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Workshops, diagnostics, problem-solving, coaching, and support curated to your startup's goals and stage.
                </p>
              </div>
            </div>

            {/* Insights */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-2xl border border-purple-100 mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <TrendingUp className="w-10 h-10 text-purple-500 mx-auto mb-6" />
                <h3 className="text-lg font-medium text-purple-700 mb-3">Insights</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Research-driven tools, learning resources and insights for entrepreneurs and their champions.
                </p>
              </div>
            </div>

            {/* Fund Incubation */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-8 rounded-2xl border border-teal-100 mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-[1.02]">
                <DollarSign className="w-10 h-10 text-teal-500 mx-auto mb-6" />
                <h3 className="text-lg font-medium text-teal-700 mb-3">Fund Incubation</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Incubating venture funds for the Indian early-stage market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle background decoration */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-100/30 rounded-full blur-2xl"></div>
      </section>
    </>;
};

export default Hero;
