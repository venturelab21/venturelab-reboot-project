
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, DollarSign, Users, Headphones, Database, Brain, Building2 } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated background pattern */}
        <AnimatedGridPattern 
          numSquares={50} 
          maxOpacity={0.1} 
          duration={3} 
          repeatDelay={1} 
          className="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]" 
        />
        
        {/* Abstract tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Digital nodes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-80 animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-70 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-5 h-5 bg-blue-300 rounded-full opacity-50 animate-ping"></div>
          
          {/* Circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 800">
            <path d="M100 200 L300 200 L300 400 L500 400" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <path d="M200 100 L200 300 L600 300" stroke="#8B5CF6" strokeWidth="2" fill="none" />
            <path d="M700 150 L700 350 L900 350" stroke="#06B6D4" strokeWidth="2" fill="none" />
            <circle cx="300" cy="200" r="8" fill="#3B82F6" opacity="0.7" />
            <circle cx="200" cy="300" r="6" fill="#8B5CF6" opacity="0.8" />
            <circle cx="700" cy="350" r="10" fill="#06B6D4" opacity="0.6" />
          </svg>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-blue-400 rotate-45 opacity-30"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-purple-400 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 opacity-50 transform rotate-12"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
          {/* Institute label */}
          <div className="inline-block bg-blue-100/10 backdrop-blur-sm text-blue-200 px-6 py-3 rounded-full mb-8 border border-blue-400/20">
            <span className="flex items-center text-sm md:text-base">
              <Sparkles className="w-5 h-5 mr-2 text-blue-300" />
              Thapar Innovate
            </span>
          </div>
          
          {/* Brand name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
            <span className="text-blue-200">Venture</span>
            <span className="text-teal-300">Lab</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-blue-200 mt-4">THAPAR</span>
          </h1>
          
          {/* Main headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-relaxed max-w-4xl mx-auto">
            Your next big business idea gets shape here.
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn, Build & Grow with VentureLab Thapar.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium px-10 py-6 text-lg">
              <Link to="/apply" className="flex items-center justify-center">
                Pitch to us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-400 text-teal-300 hover:bg-teal-400/10 rounded-full px-10 py-6 text-lg backdrop-blur-sm" 
              onClick={scrollToPrograms}
            >
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* VentureLab Hero Graphic Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              We Give <span className="text-orange-500">Everything</span> It Takes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We back fearless entrepreneurs building disruptive solutions. We stand with the startups at their risky early stages, when they need most support while there is hardly any available.
            </p>
          </div>

          {/* Main VL Graphic with surrounding blocks */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central VL Logo */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                {/* Large stylized VL made of gears and circuits */}
                <svg width="400" height="200" viewBox="0 0 400 200" className="drop-shadow-lg">
                  {/* V Letter with gear elements */}
                  <g>
                    {/* V shape base */}
                    <path d="M50 30 L120 150 L190 30" stroke="#F97316" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Gear elements on V */}
                    <circle cx="85" cy="70" r="15" fill="#3B82F6" opacity="0.8" />
                    <circle cx="85" cy="70" r="8" fill="white" />
                    <path d="M75 70 L95 70 M85 60 L85 80" stroke="#3B82F6" strokeWidth="2" />
                    
                    <circle cx="155" cy="70" r="12" fill="#EC4899" opacity="0.8" />
                    <circle cx="155" cy="70" r="6" fill="white" />
                    
                    {/* Circuit patterns */}
                    <path d="M70 100 L100 100 L100 120 L130 120" stroke="#3B82F6" strokeWidth="3" fill="none" />
                    <circle cx="100" cy="100" r="3" fill="#3B82F6" />
                    <circle cx="130" cy="120" r="3" fill="#3B82F6" />
                  </g>

                  {/* L Letter with digital components */}
                  <g>
                    {/* L shape base */}
                    <path d="M250 30 L250 150 L340 150" stroke="#F97316" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Digital components on L */}
                    <rect x="240" y="80" width="20" height="15" fill="#3B82F6" rx="2" />
                    <rect x="245" y="85" width="10" height="5" fill="white" rx="1" />
                    
                    <circle cx="280" cy="60" r="10" fill="#EC4899" opacity="0.8" />
                    <circle cx="280" cy="60" r="5" fill="white" />
                    
                    <rect x="300" y="140" width="25" height="10" fill="#3B82F6" rx="2" />
                    <rect x="305" y="143" width="15" height="4" fill="white" rx="1" />
                    
                    {/* More circuit lines */}
                    <path d="M270 90 L290 90 L290 110 L310 110" stroke="#EC4899" strokeWidth="3" fill="none" />
                    <circle cx="290" cy="90" r="3" fill="#EC4899" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Six surrounding blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Seed Funding Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-green-600 mb-2">SEED FUNDING</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Early capital support to help startups get off the ground.
                  </p>
                  <div className="text-xs text-green-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* Co-working Space Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-600 mb-2">CO-WORKING SPACE</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access to vibrant and collaborative workspaces.
                  </p>
                  <div className="text-xs text-orange-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* Mentorship Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-600 mb-2">MENTORSHIP</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    One-on-one and group guidance from industry experts.
                  </p>
                  <div className="text-xs text-blue-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* NVIDIA Data Centres Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Database className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-purple-600 mb-2">NVIDIA DATA CENTRES</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    High-performance computing infrastructure for startups.
                  </p>
                  <div className="text-xs text-purple-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* AI/ML Labs Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Brain className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-pink-600 mb-2">AI/ML LABS</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Advanced labs to experiment, build, and test AI/ML models.
                  </p>
                  <div className="text-xs text-pink-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* VC Connect Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Headphones className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-teal-600 mb-2">VC CONNECT</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Direct connections to leading venture capital firms.
                  </p>
                  <div className="text-xs text-teal-500 font-medium mt-2">→ More</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-100 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-100 rounded-full opacity-50 blur-xl"></div>
      </section>
    </>;
};

export default Hero;
