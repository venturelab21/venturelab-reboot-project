
import Navbar from "@/components/Navbar";
import GoverningCouncilSection from "@/components/GoverningCouncilSection";
import Footer from "@/components/Footer";

const GoverningCouncil = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Governing Council</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our distinguished governing council provides strategic leadership and guidance to drive innovation and entrepreneurship at VentureLab Thapar.
            </p>
          </div>
        </div>
        <GoverningCouncilSection />
      </main>
      <Footer />
    </div>
  );
};

export default GoverningCouncil;
