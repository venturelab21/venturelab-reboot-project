
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Spotlight } from "@/components/ui/spotlight";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Company {
  id: number;
  name: string;
  website: string;
  category: string;
  logo?: string;
}

const companies: Company[] = [
  { id: 1, name: "Visarvya Businesses Pvt Ltd", website: "https://www.visar.co.in/", category: "Deep Tech" },
  { id: 2, name: "Sentinal Innovations Pvt Ltd", website: "https://www.sentinal.in/", category: "Deep Tech", logo: "/lovable-uploads/c4d41606-a6ad-4e93-bf81-d17b2f8923b7.png" },
  { id: 3, name: "Horses Mouth Technologies Pvt Ltd", website: "https://yocket.com/feed/booking?source=VC_B2B_HM-RG", category: "Deep Tech", logo: "/lovable-uploads/ec0b4340-c2af-4905-959f-ec5fc6e3555d.png" },
  { id: 4, name: "Deradh Software Pvt Ltd", website: "https://www.deradh.com/", category: "Deep Tech", logo: "/lovable-uploads/e7d3a7ba-3eb5-4a0b-8bd4-f1a2237e2f63.png" },
  { id: 6, name: "Roschcrete Technologies Private", website: "https://roschcrete.com/", category: "Climate Tech", logo: "/lovable-uploads/8ac463bc-e8ab-42c0-91aa-9f8d69ecc375.png" },
  { id: 7, name: "Wendor", website: "https://wendor.in/", category: "Digitization" },
  { id: 8, name: "Virtuorigin Private Limited", website: "https://www.virtuorigin.com/html/", category: "Digitization" },
  { id: 9, name: "BBX Infotech", website: "https://bschoolbulls.com/index/", category: "Digitization", logo: "/lovable-uploads/79946fce-7bc1-4614-aec9-0b5ff740c121.png" },
  { id: 10, name: "Negotrip", website: "https://www.welstays.com/", category: "Others" },
  { id: 11, name: "Labellerr", website: "https://calendly.com/tensormatics/call-with-tensor-matics-labellerr-com?month=2025-05", category: "Deep Tech", logo: "/lovable-uploads/d0ab3fa2-bf0b-47af-9288-0bc1a5de4397.png" },
  { id: 12, name: "Minus Zero", website: "https://minuszero.ai/", category: "Deep Tech", logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png" },
  { id: 13, name: "AGPHARM BIOINNOVATIONS LLP", website: "https://www.agpharmbioinnovations.com/", category: "Climate Tech", logo: "/lovable-uploads/b403b2a5-29b8-4f57-94af-ccbeaaba7591.png" },
  { id: 14, name: "Flynovate Private Limited", website: "https://flynovate.in/", category: "Climate Tech", logo: "/lovable-uploads/03c7dce5-4d1e-4de4-82ee-60f2c84a2d79.png" },
  { id: 15, name: "BbookThat Studio", website: "https://www.bookthatstudio.com/", category: "Digitization", logo: "/lovable-uploads/345e05e5-2aa1-4a0b-996c-36afbc1406b8.png" },
  { id: 16, name: "TickTalkTo", website: "https://abhay.practiceid.site/", category: "Digitization" },
  { id: 17, name: "Vishwaaz", website: "https://ivoz.ai/", category: "Deep Tech" },
  { id: 18, name: "SoGrow", website: "https://sogrow.in/", category: "Climate Tech", logo: "/lovable-uploads/4254f05f-a0be-4d9f-8800-2e098a32656f.png" },
  { id: 19, name: "Terafac Technologies", website: "https://www.terafac.com/", category: "Deep Tech" },
  { id: 20, name: "REPEAT GUD", website: "https://repeatgud.com", category: "Climate Tech", logo: "/lovable-uploads/97db16cb-aaed-4103-97da-b3a902f96bcf.png" },
  { id: 21, name: "Eternz", website: "https://www.eternz.com/", category: "Others", logo: "/lovable-uploads/d88bb36a-2af7-4d92-a981-3b843abf2943.png" },
  { id: 22, name: "Nirmaan", website: "https://nirmaan.store/", category: "Others", logo: "/lovable-uploads/744476bf-646e-4a85-b07a-0a1df7e62b0e.png" },
  { id: 23, name: "Foxo", website: "https://www.foxo.club/", category: "Digitization", logo: "/lovable-uploads/f806cfe2-f1ff-4e33-9013-a68caf43e589.png" },
  { id: 24, name: "Project studio", website: "https://www.projectstudio.ai/", category: "Deep Tech" },
  { id: 25, name: "Kriya fit", website: "https://kriya.fit/", category: "Others" },
  { id: 26, name: "BulkSolids Innovation India", website: "https://bulksolidsindia.com/", category: "Climate Tech", logo: "/lovable-uploads/ad2f5ab3-c579-47f0-b80f-a845f637e9a7.png" },
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => visitWebsite(company.website)}
                  className="border border-gray-200 bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group relative h-[180px]"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                        {company.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors line-clamp-2 max-w-[60%]">
                        {company.name}
                      </h3>
                      <div className="flex-shrink-0 w-24 h-16 flex items-center justify-center">
                        {company.logo ? (
                          <img 
                            src={company.logo} 
                            alt={`${company.name} logo`} 
                            className="max-h-16 max-w-24 object-contain" 
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                            <span className="text-xl font-semibold text-gray-400">
                              {company.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
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
