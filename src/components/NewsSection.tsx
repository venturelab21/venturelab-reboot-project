
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "VentureLab Announces New Cohort of 15 Startups",
    excerpt: "Our latest cohort features innovative startups in healthtech, fintech, and sustainable agriculture sectors.",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "new-cohort-announcement"
  },
  {
    id: 2,
    title: "Portfolio Company Raises $12M Series A",
    excerpt: "HealthTech Solutions, a VentureLab portfolio company, has successfully closed their Series A funding round.",
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "healthtech-funding-success"
  },
  {
    id: 3,
    title: "Entrepreneurship Summit 2025 Announced",
    excerpt: "Mark your calendars for India's biggest entrepreneurship event, hosted by VentureLab this September.",
    date: "April 12, 2025",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    slug: "entrepreneurship-summit-2025"
  }
];

const NewsCard = ({ item }: { item: NewsItem }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-hover transition-all duration-300 hover-lift">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image}
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-blue-600 mb-2">{item.date}</p>
        <h3 className="text-xl font-display font-semibold mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-4">{item.excerpt}</p>
        <Button asChild variant="link" className="px-0 group">
          <Link to={`/news/${item.slug}`}>
            Read More
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest News</h2>
          <p className="text-gray-600">
            Stay updated with the latest happenings at VentureLab.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
