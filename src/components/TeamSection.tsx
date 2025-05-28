
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  image: string;
  linkedinUrl?: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    id: "aard-groen",
    name: "Prof. Aard Groen",
    title: "Professor at the University of Groningen",
    image: "/lovable-uploads/1a523e03-0c22-46d6-8126-3f6d021ab23f.png",
    linkedinUrl: "https://www.linkedin.com/in/aardgroen/"
  },
  {
    id: "shivani",
    name: "Ms. Shivani",
    title: "Chief Innovation Officer",
    image: "/lovable-uploads/bbe0d1bb-1851-47dd-960c-e53d3b16440a.png"
  },
  {
    id: "karminder-ghuman",
    name: "Dr. Karminder Ghuman",
    title: "Chief Coordinator",
    image: "/lovable-uploads/b8da172a-af4a-4b70-8a41-177b53f77c7a.png",
    linkedinUrl: "https://www.linkedin.com/in/dr-karminder/"
  },
  {
    id: "mandeep-singh",
    name: "Dr. Mandeep Singh",
    title: "Coordinator",
    image: "/lovable-uploads/4bbc487e-9e3c-4653-8724-6eded5250b30.png",
    linkedinUrl: "https://www.linkedin.com/in/mandeep-singh-8aa7a411/"
  },
  {
    id: "aneesh-gopalakrishnan",
    name: "Aneesh Gopalakrishnan",
    title: "Manager - MeitY TIDE Program",
    image: "/lovable-uploads/82513aa7-62c9-4035-a88b-23dfcf53c6e6.png",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-gopalakrishnan/"
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    title: "Manager - SISFS",
    image: "/lovable-uploads/d729addb-196e-4579-bde4-af4254d743aa.png",
    linkedinUrl: "https://www.linkedin.com/in/rahulsharma100/"
  },
  {
    id: "gurleen-kaur",
    name: "Ms. Gurleen Kaur",
    title: "Assistant Manager - VentureLab Program",
    image: "/lovable-uploads/1b8b28ff-9b69-4bab-b60c-e8454c40c16c.png",
    linkedinUrl: "https://www.linkedin.com/in/gurleen-kaur-bindra-a4465521a/"
  }
];

const TeamSection = () => {
  const handleMemberClick = (linkedinUrl?: string) => {
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            OUR TEAM
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600">
            Our dedicated team of professionals brings together expertise in entrepreneurship, innovation, and business development to support startups on their journey to success.
          </p>
        </div>
        
        {/* Responsive Grid: 4 columns on xl, 3 on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className={`group overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                member.linkedinUrl ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleMemberClick(member.linkedinUrl)}
            >
              {/* Fixed aspect ratio container for images */}
              <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  style={{ objectPosition: '50% 15%' }}
                />
                {member.linkedinUrl && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={16} className="text-blue-600" />
                  </div>
                )}
              </div>
              
              {/* Content section with consistent height */}
              <div className="p-4 h-32 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {member.title}
                  </p>
                </div>
                
                {member.linkedinUrl && (
                  <p className="text-xs text-blue-600 font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View LinkedIn Profile
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
