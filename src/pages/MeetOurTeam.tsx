
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section with better transition */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="bg-grid-pattern opacity-10"></div>
            <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Refined badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 px-6 py-3 rounded-full mb-8 text-sm font-medium">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                OUR LEADERSHIP TEAM
              </div>
              
              {/* Dynamic heading */}
              <h1 className="heading-hero text-white mb-6 animate-fade-in">
                Meet the <span className="text-teal-400">Innovators</span> 
                <br />Shaping Tomorrow
              </h1>
              
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-delay-1">
                Our diverse team of industry experts, successful entrepreneurs, and dedicated professionals 
                work together to nurture the next generation of innovative startups and drive meaningful change.
              </p>
              
              {/* Interactive scroll indicator */}
              <div className="animate-fade-in-delay-2 flex flex-col items-center gap-4">
                <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-300 rounded-full"></div>
                <div className="text-blue-200 text-sm flex items-center gap-2 animate-bounce">
                  <span>Discover Our Team</span>
                  <div className="w-1 h-8 bg-gradient-to-b from-teal-400 to-transparent rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smooth transition curve */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-700/50 to-gray-50"></div>
        </div>
        
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default MeetOurTeam;
