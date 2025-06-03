
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import StatsSection from "@/components/StatsSection";
import PortfolioSection from "@/components/PortfolioSection";
import MentorSection from "@/components/MentorSection";
import Footer from "@/components/Footer";
import InvestmentThesisSection from "@/components/InvestmentThesisSection";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  console.log("Index page is rendering");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsSection />
        <ProgramsSection />
        <InvestmentThesisSection />
        <PortfolioSection />
        <PartnersSection />
        <MentorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
