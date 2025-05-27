
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const MeetOurTeam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Meet Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get to know the dedicated professionals who drive innovation and support startups at VentureLab Thapar.
            </p>
          </div>
        </div>
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default MeetOurTeam;
