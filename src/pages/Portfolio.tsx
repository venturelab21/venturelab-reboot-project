import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Spotlight } from "@/components/ui/spotlight";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Building2 } from "lucide-react";

interface Company {
  id: number;
  name: string;
  website: string;
  category: string;
  logo?: string;
  description?: string;
  funding?: string;
  featured?: boolean;
}

const companies: Company[] = [
  { 
    id: 1, 
    name: "Visarvya Businesses Pvt Ltd", 
    website: "https://www.visar.co.in/", 
    category: "Deep Tech", 
    logo: "https://www.visar.co.in/assets/logo-CgcTpD-z.svg",
    description: "Advanced technology solutions driving digital transformation across industries with AI and machine learning capabilities.",
    funding: "₹5.2 Cr",
    featured: true
  },
  { 
    id: 21, 
    name: "Eternz", 
    website: "https://www.eternz.com/", 
    category: "FinTech", 
    logo: "/lovable-uploads/d88bb36a-2af7-4d92-a981-3b843abf2943.png",
    description: "Democratizing premium asset investment through fractional ownership and AI optimization for better returns.",
    funding: "₹2.0 Cr"
  },
  { 
    id: 23, 
    name: "Foxo", 
    website: "https://www.foxo.club/", 
    category: "HealthTech", 
    logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png",
    description: "Remote patient monitoring platform for chronic diseases using advanced wearable technology and AI analytics.",
    funding: "₹3.8 Cr",
    featured: true
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSort, setSelectedSort] = useState("Latest");
  
  const categories = ["All", "Deep Tech", "HealthTech", "FinTech", "Climate Tech", "EdTech"];
  const sortOptions = ["Latest", "Funding Amount", "Alphabetical", "Featured First"];
  
  const filteredAndSortedCompanies = useMemo(() => {
    let filtered = companies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           company.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || company.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort companies
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case "Funding Amount":
          const fundingA = parseFloat(a.funding?.replace(/[^\d.]/g, '') || '0');
          const fundingB = parseFloat(b.funding?.replace(/[^\d.]/g, '') || '0');
          return fundingB - fundingA;
        case "Alphabetical":
          return a.name.localeCompare(b.name);
        case "Featured First":
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        default:
          return b.id - a.id; // Latest first
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSort]);

  const visitWebsite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const stats = [
    { label: "Portfolio Companies", value: companies.length, icon: Building2 },
    { label: "Total Funding", value: "₹50+ Cr", icon: TrendingUp },
    { label: "Success Stories", value: "15+", icon: Award }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Innovation Portfolio
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Our Portfolio
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Companies</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover the innovative companies we've supported on their journey from 
                startup to success. Each represents our commitment to fostering breakthrough technologies.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Spotlight className="from-blue-500/20 via-blue-500/10 to-transparent" size={400} />
        </section>

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          sortOptions={sortOptions}
          selectedSort={selectedSort}
          onSortChange={setSelectedSort}
          resultCount={filteredAndSortedCompanies.length}
        />

        {/* Portfolio Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredAndSortedCompanies.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No companies found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-8 ${
                viewMode === "list" 
                  ? "grid-cols-1" 
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}>
                {filteredAndSortedCompanies.map((company) => (
                  <EnhancedCard
                    key={company.id}
                    title={company.name}
                    description={company.description}
                    image={company.logo}
                    category={company.category}
                    funding={company.funding}
                    featured={company.featured}
                    type="portfolio"
                    ctaText="Visit Website"
                    onClick={() => visitWebsite(company.website)}
                    className={viewMode === "list" ? "flex-row" : ""}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Portfolio?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're always looking for the next generation of innovative startups to support and grow with.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
                onClick={() => window.open('/apply', '_blank')}
              >
                Apply Now
                <TrendingUp className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;

```
