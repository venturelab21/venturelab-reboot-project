
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
}

class BlogScraper {
  private firecrawl: FirecrawlApp;

  constructor() {
    // Initialize Firecrawl - you'll need to set your API key
    this.firecrawl = new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY || 'your-api-key' });
  }

  async scrapeBlogList(): Promise<ScrapedBlogPost[]> {
    try {
      console.log('Scraping blog list from venturelab.org.in/blog...');
      
      const crawlResult = await this.firecrawl.crawlUrl('https://venturelab.org.in/blog', {
        crawlerOptions: {
          includes: ['**/blog/**'],
          excludes: ['**/wp-admin/**', '**/wp-content/uploads/**'],
          maxDepth: 2,
          limit: 50
        },
        pageOptions: {
          onlyMainContent: true,
          includeHtml: true,
          extractorOptions: {
            mode: 'llm-extraction',
            extractionPrompt: `Extract the following information from this blog post:
            - title: The main title of the blog post
            - content: The full content/body text of the blog post with proper formatting
            - author: The author name if available
            - date: The publish date if available
            - excerpt: A brief summary or first paragraph
            - category: The category or topic if mentioned
            - tags: Any tags or keywords mentioned
            
            Return the content with proper HTML formatting including headings, paragraphs, lists, etc.`
          }
        }
      });

      if (crawlResult.success && crawlResult.data) {
        const blogPosts: ScrapedBlogPost[] = [];
        
        for (const page of crawlResult.data) {
          if (page.extract && this.isValidBlogPost(page.extract)) {
            const slug = this.generateSlug(page.extract.title || 'untitled-post');
            
            blogPosts.push({
              title: page.extract.title || 'Untitled Post',
              content: page.extract.content || '',
              author: page.extract.author || 'VentureLab Team',
              date: this.formatDate(page.extract.date),
              excerpt: page.extract.excerpt || this.generateExcerpt(page.extract.content || ''),
              slug: slug,
              category: page.extract.category || 'Innovation',
              tags: Array.isArray(page.extract.tags) ? page.extract.tags : ['Innovation', 'Startups']
            });
          }
        }

        console.log(`Successfully scraped ${blogPosts.length} blog posts`);
        return blogPosts;
      } else {
        throw new Error('Failed to crawl the website');
      }
    } catch (error) {
      console.error('Error scraping blog posts:', error);
      return [];
    }
  }

  private isValidBlogPost(extract: any): boolean {
    return extract && extract.title && extract.content && 
           extract.title.length > 10 && extract.content.length > 100;
  }

  private generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  private formatDate(dateString?: string): string {
    if (!dateString) {
      return new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  }

  private generateExcerpt(content: string): string {
    // Remove HTML tags and get first 150 characters
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > 150 
      ? textContent.substring(0, 150) + '...'
      : textContent;
  }
}

export default BlogScraper;
export type { ScrapedBlogPost };
