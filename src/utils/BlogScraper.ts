
import FirecrawlApp from '@mendable/firecrawl-js';

interface ScrapedBlogPost {
  title: string;
  content: string;
  author?: string;
  date?: string;
  excerpt?: string;
  slug: string;
  category?: string;
  tags?: string[];
  image?: string;
}

class BlogScraper {
  private firecrawl: FirecrawlApp;

  constructor() {
    // Initialize Firecrawl with API key from environment
    const apiKey = import.meta.env.VITE_FIRECRAWL_API_KEY || 'your-api-key';
    this.firecrawl = new FirecrawlApp({ apiKey });
  }

  async scrapeBlogList(): Promise<ScrapedBlogPost[]> {
    try {
      console.log('Scraping blog list from venturelab.org.in/blog...');
      
      // First scrape the main blog page to get blog post links
      const mainPageResult = await this.firecrawl.scrapeUrl('https://venturelab.org.in/blog', {
        formats: ['markdown', 'html'],
        onlyMainContent: true
      });

      if (!mainPageResult.success || !mainPageResult.data) {
        console.error('Failed to scrape main blog page');
        return this.getFallbackBlogPosts();
      }

      // Extract blog post URLs from the main page
      const blogUrls = this.extractBlogUrls(mainPageResult.data.html || '');
      
      if (blogUrls.length === 0) {
        console.log('No blog URLs found, using fallback content');
        return this.getFallbackBlogPosts();
      }

      const blogPosts: ScrapedBlogPost[] = [];

      // Scrape each individual blog post
      for (const url of blogUrls.slice(0, 10)) { // Limit to 10 posts for now
        try {
          const postResult = await this.firecrawl.scrapeUrl(url, {
            formats: ['markdown', 'html'],
            onlyMainContent: true
          });

          if (postResult.success && postResult.data) {
            const post = this.extractBlogData(postResult.data, url);
            if (post) {
              blogPosts.push(post);
            }
          }
        } catch (error) {
          console.error(`Error scraping blog post ${url}:`, error);
        }
      }

      console.log(`Successfully scraped ${blogPosts.length} blog posts`);
      return blogPosts.length > 0 ? blogPosts : this.getFallbackBlogPosts();

    } catch (error) {
      console.error('Error scraping blog posts:', error);
      return this.getFallbackBlogPosts();
    }
  }

  private extractBlogUrls(html: string): string[] {
    const urls: string[] = [];
    const linkRegex = /href="([^"]*\/blog\/[^"]*[^\/])"/g;
    let match;
    
    while ((match = linkRegex.exec(html)) !== null) {
      const url = match[1];
      if (url.startsWith('http') && !urls.includes(url)) {
        urls.push(url);
      } else if (url.startsWith('/') && !urls.includes(url)) {
        urls.push(`https://venturelab.org.in${url}`);
      }
    }
    
    return urls;
  }

  private extractBlogData(data: any, url: string): ScrapedBlogPost | null {
    try {
      const html = data.html || '';
      const markdown = data.markdown || '';
      
      // Extract title
      const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/i) || 
                        html.match(/<title[^>]*>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(/<[^>]*>/g, '').trim() : 'Untitled Post';

      // Extract content from markdown (cleaner format)
      let content = markdown || data.text || '';
      
      // If markdown is not available, extract from HTML
      if (!content) {
        content = html.replace(/<script[^>]*>.*?<\/script>/gi, '')
                     .replace(/<style[^>]*>.*?<\/style>/gi, '')
                     .replace(/<[^>]*>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
      }

      // Extract meta information
      const authorMatch = html.match(/author[^>]*>([^<]+)/i) || 
                         html.match(/by\s+([^<\n]+)/i);
      const author = authorMatch ? authorMatch[1].trim() : 'VentureLab Team';

      const dateMatch = html.match(/(\d{1,2}[-\/]\d{1,2}[-\/]\d{4})|(\d{4}[-\/]\d{1,2}[-\/]\d{1,2})/);
      const date = dateMatch ? this.formatDate(dateMatch[0]) : new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      // Extract image
      const imgMatch = html.match(/<img[^>]+src="([^"]+)"/i);
      const image = imgMatch ? imgMatch[1] : `https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;

      const slug = this.generateSlug(title);
      const excerpt = this.generateExcerpt(content);

      return {
        title,
        content: this.formatContent(content),
        author,
        date,
        excerpt,
        slug,
        category: 'Innovation',
        tags: ['Startups', 'Innovation'],
        image
      };
    } catch (error) {
      console.error('Error extracting blog data:', error);
      return null;
    }
  }

  private formatContent(content: string): string {
    // Convert markdown-style formatting to HTML for better display
    return content
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^/, '<p>')
      .replace(/$/, '</p>');
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  private generateExcerpt(content: string): string {
    const textContent = content.replace(/<[^>]*>/g, '').replace(/\n/g, ' ').trim();
    return textContent.length > 150
      ? textContent.substring(0, 150) + '...'
      : textContent;
  }

  private getFallbackBlogPosts(): ScrapedBlogPost[] {
    return [
      {
        title: "Building India's Startup Ecosystem: VentureLab's Mission",
        content: `<p>India's startup ecosystem has witnessed unprecedented growth over the past decade, with innovative companies emerging across various sectors. At VentureLab Thapar, we are committed to fostering this growth by providing comprehensive support to aspiring entrepreneurs.</p>

<h2>Our Approach to Innovation</h2>
<p>Our methodology focuses on three core pillars: mentorship, funding, and market access. By combining these elements, we create an environment where startups can thrive and scale effectively.</p>

<h3>Key Programs and Initiatives</h3>
<ul>
<li><strong>SISFS Program:</strong> Supporting early-stage startups with seed funding and mentorship</li>
<li><strong>MeitY TIDE 2.0:</strong> Technology incubation for deep-tech startups</li>
<li><strong>VentureLab Accelerator:</strong> Comprehensive support for growth-stage companies</li>
</ul>

<p>As we continue to evolve and expand our programs, we remain committed to our mission of building a robust startup ecosystem that can compete globally while addressing local challenges.</p>`,
        author: "VentureLab Team",
        date: "June 10, 2025",
        excerpt: "Exploring how VentureLab Thapar is contributing to India's growing startup ecosystem through innovation, mentorship, and strategic support.",
        slug: "building-indias-startup-ecosystem",
        category: "Innovation",
        tags: ["Startups", "Innovation", "India", "Ecosystem"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ];
  }
}

export default BlogScraper;
export type { ScrapedBlogPost };
