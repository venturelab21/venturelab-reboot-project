
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import BlogPagination from "@/components/BlogPagination";
import { useToast } from "@/components/ui/use-toast";

const categories = ["All Blogs", "Technology", "Innovation", "Finance", "Start-Up", "Mentorship", "HealthTech"];
const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Blogs");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setBlogPosts(getAllBlogPosts());
      } catch (error) {
        console.error('Error loading blog posts:', error);
        toast({
          title: "Notice",
          description: "Using sample blog content.",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, [toast]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Blogs" || 
                           post.category === selectedCategory ||
                           (selectedCategory === "Start-Up" && post.category === "Funding");
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800',
      'Innovation': 'bg-purple-100 text-purple-800',
      'Finance': 'bg-green-100 text-green-800',
      'Funding': 'bg-green-100 text-green-800',
      'Start-Up': 'bg-orange-100 text-orange-800',
      'Mentorship': 'bg-yellow-100 text-yellow-800',
      'HealthTech': 'bg-red-100 text-red-800',
      'FinTech': 'bg-indigo-100 text-indigo-800',
      'CleanTech': 'bg-emerald-100 text-emerald-800',
      'Culture': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Modern Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Recent News & Blogs
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Explore the latest insights, trends, and stories from the startup ecosystem at VentureLab Thapar
              </p>
              
              {/* Search Bar */}
              <div className="max-w-lg mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full shadow-lg"
                  />
                </div>
              </div>
              
              {/* Pill-shaped Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category 
                        ? "bg-white text-purple-900 shadow-lg transform scale-105" 
                        : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin mx-auto mb-4 w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"></div>
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">Loading articles...</h3>
                  <p className="text-gray-500">Fetching the latest content</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedPosts.map((post) => (
                      <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-lg">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Badge className={`absolute top-4 left-4 ${getCategoryColor(post.category)} border-0 font-medium`}>
                            {post.category}
                          </Badge>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-purple-600" />
                              <span className="font-medium">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={16} className="text-purple-600" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-purple-700 transition-colors leading-tight">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={16} className="text-purple-600" />
                              <span className="text-sm font-medium text-gray-700">{post.author}</span>
                            </div>
                            
                            <Button asChild size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full group/btn">
                              <Link to={`/blog/${post.slug}`}>
                                Read More
                                <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with VentureLab</h3>
              <p className="text-purple-100 mb-8 text-lg">
                Get the latest insights and stories delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-full py-3 px-6 border-0 bg-white/90"
                />
                <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
