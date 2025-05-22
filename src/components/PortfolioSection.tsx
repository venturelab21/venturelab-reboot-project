
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { useState } from "react";

interface StartupProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  funding: string;
  logo?: string;
}

const startups: StartupProps[] = [
  {
    id: "medassist-ai",
    name: "MedAssist AI",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "AI-driven diagnostic assistant helping physicians improve diagnostic accuracy from medical imaging with 95% accuracy.",
    category: "HealthTech",
    funding: "₹3.5 Cr",
    logo: "/lovable-uploads/b3573eb0-1896-4464-a58c-edafc18f433f.png"
  },
  {
    id: "solardwellings",
    name: "SolarDwellings",
    image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developing integrated solar solutions for affordable residential housing that reduce energy costs by 60%.",
    category: "CleanTech",
    funding: "₹2.2 Cr",
    logo: "/lovable-uploads/d08b9705-7653-47d0-80a4-c30f0f0dbdcb.png"
  },
  {
    id: "vitaltrack",
    name: "VitalTrack",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Remote patient monitoring platform for chronic diseases using thin-film wearable technology.",
    category: "HealthTech",
    funding: "₹3.8 Cr",
    logo: "/lovable-uploads/e0fdee9a-b444-4516-a67b-f3f4e74f54b9.png"
  },
  {
    id: "wealthwise",
    name: "WealthWise",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Democratizing investment access through fractional ownership of premium assets with AI-powered portfolio optimization.",
    category: "FinTech",
    funding: "₹2.0 Cr",
    logo: "/lovable-uploads/85776a30-8cf3-44c7-b7c1-8ffab94fb713.png"
  },
  {
    id: "adaptlearn",
    name: "AdaptLearn",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Personalized learning platform using AI to adapt content difficulty based on student performance patterns.",
    category: "EdTech",
    funding: "₹1.5 Cr",
    logo: "/lovable-uploads/341e0364-56ab-4d14-9b5e-9abceccbb287.png"
  },
  {
    id: "supplysync",
    name: "SupplySync",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Optimizing logistics with blockchain-based tracking and IoT sensors for real-time inventory management.",
    category: "Supply Chain",
    funding: "₹2.0 Cr",
    logo: "/lovable-uploads/7fb392e7-dda6-4def-a0eb-248e00db5728.png"
  }
];

const categories = [
  "All", "AI & ML", "CleanTech", "HealthTech", "FinTech", "EdTech", "Supply Chain"
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredStartups = activeCategory === "All" 
    ? startups 
    : startups.filter(startup => startup.category === activeCategory);

  // Convert startups to display cards format
  const startupCards = filteredStartups.map(startup => ({
    title: startup.name,
    description: startup.description,
    category: startup.category,
    logo: startup.logo,
    className: "cursor-pointer hover:-translate-y-1 transition-transform duration-300"
  }));

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            OUR PORTFOLIO
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Venture Showcase</h2>
          <p className="text-gray-600">
            Meet the innovative startups that have grown with VentureLab's support and are now making an impact in their industries.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Startups Grid */}
        <DisplayCards cards={startupCards} />
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link to="/portfolio" className="flex items-center">
              View All Portfolio Startups <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
