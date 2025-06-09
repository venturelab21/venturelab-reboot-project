
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Building2, Scale, Briefcase, GraduationCap, Users } from "lucide-react";
import { useState } from "react";

interface CouncilMemberProps {
  id: string;
  name: string;
  title: string;
  role: "executive" | "governance" | "academic" | "advisory";
  image: string;
  bio?: string;
  achievements?: string[];
  focus?: string[];
}

const councilMembers: CouncilMemberProps[] = [
  {
    id: "padmakumar-nair",
    name: "Dr. Padmakumar Nair",
    title: "Director, TIET",
    role: "executive",
    image: "/lovable-uploads/edb05a93-a60d-4caf-b805-b7fde223bc76.png",
    bio: "Leading the strategic vision and overall direction of Thapar Institute of Engineering & Technology with a focus on innovation and excellence.",
    achievements: ["20+ years in academic leadership", "Multiple research publications", "Educational reform advocate"],
    focus: ["Strategic Planning", "Academic Excellence", "Innovation Leadership"]
  },
  {
    id: "ajay-batish",
    name: "Dr. Ajay Batish",
    title: "Deputy Director, TIET",
    role: "executive",
    image: "/lovable-uploads/86cf5b49-2101-4045-b99d-bc86fc716695.png",
    bio: "Supporting institutional growth and development while fostering entrepreneurship and industry collaboration.",
    achievements: ["Extensive industry experience", "Research excellence", "Mentorship programs"],
    focus: ["Operations Management", "Industry Relations", "Academic Development"]
  },
  {
    id: "gurbinder-singh",
    name: "Dr. Gurbinder Singh",
    title: "Registrar",
    role: "governance",
    image: "/lovable-uploads/78fe8e77-dd15-4321-890e-eec3324b88a8.png",
    bio: "Overseeing administrative excellence and ensuring smooth operations across all institutional functions.",
    achievements: ["Administrative leadership", "Process optimization", "Compliance management"],
    focus: ["Administrative Excellence", "Governance", "Operational Efficiency"]
  },
  {
    id: "shivani-council",
    name: "Ms. Shivani",
    title: "Chief Innovation Officer",
    role: "executive",
    image: "/lovable-uploads/28d0024b-d71a-4567-a4cd-67f86d79d1ef.png",
    bio: "Driving innovation strategy and fostering breakthrough technologies in the startup ecosystem.",
    achievements: ["Innovation strategy leadership", "Technology commercialization", "Startup ecosystem development"],
    focus: ["Innovation Strategy", "Technology Transfer", "Ecosystem Building"]
  },
  {
    id: "deepinder-dhillon",
    name: "Mr. Deepinder Dhillon",
    title: "Jt. Director at Govt. of Punjab",
    role: "advisory",
    image: "/lovable-uploads/174e5e76-45fe-48d0-815c-e6335a706070.png",
    bio: "Providing government perspective and policy guidance to align initiatives with state development goals.",
    achievements: ["Government policy expertise", "Public-private partnerships", "State development programs"],
    focus: ["Policy Development", "Government Relations", "Public Sector Liaison"]
  },
  {
    id: "harshvir-singh",
    name: "Mr. Harshvir Singh",
    title: "MD at Drish Infotech Limited",
    role: "advisory",
    image: "/lovable-uploads/019b169f-1dd2-402a-a386-90842b8cbcf8.png",
    bio: "Bringing industry expertise and market insights to guide technology commercialization and business development.",
    achievements: ["Successful entrepreneur", "Technology business leader", "Market development expertise"],
    focus: ["Business Strategy", "Market Development", "Technology Commercialization"]
  },
  {
    id: "karminder-singh",
    name: "Dr. Karminder Singh",
    title: "Associate Dean - Industry Connect & Entrepreneurship, LM Thapar School of Management",
    role: "academic",
    image: "/lovable-uploads/75678a8d-fba6-49c3-9407-cb8d6c4a6ad7.png",
    bio: "Bridging academia and industry while fostering entrepreneurial mindset and innovation culture.",
    achievements: ["Academic-industry collaboration", "Entrepreneurship education", "Research excellence"],
    focus: ["Entrepreneurship Education", "Industry Collaboration", "Innovation Culture"]
  },
  {
    id: "manpreet",
    name: "Mr. Manpreet",
    title: "Principal Officer",
    role: "governance",
    image: "/placeholder.svg",
    bio: "Ensuring operational excellence and compliance across all institutional activities and programs.",
    focus: ["Operations", "Compliance", "Process Management"]
  },
  {
    id: "vinod-kumar-sablok",
    name: "Vinod Kumar Sablok",
    title: "General Counsel - Legal at Thapar University",
    role: "governance",
    image: "/placeholder.svg",
    bio: "Providing legal oversight and ensuring compliance with regulatory requirements and best practices.",
    focus: ["Legal Affairs", "Compliance", "Risk Management"]
  },
  {
    id: "ca-pankaj",
    name: "CA Pankaj",
    title: "CA",
    role: "governance",
    image: "/placeholder.svg",
    bio: "Managing financial oversight and ensuring fiscal responsibility across all operations.",
    focus: ["Financial Management", "Audit", "Fiscal Oversight"]
  }
];

