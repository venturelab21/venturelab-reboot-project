
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface MentorProps {
  id: string;
  name: string;
  title: string;
  image: string;
  linkedin?: string;
}

const mentors: MentorProps[] = [
  {
    id: "harmanpreet-singh",
    name: "Harmanpreet Singh",
    title: "General Partner, Prath Ventures",
    image: "/lovable-uploads/c846b454-1cac-4a86-8e00-f23bdd1fbaf3.png",
    linkedin: "https://www.linkedin.com/in/harmansachdeva/?originalSubdomain=in"
  },
  {
    id: "anirudh-singh",
    name: "Anirudh Singh",
    title: "Partner, Avattar Venture Partner",
    image: "/lovable-uploads/c3a78913-273d-4dfe-8681-9cd1a4ff2917.png",
    linkedin: "https://www.linkedin.com/in/anirudh71/"
  },
  {
    id: "bhavish-sood",
    name: "Bhavish Sood",
    title: "General Partner, Modular Capital",
    image: "/lovable-uploads/32299cf8-11fa-41c6-8f08-eb30113144c9.png",
    linkedin: "https://www.linkedin.com/in/bhavishsood/"
  },
  {
    id: "rajiv-bansal",
    name: "Rajiv Bansal",
    title: "CEO, Opoyi",
    image: "/lovable-uploads/ba39cb15-dab7-4d1e-923d-424ccc049d78.png",
    linkedin: "https://www.linkedin.com/in/rajivb1/"
  },
  {
    id: "nikhil-agarwal",
    name: "Dr. Nikhil Agarwal",
    title: "MD, FITT",
    image: "/lovable-uploads/be4c8dc7-04e9-4341-9ed0-024f5c8778e9.png",
    linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
  }
];

const MentorSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-full h-full object-cover object-top scale-90"
                  style={{ objectPosition: '50% 15%' }}
                />
                {mentor.linkedin && (
                  <a 
                    href={mentor.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-200 text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{mentor.name}</h3>
                <p className="text-sm text-gray-600">{mentor.title}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-center max-w-4xl mx-auto">
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
