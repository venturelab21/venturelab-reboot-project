
import { FileText, Calendar, Info } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

const EligibilitySection = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-slate-900">
      <Spotlight className="from-indigo-500/50 via-purple-500/25 to-blue-500/25" />
      
      <div className="relative z-20 p-6">
        <h3 className="text-2xl font-semibold mb-5 text-white">Who Can Apply</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <FileText size={20} />
              </div>
              <h4 className="font-medium text-white">DPIIT Recognition</h4>
            </div>
            <p className="text-gray-200 text-sm">Startup must have DPIIT recognition at the time of application.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Calendar size={20} />
              </div>
              <h4 className="font-medium text-white">Incorporation Period</h4>
            </div>
            <p className="text-gray-200 text-sm">Startup should not be more than 2 years old at the time of application submission.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <FileText size={20} />
              </div>
              <h4 className="font-medium text-white">Previous Funding</h4>
            </div>
            <p className="text-gray-200 text-sm">Startup should not have received more than Rs. 10 lakhs of monetary support from Government.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5">
            <div className="flex items-center mb-2">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                <Info size={20} />
              </div>
              <h4 className="font-medium text-white">Promoter Majority</h4>
            </div>
            <p className="text-gray-200 text-sm">Indian promoters must hold at least 51% shareholding at the time of application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilitySection;
