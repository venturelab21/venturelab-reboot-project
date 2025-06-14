
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
const POSTS_PER_PAGE = 6;

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
      'Technology': 'bg-blue-500 text-white',
      'Innovation': 'bg-purple-500 text-white',
      'Finance': 'bg-green-500 text-white',
      'Funding': 'bg-green-500 text-white',
      'Start-Up': 'bg-orange-500 text-white',
      'Mentorship': 'bg-yellow-500 text-white',
      'HealthTech': 'bg-red-500 text-white',
      'FinTech': 'bg-indigo-500 text-white',
      'CleanTech': 'bg-emerald-500 text-white',
      'Culture': 'bg-pink-500 text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500 text-white';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Clean Hero Section */}
        <section className="relative py-12 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                Recent News & Blogs
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
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
                    className="pl-12 py-3 text-base bg-white border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category 
                        ? "bg-blue-600 text-white shadow-md" 
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="animate-spin mx-auto mb-4 w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Loading articles...</h3>
                  <p className="text-gray-500">Fetching the latest content</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedPosts.map((post) => (
                      <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100 rounded-2xl">
                        <div className="relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <Badge className={`absolute top-3 left-3 ${getCategoryColor(post.category)} rounded-full px-3 py-1 text-xs font-medium`}>
                            {post.category}
                          </Badge>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} className="text-blue-500" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} className="text-blue-500" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <User size={14} className="text-blue-500" />
                              <span className="text-xs font-medium text-gray-700">{post.author}</span>
                            </div>
                            
                            <Button asChild size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-full p-2 h-auto group/btn">
                              <Link to={`/blog/${post.slug}`}>
                                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <BlogPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with VentureLab</h3>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest insights and stories delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full py-3 px-6 border-0 bg-white/90 focus:bg-white"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-50 rounded-full px-8 py-3 font-semibold">
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
