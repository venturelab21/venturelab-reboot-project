
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getAllBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";
import BlogScraper from "@/utils/BlogScraper";

const categories = ["All", "Innovation", "FinTech", "CleanTech", "Funding", "Mentorship", "HealthTech", "Culture"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // Try to scrape new content
        const scraper = new BlogScraper();
        const scrapedPosts = await scraper.scrapeBlogList();
        
        if (scrapedPosts.length > 0) {
          // Convert scraped posts to our format
          const formattedPosts: BlogPost[] = scrapedPosts.map((post, index) => ({
            id: (index + 1).toString(),
            title: post.title,
            excerpt: post.excerpt || '',
            author: post.author || 'VentureLab Team',
            date: post.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            category: post.category || 'Innovation',
            image: `https://images.unsplash.com/photo-${1552664730 + index}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`,
            slug: post.slug,
            readTime: `${Math.max(2, Math.ceil(post.content.length / 200))} min read`,
            tags: post.tags || ['Innovation'],
            content: post.content,
            authorBio: `${post.author || 'VentureLab Team'} is a contributor to VentureLab's innovation ecosystem.`,
            authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          }));
          setBlogPosts(formattedPosts);
        } else {
          // Fallback to existing posts
          setBlogPosts(getAllBlogPosts());
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fallback to existing posts
        setBlogPosts(getAllBlogPosts());
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* SEO Meta Tags */}
      <div className="hidden">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "VentureLab Thapar Blog",
            "description": "Ideas, insights, and innovation from the startup ecosystem",
            "url": `${window.location.origin}/blog`,
            "publisher": {
              "@type": "Organization",
              "name": "VentureLab Thapar"
            }
          })}
        </script>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                Ideas. Insights. Innovation.
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Explore the latest trends, strategies, and stories from the startup ecosystem
              </p>
              
              {/* Search and Filter */}
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-full"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full ${
                        selectedCategory === category 
                          ? "bg-white text-blue-900 hover:bg-blue-50" 
                          : "border-white/30 text-white hover:bg-white/10"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
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
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">Loading articles...</h3>
                  <p className="text-gray-500">Fetching the latest content for you</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                          {post.category}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button asChild className="w-full rounded-full group">
                          <Link to={`/blog/${post.slug}`}>
                            Read More
                            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-8">
                Get the latest insights and stories delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full"
                />
                <Button className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8">
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
