
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
      {/* Refined Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Subtle animated background pattern */}
        <AnimatedGridPattern 
          numSquares={30} 
          maxOpacity={0.03} 
          duration={4} 
          repeatDelay={2} 
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]" 
        />
        
        {/* Minimal geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle floating elements */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-64 right-1/3 w-1 h-1 bg-indigo-400 rounded-full opacity-30 animate-ping"></div>
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-25 animate-pulse"></div>
          
          {/* Minimal circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 1000 800">
            <path d="M200 300 L400 300 L400 500" stroke="#3B82F6" strokeWidth="1" fill="none" opacity="0.1" />
            <path d="M600 200 L600 400 L800 400" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.1" />
            <circle cx="400" cy="300" r="3" fill="#3B82F6" opacity="0.15" />
            <circle cx="600" cy="400" r="2" fill="#6366F1" opacity="0.2" />
          </svg>
          
          {/* Soft geometric shapes */}
          <div className="absolute top-1/3 left-1/5 w-20 h-20 border border-blue-200 rotate-45 opacity-10 rounded-lg"></div>
          <div className="absolute bottom-1/4 right-1/5 w-16 h-16 border border-indigo-200 rounded-full opacity-15"></div>
        </div>

        {/* Main content with fade-in animation */}
        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-5xl mx-auto animate-fade-in">
          {/* Brand name with refined typography */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              <span className="text-slate-700 font-normal">Venture</span>
              <span className="text-blue-600 font-medium">Lab</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 mt-4 tracking-wide">THAPAR</span>
            </h1>
          </div>
          
          {/* Main headline with conversational tone */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto">
            Your next big business idea gets shape here
          </h2>
          
          {/* Subheading with better spacing */}
          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Learn, build & grow with VentureLab Thapar
          </p>
          
          {/* Refined CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-1">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full font-normal px-8 py-3 text-base border-0">
              <Link to="/apply" className="flex items-center justify-center">
                Pitch to us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 rounded-full px-8 py-3 text-base font-normal shadow-sm hover:shadow-md transition-all duration-300" 
              onClick={scrollToPrograms}
            >
              Explore programs
            </Button>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-5 h-8 border border-slate-400 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Refined VentureLab Graphic Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with refined typography */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-800">
              We give <span className="text-orange-500 font-normal">everything</span> it takes
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We back fearless entrepreneurs building disruptive solutions. We stand with startups at their risky early stages, when they need the most support.
            </p>
          </div>

          {/* Refined VL Graphic */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central VL Logo - more refined */}
            <div className="flex justify-center items-center mb-12">
              <div className="relative">
                <svg width="360" height="180" viewBox="0 0 360 180" className="drop-shadow-sm">
                  {/* V Letter - more elegant */}
                  <g>
                    <path d="M50 30 L110 140 L170 30" stroke="#F97316" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                    
                    {/* Subtle tech elements */}
                    <circle cx="80" cy="65" r="12" fill="#3B82F6" opacity="0.6" />
                    <circle cx="80" cy="65" r="6" fill="white" />
                    
                    <circle cx="140" cy="65" r="10" fill="#EC4899" opacity="0.6" />
                    <circle cx="140" cy="65" r="5" fill="white" />
                    
                    {/* Minimal circuit patterns */}
                    <path d="M70 95 L90 95 L90 110 L110 110" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.5" />
                    <circle cx="90" cy="95" r="2" fill="#3B82F6" opacity="0.7" />
                  </g>

                  {/* L Letter - refined */}
                  <g>
                    <path d="M220 30 L220 140 L300 140" stroke="#F97316" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                    
                    {/* Elegant digital components */}
                    <rect x="215" y="75" width="16" height="12" fill="#3B82F6" rx="2" opacity="0.6" />
                    <rect x="218" y="78" width="10" height="6" fill="white" rx="1" />
                    
                    <circle cx="260" cy="55" r="8" fill="#EC4899" opacity="0.6" />
                    <circle cx="260" cy="55" r="4" fill="white" />
                    
                    <rect x="275" y="132" width="20" height="8" fill="#3B82F6" rx="2" opacity="0.6" />
                    <rect x="278" y="134" width="14" height="4" fill="white" rx="1" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Four refined blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {/* Incubation Block */}
              <div className="text-center group">
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 mb-4 group-hover:shadow-lg group-hover:shadow-orange-100/50 transition-all duration-300 group-hover:-translate-y-1">
                  <Building2 className="w-10 h-10 text-orange-500 mx-auto mb-6" />
                  <h3 className="text-lg font-medium text-orange-600 mb-4 tracking-wide">INCUBATION</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    State-of-the-art physical infrastructure, training programs, and access to a network of like-minded collaborators.
                  </p>
                </div>
              </div>

              {/* Acceleration Block */}
              <div className="text-center group">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-4 group-hover:shadow-lg group-hover:shadow-blue-100/50 transition-all duration-300 group-hover:-translate-y-1">
                  <Zap className="w-10 h-10 text-blue-500 mx-auto mb-6" />
                  <h3 className="text-lg font-medium text-blue-600 mb-4 tracking-wide">ACCELERATION</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Workshops, diagnostics, problem-solving, and bespoke coaching curated to your startup's goals and stage.
                  </p>
                </div>
              </div>

              {/* Insights Block */}
              <div className="text-center group">
                <div className="bg-pink-50 p-8 rounded-3xl border border-pink-100 mb-4 group-hover:shadow-lg group-hover:shadow-pink-100/50 transition-all duration-300 group-hover:-translate-y-1">
                  <TrendingUp className="w-10 h-10 text-pink-500 mx-auto mb-6" />
                  <h3 className="text-lg font-medium text-pink-600 mb-4 tracking-wide">INSIGHTS</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Rigorous research, data-driven tools, learning resources and insights for entrepreneurs and their champions.
                  </p>
                </div>
              </div>

              {/* Fund Incubation Block */}
              <div className="text-center group">
                <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 mb-4 group-hover:shadow-lg group-hover:shadow-teal-100/50 transition-all duration-300 group-hover:-translate-y-1">
                  <DollarSign className="w-10 h-10 text-teal-500 mx-auto mb-6" />
                  <h3 className="text-lg font-medium text-teal-600 mb-4 tracking-wide">FUND INCUBATION</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    Incubating venture funds for the Indian early-stage market ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-orange-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-2xl"></div>
      </section>
    </>;
};

export default Hero;
