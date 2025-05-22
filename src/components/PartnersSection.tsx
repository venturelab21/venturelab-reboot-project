
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Department of Science & Technology",
    logo: "/lovable-uploads/b7340c7b-fc93-453f-b9b2-bf564638fbf4.png",
    column: 1,
    row: 1
  },
  {
    name: "DST NIDHI",
    logo: "https://dbt.gov.in/sites/default/files/inline-images/NIDHI.jpg",
    column: 2,
    row: 1
  },
  {
    name: "BIRAC",
    logo: "https://www.birac.nic.in/webcontent/1570696087_birac_english_logo_2.jpg",
    column: 3,
    row: 1
  },
  {
    name: "Startup India",
    logo: "https://static.startupindia.gov.in/site/sih-prod/ui_assets/startup_india_logo.jpg",
    column: 4,
    row: 1
  },
  {
    name: "Make In India",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Make_in_India_logo.jpg",
    column: 5,
    row: 1
  },
  {
    name: "Startup Punjab",
    logo: "https://startuppunjab.in/wp-content/uploads/2022/12/cropped-Logo-1-232x300.png",
    column: 1,
    row: 2
  },
  {
    name: "MeitY Startup Hub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/MeitY_Startup_Hub_Logo.jpg/1200px-MeitY_Startup_Hub_Logo.jpg",
    column: 2,
    row: 2
  },
  {
    name: "TIH",
    logo: "https://static.wixstatic.com/media/a858c6_4d6bbde219494dc593bc9f66e6bbfbd2~mv2.webp",
    column: 3,
    row: 2
  },
  {
    name: "IIT Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
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
