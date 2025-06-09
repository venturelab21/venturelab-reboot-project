
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import PortfolioSection from "@/components/PortfolioSection";
import MentorSection from "@/components/MentorSection";
import Footer from "@/components/Footer";
import InvestmentThesisSection from "@/components/InvestmentThesisSection";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  console.log("Index page is rendering");
  console.log("All components imported successfully");
  
  try {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProgramsSection />
          <InvestmentThesisSection />
          <PortfolioSection />
          <PartnersSection />
          <MentorSection />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error("Error rendering Index page:", error);
    return <div>Error loading page</div>;
  }
};

export default Index;
