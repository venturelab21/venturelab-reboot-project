
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
    id: "minuszero",
    name: "Minus Zero",
    image: "https://images.unsplash.com/photo-1549399542-7e8f29e5c3d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Building autonomous driving technology with nature-inspired AI that requires minimal training data.",
    category: "Deep Tech",
    funding: "₹4.1 Cr",
    logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png"
  },
  {
    id: "eternz",
    name: "Eternz",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Democratizing investment access through fractional ownership of premium assets with AI-powered portfolio optimization.",
    category: "Others",
    funding: "₹2.0 Cr",
    logo: "/lovable-uploads/d88bb36a-2af7-4d92-a981-3b843abf2943.png"
  },
  {
    id: "foxo",
    name: "Foxo",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Remote patient monitoring platform for chronic diseases using thin-film wearable technology.",
    category: "Digitization",
    funding: "₹3.8 Cr",
    logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png"
  },
  {
    id: "nirmaan",
    name: "Nirmaan",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Personalized learning platform using AI to adapt content difficulty based on student performance patterns.",
    category: "Others",
    funding: "₹1.5 Cr",
    logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png"
  },
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
    id: "supplysync",
    name: "SupplySync",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Optimizing logistics with blockchain-based tracking and IoT sensors for real-time inventory management.",
    category: "Supply Chain",
    funding: "₹2.0 Cr",
    logo: "/lovable-uploads/7fb392e7-dda6-4def-a0eb-248e00db5728.png"
  }
];

const PortfolioSection = () => {
  // Convert startups to display cards format
  const startupCards = startups.map(startup => ({
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
