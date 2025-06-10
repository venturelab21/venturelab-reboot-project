
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

interface StartupProps {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  funding: string;
  logo?: string;
  featured?: boolean;
}

const startups: StartupProps[] = [
  {
    id: "minuszero",
    name: "Minus Zero",
    image: "https://images.unsplash.com/photo-1549399542-7e8f29e5c3d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Revolutionary autonomous driving technology powered by nature-inspired AI. Minimal training data required for maximum efficiency.",
    category: "Deep Tech",
    funding: "₹4.1 Cr",
    logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png",
    featured: true
  },
  {
    id: "repeatgud",
    name: "REPEAT GUD",
    image: "https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Sustainable recycling solutions transforming consumer goods. Reducing environmental impact by 40% through innovation.",
    category: "Climate Tech",
    funding: "₹2.5 Cr",
    logo: "/lovable-uploads/97db16cb-aaed-4103-97da-b3a902f96bcf.png",
    featured: true
  },
  {
    id: "foxo",
    name: "Foxo",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced remote patient monitoring platform for chronic diseases. Powered by cutting-edge thin-film wearable technology.",
    category: "Digitization",
    funding: "₹3.8 Cr",
    logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png",
    featured: true
  },
  {
    id: "nirmaan",
    name: "Nirmaan",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "AI-powered personalized learning platform. Adapts content difficulty based on individual student performance patterns.",
    category: "Others",
    funding: "₹1.5 Cr",
    logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png"
  },
  {
    id: "eternz",
    name: "Eternz",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Democratizing premium asset investment through fractional ownership. AI-powered portfolio optimization for everyone.",
    category: "Others",
    funding: "₹2.0 Cr",
    logo: "/lovable-uploads/ae62a1ef-a50f-4b2d-b7ee-dc5d13c60257.png"
  },
  {
    id: "terafac",
    name: "Terafac Technologies",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Next-generation semiconductor solutions for advanced computing. Accelerating AI hardware innovation.",
    category: "Deep Tech",
    funding: "₹3.2 Cr",
    logo: "/lovable-uploads/064f6bd6-f4ba-40f6-a28a-cc7ee4fd1e54.png"
  },
  {
    id: "labellerr",
    name: "Labellerr",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "AI-powered data annotation platform revolutionizing machine learning. Improving model accuracy by 40%.",
    category: "Deep Tech",
    funding: "₹2.8 Cr",
    logo: "/lovable-uploads/d0ab3fa2-bf0b-47af-9288-0bc1a5de4397.png"
  },
  {
    id: "wendor",
    name: "Wendor",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Smart vending solutions with IoT integration. Creating seamless contactless retail experiences.",
    category: "Digitization",
    funding: "₹2.2 Cr",
    logo: "/lovable-uploads/2a7f63b7-97e6-47c9-91c0-1c6ae4e3d3af.png"
  },
  {
    id: "projectstudio",
    name: "Project studio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Advanced AI-powered design collaboration platform. Empowering creative professionals with cutting-edge tools.",
    category: "Deep Tech",
    funding: "₹2.4 Cr",
    logo: null
  }
];

const PortfolioSection = () => {
  // Convert startups to enhanced display cards format - removed featured property
  const startupCards = startups.slice(0, 6).map(startup => ({
    title: startup.name,
    description: startup.description,
    category: startup.category,
    logo: startup.logo,
    funding: startup.funding,
    className: "group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100 hover:border-blue-200",
    ctaText: "Know More",
    featured: false // Explicitly set to false to remove featured badges
  }));

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-3">
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">OUR PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">Venture Showcase</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Discover the innovative companies we've backed from day one—transforming bold ideas into market-leading solutions.
          </p>
        </div>
        
        {/* Startups Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Portfolio Companies</h3>
          <DisplayCards cards={startupCards} />
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/portfolio" className="flex items-center" aria-label="View all portfolio startups">
              View All Portfolio Startups 
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
