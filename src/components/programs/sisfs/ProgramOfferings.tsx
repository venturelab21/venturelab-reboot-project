
import { FileText } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const ProgramOfferings = () => {
  return (
    <div className="mb-12">
      <div className="relative overflow-hidden rounded-lg bg-slate-900">
        <Spotlight className="from-blue-500/50 via-blue-400/25 to-indigo-500/25" />
        
        <div className="relative z-20 p-6">
          <h3 className="text-2xl font-semibold mb-5 text-white">Offerings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1 text-white">Up to Rs. 20 Lakhs</h4>
                <p className="text-gray-200 text-sm">Funding support for validation of Proof of Concept, prototype development, or product trials</p>
              </div>
            </div>
            
            <div className="flex items-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-1 text-white">Up to Rs. 50 Lakhs</h4>
                <p className="text-gray-200 text-sm">Investment for market entry, commercialization, and scaling through convertible instruments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOfferings;
