
import { useState, useMemo } from "react";
import { FilterBar } from "@/components/ui/filter-bar";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Calendar, MapPin, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedSort, setSelectedSort] = useState("Recent");

  // Sample portfolio data
  const portfolioData = [
    {
      id: 1,
      title: "AgriTech Solutions",
      description: "Revolutionary IoT-based farming solutions that optimize crop yields through smart sensors and AI-driven analytics.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=250&fit=crop",
      category: "AgriTech",
      funding: "₹2.5 Cr",
      stage: "Series A",
      founded: "2021",
      team: "12 members",
      tags: ["IoT", "AI", "Agriculture"]
    },
    {
      id: 2,
      title: "HealthTech Innovations",
      description: "AI-powered diagnostic platform that provides accurate medical insights using machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "HealthTech",
      funding: "₹1.8 Cr",
      stage: "Seed",
      founded: "2022",
      team: "8 members",
      tags: ["AI", "Healthcare", "Diagnostics"]
    },
    {
      id: 3,
      title: "EduTech Platform",
      description: "Personalized learning platform that adapts to individual student needs using advanced analytics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      category: "EduTech",
      funding: "₹3.2 Cr",
      stage: "Series A",
      founded: "2020",
      team: "15 members",
      tags: ["Education", "AI", "Analytics"]
    },
    {
      id: 4,
      title: "FinTech Solutions",
      description: "Blockchain-based payment gateway that ensures secure and transparent financial transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      category: "FinTech",
      funding: "₹4.1 Cr",
      stage: "Series B",
      founded: "2019",
      team: "20 members",
      tags: ["Blockchain", "Payments", "Security"]
    },
    {
      id: 5,
      title: "CleanTech Energy",
      description: "Solar energy optimization system that maximizes efficiency through smart grid integration.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
      category: "CleanTech",
      funding: "₹5.5 Cr",
      stage: "Series A",
      founded: "2021",
      team: "18 members",
      tags: ["Solar", "Energy", "Grid"]
    },
    {
      id: 6,
      title: "Gaming Studio",
      description: "Immersive VR gaming experiences that combine storytelling with cutting-edge technology.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=250&fit=crop",
      category: "Gaming",
      funding: "₹1.2 Cr",
      stage: "Seed",
      founded: "2022",
      team: "10 members",
      tags: ["VR", "Gaming", "Entertainment"]
    }
  ];

  const categories = ["All", "AgriTech", "HealthTech", "EduTech", "FinTech", "CleanTech", "Gaming"];
  const sortOptions = ["Recent", "Funding Amount", "Team Size", "Alphabetical"];

  const filteredAndSortedData = useMemo(() => {
    let filtered = portfolioData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort the filtered data
    filtered.sort((a, b) => {
      switch (selectedSort) {
        case "Funding Amount":
          const aFunding = parseFloat(a.funding.replace(/[₹\s,Cr]/g, ''));
          const bFunding = parseFloat(b.funding.replace(/[₹\s,Cr]/g, ''));
          return bFunding - aFunding;
        case "Team Size":
          const aTeam = parseInt(a.team.split(' ')[0]);
          const bTeam = parseInt(b.team.split(' ')[0]);
          return bTeam - aTeam;
        case "Alphabetical":
          return a.title.localeCompare(b.title);
        case "Recent":
        default:
          return parseInt(b.founded) - parseInt(a.founded);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSort]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
                OUR PORTFOLIO
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                Startup Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Discover the innovative startups we've nurtured and supported through their entrepreneurial journey
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-200">Startups Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹75+ Cr</div>
                  <div className="text-blue-200">Total Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Success Stories</div>
                </div>
              </div>
            </div>
          </div>
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
          resultCount={filteredAndSortedData.length}
        />

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredAndSortedData.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No startups found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredAndSortedData.map((startup) => (
                      <EnhancedCard
                        key={startup.id}
                        title={startup.title}
                        description={startup.description}
                        image={startup.image}
                        category={startup.category}
                        funding={startup.funding}
                        type="portfolio"
                        featured={startup.stage === "Series B"}
                        ctaText="View Details"
                        onClick={() => console.log(`Viewing ${startup.title}`)}
                        className="h-full"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredAndSortedData.map((startup) => (
                      <div key={startup.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3">
                            <img 
                              src={startup.image} 
                              alt={startup.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{startup.title}</h3>
                                <Badge variant="secondary" className="mb-3">
                                  {startup.category}
                                </Badge>
                              </div>
                              <Badge className="bg-green-100 text-green-800">
                                💰 {startup.funding}
                              </Badge>
                            </div>
                            <p className="text-gray-600 mb-4 leading-relaxed">{startup.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {startup.team}
                              </span>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                Founded {startup.founded}
                              </span>
                              <span className="flex items-center">
                                <TrendingUp className="w-4 h-4 mr-1" />
                                {startup.stage}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {startup.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button variant="outline" className="w-full md:w-auto">
                              View Details
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Portfolio
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to take your startup to the next level? Apply to our programs and become part of our success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
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
