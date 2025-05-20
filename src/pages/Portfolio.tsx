
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

interface Company {
  id: number;
  name: string;
  website: string;
  category: string;
  logo?: string;
}

const companies: Company[] = [
  { id: 1, name: "Visarvya Businesses Pvt Ltd", website: "https://www.visar.co.in/", category: "Deep Tech" },
  { id: 2, name: "Sentinal Innovations Pvt Ltd", website: "https://www.sentinal.in/", category: "Deep Tech" },
  { id: 3, name: "Horses Mouth Technologies Pvt Ltd", website: "https://yocket.com/feed/booking?source=VC_B2B_HM-RG", category: "Deep Tech" },
  { id: 4, name: "Deradh Software Pvt Ltd", website: "https://www.deradh.com/", category: "Deep Tech" },
  { id: 6, name: "Roschcrete Technologies Private", website: "https://roschcrete.com/", category: "Climate Tech" },
  { id: 7, name: "Wendor", website: "https://wendor.in/", category: "Digitization" },
  { id: 8, name: "Virtuorigin Private Limited", website: "https://www.virtuorigin.com/html/", category: "Digitization" },
  { id: 9, name: "BBX Infotech", website: "https://bschoolbulls.com/index/", category: "Digitization" },
  { id: 10, name: "Negotrip", website: "https://www.welstays.com/", category: "Others" },
  { id: 11, name: "Labellerr", website: "https://calendly.com/tensormatics/call-with-tensor-matics-labellerr-com?month=2025-05", category: "Deep Tech" },
  { id: 12, name: "Minus Zero", website: "https://minuszero.ai/", category: "Deep Tech" },
  { id: 13, name: "AGPHARM BIOINNOVATIONS LLP", website: "https://www.agpharmbioinnovations.com/", category: "Climate Tech" },
  { id: 14, name: "Flynovate Private Limited", website: "https://flynovate.in/", category: "Climate Tech" },
  { id: 15, name: "BbookThat Studio", website: "https://www.bookthatstudio.com/", category: "Digitization" },
  { id: 16, name: "TickTalkTo", website: "https://abhay.practiceid.site/", category: "Digitization" },
  { id: 17, name: "Vishwaaz", website: "https://ivoz.ai/", category: "Deep Tech" },
  { id: 18, name: "SoGrow", website: "https://sogrow.in/", category: "Climate Tech" },
  { id: 19, name: "Terafac Technologies", website: "https://www.terafac.com/", category: "Deep Tech" },
  { id: 20, name: "REPEAT GUD", website: "https://repeatgud.com", category: "Climate Tech" },
  { id: 21, name: "Eternz", website: "https://www.eternz.com/", category: "Others" },
  { id: 22, name: "Nirmaan", website: "https://nirmaan.store/", category: "Others", logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png" },
  { id: 23, name: "Foxo", website: "https://www.foxo.club/", category: "Digitization" },
  { id: 24, name: "Project studio", website: "https://www.projectstudio.ai/", category: "Deep Tech" },
  { id: 25, name: "Kriya fit", website: "https://kriya.fit/", category: "Others" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", "Deep Tech", "Digitization", "Climate Tech", "Others"];
  
  const filteredCompanies = activeCategory === "All"
    ? companies
    : companies.filter(company => company.category === activeCategory);

  const visitWebsite = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-center mb-2">
              <div className="w-20 h-1 bg-blue-500"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Portfolio Companies</h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Meet the innovative companies that have grown with our support and are now making an impact in their industries.
            </p>
          </div>
          <Spotlight 
            className="from-blue-500/20 via-blue-500/10 to-transparent" 
            size={300}
          />
        </section>

        {/* Portfolio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => visitWebsite(company.website)}
                  className="border border-gray-200 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-hover transition-shadow group relative"
                >
                  <div className="p-6">
                    <div className="absolute top-4 right-4 text-gray-400 group-hover:text-blue-500 transition-colors">
                      <ExternalLink size={18} />
                    </div>
                    <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full mb-3">
                      {company.category}
                    </span>
                    {company.logo ? (
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={company.logo} 
                          alt={`${company.name} logo`} 
                          className="h-16 w-auto object-contain"
                        />
                      </div>
                    ) : null}
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
                      {company.name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {company.website}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
