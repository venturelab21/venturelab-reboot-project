
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="inline-block bg-blue-100/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full mb-6 text-sm font-medium">
              OUR LEADERSHIP
            </div>
            <h1 className="heading-hero text-white mb-6">
              Meet the <span className="text-teal-400">Visionaries</span> Behind VentureLab
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Our diverse team of industry experts, successful entrepreneurs, and dedicated professionals 
              work together to nurture the next generation of innovative startups.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default MeetOurTeam;