const roleConfig = {
  executive: {
    title: "Executive Leadership",
    icon: Crown,
    color: "bg-blue-500",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Strategic decision-makers driving institutional vision"
  },
  governance: {
    title: "Governance & Operations",
    icon: Scale,
    color: "bg-purple-500",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "Ensuring excellence in administration and compliance"
  },
  academic: {
    title: "Academic Leadership",
    icon: GraduationCap,
    color: "bg-teal-500",
    badgeColor: "bg-teal-100 text-teal-700",
    description: "Bridging education, research, and innovation"
  },
  advisory: {
    title: "Advisory Board",
    icon: Users,
    color: "bg-orange-500",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "External expertise and strategic guidance"
  }
};

const GoverningCouncilSection = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleMemberClick = (member: CouncilMemberProps) => {
    if (selectedMember === member.id) {
      setSelectedMember(null);
    } else {
      setSelectedMember(member.id);
    }
  };

  const groupedMembers = {
    executive: councilMembers.filter(member => member.role === 'executive'),
    governance: councilMembers.filter(member => member.role === 'governance'),
    academic: councilMembers.filter(member => member.role === 'academic'),
    advisory: councilMembers.filter(member => member.role === 'advisory'),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our governing council combines decades of leadership experience across academia, industry, 
            and government to provide strategic oversight and ensure excellence in all our initiatives.
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
                  const roleInfo = roleConfig[member.role];
                  
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
                          style={{ objectPosition: '50% 20%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="absolute top-3 left-3">
                          <Badge className={`${roleInfo.badgeColor} text-xs font-medium`}>
                            {roleKey.charAt(0).toUpperCase() + roleKey.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className={`p-5 transition-all duration-300 ${isSelected ? 'bg-blue-50' : ''}`}>
                        <div className="mb-3">
                          <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                            {member.title}
                          </p>
                          
                          {member.focus && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {member.focus.slice(0, 2).map((area, index) => (
                                <Badge 
                                  key={index} 
                                  variant="secondary" 
                                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200"
                                >
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className={`transition-all duration-300 overflow-hidden ${
                          isSelected ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="pt-3 border-t border-gray-200">
                            {member.bio && (
                              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                {member.bio}
                              </p>
                            )}
                            
                            {member.achievements && (
                              <div className="mb-3">
                                <h4 className="text-xs font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                                <ul className="text-xs text-gray-600 space-y-1">
                                  {member.achievements.slice(0, 2).map((achievement, index) => (
                                    <li key={index} className="flex items-start gap-1">
                                      <span className="text-blue-500 mt-1">•</span>
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {member.focus && (
                              <div className="flex flex-wrap gap-1">
                                {member.focus.map((area, index) => (
                                  <Badge 
                                    key={index} 
                                    variant="outline" 
                                    className="text-xs px-2 py-1 border-blue-200 text-blue-700 bg-blue-50"
                                  >
                                    {area}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-xs text-blue-600 font-medium">
                            {isSelected ? 'Click to collapse' : 'Click to view profile'}
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

export default GoverningCouncilSection;
