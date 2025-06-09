
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, User, Building2, Award } from "lucide-react";
import { useState } from "react";

interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  role: "leadership" | "management" | "coordinators";
  image: string;
  linkedinUrl?: string;
  bio: string;
  expertise: string[];
}

const teamMembers: TeamMemberProps[] = [
  {
    id: "aard-groen",
    name: "Prof. Aard Groen",
    title: "Professor at the University of Groningen",
    role: "leadership",
    image: "/lovable-uploads/1a523e03-0c22-46d6-8126-3f6d021ab23f.png",
    linkedinUrl: "https://www.linkedin.com/in/aardgroen/",
    bio: "Leading expert in entrepreneurship and innovation with extensive experience in startup ecosystems and academic research.",
    expertise: ["Entrepreneurship", "Innovation", "Academic Research"]
  },
  {
    id: "shivani",
    name: "Ms. Shivani",
    title: "Chief Innovation Officer",
    role: "leadership",
    image: "/lovable-uploads/bbe0d1bb-1851-47dd-960c-e53d3b16440a.png",
    bio: "Driving innovation strategy and fostering breakthrough technologies in the startup ecosystem.",
    expertise: ["Innovation Strategy", "Technology", "Strategic Planning"]
  },
  {
    id: "karminder-ghuman",
    name: "Dr. Karminder Ghuman",
    title: "Chief Coordinator",
    role: "leadership",
    image: "/lovable-uploads/b8da172a-af4a-4b70-8a41-177b53f77c7a.png",
    linkedinUrl: "https://www.linkedin.com/in/dr-karminder/",
    bio: "Leading organizational coordination and strategic partnerships to maximize startup success rates.",
    expertise: ["Strategic Coordination", "Partnership Development", "Operations"]
  },
  {
    id: "mandeep-singh",
    name: "Dr. Mandeep Singh",
    title: "Coordinator",
    role: "coordinators",
    image: "/lovable-uploads/4bbc487e-9e3c-4653-8724-6eded5250b30.png",
    linkedinUrl: "https://www.linkedin.com/in/mandeep-singh-8aa7a411/",
    bio: "Coordinating program delivery and ensuring quality standards across all incubation activities.",
    expertise: ["Program Management", "Quality Assurance", "Academic Liaison"]
  },
  {
    id: "aneesh-gopalakrishnan",
    name: "Aneesh Gopalakrishnan",
    title: "Manager - MeitY TIDE Program",
    role: "management",
    image: "/lovable-uploads/82513aa7-62c9-4035-a88b-23dfcf53c6e6.png",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-gopalakrishnan/",
    bio: "Managing the MeitY TIDE program to support technology-driven startups and digital innovation.",
    expertise: ["Technology Programs", "Digital Innovation", "Startup Support"]
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    title: "Manager- Startup India Seed Fund Program",
    role: "management",
    image: "/lovable-uploads/d729addb-196e-4579-bde4-af4254d743aa.png",
    linkedinUrl: "https://www.linkedin.com/in/rahulsharma100/",
    bio: "Overseeing the Startup India Seed Fund program to provide early-stage funding and mentorship.",
    expertise: ["Seed Funding", "Government Programs", "Early-stage Support"]
  },
  {
    id: "gurleen-kaur",
    name: "Ms. Gurleen Kaur",
    title: "Assistant Manager - VentureLab Program",
    role: "management",
    image: "/lovable-uploads/1b8b28ff-9b69-4bab-b60c-e8454c40c16c.png",
    linkedinUrl: "https://www.linkedin.com/in/gurleen-kaur-bindra-a4465521a/",
    bio: "Supporting the VentureLab program operations and facilitating startup growth initiatives.",
    expertise: ["Program Operations", "Startup Mentoring", "Growth Support"]
  }
];

const roleConfig = {
  leadership: {
    title: "Leadership Team",
    icon: Award,
    color: "bg-blue-500",
    description: "Visionary leaders shaping the future of entrepreneurship"
  },
  management: {
    title: "Program Management",
    icon: Building2,
    color: "bg-teal-500",
    description: "Experienced managers driving program excellence"
  },
  coordinators: {
    title: "Coordination Team",
    icon: User,
    color: "bg-purple-500",
    description: "Dedicated coordinators ensuring seamless operations"
  }
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleMemberClick = (member: TeamMemberProps) => {
    if (selectedMember === member.id) {
      setSelectedMember(null);
    } else {
      setSelectedMember(member.id);
    }
  };

  const handleLinkedInClick = (e: React.MouseEvent, linkedinUrl?: string) => {
    e.stopPropagation();
    if (linkedinUrl) {
      window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const groupedMembers = {
    leadership: teamMembers.filter(member => member.role === 'leadership'),
    management: teamMembers.filter(member => member.role === 'management'),
    coordinators: teamMembers.filter(member => member.role === 'coordinators'),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team combines decades of experience in entrepreneurship, technology, and business development 
            to provide comprehensive support for startups at every stage of their journey.
          </p>
        </div>

        {Object.entries(groupedMembers).map(([roleKey, members]) => {
          const role = roleConfig[roleKey as keyof typeof roleConfig];
          const RoleIcon = role.icon;
          
          return (
            <div key={roleKey} className="mb-16 last:mb-0">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`p-3 ${role.color} rounded-full`}>
                  <RoleIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <h2 className="heading-md text-gray-900 mb-2">{role.title}</h2>
                  <p className="text-gray-600">{role.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {members.map((member) => {
                  const isSelected = selectedMember === member.id;
                  
                  return (
                    <Card 
                      key={member.id} 
                      className={`group overflow-hidden bg-white border border-gray-200 transition-all duration-300 transform cursor-pointer
                        ${isSelected 
                          ? 'shadow-2xl scale-105 border-blue-300 ring-2 ring-blue-200' 
                          : 'hover:shadow-xl hover:-translate-y-2 hover:border-gray-300'
                        }`}
                      onClick={() => handleMemberClick(member)}
                    >
                      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ objectPosition: '50% 15%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {member.linkedinUrl && (
                          <button
                            onClick={(e) => handleLinkedInClick(e, member.linkedinUrl)}
                            className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-50 hover:scale-110"
                            aria-label={`View ${member.name}'s LinkedIn profile`}
                          >
                            <ExternalLink size={16} className="text-blue-600" />
                          </button>
                        )}
                      </div>
                      
                      <div className={`p-5 transition-all duration-300 ${isSelected ? 'bg-blue-50' : ''}`}>
                        <div className="mb-3">
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                            {member.title}
                          </p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {member.expertise.slice(0, 2).map((skill, index) => (
                              <Badge 
                                key={index} 
                                variant="secondary" 
                                className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className={`transition-all duration-300 overflow-hidden ${
                          isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                              {member.bio}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {member.expertise.map((skill, index) => (
                                <Badge 
                                  key={index} 
                                  variant="outline" 
                                  className="text-xs px-2 py-1 border-blue-200 text-blue-700 bg-blue-50"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-blue-600 font-medium">
                            {isSelected ? 'Click to collapse' : 'Click to view details'}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
