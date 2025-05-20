
import { FileText, ArrowRight, Info } from "lucide-react";

const BenefitsSection = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">Program Benefits</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <FileText size={20} />
            </div>
            <h4 className="font-medium text-blue-600">Seed Capital</h4>
          </div>
          <p className="text-gray-700 text-sm">Financial assistance to enable proof of concept, prototype development and product trials.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <ArrowRight size={20} />
            </div>
            <h4 className="font-medium text-blue-600">Market Launch Support</h4>
          </div>
          <p className="text-gray-700 text-sm">Funding for market entry, commercialization, and business scale up.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <FileText size={20} />
            </div>
            <h4 className="font-medium text-blue-600">Mentorship</h4>
          </div>
          <p className="text-gray-700 text-sm">Expert guidance and mentoring from industry professionals and successful entrepreneurs.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-5">
          <div className="flex items-center mb-2">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
              <Info size={20} />
            </div>
            <h4 className="font-medium text-blue-600">Incubation Support</h4>
          </div>
          <p className="text-gray-700 text-sm">Access to infrastructure, networking opportunities and business development support.</p>
        </div>
      </div>
    </>
  );
};

export default BenefitsSection;
