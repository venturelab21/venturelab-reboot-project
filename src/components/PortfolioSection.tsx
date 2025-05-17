
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface StartupProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  funding: string;
}

const startups: StartupProps[] = [
  {
    id: "medassist-ai",
    name: "MedAssist AI",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "AI-driven diagnostic assistant helping physicians improve diagnostic accuracy from medical imaging with 95% accuracy.",
    category: "HealthTech",
    funding: "₹3.5 Cr"
  },
  {
    id: "solardwellings",
    name: "SolarDwellings",
    image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developing integrated solar solutions for affordable residential housing that reduce energy costs by 60%.",
    category: "CleanTech",
    funding: "₹2.2 Cr"
  },
  {
    id: "vitaltrack",
    name: "VitalTrack",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Remote patient monitoring platform for chronic diseases using thin-film wearable technology.",
    category: "HealthTech",
    funding: "₹3.8 Cr"
  },
  {
    id: "wealthwise",
    name: "WealthWise",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Democratizing investment access through fractional ownership of premium assets with AI-powered portfolio optimization.",
    category: "FinTech",
    funding: "₹2.0 Cr"
  },
  {
    id: "adaptlearn",
    name: "AdaptLearn",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Personalized learning platform using AI to adapt content difficulty based on student performance patterns.",
    category: "EdTech",
    funding: "₹1.5 Cr"
  },
  {
    id: "supplysync",
    name: "SupplySync",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Optimizing logistics with blockchain-based tracking and IoT sensors for real-time inventory management.",
    category: "Supply Chain",
    funding: "₹2.0 Cr"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStartups.map((startup) => (
            <Card key={startup.id} className="overflow-hidden border border-gray-200">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img 
                  src={startup.image} 
                  alt={startup.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{startup.name}</h3>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                    {startup.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {startup.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm">
                    <span className="text-gray-600">Funding Raised: </span>
                    <span className="font-semibold">{startup.funding}</span>
                  </div>
                  <Button asChild variant="link" size="sm" className="p-0">
                    <Link to={`/portfolio/${startup.id}`}>Company Profile</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
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
