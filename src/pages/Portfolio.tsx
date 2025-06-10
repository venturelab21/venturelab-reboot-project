
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/spotlight";
import DisplayCards from "@/components/ui/display-cards";
import { Grid2X2, List, TrendingUp, Building2, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Company {
  id: number;
  name: string;
  website: string;
  category: string;
  logo?: string;
  description?: string;
}

const companies: Company[] = [
  { id: 1, name: "Visarvya Businesses Pvt Ltd", website: "https://www.visar.co.in/", category: "Deep Tech", logo: "https://www.visar.co.in/assets/logo-CgcTpD-z.svg", description: "Advanced AI solutions for industrial automation and optimization" },
  { id: 21, name: "Eternz", website: "https://www.eternz.com/", category: "Others", logo: "/lovable-uploads/d88bb36a-2af7-4d92-a981-3b843abf2943.png", description: "Digital transformation platform for modern businesses" },
  { id: 23, name: "Foxo", website: "https://www.foxo.club/", category: "Digitization", logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png", description: "Innovative health monitoring solutions using wearable technology" },
  { id: 22, name: "Nirmaan", website: "https://nirmaan.store/", category: "Others", logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png", description: "Personalized learning platform powered by AI technology" },
  { id: 2, name: "Sentinal Innovations Pvt Ltd", website: "https://www.sentinal.in/", category: "Deep Tech", logo: "/lovable-uploads/c4d41606-a6ad-4e93-bf81-d17b2f8923b7.png", description: "Cutting-edge cybersecurity solutions for enterprise protection" },
  { id: 3, name: "Horses Mouth Technologies Pvt Ltd", website: "https://yocket.com/feed/booking?source=VC_B2B_HM-RG", category: "Deep Tech", logo: "/lovable-uploads/ec0b4340-c2af-4905-959f-ec5fc6e3555d.png", description: "Data analytics platform for educational technology solutions" },
  { id: 4, name: "Deradh Software Pvt Ltd", website: "https://www.deradh.com/", category: "Deep Tech", logo: "/lovable-uploads/e7d3a7ba-3eb5-4a0b-8bd4-f1a2237e2f63.png", description: "Advanced software solutions for complex technical challenges" },
  { id: 6, name: "Roschcrete Technologies Private", website: "https://roschcrete.com/", category: "Climate Tech", logo: "/lovable-uploads/3e7e1cb9-0b93-41bc-a9c4-9edd644ce15c.png", description: "Sustainable construction materials reducing carbon footprint" },
  { id: 7, name: "Wendor", website: "https://wendor.in/", category: "Digitization", logo: "/lovable-uploads/2a7f63b7-97e6-47c9-91c0-1c6ae4e3d3af.png", description: "Smart vending solutions with IoT integration" },
  { id: 8, name: "Virtuorigin Private Limited", website: "https://www.virtuorigin.com/html/", category: "Digitization", logo: "/lovable-uploads/f4f82c50-52eb-435d-bc23-d648077853de.png", description: "Virtual reality solutions for immersive experiences" },
  { id: 9, name: "BBX Infotech", website: "https://bschoolbulls.com/index/", category: "Digitization", logo: "/lovable-uploads/79946fce-7bc1-4614-aec9-0b5ff740c121.png", description: "Educational technology platform for business schools" },
  { id: 10, name: "Negotrip", website: "https://www.welstays.com/", category: "Others", logo: "/lovable-uploads/1b515ebe-8288-4bf0-83d6-45e0430875aa.png", description: "Travel and hospitality management platform" },
  { id: 11, name: "Labellerr", website: "https://calendly.com/tensormatics/call-with-tensor-matics-labellerr-com?month=2025-05", category: "Deep Tech", logo: "/lovable-uploads/d0ab3fa2-bf0b-47af-9288-0bc1a5de4397.png", description: "AI-powered data annotation platform for machine learning" },
  { id: 12, name: "Minus Zero", website: "https://minuszero.ai/", category: "Deep Tech", logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png", description: "Autonomous driving technology with nature-inspired AI" },
  { id: 13, name: "AGPHARM BIOINNOVATIONS LLP", website: "https://www.agpharmbioinnovations.com/", category: "Climate Tech", logo: "/lovable-uploads/b403b2a5-29b8-4f57-94af-ccbeaaba7591.png", description: "Sustainable agricultural solutions and bio-innovations" },
  { id: 14, name: "Flynovate Private Limited", website: "https://flynovate.in/", category: "Climate Tech", logo: "/lovable-uploads/03c7dce5-4d1e-4de4-82ee-60f2c84a2d79.png", description: "Green aviation technology for sustainable transportation" },
  { id: 15, name: "BbookThat Studio", website: "https://www.bookthatstudio.com/", category: "Digitization", logo: "/lovable-uploads/345e05e5-2aa1-4a0b-996c-36afbc1406b8.png", description: "Digital booking platform for creative studio spaces" },
  { id: 16, name: "TickTalkTo", website: "https://abhay.practiceid.site/", category: "Digitization", logo: "/lovable-uploads/eb68fdbc-3168-4a1d-b2fc-da686b4943c9.png", description: "Communication platform for healthcare professionals" },
  { id: 17, name: "Vishwaaz", website: "https://ivoz.ai/", category: "Deep Tech", logo: "/lovable-uploads/bfe1fd89-133d-43a3-8c74-a90362eb8280.png", description: "Voice AI technology for intelligent conversation systems" },
  { id: 18, name: "SoGrow", website: "https://sogrow.in/", category: "Climate Tech", logo: "/lovable-uploads/4254f05f-a0be-4d9f-8800-2e098a32656f.png", description: "Sustainable agriculture technology for enhanced crop yields" },
  { id: 19, name: "Terafac Technologies", website: "https://www.terafac.com/", category: "Deep Tech", logo: "/lovable-uploads/064f6bd6-f4ba-40f6-a28a-cc7ee4fd1e54.png", description: "Advanced semiconductor solutions for next-generation computing" },
  { id: 20, name: "REPEAT GUD", website: "https://repeatgud.com", category: "Climate Tech", logo: "/lovable-uploads/97db16cb-aaed-4103-97da-b3a902f96bcf.png", description: "Sustainable recycling solutions reducing environmental impact" },
  { id: 24, name: "Project studio", website: "https://www.projectstudio.ai/", category: "Deep Tech", description: "AI-powered design collaboration platform for creative professionals" },
  { id: 25, name: "Kriya fit", website: "https://kriya.fit/", category: "Others", logo: "/lovable-uploads/ddd9de6e-bc41-4d22-8cf9-7be671cf732c.png", description: "Fitness technology platform for personalized wellness" },
  { id: 26, name: "BulkSolids Innovation India", website: "https://bulksolidsindia.com/", category: "Climate Tech", logo: "/lovable-uploads/ad2f5ab3-c579-47f0-b80f-a845f637e9a7.png", description: "Innovative solutions for bulk materials handling and processing" },
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

  // Calculate stats
  const totalFunding = "₹50+ Cr";
  const portfolioCount = companies.length;
  const keySecotrs = 4;

  // Transform companies data based on view mode
  const companyCards = filteredCompanies.map(company => ({
    title: company.name,
    logo: company.logo,
    category: company.category,
    description: company.description,
    className: `cursor-pointer hover:-translate-y-1 transition-all duration-300 ${viewMode === 'list' ? 'h-auto' : 'h-[200px]'} hover:shadow-lg`,
    onClick: () => visitWebsite(company.website)
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-1 bg-blue-500"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our Portfolio Companies
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Driving innovation across industries—from cutting-edge deep tech to sustainable climate solutions
              </p>

              {/* Impact Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Building2 className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{portfolioCount}+</div>
                  <div className="text-gray-700 font-medium">Portfolio Companies</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{totalFunding}</div>
                  <div className="text-gray-700 font-medium">Total Funding</div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{keySecotrs}</div>
                  <div className="text-gray-700 font-medium">Key Sectors</div>
                </div>
              </div>
            </div>
          </div>
          <Spotlight 
            className="from-blue-500/20 via-blue-500/10 to-transparent" 
            size={300}
          />
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Filter Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? "bg-blue-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : ""}`}
                >
                  <Grid2X2 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : ""}`}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredCompanies.length}</span> companies
                {activeCategory !== "All" && (
                  <span> in <span className="font-semibold text-blue-600">{activeCategory}</span></span>
                )}
              </p>
            </div>
            
            {/* Display Cards Grid */}
            <DisplayCards 
              cards={companyCards} 
              gridClassName={viewMode === "list" ? "grid-cols-1 gap-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
