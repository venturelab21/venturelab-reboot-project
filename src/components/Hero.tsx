import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Building2, Zap, TrendingUp, DollarSign } from "lucide-react";
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
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50">
        {/* Background pattern - animated grid */}
        <AnimatedGridPattern numSquares={30} maxOpacity={0.1} duration={3} repeatDelay={1} className="[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
        
        <div className="w-full px-0 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">
            {/* Left side - Content */}
            <div className="px-6 md:px-8 lg:px-0">
              {/* Institute label - Updated with elegant icon */}
              <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-8">
                <span className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
                  Thapar Innovate
                </span>
              </div>
              
              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
                <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mt-3">THAPAR</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
                VentureLab Thapar incubates and accelerates startups through expert mentorship, state-of-the-art
                resources, and strategic funding access in our innovation ecosystem.
              </p>
              
              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
                <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-950 rounded-full font-medium px-8 py-4">
                  <Link to="/apply" className="flex items-center justify-center">
                    Pitch to us <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8 py-4" onClick={scrollToPrograms}>
                  Explore Programs
                </Button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative flex justify-center lg:justify-end px-6 md:px-8 lg:px-0">
              <div className="relative w-full max-w-lg lg:max-w-xl">
                
                {/* Subtle background circle for additional depth */}
                <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-br from-blue-100/30 to-teal-100/30 rounded-full blur-3xl transform scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New VentureLab Hero Graphic Section */}
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

            {/* Four surrounding blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {/* Incubation Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Building2 className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-orange-600 mb-2">INCUBATION</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    State-of-the-art physical infrastructure, training programs, and access to a network of like-minded collaborators and partners.
                  </p>
                  <div className="text-xs text-orange-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* Acceleration Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-blue-600 mb-2">ACCELERATION</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Workshops, diagnostics, problem-solving, bespoke coaching, and support, curated to the startups' goals and stages.
                  </p>
                  <div className="text-xs text-blue-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* Insights Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-pink-50 p-6 rounded-2xl border border-pink-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <TrendingUp className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-pink-600 mb-2">INSIGHTS</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Rigorous research and data-driven tools, learning resources and insights for entrepreneurs and their champions.
                  </p>
                  <div className="text-xs text-pink-500 font-medium mt-2">→ More</div>
                </div>
              </div>

              {/* Fund Incubation Block */}
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-200 mb-4 group-hover:shadow-lg transition-shadow">
                  <DollarSign className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-teal-600 mb-2">FUND INCUBATION</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Incubating Venture Funds for the Indian Early-Stage Market.
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