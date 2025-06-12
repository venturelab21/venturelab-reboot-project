
// This file will store the scraped blog posts data
// We'll populate this with real content from the scraper

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
  readTime: string;
  tags: string[];
  content: string;
  authorBio: string;
  authorImage: string;
}

// Placeholder data - will be replaced with scraped content
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building India's Startup Ecosystem: VentureLab's Mission",
    excerpt: "Exploring how VentureLab Thapar is contributing to India's growing startup ecosystem through innovation, mentorship, and strategic support.",
    author: "VentureLab Team",
    date: "June 10, 2025",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "building-indias-startup-ecosystem",
    readTime: "6 min read",
    tags: ["Startups", "Innovation", "India", "Ecosystem"],
    content: `
      <p>India's startup ecosystem has witnessed unprecedented growth over the past decade, with innovative companies emerging across various sectors. At VentureLab Thapar, we are committed to fostering this growth by providing comprehensive support to aspiring entrepreneurs.</p>

      <h2>Our Approach to Innovation</h2>
      <p>Our methodology focuses on three core pillars: mentorship, funding, and market access. By combining these elements, we create an environment where startups can thrive and scale effectively.</p>

      <blockquote>
        "Innovation is not just about technology; it's about solving real problems that impact millions of lives." - VentureLab Leadership
      </blockquote>

      <h3>Key Programs and Initiatives</h3>
      <ul>
        <li><strong>SISFS Program:</strong> Supporting early-stage startups with seed funding and mentorship</li>
        <li><strong>MeitY TIDE 2.0:</strong> Technology incubation for deep-tech startups</li>
        <li><strong>VentureLab Accelerator:</strong> Comprehensive support for growth-stage companies</li>
      </ul>

      <h2>Impact and Success Stories</h2>
      <p>Over the years, our programs have supported numerous startups that have gone on to create significant impact in their respective domains. From fintech innovations to healthcare solutions, our portfolio companies represent the diversity and potential of Indian entrepreneurship.</p>

      <p>As we continue to evolve and expand our programs, we remain committed to our mission of building a robust startup ecosystem that can compete globally while addressing local challenges.</p>
    `,
    authorBio: "The VentureLab Team comprises experienced entrepreneurs, investors, and industry experts dedicated to fostering innovation and startup growth.",
    authorImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

// Function to get all blog posts
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

// Function to get a blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  return blogPosts.find(post => post.slug === slug) || null;
};

// Function to get blog posts by category
export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Function to add new blog posts (for scraper)
export const addBlogPosts = (newPosts: BlogPost[]): void => {
  blogPosts.push(...newPosts);
};
