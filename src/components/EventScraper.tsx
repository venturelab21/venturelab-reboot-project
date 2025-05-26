
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { FirecrawlService } from '@/utils/FirecrawlService';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  registrationLink: string;
}

interface EventScraperProps {
  onEventsLoaded: (events: Event[]) => void;
}

export const EventScraper: React.FC<EventScraperProps> = ({ onEventsLoaded }) => {
  const [apiKey, setApiKey] = useState(FirecrawlService.getApiKey() || '');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const parseEventsFromMarkdown = (markdown: string): Event[] => {
    const events: Event[] = [];
    
    // This is a basic parser - you may need to adjust based on the actual structure
    // of the scraped content from venturelab.org.in/events
    const eventSections = markdown.split(/#{1,3}\s+/).filter(section => 
      section.toLowerCase().includes('founders meet') || 
      section.toLowerCase().includes('emporia') ||
      section.toLowerCase().includes('event') ||
      section.toLowerCase().includes('workshop') ||
      section.toLowerCase().includes('conference')
    );

    eventSections.forEach((section, index) => {
      const lines = section.split('\n').filter(line => line.trim());
      if (lines.length > 0) {
        const title = lines[0].replace(/[#*\-]/g, '').trim();
        
        // Extract basic event information
        const event: Event = {
          id: Date.now() + index,
          title: title || `Event ${index + 1}`,
          date: extractDate(section) || 'TBD',
          time: extractTime(section) || 'TBD',
          location: extractLocation(section) || 'VentureLab Thapar',
          category: determineCategory(title),
          description: extractDescription(section) || 'Event details to be announced.',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          registrationLink: '/register/event-' + (index + 1)
        };
        
        if (title && title.length > 3) {
          events.push(event);
        }
      }
    });

    return events;
  };

  const extractDate = (text: string): string | null => {
    const datePatterns = [
      /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}/,
      /\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{4}/i,
      /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+\d{4}/i
    ];
    
    for (const pattern of datePatterns) {
      const match = text.match(pattern);
      if (match) return match[0];
    }
    return null;
  };

  const extractTime = (text: string): string | null => {
    const timePattern = /\d{1,2}:\d{2}\s*(AM|PM|am|pm)?/;
    const match = text.match(timePattern);
    return match ? match[0] : null;
  };

  const extractLocation = (text: string): string | null => {
    const locationKeywords = ['venue', 'location', 'address', 'hall', 'auditorium', 'room'];
    const lines = text.split('\n');
    
    for (const line of lines) {
      for (const keyword of locationKeywords) {
        if (line.toLowerCase().includes(keyword)) {
          return line.replace(/[*\-#]/g, '').trim();
        }
      }
    }
    return null;
  };

  const extractDescription = (text: string): string | null => {
    const lines = text.split('\n').filter(line => line.trim());
    if (lines.length > 1) {
      return lines.slice(1, 3).join(' ').replace(/[*\-#]/g, '').trim();
    }
    return null;
  };

  const determineCategory = (title: string): string => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('workshop')) return 'Workshop';
    if (titleLower.includes('conference') || titleLower.includes('summit')) return 'Conference';
    if (titleLower.includes('competition') || titleLower.includes('contest')) return 'Competition';
    if (titleLower.includes('meet') || titleLower.includes('networking')) return 'Networking';
    if (titleLower.includes('webinar')) return 'Webinar';
    return 'Event';
  };

  const handleScrapeEvents = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Firecrawl API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    FirecrawlService.saveApiKey(apiKey);

    try {
      const result = await FirecrawlService.scrapeWebsite('https://venturelab.org.in/events');
      
      if (result.success && result.data?.markdown) {
        const scrapedEvents = parseEventsFromMarkdown(result.data.markdown);
        onEventsLoaded(scrapedEvents);
        
        toast({
          title: "Success",
          description: `Successfully loaded ${scrapedEvents.length} events from VentureLab website`,
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to scrape events",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error scraping events:', error);
      toast({
        title: "Error",
        description: "Failed to scrape events from website",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Import Events from VentureLab Website</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Firecrawl API Key (get it from <a href="https://firecrawl.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">firecrawl.dev</a>)
          </label>
          <Input
            type="password"
            placeholder="Enter your Firecrawl API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
        <Button 
          onClick={handleScrapeEvents} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Importing Events...' : 'Import Events from VentureLab'}
        </Button>
      </div>
    </Card>
  );
};
