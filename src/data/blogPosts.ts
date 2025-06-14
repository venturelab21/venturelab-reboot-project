
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
  },
  {
    id: "2",
    title: "Unearthing Tomorrow: The Future of Mining in India with Technology and Sustainability",
    excerpt: "Exploring how technology and sustainable practices are revolutionizing India's mining industry, creating opportunities for innovation and environmental responsibility.",
    author: "VentureLab Research Team",
    date: "June 8, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1582192730841-2a8803ba842f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "unearthing-tomorrow-future-mining-india-technology-sustainability",
    readTime: "8 min read",
    tags: ["Mining", "Technology", "Sustainability", "Innovation", "India"],
    content: `
      <p>India's mining sector stands at a critical juncture where traditional practices meet cutting-edge technology. As the nation seeks to balance economic growth with environmental stewardship, the mining industry is undergoing a remarkable transformation driven by innovation and sustainability.</p>

      <h2>The Digital Revolution in Mining</h2>
      <p>Advanced technologies such as artificial intelligence, IoT sensors, and automated machinery are revolutionizing mining operations across India. These innovations promise increased efficiency, enhanced safety, and reduced environmental impact.</p>

      <h3>Key Technological Innovations</h3>
      <ul>
        <li><strong>AI-Powered Exploration:</strong> Machine learning algorithms analyze geological data to identify mineral deposits with unprecedented accuracy</li>
        <li><strong>Autonomous Mining Equipment:</strong> Self-operating vehicles and machinery reduce human risk while increasing operational efficiency</li>
        <li><strong>Real-time Monitoring Systems:</strong> IoT sensors provide continuous environmental and safety monitoring</li>
        <li><strong>Predictive Maintenance:</strong> AI systems predict equipment failures before they occur, minimizing downtime</li>
      </ul>

      <h2>Sustainability at the Forefront</h2>
      <p>Modern mining operations in India are increasingly adopting sustainable practices that minimize environmental impact while maximizing resource recovery. This shift represents a fundamental change in how the industry approaches resource extraction.</p>

      <blockquote>
        "The future of mining lies not just in what we extract, but in how we extract it - with respect for our environment and communities." - Industry Expert
      </blockquote>

      <h3>Sustainable Mining Practices</h3>
      <ul>
        <li><strong>Water Conservation:</strong> Advanced water recycling systems reduce consumption by up to 90%</li>
        <li><strong>Renewable Energy Integration:</strong> Solar and wind power are increasingly powering mining operations</li>
        <li><strong>Land Restoration:</strong> Progressive rehabilitation programs restore mined areas to productive use</li>
        <li><strong>Community Engagement:</strong> Collaborative approaches ensure local communities benefit from mining activities</li>
      </ul>

      <h2>Opportunities for Innovation</h2>
      <p>The transformation of India's mining sector presents numerous opportunities for startups and technology companies. From developing new extraction technologies to creating environmental monitoring solutions, the potential for innovation is vast.</p>

      <h3>Emerging Opportunities</h3>
      <p>Startups focusing on clean technology, data analytics, robotics, and environmental solutions are finding fertile ground in the evolving mining landscape. VentureLab Thapar is actively supporting entrepreneurs who are developing innovative solutions for this critical sector.</p>

      <h2>The Path Forward</h2>
      <p>As India moves toward a more sustainable and technologically advanced mining future, the role of innovation cannot be overstated. The convergence of technology, sustainability, and economic development presents a unique opportunity to create a mining industry that serves as a model for the world.</p>

      <p>The future of mining in India is bright, driven by the dual engines of technological innovation and environmental responsibility. As we unearth tomorrow's possibilities, we do so with a commitment to preserving our planet for future generations.</p>
    `,
    authorBio: "The VentureLab Research Team consists of industry analysts, technology experts, and sustainability advocates who track emerging trends in various sectors.",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
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
