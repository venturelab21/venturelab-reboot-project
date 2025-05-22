
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
    logo: "https://framerusercontent.com/images/ylPy6u18awhlkKAin5zfRKkpiI.png",
    column: 2,
    row: 1
  },
  {
    name: "SIDBI",
    logo: "https://www.startupindia.gov.in/content/dam/invest-india/SIH-assets/images/sidbi-logo.png",
    column: 3,
    row: 1
  },
  {
    name: "Gates Foundation",
    logo: "https://www.gatesfoundation.org/-/media/gfo/3global-design-system/bmgf-logo-black.svg",
    column: 4,
    row: 1
  },
  {
    name: "Dell Foundation",
    logo: "https://logos-world.net/wp-content/uploads/2021/08/Dell-Logo.png",
    column: 5,
    row: 1
  },
  {
    name: "JP Morgan",
    logo: "https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Symbol.png",
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
    name: "iDEX",
    logo: "https://idex.gov.in/images/idex-logo-nm.png",
    column: 3,
    row: 2
  },
  {
    name: "Smart City Indore",
    logo: "https://smartcityindore.org/wp-content/uploads/2016/11/smart-city-logo.jpg",
    column: 4,
    row: 2
  },
  {
    name: "ARIAS Society",
    logo: "https://arias.assam.gov.in/sites/default/files/ARIAS-Logo-withText.png",
    column: 5,
    row: 2
  },
  {
    name: "SAP",
    logo: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg",
    column: 2,
    row: 3
  },
  {
    name: "Accenture",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Accenture-Logo.png",
    column: 4,
    row: 3
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 p-4 flex items-center justify-center h-32 bg-white rounded-md hover:shadow-md transition-shadow duration-300 ${
                partner.row === 3 && (partner.column === 1 || partner.column === 3 || partner.column === 5) ? 'hidden' : ''
              }`}
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
