
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Linkedin, User, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface MentorProps {
  id: string;
  name: string;
  title: string;
  expertise: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const mentors: MentorProps[] = [
  {
    id: "harmanpreet-singh",
    name: "Harmanpreet Singh",
    title: "General Partner, Prath Ventures",
    expertise: "Early-stage VC & Strategy",
    bio: "Harmanpreet is a seasoned venture capitalist with over 15 years of experience in early-stage investments. He has led investments in 50+ startups across fintech, healthcare, and enterprise software. Prior to Prath Ventures, he was a founding partner at multiple successful funds and has helped numerous startups scale from seed to Series B.",
    image: "/lovable-uploads/c846b454-1cac-4a86-8e00-f23bdd1fbaf3.png",
    linkedin: "https://www.linkedin.com/in/harmansachdeva/?originalSubdomain=in"
  },
  {
    id: "anirudh-singh",
    name: "Anirudh Singh",
    title: "Partner, Avattar Venture Partner",
    expertise: "Growth & Scaling",
    bio: "Anirudh specializes in helping startups navigate their growth phases. With a background in consulting and venture capital, he has guided over 30 companies through successful scaling strategies. His expertise spans go-to-market planning, operational efficiency, and international expansion.",
    image: "/lovable-uploads/c3a78913-273d-4dfe-8681-9cd1a4ff2917.png",
    linkedin: "https://www.linkedin.com/in/anirudh71/"
  },
  {
    id: "bhavish-sood",
    name: "Bhavish Sood",
    title: "General Partner, Modular Capital",
    expertise: "Fintech & Enterprise",
    bio: "Bhavish brings deep expertise in fintech and enterprise software investments. He has been instrumental in building the fintech ecosystem in India and has invested in several unicorns. His portfolio includes companies that have collectively raised over $2B in follow-on funding.",
    image: "/lovable-uploads/32299cf8-11fa-41c6-8f08-eb30113144c9.png",
    linkedin: "https://www.linkedin.com/in/bhavishsood/"
  },
  {
    id: "rajiv-bansal",
    name: "Rajiv Bansal",
    title: "CEO, Opoyi",
    expertise: "Product & Operations",
    bio: "Rajiv is a serial entrepreneur and operational expert who has built and scaled multiple technology companies. As CEO of Opoyi, he has demonstrated exceptional product-market fit strategies and operational excellence. He mentors startups on product development, team building, and operational scaling.",
    image: "/lovable-uploads/ba39cb15-dab7-4d1e-923d-424ccc049d78.png",
    linkedin: "https://www.linkedin.com/in/rajivb1/"
  },
  {
    id: "nikhil-agarwal",
    name: "Dr. Nikhil Agarwal",
    title: "MD, FITT",
    expertise: "Deep Tech & Research",
    bio: "Dr. Nikhil Agarwal is a thought leader in technology transfer and deep tech commercialization. At FITT, he has facilitated the translation of cutting-edge research into viable commercial products. His expertise spans biotechnology, materials science, and emerging technologies with strong academic and industry connections.",
    image: "/lovable-uploads/be4c8dc7-04e9-4341-9ed0-024f5c8778e9.png",
    linkedin: "https://www.linkedin.com/in/drnikhilagarwalindia/"
  }
];

const MentorCard = ({ mentor }: { mentor: MentorProps }) => {
  return (
    <Card className="group overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 flex flex-col h-full">
      <div className="relative h-64 bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
        <img 
          src={mentor.image} 
          alt={`${mentor.name} - ${mentor.title}`}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          style={{ objectPosition: '50% 15%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
            {mentor.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            {mentor.title}
          </p>
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
            <Award className="w-3 h-3" />
            {mentor.expertise}
          </div>
        </div>
        
        <div className="flex gap-2 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                aria-label={`View ${mentor.name}'s profile`}
              >
                <User className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  {mentor.name}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-600 mb-2">{mentor.title}</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    {mentor.expertise}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
                  {mentor.linkedin && (
                    <div className="mt-6">
                      <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
                        <a 
                          href={mentor.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={`Connect with ${mentor.name} on LinkedIn`}
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          Connect on LinkedIn
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          {mentor.linkedin && (
            <Button 
              asChild
              variant="ghost" 
              size="sm"
              className="px-3 text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
              aria-label={`Connect with ${mentor.name} on LinkedIn`}
            >
              <a 
                href={mentor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

const MentorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="mentors-heading">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-center mb-3">
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase">
            Our Mentors
          </div>
          <h2 id="mentors-heading" className="heading-xl text-gray-900 mb-6">
            Learn from Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our startups benefit from the guidance of accomplished industry leaders who provide valuable insights, 
            strategic direction, and extensive networks to accelerate growth and success.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8 max-w-7xl mx-auto mb-16">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
        
        {/* Tablet Grid */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
        
        {/* Mobile Grid */}
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 lg:p-12 text-center max-w-5xl mx-auto shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Become a VentureLab Mentor
            </h3>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Want to guide the next generation of entrepreneurs? Join our mentor network and share your expertise 
              to help shape innovative ventures and impactful businesses. Make a difference in the startup ecosystem.
            </p>
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Link to="/mentors/apply">
                Apply as Mentor
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
