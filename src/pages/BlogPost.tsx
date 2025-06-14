
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, Share2, ArrowLeft, BookOpen } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      setPost(foundPost);
      
      if (foundPost) {
        // Get related posts from the same category
        const allPosts = getAllBlogPosts();
        const related = allPosts
          .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [slug]);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Technology': 'bg-blue-100 text-blue-800 border-blue-200',
      'Innovation': 'bg-purple-100 text-purple-800 border-purple-200',
      'Finance': 'bg-green-100 text-green-800 border-green-200',
      'Funding': 'bg-green-100 text-green-800 border-green-200',
      'Start-Up': 'bg-orange-100 text-orange-800 border-orange-200',
      'Mentorship': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'HealthTech': 'bg-red-100 text-red-800 border-red-200',
      'FinTech': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'CleanTech': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'Culture': 'bg-pink-100 text-pink-800 border-pink-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">The blog post you're looking for doesn't exist or may have been moved.</p>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 rounded-full px-8">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-5xl mx-auto">
              <Button variant="ghost" asChild className="hover:bg-gray-100 -ml-4">
                <Link to="/blog" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                  <ArrowLeft size={18} className="mr-2" />
                  Back to All Posts
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Section with Featured Image */}
        <div className="relative">
          <div className="relative h-80 md:h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-8 left-8">
              <Badge className={`${getCategoryColor(post.category)} border font-medium px-4 py-2`}>
                {post.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-12">
                
                {/* Main Content - 3 columns */}
                <div className="lg:col-span-3">
                  <header className="mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                      {post.title}
                    </h1>
                    
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <User size={16} className="text-purple-600" />
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Calendar size={16} className="text-blue-600" />
                        </div>
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Clock size={16} className="text-green-600" />
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Share and Tags */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                      <Button variant="outline" size="sm" className="rounded-full border-2 hover:bg-purple-50 hover:border-purple-300 self-start">
                        <Share2 size={16} className="mr-2" />
                        Share Article
                      </Button>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full px-3 py-1">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </header>

                  {/* Article Body */}
                  <div 
                    className="prose prose-lg prose-gray max-w-none 
                               prose-headings:text-gray-900 prose-headings:font-bold prose-headings:leading-tight
                               prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3
                               prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                               prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                               prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
                               prose-strong:text-gray-900 prose-strong:font-semibold
                               prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 
                               prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-800
                               prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-li:mb-2
                               prose-li:marker:text-purple-500"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Author Bio */}
                  <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-purple-50 rounded-2xl border border-gray-200">
                    <div className="flex items-start gap-6">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">About {post.author}</h4>
                        <p className="text-gray-700 leading-relaxed">{post.authorBio}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar - 1 column */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    
                    {/* Newsletter Signup */}
                    <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                      <CardContent className="p-8">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-bold text-xl mb-4">Stay Updated</h3>
                          <p className="text-purple-100 mb-6 text-sm leading-relaxed">
                            Get the latest insights and stories delivered directly to your inbox
                          </p>
                          <div className="space-y-4">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                            />
                            <Button className="w-full bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-semibold py-3">
                              Subscribe Now
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                      <Card className="shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="font-bold text-xl mb-6 text-gray-900">Related Articles</h3>
                          <div className="space-y-6">
                            {relatedPosts.map((relatedPost) => (
                              <Link
                                key={relatedPost.id}
                                to={`/blog/${relatedPost.slug}`}
                                className="block group"
                              >
                                <div className="flex gap-4">
                                  <img
                                    src={relatedPost.image}
                                    alt={relatedPost.title}
                                    className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                                  />
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-sm group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
                                      {relatedPost.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                      <Calendar size={12} />
                                      <span>{relatedPost.date}</span>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Build the Future?
              </h3>
              <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                Join VentureLab Thapar and turn your innovative ideas into successful startups that make a real impact
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-10 py-4 text-lg font-semibold">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-4 text-lg font-semibold">
                  <Link to="/contact">Get in Touch</Link>
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

export default BlogPost;
