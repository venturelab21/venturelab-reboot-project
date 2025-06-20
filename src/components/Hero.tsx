
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100">
        {/* Animated background pattern */}
        <AnimatedGridPattern 
          numSquares={50} 
          maxOpacity={0.15} 
          duration={3} 
          repeatDelay={1} 
          className="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]" 
        />
        
        {/* Abstract tech elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Digital nodes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-teal-400 rounded-full opacity-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-5 h-5 bg-blue-300 rounded-full opacity-35 animate-ping"></div>
          
          {/* Circuit-like lines */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 1000 800">
            <path d="M100 200 L300 200 L300 400 L500 400" stroke="#3B82F6" strokeWidth="2" fill="none" />
            <path d="M200 100 L200 300 L600 300" stroke="#8B5CF6" strokeWidth="2" fill="none" />
            <path d="M700 150 L700 350 L900 350" stroke="#06B6D4" strokeWidth="2" fill="none" />
            <circle cx="300" cy="200" r="8" fill="#3B82F6" opacity="0.5" />
            <circle cx="200" cy="300" r="6" fill="#8B5CF6" opacity="0.6" />
            <circle cx="700" cy="350" r="10" fill="#06B6D4" opacity="0.4" />
          </svg>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-blue-300 rotate-45 opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 border-2 border-purple-300 rounded-full opacity-25"></div>
          <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 transform rotate-12"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 md:px-8 lg:px-12 max-w-6xl mx-auto">
          {/* Institute label */}
          <div className="inline-block bg-blue-50 backdrop-blur-sm text-blue-700 px-6 py-3 rounded-full mb-8 border border-blue-200 shadow-sm">
            <span className="flex items-center text-sm md:text-base">
              <Sparkles className="w-5 h-5 mr-2 text-blue-500" />
              Thapar Innovate
            </span>
          </div>
          
          {/* Brand name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
            <span className="text-blue-600">Venture</span>
            <span className="text-teal-500">Lab</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mt-4">THAPAR</span>
          </h1>
          
          {/* Main headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-relaxed max-w-4xl mx-auto">
            Seeking excellence, empowering entrepreneurs and enterprises in an effective ecosystem
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Learn, Build & Grow with VentureLab Thapar.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium px-10 py-6 text-lg shadow-md">
              <Link to="/apply" className="flex items-center justify-center">
                Pitch to us <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-400 text-teal-600 hover:bg-teal-50 rounded-full px-10 py-6 text-lg backdrop-blur-sm shadow-sm" 
              onClick={scrollToPrograms}
            >
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* VentureLab Hero Graphic Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              We Empower <span className="text-orange-500">Bold Ideas</span> from Day One
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              At VentureLab Thapar, we champion visionary entrepreneurs ready to challenge the status quo. We provide critical support at the riskiest, earliest stages of their journey—when belief, resources, and guidance matter the most.
            </p>
          </div>

          {/* Main VLT Graphic with surrounding blocks */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central VLT Logo */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                {/* Large stylized VLT made of gears and circuits */}
                <svg width="600" height="200" viewBox="0 0 600 200" className="drop-shadow-sm">
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

                  {/* T Letter with tech elements - moved left */}
                  <g>
                    {/* T shape base - shifted left by 40 units */}
                    <path d="M380 30 L480 30 M430 30 L430 150" stroke="#F97316" strokeWidth="20" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Tech components on T - shifted left by 40 units */}
                    <rect x="390" y="20" width="15" height="20" fill="#06B6D4" rx="3" />
                    <rect x="395" y="25" width="5" height="10" fill="white" rx="1" />
                    
                    <circle cx="460" cy="40" r="12" fill="#10B981" opacity="0.8" />
                    <circle cx="460" cy="40" r="6" fill="white" />
                    <path d="M454 40 L466 40 M460 34 L460 46" stroke="#10B981" strokeWidth="2" />
                    
                    <rect x="420" y="90" width="20" height="12" fill="#8B5CF6" rx="2" />
                    <rect x="425" y="93" width="10" height="6" fill="white" rx="1" />
                    
                    <circle cx="445" cy="130" r="8" fill="#F59E0B" opacity="0.8" />
                    <circle cx="445" cy="130" r="4" fill="white" />
                    
                    {/* Circuit connections for T - shifted left by 40 units */}
                    <path d="M410 60 L430 60 L430 80 L450 80" stroke="#06B6D4" strokeWidth="3" fill="none" />
                    <circle cx="430" cy="60" r="3" fill="#06B6D4" />
                    <circle cx="450" cy="80" r="3" fill="#06B6D4" />
                    
                    <path d="M440 110 L460 110 L460 120 L480 120" stroke="#8B5CF6" strokeWidth="3" fill="none" />
                    <circle cx="460" cy="110" r="3" fill="#8B5CF6" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Six surrounding blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Seed Funding Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-4 group-hover:shadow-md transition-shadow">
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
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 mb-4 group-hover:shadow-md transition-shadow">
                  <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-600 mb-2">CO-WORKING SPACE</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access to vibrant and collaborative workspaces.
                  </p>
                  <div className="text-xs text-orange-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* VentureLab Program Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-4 group-hover:shadow-md transition-shadow">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-600 mb-2">VENTURELAB PROGRAM</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive one-year program to launch your business.
                  </p>
                  <div className="text-xs text-blue-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* NVIDIA Data Centres Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 mb-4 group-hover:shadow-md transition-shadow">
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
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mb-4 group-hover:shadow-md transition-shadow">
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
                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 mb-4 group-hover:shadow-md transition-shadow">
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-50 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-50 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-50 rounded-full opacity-40 blur-xl"></div>
      </section>
    </>;
};

export default Hero;
