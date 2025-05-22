
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface MentorProps {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  tags: string[];
  linkedin?: string;
}

const mentors: MentorProps[] = [
  {
    id: "ankit-kapoor",
    name: "Dr. Ankit Kapoor",
    title: "Innovation & Strategy Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Former product lead at multinational tech firm with 15+ years of experience in product development and market entry strategies.",
    tags: ["Technology Strategy", "Product Development"]
  },
  {
    id: "priya-mehta",
    name: "Priya Mehta",
    title: "Investment & Finance Advisor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Seasoned financial growth-stage venture capitalist with 10+ years of experience in evaluating and scaling technology startups.",
    tags: ["Venture Funding", "Financial Modeling"]
  },
  {
    id: "suresh-patel",
    name: "Suresh Patel",
    title: "Serial Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Founded and exited three successful tech startups, specializing in growth hacking and lean startup methodologies.",
    tags: ["Startup Growth", "Go-to-Market Strategy"]
  },
  {
    id: "leela-sharma",
    name: "Dr. Leela Sharma",
    title: "Research Commercialization Expert",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    bio: "Academic entrepreneur bridging the gap between academic research into profitable ventures.",
    tags: ["MedTech", "Research Translation"]
  },
  {
    id: "anirudh-singh",
    name: "Anirudh Singh",
    title: "Venture Capital & Startup Advisor",
    image: "/lovable-uploads/c3a78913-273d-4dfe-8681-9cd1a4ff2917.png",
    bio: "Experienced venture capitalist with expertise in early-stage startup investments and strategic business development.",
    tags: ["Venture Capital", "Startup Advisory"],
    linkedin: "https://www.linkedin.com/in/anirudh71/"
  }
];

const MentorSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            OUR MENTORS
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Learn from the Best</h2>
          <p className="text-gray-600">
            Our startups benefit from the guidance of accomplished industry leaders who provide valuable insights and connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="overflow-hidden bg-white border border-gray-200">
              <div className="h-48 bg-gray-200">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-lg">{mentor.name}</h3>
                  {mentor.linkedin && (
                    <a 
                      href={mentor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-2">{mentor.title}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{mentor.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {mentor.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-end">
                <Button variant="link" size="sm" className="p-0" asChild>
                  <Link to={`/mentors/${mentor.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Become a VentureLab Mentor</h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Want to guide the next generation of entrepreneurs? Join our mentor network and share your expertise to help shape innovative ventures and impactful businesses.
          </p>
          <Button asChild variant="secondary" className="bg-white text-blue-800 hover:bg-gray-100">
            <Link to="/mentors/apply">Apply as Mentor</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
