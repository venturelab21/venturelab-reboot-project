
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "MeitY Startup Hub",
    logo: "/lovable-uploads/56cbe9e1-6476-4158-93ae-fa3799b35d86.png",
    column: 1,
    row: 1
  },
  {
    name: "Invest India",
    logo: "/lovable-uploads/a048490a-0ae5-470f-b404-7486da50d1f4.png",
    column: 2,
    row: 1
  },
  {
    name: "Startup India",
    logo: "/lovable-uploads/0a17b82d-a2fb-4b23-80d6-d8ad639916f4.png",
    column: 3,
    row: 1
  },
  {
    name: "TIE Chandigarh",
    logo: "/lovable-uploads/defafdff-5cc1-4f85-b138-cfcb0732d08a.png",
    column: 4,
    row: 1
  },
  {
    name: "Avataar Ventures",
    logo: "/lovable-uploads/dfba00ec-d09b-4c64-8f3b-727e8361cb97.png",
    column: 5,
    row: 1
  },
  {
    name: "Prath",
    logo: "/lovable-uploads/482dfb54-0eac-49f7-96be-676e1182ebf8.png",
    column: 1,
    row: 2
  },
  {
    name: "Chandigarh Angels Network",
    logo: "/lovable-uploads/a67ae513-a429-4068-b4d9-40bcc541eee0.png",
    column: 2,
    row: 2
  },
  {
    name: "Startup Punjab",
    logo: "/lovable-uploads/5897f13a-21f3-43fc-9a05-0e2cc1c2d1b5.png",
    column: 3,
    row: 2
  },
  {
    name: "Innovation Mission Punjab",
    logo: "/lovable-uploads/7bffa2ef-53d7-40e4-87cb-17af3800b810.png",
    column: 4,
    row: 2
  },
  {
    name: "I-Hub Foundation",
    logo: "https://ihfc.co.in/wp-content/uploads/2023/02/ihfc-logo.svg",
    column: 5,
    row: 2
  }
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-2">
            <span className="text-gray-800">Our </span>
            <span className="text-red-500">Partners</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to drive innovation and support startups
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="border border-gray-200 p-4 flex items-center justify-center h-32 bg-white rounded-md hover:shadow-md transition-shadow duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-20 max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="bg-red-500 hover:bg-red-600 rounded-full px-6 py-3 text-white font-medium">
            <Link to="/partners" className="flex items-center">
              VIEW ALL PARTNERS <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
