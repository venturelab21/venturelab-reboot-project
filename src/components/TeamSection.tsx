
import { Card } from "@/components/ui/card";

interface TeamMemberProps {
  id: string;
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMemberProps[] = [
  {
    id: "aard-groen",
    name: "Prof. Aard Groen",
    title: "Professor at the University of Groningen",
    image: "/lovable-uploads/1a523e03-0c22-46d6-8126-3f6d021ab23f.png"
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
    image: "/lovable-uploads/b8da172a-af4a-4b70-8a41-177b53f77c7a.png"
  },
  {
    id: "mandeep-singh",
    name: "Dr. Mandeep Singh",
    title: "Coordinator",
    image: "/lovable-uploads/4bbc487e-9e3c-4653-8724-6eded5250b30.png"
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    title: "Manager - SISFS",
    image: "/lovable-uploads/d729addb-196e-4579-bde4-af4254d743aa.png"
  },
  {
    id: "aneesh-gopalakrishnan",
    name: "Aneesh Gopalakrishnan",
    title: "Manager - MeitY TIDE Program",
    image: "/lovable-uploads/82513aa7-62c9-4035-a88b-23dfcf53c6e6.png"
  }
];

const TeamSection = () => {
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{member.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
