
import { Card } from "@/components/ui/card";

interface CouncilMemberProps {
  id: string;
  name: string;
  title: string;
  image: string;
}

const councilMembers: CouncilMemberProps[] = [
  {
    id: "padmakumar-nair",
    name: "Dr. Padmakumar Nair",
    title: "Council Member",
    image: "/lovable-uploads/edb05a93-a60d-4caf-b805-b7fde223bc76.png"
  },
  {
    id: "ajay-batish",
    name: "Dr. Ajay Batish",
    title: "Council Member",
    image: "/lovable-uploads/86cf5b49-2101-4045-b99d-bc86fc716695.png"
  },
  {
    id: "gurbinder-singh",
    name: "Dr. Gurbinder Singh",
    title: "Council Member",
    image: "/lovable-uploads/78fe8e77-dd15-4321-890e-eec3324b88a8.png"
  },
  {
    id: "shivani-council",
    name: "Ms. Shivani",
    title: "Council Member",
    image: "/lovable-uploads/28d0024b-d71a-4567-a4cd-67f86d79d1ef.png"
  },
  {
    id: "deepinder-dhillon",
    name: "Mr. Deepinder Dhillon",
    title: "Council Member",
    image: "/lovable-uploads/174e5e76-45fe-48d0-815c-e6335a706070.png"
  },
  {
    id: "harshvir-singh",
    name: "Mr. Harshvir Singh",
    title: "Council Member",
    image: "/lovable-uploads/019b169f-1dd2-402a-a386-90842b8cbcf8.png"
  },
  {
    id: "karminder-singh",
    name: "Dr. Karminder Singh",
    title: "Council Member",
    image: "/lovable-uploads/75678a8d-fba6-49c3-9407-cb8d6c4a6ad7.png"
  }
];

const GoverningCouncilSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            GOVERNING COUNCIL
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Governing Council</h2>
          <p className="text-gray-600">
            Meet our distinguished governing council members who provide strategic guidance and oversight to VentureLab Thapar's initiatives and programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {councilMembers.map((member) => (
            <Card 
              key={member.id} 
              className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
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

export default GoverningCouncilSection;
