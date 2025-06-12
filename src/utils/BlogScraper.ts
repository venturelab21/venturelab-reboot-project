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
        onlyMainContent: true,
        includeTags: ['article', 'main', 'section', 'div'],
        excludeTags: ['nav', 'footer', 'header', 'aside']
      });

      if (!mainPageResult.success || !mainPageResult.html) {
        console.error('Failed to scrape main blog page');
        return this.getFallbackBlogPosts();
      }

      // Extract blog post URLs from the main page
      const blogUrls = this.extractBlogUrls(mainPageResult.html);
      console.log(`Found ${blogUrls.length} blog URLs:`, blogUrls);
      
      if (blogUrls.length === 0) {
        console.log('No blog URLs found, using fallback content');
        return this.getFallbackBlogPosts();
      }

      const blogPosts: ScrapedBlogPost[] = [];

      // Scrape each individual blog post
      for (const url of blogUrls.slice(0, 15)) { // Increased limit to get more posts
        try {
          console.log(`Scraping blog post: ${url}`);
          const postResult = await this.firecrawl.scrapeUrl(url, {
            formats: ['markdown', 'html'],
            onlyMainContent: true,
            includeTags: ['article', 'main', 'section', 'div', 'h1', 'h2', 'h3', 'p', 'img'],
            excludeTags: ['nav', 'footer', 'header', 'aside', 'script']
          });

          if (postResult.success && postResult.html) {
            const post = this.extractBlogData(postResult, url);
            if (post) {
              blogPosts.push(post);
              console.log(`Successfully scraped: ${post.title}`);
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
    
    // Multiple patterns to catch different URL structures
    const patterns = [
      /href="(https:\/\/venturelab\.org\.in\/blog\/[^"]+)"/g,
      /href="(\/blog\/[^"]+)"/g,
      /href="([^"]*\/blog\/[^"]*[^\/])"/g
    ];
    
    patterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(html)) !== null) {
        let url = match[1];
        
        // Normalize URLs
        if (url.startsWith('/')) {
          url = `https://venturelab.org.in${url}`;
        }
        
        // Filter out unwanted URLs and duplicates
        if (url.includes('/blog/') && 
            !url.includes('#') && 
            !url.includes('?') &&
            !url.endsWith('/blog') &&
            !url.endsWith('/blog/') &&
            !urls.includes(url)) {
          urls.push(url);
        }
      }
    });
    
    return [...new Set(urls)]; // Remove duplicates
  }

  private extractBlogData(data: any, url: string): ScrapedBlogPost | null {
    try {
      const html = data.html || '';
      const markdown = data.markdown || '';
      
      // Extract title with multiple fallback methods
      let title = '';
      const titlePatterns = [
        /<h1[^>]*class="[^"]*title[^"]*"[^>]*>(.*?)<\/h1>/i,
        /<h1[^>]*>(.*?)<\/h1>/i,
        /<title[^>]*>(.*?)<\/title>/i,
        /<meta[^>]*property="og:title"[^>]*content="([^"]*)"[^>]*>/i
      ];
      
      for (const pattern of titlePatterns) {
        const match = html.match(pattern);
        if (match) {
          title = this.cleanText(match[1]);
          if (title && title.length > 5) break;
        }
      }
      
      if (!title) {
        title = 'Untitled Post';
      }

      // Extract content with better cleaning
      let content = '';
      if (markdown) {
        content = this.cleanMarkdown(markdown);
      } else {
        content = this.extractContentFromHtml(html);
      }

      // Extract author with multiple patterns
      let author = 'VentureLab Team';
      const authorPatterns = [
        /author[^>]*>([^<]+)/i,
        /by\s+([^<\n\|]+)/i,
        /<meta[^>]*name="author"[^>]*content="([^"]*)"[^>]*>/i,
        /written\s+by\s+([^<\n\|]+)/i
      ];
      
      for (const pattern of authorPatterns) {
        const match = html.match(pattern);
        if (match) {
          const foundAuthor = this.cleanText(match[1]);
          if (foundAuthor && foundAuthor.length > 2 && foundAuthor.length < 50) {
            author = foundAuthor;
            break;
          }
        }
      }

      // Extract date with multiple patterns
      let date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      const datePatterns = [
        /(\d{1,2}[-\/]\d{1,2}[-\/]\d{4})/,
        /(\d{4}[-\/]\d{1,2}[-\/]\d{1,2})/,
        /(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/i,
        /<time[^>]*datetime="([^"]*)"[^>]*>/i,
        /<meta[^>]*property="article:published_time"[^>]*content="([^"]*)"[^>]*>/i
      ];
      
      for (const pattern of datePatterns) {
        const match = html.match(pattern);
        if (match) {
          date = this.formatDate(match[1]);
          break;
        }
      }

      // Extract image with multiple patterns
      let image = '';
      const imagePatterns = [
        /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i,
        /<img[^>]*class="[^"]*featured[^"]*"[^>]*src="([^"]*)"[^>]*>/i,
        /<img[^>]*src="([^"]*)"[^>]*class="[^"]*featured[^"]*"[^>]*>/i,
        /<img[^>]+src="([^"]+)"[^>]*>/i
      ];
      
      for (const pattern of imagePatterns) {
        const match = html.match(pattern);
        if (match) {
          image = match[1];
          if (image.startsWith('/')) {
            image = `https://venturelab.org.in${image}`;
          }
          break;
        }
      }
      
      if (!image) {
        image = `https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`;
      }

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
        tags: this.extractTags(content),
        image
      };
    } catch (error) {
      console.error('Error extracting blog data:', error);
      return null;
    }
  }

  private cleanText(text: string): string {
    return text
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private cleanMarkdown(markdown: string): string {
    return markdown
      .replace(/^#{1,6}\s*/gm, '') // Remove markdown headers for content
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markers for content extraction
      .replace(/\*(.*?)\*/g, '$1') // Remove italic markers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to just text
      .trim();
  }

  private extractContentFromHtml(html: string): string {
    // Remove unwanted elements
    let content = html
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/<style[^>]*>.*?<\/style>/gi, '')
      .replace(/<nav[^>]*>.*?<\/nav>/gi, '')
      .replace(/<header[^>]*>.*?<\/header>/gi, '')
      .replace(/<footer[^>]*>.*?<\/footer>/gi, '')
      .replace(/<aside[^>]*>.*?<\/aside>/gi, '');

    // Extract main content area
    const contentPatterns = [
      /<article[^>]*>(.*?)<\/article>/is,
      /<main[^>]*>(.*?)<\/main>/is,
      /<div[^>]*class="[^"]*content[^"]*"[^>]*>(.*?)<\/div>/is
    ];

    for (const pattern of contentPatterns) {
      const match = content.match(pattern);
      if (match) {
        content = match[1];
        break;
      }
    }

    return this.cleanText(content);
  }

  private extractTags(content: string): string[] {
    const commonTags = ['Startups', 'Innovation', 'Technology', 'Entrepreneurship', 'Business'];
    const tags: string[] = [];
    
    const lowerContent = content.toLowerCase();
    commonTags.forEach(tag => {
      if (lowerContent.includes(tag.toLowerCase())) {
        tags.push(tag);
      }
    });
    
    return tags.length > 0 ? tags : ['Innovation'];
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
<p>Our comprehensive programs include the SISFS Program for early-stage funding, MeitY TIDE 2.0 for deep-tech startups, and the VentureLab Accelerator for growth-stage companies.</p>

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
