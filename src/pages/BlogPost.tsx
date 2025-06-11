
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, Clock, Share2, ArrowLeft, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
  tags: string[];
  authorBio: string;
  authorImage: string;
}

const blogPosts: Record<string, BlogPost> = {
  "future-of-fintech-indian-startups": {
    id: "1",
    title: "The Future of FinTech: How Indian Startups are Revolutionizing Digital Payments",
    content: `
      <p>The Indian fintech landscape has witnessed unprecedented growth over the past decade, with startups leading the charge in digital payment innovation. As we look toward the future, several key trends are shaping the industry.</p>

      <h2>The Digital Payment Revolution</h2>
      <p>India's digital payment ecosystem has evolved from a cash-dependent economy to one of the world's most advanced digital payment markets. This transformation has been driven by a combination of government initiatives, technological innovation, and entrepreneurial vision.</p>

      <blockquote>
        "The future of fintech lies in creating inclusive financial solutions that serve the underbanked and unbanked populations." - Industry Expert
      </blockquote>

      <h3>Key Innovations Driving Change</h3>
      <ul>
        <li><strong>UPI Integration:</strong> Seamless integration with the Unified Payments Interface has enabled instant, secure transactions</li>
        <li><strong>AI-Powered Risk Assessment:</strong> Machine learning algorithms are revolutionizing credit scoring and fraud detection</li>
        <li><strong>Blockchain Technology:</strong> Ensuring transparency and security in financial transactions</li>
        <li><strong>Voice-Based Payments:</strong> Making digital payments accessible to non-literate users</li>
      </ul>

      <h2>Market Opportunities and Challenges</h2>
      <p>The Indian fintech market presents enormous opportunities, with millions of users still entering the digital ecosystem. However, challenges around regulatory compliance, cybersecurity, and user education remain significant.</p>

      <h3>Emerging Trends to Watch</h3>
      <ol>
        <li>Embedded Finance - Integration of financial services into non-financial platforms</li>
        <li>Neobanking - Digital-first banking solutions for underserved segments</li>
        <li>RegTech - Technology solutions for regulatory compliance</li>
        <li>InsurTech - Innovation in insurance products and distribution</li>
      </ol>

      <p>As we move forward, the success of fintech startups will depend on their ability to balance innovation with regulatory compliance, user trust, and scalable business models.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "June 8, 2025",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    slug: "future-of-fintech-indian-startups",
    readTime: "5 min read",
    tags: ["FinTech", "Digital Payments", "Innovation", "UPI", "Blockchain"],
    authorBio: "Dr. Rajesh Kumar is a fintech expert and advisor with over 15 years of experience in digital banking and payment systems.",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
};

const relatedPosts = [
  {
    title: "Building Sustainable CleanTech Solutions",
    slug: "building-sustainable-cleantech-solutions",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Funding Strategies for Early-Stage Startups",
    slug: "funding-strategies-early-stage-startups",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "The Role of Mentorship in Startup Success",
    slug: "role-of-mentorship-startup-success",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* SEO Meta Tags */}
      <div className="hidden">
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "datePublished": post.date,
            "image": post.image,
            "publisher": {
              "@type": "Organization",
              "name": "VentureLab Thapar"
            }
          })}
        </script>
      </div>

      <main className="flex-grow">
        {/* Back Navigation */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-8 left-8">
            <Badge className="bg-blue-600 text-white mb-4">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <header className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                      {post.title}
                    </h1>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="rounded-full">
                        <Share2 size={16} className="mr-2" />
                        Share
                      </Button>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </header>

                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Author Bio */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">About {post.author}</h4>
                        <p className="text-gray-600">{post.authorBio}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-8 space-y-8">
                    {/* Newsletter Signup */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">Subscribe for Updates</h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          Get the latest insights delivered to your inbox
                        </p>
                        <div className="space-y-3">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Button className="w-full rounded-lg">Subscribe</Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Related Posts */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                        <div className="space-y-4">
                          {relatedPosts.map((relatedPost, index) => (
                            <Link
                              key={index}
                              to={`/blog/${relatedPost.slug}`}
                              className="block group"
                            >
                              <div className="flex gap-3">
                                <img
                                  src={relatedPost.image}
                                  alt={relatedPost.title}
                                  className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                  <h4 className="font-medium text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {relatedPost.title}
                                  </h4>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h3>
              <p className="text-blue-100 mb-8">
                Join VentureLab Thapar and turn your innovative ideas into successful startups
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-blue-900 hover:bg-blue-50 rounded-full px-8">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
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
