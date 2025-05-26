
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
    id: "nikhil-agarwal",
    name: "Dr. Nikhil Agarwal",
    title: "Innovation & Strategy Expert",
    image: "/lovable-uploads/be4c8dc7-04e9-4341-9ed0-024f5c8778e9.png",
    bio: "Experienced strategist and innovation leader with extensive expertise in entrepreneurial ecosystem development and strategic business growth.",
    tags: ["Innovation Strategy", "Business Development"],
    linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
  },
  {
    id: "harmanpreet-singh",
    name: "Harmanpreet Singh",
    title: "Technology & Business Growth Expert",
    image: "/lovable-uploads/c846b454-1cac-4a86-8e00-f23bdd1fbaf3.png",
    bio: "Technology leader with expertise in business growth strategies and innovation ecosystems for startups and enterprises.",
    tags: ["Tech Innovation", "Business Growth"],
    linkedin: "https://www.linkedin.com/in/harmansachdeva/?originalSubdomain=in"
  },
  {
    id: "bhavish-sood",
    name: "Bhavish Sood",
    title: "Business Strategy Consultant",
    image: "/lovable-uploads/32299cf8-11fa-41c6-8f08-eb30113144c9.png",
    bio: "Strategic business consultant with expertise in technology market analysis and growth planning for emerging enterprises.",
    tags: ["Business Strategy", "Market Analysis"],
    linkedin: "https://www.linkedin.com/in/bhavishsood/"
  },
  {
    id: "rajiv-bansal",
    name: "Rajiv Bansal",
    title: "Technology Investment Specialist",
    image: "/lovable-uploads/ba39cb15-dab7-4d1e-923d-424ccc049d78.png",
    bio: "Experienced technology investment professional with expertise in identifying high-potential startups and strategic growth opportunities.",
    tags: ["Tech Investment", "Strategic Growth"],
    linkedin: "https://www.linkedin.com/in/rajivb1/"
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
              <div className="h-56 bg-gray-200 overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover object-top transform scale-110"
                  style={{ objectPosition: '50% 15%' }}
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
