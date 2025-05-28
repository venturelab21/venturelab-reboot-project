
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramsSection from "@/components/ProgramsSection";
import PortfolioSection from "@/components/PortfolioSection";
import MentorSection from "@/components/MentorSection";
import Footer from "@/components/Footer";
import InvestmentThesisSection from "@/components/InvestmentThesisSection";
import PartnersSection from "@/components/PartnersSection";
import CareersSection from "@/components/CareersSection";

const Index = () => {
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
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
