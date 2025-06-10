
import { CheckCircle, FileText, Calendar, Info, Users } from "lucide-react";

const EligibilitySection = () => {
  const eligibilityItems = [
    {
      icon: <FileText size={20} />,
      title: "DPIIT Recognition",
      description: "Startup must have DPIIT recognition at the time of application submission."
    },
    {
      icon: <Calendar size={20} />,
      title: "Incorporation Period", 
      description: "Startup should not be more than 2 years old from the date of incorporation."
    },
    {
      icon: <Info size={20} />,
      title: "Previous Funding Limit",
      description: "Should not have received more than ₹10 lakhs of monetary support from Government."
    },
    {
      icon: <Users size={20} />,
      title: "Promoter Majority",
      description: "Indian promoters must hold at least 51% shareholding at the time of application."
    }
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Eligibility Criteria</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {eligibilityItems.map((item, index) => (
          <div key={index} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-blue-400" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2 text-lg">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilitySection;
