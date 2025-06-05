import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/spotlight";
import DisplayCards from "@/components/ui/display-cards";
import { Button } from "@/components/ui/button";
import { ExternalLink, Filter, Grid, List } from "lucide-react";

interface Company {
  id: number;
  name: string;
  website: string;
  category: string;
  logo?: string;
  description?: string;
  funding?: string;
}

const companies: Company[] = [
  { 
    id: 1, 
    name: "Visarvya Businesses Pvt Ltd", 
    website: "https://www.visar.co.in/", 
    category: "Deep Tech", 
    logo: "https://www.visar.co.in/assets/logo-CgcTpD-z.svg",
    description: "Advanced technology solutions driving digital transformation across industries.",
    funding: "₹5.2 Cr"
  },
  { 
    id: 21, 
    name: "Eternz", 
    website: "https://www.eternz.com/", 
    category: "Others", 
    logo: "/lovable-uploads/d88bb36a-2af7-4d92-a981-3b843abf2943.png",
    description: "Democratizing premium asset investment through fractional ownership and AI optimization.",
    funding: "₹2.0 Cr"
  },
  { 
    id: 23, 
    name: "Foxo", 
    website: "https://www.foxo.club/", 
    category: "Digitization", 
    logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png",
    description: "Remote patient monitoring platform for chronic diseases using wearable technology.",
    funding: "₹3.8 Cr"
  },
  { 
    id: 22, 
    name: "Nirmaan", 
    website: "https://nirmaan.store/", 
    category: "Others", 
    logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png",
    description: "AI-powered personalized learning platform adapting to student performance patterns.",
    funding: "₹1.5 Cr"
  },
  { 
    id: 2, 
    name: "Sentinal Innovations Pvt Ltd", 
    website: "https://www.sentinal.in/", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/c4d41606-a6ad-4e93-bf81-d17b2f8923b7.png",
    description: "Cutting-edge security and surveillance solutions powered by AI and IoT.",
    funding: "₹3.5 Cr"
  },
  { 
    id: 3, 
    name: "Horses Mouth Technologies Pvt Ltd", 
    website: "https://yocket.com/feed/booking?source=VC_B2B_HM-RG", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/ec0b4340-c2af-4905-959f-ec5fc6e3555d.png",
    description: "Innovative educational technology platform connecting students with opportunities.",
    funding: "₹4.1 Cr"
  },
  { 
    id: 4, 
    name: "Deradh Software Pvt Ltd", 
    website: "https://www.deradh.com/", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/e7d3a7ba-3eb5-4a0b-8bd4-f1a2237e2f63.png",
    description: "Advanced software solutions for enterprise digital transformation.",
    funding: "₹2.8 Cr"
  },
  { 
    id: 6, 
    name: "Roschcrete Technologies Private", 
    website: "https://roschcrete.com/", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/3e7e1cb9-0b93-41bc-a9c4-9edd644ce15c.png",
    description: "Sustainable construction materials reducing carbon footprint in building industry.",
    funding: "₹3.2 Cr"
  },
  { 
    id: 7, 
    name: "Wendor", 
    website: "https://wendor.in/", 
    category: "Digitization", 
    logo: "/lovable-uploads/2a7f63b7-97e6-47c9-91c0-1c6ae4e3d3af.png",
    description: "Smart vending solutions with IoT integration for contactless retail experiences.",
    funding: "₹2.2 Cr"
  },
  { 
    id: 8, 
    name: "Virtuorigin Private Limited", 
    website: "https://www.virtuorigin.com/html/", 
    category: "Digitization", 
    logo: "/lovable-uploads/f4f82c50-52eb-435d-bc23-d648077853de.png",
    description: "Virtual reality and augmented reality solutions for immersive experiences.",
    funding: "₹1.8 Cr"
  },
  { 
    id: 9, 
    name: "BBX Infotech", 
    website: "https://bschoolbulls.com/index/", 
    category: "Digitization", 
    logo: "/lovable-uploads/79946fce-7bc1-4614-aec9-0b5ff740c121.png",
    description: "Educational platform connecting students with top business schools globally.",
    funding: "₹2.5 Cr"
  },
  { 
    id: 10, 
    name: "Negotrip", 
    website: "https://www.welstays.com/", 
    category: "Others", 
    logo: "/lovable-uploads/1b515ebe-8288-4bf0-83d6-45e0430875aa.png",
    description: "Travel and hospitality platform revolutionizing accommodation experiences.",
    funding: "₹1.9 Cr"
  },
  { 
    id: 11, 
    name: "Labellerr", 
    website: "https://calendly.com/tensormatics/call-with-tensor-matics-labellerr-com?month=2025-05", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/d0ab3fa2-bf0b-47af-9288-0bc1a5de4397.png",
    description: "AI-powered data annotation platform improving machine learning model accuracy by 40%.",
    funding: "₹2.8 Cr"
  },
  { 
    id: 12, 
    name: "Minus Zero", 
    website: "https://minuszero.ai/", 
    category: "Deep Tech", 
    logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png",
    description: "Autonomous driving technology with nature-inspired AI requiring minimal training data.",
    funding: "₹4.1 Cr"
  },
  { 
    id: 13, 
    name: "AGPHARM BIOINNOVATIONS LLP", 
    website: "https://www.agpharmbioinnovations.com/", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/b403b2a5-29b8-4f57-94af-ccbeaaba7591.png",
    description: "Biotechnology innovations for sustainable agriculture and pharmaceutical applications.",
    funding: "₹2.1 Cr"
  },
  { 
    id: 14, 
    name: "Flynovate Private Limited", 
    website: "https://flynovate.in/", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/03c7dce5-4d1e-4de4-82ee-60f2c84a2d79.png",
    description: "Innovative aviation solutions promoting sustainable flight technologies.",
    funding: "₹3.0 Cr"
  },
  { 
    id: 15, 
    name: "BbookThat Studio", 
    website: "https://www.bookthatstudio.com/", 
    category: "Digitization", 
    logo: "/lovable-uploads/345e05e5-2aa1-4a0b-996c-36afbc1406b8.png",
    description: "Creative studio booking platform connecting artists with professional spaces.",
    funding: "₹1.2 Cr"
  },
  { 
    id: 16, 
    name: "TickTalkTo", 
    website: "https://abhay.practiceid.site/", 
    category: "Digitization", 
    logo: "/lovable-uploads/eb68fdbc-3168-4a1d-b2fc-da686b4943c9.png",
    description: "Healthcare communication platform improving patient-doctor interactions.",
    funding: "₹1.7 Cr"
  },
  { 
    id: 17, 
    name: "Vishwaaz", 
    website: "https://ivoz.ai/", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/bfe1fd89-133d-43a3-8c74-a90362eb8280.png",
    description: "AI-powered voice technology solutions for enterprise communication.",
    funding: "₹2.3 Cr"
  },
  { 
    id: 18, 
    name: "SoGrow", 
    website: "https://sogrow.in/", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/4254f05f-a0be-4d9f-8800-2e098a32656f.png",
    description: "Sustainable agriculture platform optimizing crop yields through smart farming.",
    funding: "₹1.8 Cr"
  },
  { 
    id: 19, 
    name: "Terafac Technologies", 
    website: "https://www.terafac.com/", 
    category: "Deep Tech", 
    logo: "/lovable-uploads/064f6bd6-f4ba-40f6-a28a-cc7ee4fd1e54.png",
    description: "Advanced semiconductor solutions for next-generation computing and AI hardware.",
    funding: "₹3.2 Cr"
  },
  { 
    id: 20, 
    name: "REPEAT GUD", 
    website: "https://repeatgud.com", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/97db16cb-aaed-4103-97da-b3a902f96bcf.png",
    description: "Sustainable recycling solutions reducing environmental impact by 40%.",
    funding: "₹2.5 Cr"
  },
  { 
    id: 24, 
    name: "Project studio", 
    website: "https://www.projectstudio.ai/", 
    category: "Deep Tech",
    description: "AI-powered design collaboration platform for creative professionals.",
    funding: "₹2.4 Cr"
  },
  { 
    id: 25, 
    name: "Kriya fit", 
    website: "https://kriya.fit/", 
    category: "Others", 
    logo: "/lovable-uploads/ddd9de6e-bc41-4d22-8cf9-7be671cf732c.png",
    description: "Personalized fitness platform combining AI with wellness coaching.",
    funding: "₹1.3 Cr"
  },
  { 
    id: 26, 
    name: "BulkSolids Innovation India", 
    website: "https://bulksolidsindia.com/", 
    category: "Climate Tech", 
    logo: "/lovable-uploads/ad2f5ab3-c579-47f0-b80f-a845f637e9a7.png",
    description: "Innovative bulk materials handling solutions for sustainable industrial processes.",
    funding: "₹2.0 Cr"
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const categories = ["All", "Deep Tech", "Digitization", "Climate Tech", "Others"];
  
  const filteredCompanies = activeCategory === "All"
    ? companies
    : companies.filter(company => company.category === activeCategory);

  const visitWebsite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Transform companies data to enhanced DisplayCard format
  const companyCards = filteredCompanies.map(company => ({
    title: company.name,
    description: company.description || "Innovative company driving change in their industry.",
    logo: company.logo,
    category: company.category,
    funding: company.funding,
    className: `group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-blue-200 ${
      viewMode === "list" ? "h-auto" : "h-[220px]"
    }`,
    onClick: () => visitWebsite(company.website),
    ctaText: "Visit Website"
  }));

  const getCategoryCount = (category: string) => {
    if (category === "All") return companies.length;
    return companies.filter(company => company.category === category).length;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-3">
              <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-8 text-gray-900">
              Our Portfolio Companies
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
              Meet the innovative companies that have grown with our support and are now making an impact in their industries. 
              From deep tech to climate solutions, discover the future we're building together.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{companies.length}+</div>
                <div className="text-gray-600">Portfolio Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">₹50+ Cr</div>
                <div className="text-gray-600">Total Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{categories.length - 1}</div>
                <div className="text-gray-600">Key Sectors</div>
              </div>
            </div>
          </div>
          <Spotlight 
            className="from-blue-500/20 via-blue-500/10 to-transparent" 
            size={400}
          />
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {/* Enhanced Filter Controls */}
            <div className="mb-12">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <span className="text-lg font-semibold text-gray-800">Filter by Category:</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="px-3"
                      aria-label="Grid view"
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="px-3"
                      aria-label="List view"
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Category Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-blue-600 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                    }`}
                    aria-label={`Filter by ${category}`}
                  >
                    {category}
                    <span className="ml-2 text-xs opacity-75">
                      ({getCategoryCount(category)})
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredCompanies.length}</span> companies
                {activeCategory !== "All" && (
                  <span> in <span className="font-semibold text-blue-600">{activeCategory}</span></span>
                )}
              </p>
            </div>
            
            {/* Display Cards Grid */}
            <DisplayCards 
              cards={companyCards} 
              gridClassName={viewMode === "list" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}
            />
            
            {/* Empty State */}
            {filteredCompanies.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No companies found</h3>
                <p className="text-gray-500">Try selecting a different category or view all companies.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
