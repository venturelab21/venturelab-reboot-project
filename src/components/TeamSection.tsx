
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, User, Building2, Award, MapPin, Calendar } from "lucide-react";
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
  location?: string;
  joinedYear?: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    id: "aard-groen",
    name: "Prof. Aard Groen",
    title: "Professor at the University of Groningen",
    role: "leadership",
    image: "/lovable-uploads/1a523e03-0c22-46d6-8126-3f6d021ab23f.png",
    linkedinUrl: "https://www.linkedin.com/in/aardgroen/",
    bio: "Leading expert in entrepreneurship and innovation with extensive experience in startup ecosystems and academic research. Passionate about bridging theory and practice in entrepreneurial education.",
    expertise: ["Entrepreneurship", "Innovation", "Academic Research"],
    location: "Netherlands",
    joinedYear: "2020"
  },
  {
    id: "shivani",
    name: "Ms. Shivani",
    title: "Chief Innovation Officer",
    role: "leadership",
    image: "/lovable-uploads/bbe0d1bb-1851-47dd-960c-e53d3b16440a.png",
    bio: "Driving innovation strategy and fostering breakthrough technologies in the startup ecosystem. Focused on creating sustainable innovation frameworks.",
    expertise: ["Innovation Strategy", "Technology", "Strategic Planning"],
    location: "India",
    joinedYear: "2021"
  },
  {
    id: "karminder-ghuman",
    name: "Dr. Karminder Ghuman",
    title: "Chief Coordinator",
    role: "leadership",
    image: "/lovable-uploads/b8da172a-af4a-4b70-8a41-177b53f77c7a.png",
    linkedinUrl: "https://www.linkedin.com/in/dr-karminder/",
    bio: "Leading organizational coordination and strategic partnerships to maximize startup success rates. Expert in building collaborative ecosystems.",
    expertise: ["Strategic Coordination", "Partnership Development", "Operations"],
    location: "India",
    joinedYear: "2019"
  },
  {
    id: "mandeep-singh",
    name: "Dr. Mandeep Singh",
    title: "Coordinator",
    role: "coordinators",
    image: "/lovable-uploads/4bbc487e-9e3c-4653-8724-6eded5250b30.png",
    linkedinUrl: "https://www.linkedin.com/in/mandeep-singh-8aa7a411/",
    bio: "Coordinating program delivery and ensuring quality standards across all incubation activities. Committed to academic excellence.",
    expertise: ["Program Management", "Quality Assurance", "Academic Liaison"],
    location: "India",
    joinedYear: "2020"
  },
  {
    id: "aneesh-gopalakrishnan",
    name: "Aneesh Gopalakrishnan",
    title: "Manager - MeitY TIDE Program",
    role: "management",
    image: "/lovable-uploads/82513aa7-62c9-4035-a88b-23dfcf53c6e6.png",
    linkedinUrl: "https://www.linkedin.com/in/aneesh-gopalakrishnan/",
    bio: "Managing the MeitY TIDE program to support technology-driven startups and digital innovation. Passionate about tech entrepreneurship.",
    expertise: ["Technology Programs", "Digital Innovation", "Startup Support"],
    location: "India",
    joinedYear: "2021"
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    title: "Manager- Startup India Seed Fund Program",
    role: "management",
    image: "/lovable-uploads/d729addb-196e-4579-bde4-af4254d743aa.png",
    linkedinUrl: "https://www.linkedin.com/in/rahulsharma100/",
    bio: "Overseeing the Startup India Seed Fund program to provide early-stage funding and mentorship. Expert in early-stage investment.",
    expertise: ["Seed Funding", "Government Programs", "Early-stage Support"],
    location: "India",
    joinedYear: "2022"
  },
  {
    id: "gurleen-kaur",
    name: "Ms. Gurleen Kaur",
    title: "Assistant Manager - VentureLab Program",
    role: "management",
    image: "/lovable-uploads/1b8b28ff-9b69-4bab-b60c-e8454c40c16c.png",
    linkedinUrl: "https://www.linkedin.com/in/gurleen-kaur-bindra-a4465521a/",
    bio: "Supporting the VentureLab program operations and facilitating startup growth initiatives. Dedicated to fostering innovation.",
    expertise: ["Program Operations", "Startup Mentoring", "Growth Support"],
    location: "India",
    joinedYear: "2022"
  }
];

const roleConfig = {
  leadership: {
    title: "Executive Leadership",
    subtitle: "Visionary leaders shaping the future of entrepreneurship",
    icon: Award,
    color: "from-blue-600 to-blue-700",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200"
  },
  management: {
    title: "Program Management",
    subtitle: "Experienced managers driving program excellence",
    icon: Building2,
    color: "from-teal-600 to-teal-700",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200"
  },
  coordinators: {
    title: "Coordination Team",
    subtitle: "Dedicated coordinators ensuring seamless operations",
    icon: User,
    color: "from-purple-600 to-purple-700",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200"
  }
};

const TeamMemberCard = ({ member }: { member: TeamMemberProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card 
          className="group relative overflow-hidden bg-white border border-gray-200 transition-all duration-500 transform cursor-pointer hover:shadow-2xl hover:-translate-y-4 hover:border-gray-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image with consistent aspect ratio */}
          <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              style={{ objectPosition: '50% 15%' }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* LinkedIn button */}
            {member.linkedinUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(member.linkedinUrl, '_blank', 'noopener,noreferrer');
                }}
                className={`absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full transition-all duration-500 hover:bg-blue-50 hover:scale-110 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                aria-label={`View ${member.name}'s LinkedIn profile`}
              >
                <ExternalLink size={18} className="text-blue-600" />
              </button>
            )}

            {/* Role badge */}
            <div className={`absolute top-4 left-4 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <Badge className={`${roleConfig[member.role].badgeColor} font-medium text-xs px-3 py-1`}>
                {roleConfig[member.role].title.split(' ')[0]}
              </Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                {member.title}
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {member.expertise.slice(0, 2).map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-xs px-3 py-1 bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
              {member.expertise.length > 2 && (
                <Badge variant="outline" className="text-xs px-2 py-1 text-gray-500">
                  +{member.expertise.length - 2}
                </Badge>
              )}
            </div>

            {/* Location and year */}
            <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
              {member.location && (
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{member.location}</span>
                </div>
              )}
              {member.joinedYear && (
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>Since {member.joinedYear}</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </HoverCardTrigger>
      
      {/* Hover card with detailed info */}
      <HoverCardContent className="w-80 p-6 bg-white border border-gray-200 shadow-xl">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h4 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h4>
            <p className="text-sm text-gray-600 mb-3">{member.title}</p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">{member.bio}</p>
            
            <div className="space-y-2">
              <h5 className="font-medium text-sm text-gray-900">Expertise:</h5>
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
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const TeamSection = () => {
  const groupedMembers = {
    leadership: teamMembers.filter(member => member.role === 'leadership'),
    management: teamMembers.filter(member => member.role === 'management'),
    coordinators: teamMembers.filter(member => member.role === 'coordinators'),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our team combines decades of experience in entrepreneurship, technology, and business development 
            to provide comprehensive support for startups at every stage of their journey.
          </p>
        </div>

        {Object.entries(groupedMembers).map(([roleKey, members], sectionIndex) => {
          const role = roleConfig[roleKey as keyof typeof roleConfig];
          const RoleIcon = role.icon;
          
          return (
            <div key={roleKey} className={`mb-20 last:mb-0 animate-fade-in-delay-${sectionIndex + 1}`}>
              {/* Enhanced section header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${role.color} rounded-2xl shadow-lg`}>
                    <RoleIcon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h2 className="heading-lg text-gray-900 mb-3">{role.title}</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">{role.subtitle}</p>
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full mx-auto"></div>
              </div>

              {/* Team grid with consistent sizing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {members.map((member, index) => (
                  <div 
                    key={member.id} 
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TeamMemberCard member={member} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamSection;
